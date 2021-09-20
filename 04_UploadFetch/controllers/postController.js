//Подключить нужную модель
const model = require("../models/post")

//Creat => POST
exports.post = function (req, res){
    console.log("POST Start");
    console.log(req.body); //"multipart/form-data" -  не работает

    let fileData = req.file;
    console.log(fileData);

    let tm_path = req.file.path;
    console.log(tm_path);

    //const element =new model(req.body);
    /*
    element.save(  function (err){
        if(err){console.log(err); return err;}
        return res.sendStatus(201);
    });
    */
};

//Read => GET
exports.get = function (req, res){
    console.log("Get start!");
    model.find({},
        function (err, data){
            if(err){console.log(err); return err;}
            res.json(data);
        });
};

//Update => PUT
exports.put = function (req, res){

};

//Delete => DELETE
exports.delete = function (req, res){

};