// found at: /api/{routes}

// server-side code

// POST /api/new-meetup

import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    // req - incoming req
    // res - for spending back a response

    // what kind of request was sent? 
    if (req.method  === "POST") {
        const data = req.body;

        //const { title, image, address, description } = data;

        // store in DB
        // never run on client side!
        const client = await MongoClient.connect("mongodb://root:example@mongo:27017/");
        console.log(client);
        const db = client.db();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close(); 

        res.status(201).json({message: "Meetup inserted!"});
    };
};

export default handler;
