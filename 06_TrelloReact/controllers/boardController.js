//TODO: покдлючить нужную модель
const model = require("../models/board");
const session = require("../models/session");
const user = require("../models/session");
const lastUpdate = require("./stateController");

// Create => POST
exports.post = function (req, res) {
    console.log ("POST start");

    let session_id = req.body.session_id;
    session.findOne({
        _id: session_id
    },function (err, data) {
        if (err) {console.log(err); res.send(err);}
        user.findOne({
            _id: data.user_id
        }, function (err, data) {
            if (err) {console.log(err); res.send(err);}
            if(data.roles.includes("ADMIN_ROLE")) {
                // Операции
            } else {
                res.setStatus(403);
            }
        })
    })


    const element = new model (req.body.data);

    //const element = new model (req.body);
    element.save (function (err) {
        if(err) { console.log(err); return err;}
        lastUpdate.set();
        return res.send(element);
    })
};

// Read => GET
exports.get = function (req, res) {
    console.log ("GET start");
    model.find({},
        function (err, data) {
            if(err) { console.log(err); return err;}
            res.json(data);
        });
}

// Update => PUT
exports.put = function (req, res) {
    console.log ("PUT start");
    const element = new model (req.body);
    model.findByIdAndUpdate(
        req.body._id,
        element,
        {}, // new:true - создаст новый если не нашел по ID
        function (err, result) {
            if (err) {console.log(err); res.send(err);}
            lastUpdate.set();
            res.send(result);
        }
    );
}

// Delete = >DELETE
exports.delete = function (req, res) {
    model.findByIdAndDelete(
        req.body._id,
        {},
        function (err) {
            if (err) res.send(err);
            lastUpdate.set();
            res.sendStatus(200);
        }
    );
}