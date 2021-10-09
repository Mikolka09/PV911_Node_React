const modelUser = require("../../models/user");
const modelRole = require("../../models/role");
const {request} = require("express");


exports.register = function (request, response) {
    const element = new modelUser(request.body);
    modelUser.find({email: user.email},
        function (err, res) {
            if (err) {
                console.log(err);
                return err
            }
            if (res.length > 0) {
                response.send(false);
            } else {
                user.save(function (err) {
                    if (err) {
                        console.log(err);
                        return err
                    }
                })
                response.send(user);
            }
        })
}

exports.checkEmail = function (request, response) {
    const {email} = request.params;
    modelUser.find({email: email},
        function (err, res) {
            if (err) {
                console.log(err);
                return err
            }
            if (res.length > 0) {
                response.send(false);
            } else {
                response.send(true);
            }
        })
}

