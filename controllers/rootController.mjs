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

function getRootPage(req, res) {
    res.render("index", { messages: messages });
}

function getMessageForm(req, res) {
    res.render("form");
}

function postMessage(req, res) {
    messages.push({ text: req.body.message, username: req.body.username, added: new Date() });
    res.redirect("/");
}

function getMessage(req, res) {
    const message = messages[req.params.messageId];
    res.render("message", { text: message.text, username: message.username, added: message.added });
}

export { getRootPage, getMessageForm, postMessage, getMessage }