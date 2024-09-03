const messages = [
    {
        text: "Hi",
        user: "Cookie Monster",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Sandwich",
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
    messages.push({ text: req.body.message, user: req.body.user, added: new Date() });
    res.redirect("/");
}

function getMessage(req, res) {
    const message = messages[req.params.messageId];
    res.render("message", { text: message.text, user: message.user, added: message.added });
}

export { getRootPage, getMessageForm, postMessage, getMessage }