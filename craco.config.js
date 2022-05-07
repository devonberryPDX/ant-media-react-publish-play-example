const path = require("path");
const fs = require("fs");


module.exports = {
    devServer: {
        https: {
            
            //key: fs.readFileSync('C:/Certbot/live/berryhousehold.ddns.net/privkey.pem'),
            //cert: fs.readFileSync('C:/Certbot/live/berryhousehold.ddns.net/fullchain.pem'),

            key: fs.readFileSync("privkey.pem"),
            cert: fs.readFileSync("fullchain.pem"),

        },
        host: "berryhousehold.ddns.net",
        port: 8000,
    }
};