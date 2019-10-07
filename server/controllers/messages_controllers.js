let messages = [];
let id = 0;



module.exports = {
    create: (req, res) =>{
        const {text, time} = req.body;
        messages.push({text, time, id})
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const {text} = req.body;
        const updatedID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updatedID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == deleteID);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }
}