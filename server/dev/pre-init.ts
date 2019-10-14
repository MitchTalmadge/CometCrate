import {MongoMemoryServer} from "mongodb-memory-server";

export default async function preInit() {
    await createInMemoryDatabase();
}

async function createInMemoryDatabase() {
    // Set up a MongoDB server for development use.
    const mongod = new MongoMemoryServer();
    const uri = await mongod.getConnectionString();
    const prefix = "mongodb://";
    process.env.DB_ADDRESS = uri.substring(prefix.length, uri.indexOf('/', prefix.length));
    process.env.DB_NAME = uri.substring(uri.indexOf('/', prefix.length) + 1);

    console.log(`In-Memory MongoDB Running on ${uri}`);
}
