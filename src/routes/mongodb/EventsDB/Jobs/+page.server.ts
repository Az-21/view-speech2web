import { env } from "$env/dynamic/private";
import { MongoClient, ObjectId } from "mongodb";
import type { PageServerLoad } from "./$types";

interface Person {
  UserID: string;
  Name: string;
}

interface Task {
  Description: string;
  Date: string;
  Duration: string;
  Client: string;
}

interface Job {
  _id: ObjectId;
  Person: Person;
  Task: Task;
}

export const load: PageServerLoad = async () => {
  const uri = env.MONGO_URI as string;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("EventsDB");
    const usersCollection = database.collection<Job>("Jobs");

    const jobs = await usersCollection.find({}).toArray();

    return {
      jobs: jobs.map((job) => ({
        ...job,
        _id: job._id.toString(),
        /// Fallback options
        Person: job.Person ?? {},
        Task: job.Task ?? {},
      })),
    };
  } finally {
    await client.close();
  }
};
