import db from "../db/queries.mjs";

const messages = [
    {
        text: "Hi",
        username: "Cookie Monster",
        added: new Date()
    },
    {
        text: "Hello World!",
        username: "Sandwich",
        added: new Date()
    }
];

async function getRootPage(req, res) {
    const messages = await db.getMessages();
    console.log(messages);
    res.render("index", { messages: messages });
}

function getMessageForm(req, res) {
    res.render("form");
}

async function postMessage(req, res) {
    await db.insertMessage({ text: req.body.message, username: req.body.username, added: new Date() });
    res.redirect("/");
}

function getMessage(req, res) {
    const message = db.getMessage(req.params.messageId);
    res.render("message", { text: message.text, username: message.username, added: message.added });
}

export { getRootPage, getMessageForm, postMessage, getMessage }