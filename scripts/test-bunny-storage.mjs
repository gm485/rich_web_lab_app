import * as BunnyStorageSDK from "@bunny.net/storage-sdk"

const zoneName = process.env.BUNNY_STORAGE_ZONE
const accessKey = process.env.BUNNY_STORAGE_PASSWORD
const regionName = process.env.BUNNY_STORAGE_REGION ?? "Falkenstein"
const region = BunnyStorageSDK.regions.StorageRegion[regionName]

if (!zoneName || !accessKey) {
  console.error("Set BUNNY_STORAGE_ZONE and BUNNY_STORAGE_PASSWORD in .env.local")
  process.exit(1)
}

if (!region) {
  console.error(`Unsupported BUNNY_STORAGE_REGION: ${regionName}`)
  process.exit(1)
}

try {
  const zone = BunnyStorageSDK.zone.connect_with_accesskey(region, zoneName, accessKey)
  const files = await BunnyStorageSDK.file.list(zone, "/")
  console.log(`Connected to Bunny Storage. Root contains ${files.length} item(s).`)
} catch (error) {
  console.error("Could not connect to Bunny Storage.")
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
}
