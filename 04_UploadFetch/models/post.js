const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
    // Описать поля в колекции
    name: String,
    imgUrl: String, //Ссылка на изображение
    imgUrls: Array //Ссылки на другие изображения
    // Описание полей не имеет значение
    //JS создает объект динамически
});

module.exports = mongoose.model("Post", Post);