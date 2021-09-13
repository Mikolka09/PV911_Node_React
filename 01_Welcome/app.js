const express = require("express");
//Создаем объект приложения (сервера)
const app = express();

app.get("/",function (request, response){
    response.send("Hello express");
});

app.listen(3000);