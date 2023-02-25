class Message{
    constructor(text = '', created = Date.now()) {
        this.text = text;
        this.created = created;
    }
    get created() {
        return `${this._created} blablabla`
    }
    set created(created) {
        if (!created || isNaN(created)) {
            throw new Error('Invalid Created');
        }
        if (this.hasOwnProperty('_created')) {
            throw new Error('Created already defined');
        }
        this._created = created;
    }
    toString() {
        return `Message created at: ${this.created} - Text: ${this.text}`;
    }
}

class ImageMessage extends Message {
    constructor(text = '', created = Date.now(), url = '', thumbnail = '') {
        super(text, created);
        this.url = url;
        this.thumbnail = thumbnail;
    }
    toString() {
        return `Photo${super.toString()} ` +
               `- Url: ${this.url} ` +
               `- Thumbnail: ${this.thumbnail}`;
    }
}

//var emptyMessage = new Message(null, null); teste de error
var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var photoMessage = new ImageMessage();

var text = 'Some text';
var created = Date.now();

var duckTypeMessage = {
    text: text,
    created: created
}
console.log(duckTypeMessage);

console.log(String(emptyMessage));
console.log(textMessage + '');
console.log(`${textMessage}`);
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(emptyMessage instanceof ImageMessage);
console.log(textMessage instanceof ImageMessage);

console.log(emptyMessage instanceof ImageMessage);
console.log(textMessage instanceof ImageMessage);