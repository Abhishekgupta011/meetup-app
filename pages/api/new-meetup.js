import { MongoClient } from "mongodb";
const handler = async (req, res)=>{
    if(req.method==='POST'){
        const data = req.body;
        // const {title, image, address, description} = data;
        const client = await MongoClient.connect("mongodb+srv://ag25061999:08X2AoHIvAenZOVm@cluster0.9kbh2an.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db();
        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({ message: 'meetups inserted'})
    }
    
}

export default handler;