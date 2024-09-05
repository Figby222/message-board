import pool from "./pool.mjs";

async function insertMessage(username, text, added) {
    await pool.query(`
        INSERT INTO messages (username, text, added)
        VALUES ($1, $2, $3)
    `, [username, text, added])
}

async function getMessages() {
    const { rows } = await pool.query(`SELECT * FROM messages`)

    return rows;
}

export default { insertMessage, getMessages }