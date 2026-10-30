import "server-only";

import PocketBase from "pocketbase";


const db = new PocketBase(process.env.POCKETBASE_URL!);


export async function authenticate() {

  await db.collection("_superusers").authWithPassword(

    process.env.POCKETBASE_SUPERUSER_EMAIL!,

    process.env.POCKETBASE_SUPERUSER_PASSWORD!

  );

  return db;
}

