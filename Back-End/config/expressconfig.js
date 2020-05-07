const express = require("express");
module.exports = {
    router: express.Router(),
    app: () => {
        const app = express();
        const { jsonParser, urlEncodedParser } = require("../config/bodyParser");
        const port = process.env.PORT || 4000;

        // static folders
        app.use("/", express.static("../public/uploads"));

        //including body-parser to app ....
        app.use(jsonParser);
        app.use(urlEncodedParser);

        // middleware to avoid CORS ....
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            next();
        });

        app.listen(port, (e) => {
            e ? console.log("Server Cannot Start", e) : console.log("Server Started", port)
        })

        return app;
    }
}
