import { env } from "$env/dynamic/private";
import { MongoClient, ObjectId } from "mongodb";
import type { PageServerLoad } from "./$types";

interface Person {
  UserID: string;
  Name: string;
}

interface Location {
  City: string;
}

interface Event {
  Date: string;
}

interface PersonEvent {
  _id: ObjectId;
  Person: Person;
  Location: Location;
  Event: Event;
}

export const load: PageServerLoad = async () => {
  const uri = env.MONGO_URI as string;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("EventsDB");
    const usersCollection = database.collection<PersonEvent>("PersonEvents");

    const personEvents = await usersCollection.find({}).toArray();

    return {
      personEvents: personEvents.map((personEvent) => ({
        ...personEvent,
        _id: personEvent._id.toString(),
        /// Fallback options
        Person: personEvent.Person ?? {},
        Location: personEvent.Location ?? {},
        Event: personEvent.Event ?? {},
      })),
    };
  } finally {
    await client.close();
  }
};
