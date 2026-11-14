import "server-only"

import * as BunnyStorageSDK from "@bunny.net/storage-sdk"
import type { ReadableStream as BunnyReadableStream } from "node:stream/web"

function getStorageZone() {
  const zoneName = process.env.BUNNY_STORAGE_ZONE
  const accessKey = process.env.BUNNY_STORAGE_PASSWORD
  const regionName = process.env.BUNNY_STORAGE_REGION ?? "Falkenstein"
  const region = BunnyStorageSDK.regions.StorageRegion[
    regionName as keyof typeof BunnyStorageSDK.regions.StorageRegion
  ]

  if (!zoneName || !accessKey) {
    throw new Error("Set BUNNY_STORAGE_ZONE and BUNNY_STORAGE_PASSWORD")
  }

  if (!region) {
    throw new Error(`Unsupported BUNNY_STORAGE_REGION: ${regionName}`)
  }

  return BunnyStorageSDK.zone.connect_with_accesskey(region, zoneName, accessKey)
}

export async function uploadBunnyFile(file: File, path: string) {
  const zone = getStorageZone()
  const fileStream = file.stream() as unknown as BunnyReadableStream<Uint8Array>
  const uploaded = await BunnyStorageSDK.file.upload(zone, path, fileStream, {
    contentType: file.type,
  })

  if (!uploaded) {
    throw new Error("Bunny Storage did not confirm the upload")
  }

  const pullZoneHost = process.env.BUNNY_PULL_ZONE_HOST
  if (!pullZoneHost) {
    throw new Error("Set BUNNY_PULL_ZONE_HOST")
  }

  const normalizedHost = pullZoneHost
    .replace("https://", "")
    .replace("http://", "")
    .split("/")[0]
  const normalizedPath = path.split("/").filter(Boolean).join("/")

  return `https://${normalizedHost}/${normalizedPath}`
}

export async function deleteBunnyFile(path: string) {
  const removed = await BunnyStorageSDK.file.remove(getStorageZone(), path)
  if (!removed) {
    throw new Error("Bunny Storage could not remove the uploaded file")
  }
}

export async function testBunnyStorageConnection() {
  const files = await BunnyStorageSDK.file.list(getStorageZone(), "/")
  return files.length
}
