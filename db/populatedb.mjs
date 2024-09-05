import pg from "pg";
const { Client } = pg;
import "dotenv/config";

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username TEXT,
        message TEXT,
        added TEXT
    );

    INSERT INTO messages (username, message, added)
    VALUES
        ('Cookie Monster', 'Hi', ${Date.now()}),
        ('Sandwich', 'Hello World!', ${Date.now()});

`;

async function main() {
    console.log("seeding....");
    const client = new Client({
        connectionString: process.argv[2]
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();