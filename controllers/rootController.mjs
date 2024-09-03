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
    messages.push({ text: req.message, user: req.user, added: new Date() });
    res.redirect("/");
}

export { getRootPage, getMessageForm, postMessage }