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

export { getRootPage }