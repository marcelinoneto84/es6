const Message = require('./message.model');
const ImageMessage = require('./image-message.model');

const emptyMessage = new Message();
const emptyPhotoMessage = new ImageMessage();

console.log(emptyMessage);
console.log(emptyPhotoMessage);

//teste escopo bloco let

let a = 10;

function add(number) {
    {
        // let e const a - aqui está no escopo das chaves
        //let a = number + 1;
        //const a = number + 1;
        var a = number + 1;
    }
    return a;
}

console.log(add(20));
console.log(a);

const fs = require('fs');
const path = require('path');

class MessagesService {
    constructor() {
        let resolvePromise;
        let rejectPromise;
        const filePath = path.join(__dirname, 'messages.json');
        this.messagesPromise = new Promise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                rejectPromise(err);
            } else {
                const dataArray = JSON.parse(data);
                const dataObj = dataArray.map((item) => {
                    return new Message(item.then, item.created);
                });
                resolvePromise(dataObj);
            }
        });
    }
    get messages() {
        return this.messagesPromise;
    }
}

const messagesService = new MessagesService();
messagesService.messages.then((messages) => {
    //console.log(messages);
    //item a item
    for (let x=0; x < messages.length; x++) {
        console.log(String(messages[x]));
    }
}).catch((err) => {
    console.log(err);
});