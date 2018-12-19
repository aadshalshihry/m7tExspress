const User = require('../models/User');

module.exports = function(mongoose){
    mongoose.connection.collections['users'].drop(function (err) {
        console.log('user collection dropped');
    });

    const u1 = new User({
        name: "Maha",
        email: "maha@dev.com",
        password: "123123",
        role: "superAdmin"
    });
    u1.save(function (err, user) {
        if (err)
            console.log("Error", err);
        else
            console.log("Success adding: ", user.name);
    });

    const u2 = new User({
        name: "Roman",
        email: "roman@dev.com",
        password: "123123",
        role: "pm"
    });
    u2.save(function (err, user) {
        if (err)
            console.log("Error", err);
        else
            console.log("Success adding: ", user.name);
    });

    const u3 = new User({
        name: "Mejel",
        email: "mejel@dev.com",
        password: "123123",
        role: "admin"
    });
    u3.save(function (err, user) {
        if (err)
            console.log("Error", err);
        else
            console.log("Success adding: ", user.name);
    });

    const u4 = new User({
        name: "Ali",
        email: "ali@dev.com",
        password: "123123",
        role: "admin"
    });
    u4.save(function (err, user) {
        if (err)
            console.log("Error", err);
        else
            console.log("Success adding: ", user.name);
    });
    const u5 = new User({
        name: "Aziz",
        email: "aziz@dev.com",
        password: "123123",
        role: "msh"
    });
    u5.save(function (err, user) {
        if (err)
            console.log("Error", err);
        else
            console.log("Success adding: ", user.name);
    });

    const u6 = new User({
        name: "user1",
        email: "user1@dev.com",
        password: "123123"
    });
    u6.save(function (err, user) {
        if (err)
            console.log("Error", err);
        else
            console.log("Success adding: ", user.name);
    });

    const u7 = new User({
        name: "user2",
        email: "user2@dev.com",
        password: "123123"
    });
    u7.save(function (err, user) {
        if (err)
            console.log("Error", err);
        else
            console.log("Success adding: ", user.name);
    });
}