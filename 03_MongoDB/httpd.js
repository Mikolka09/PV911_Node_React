const express = require("express");
const app = express();

//Установить каталог для статических файлов
app.use(express.static("public"));

//Настроим модуль для разборки запросов
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

const mongoUri = "mongodb+srv://pv911User:User70074524@nodecluster.whann.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoose = require("mongoose");

mongoose.connect( //Соединение с базой
    mongoUri, //Строка соединения
    { useNewUrlParser: true, useUnifiedTopology: true }, //Обязательные параметры

    //Асинхронный подход - после того, как установится соединение
    //JS выполнит эту функцию. В качестве аргумента будет передана оибка - или null

    function (err){ //После соединения обработать результат
        if(err) {console.log(err); return;} //Если ошибка - вывести и остановить запуск
        console.log("http://localhost:3000/");
        app.listen(3000); //Если все ОК - запустить веб сервер
    }
);

