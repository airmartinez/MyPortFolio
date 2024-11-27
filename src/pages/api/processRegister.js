import DBManager from "../../../lib/db/DBManager";
import { DB_CONF } from "../../../lib/db/DBConf";

export default async function handler(req, res) {
    try {
        const db_conn = new DBManager(DB_CONF.PATH);
        await db_conn.init();

        if (req.method === "POST") {
            await handleProcessRegister(db_conn, req, res);
        } else {
            res.status(200).json({ name: "test" });
        }
    } catch (error) {
        console.log("Error Initializing Database: ", error);
        res.status(500).send("Internal Server Error");
    }
}

async function handleProcessRegister(db_conn, req, res) {
    try {
      
        const { username, password } = req.body;

        console.log("Received Data: ", { username, password });

        
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.log("Error Processing Registration: ", error);
        res.status(500).send("Internal Server Error");
    }
}
