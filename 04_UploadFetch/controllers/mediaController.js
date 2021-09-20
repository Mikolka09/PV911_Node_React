const fs = require("fs"); //Файловая система
const ext = require("mime-types"); //Анализ расширения по типу файла

//Отдельный контроллер - целью которого будут операции с файлами
exports.post = function (req, res){
    console.log("Media POST Start");
    console.log(req.body); //"multipart/form-data" -  не работает

    //let fileData = req.file;
    //console.log(fileData);

    let tm_path = req.file.path;
    console.log(tm_path);

    //console.log("Ext: ");
    //console.log(ext.extension(fileData.mimetype));

    let fileUrl = "/uploads/" + req.file.filename + "." + ext.extension(req.file.mimetype);
    fs.rename(req.file.path,
        req.file.path + "." + ext.extension(req.file.mimetype),
        function (err){
            if(err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.send(fileUrl);
        });

    //Могу заранее обработать порядок на стороне сервера

};

