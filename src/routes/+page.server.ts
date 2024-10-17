import { env } from "$env/dynamic/private";
import { MongoClient, ObjectId } from "mongodb";
import type { PageServerLoad } from "./$types";

interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
}

export const load: PageServerLoad = async () => {
  const uri = env.MONGO_URI as string;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const usersCollection = database.collection<User>("users");

    const users = await usersCollection.find({}).toArray();

    return {
      users: users.map((user) => ({
        ...user,
        _id: user._id.toString(),
      })),
    };
  } finally {
    await client.close();
  }
};
