// File: lib/mongodb.ts

import { MongoClient } from "mongodb";

let uri = "mongodb://localhost:27017/"; // MongoDB URI from environment variable
let dbName = "nextjs"; // Database name from environment variable

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable in .env.local"
  );
}
console.log("DB connection");
export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri);
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;
  console.log("DB connection is ready");
  return { client, db };
}
