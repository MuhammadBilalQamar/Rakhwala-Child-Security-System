const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig")
const randomstring = require("randomstring");
const { sendMail } = require('./sendMail')
const { url } = require('../../config/serverRootUrl')

let userRegistration = router.post("/register/user", (req, res) => {
    let { name, email, password, phone, gender, latitude, longitude, place, registrationDate = new Date(), token = randomstring.generate()
    } = req.body;
    req.body = {
        name,
        email,
        phone,
        password,
        latitude,
        longitude,
        place,
        token,
        gender,
        registrationDate
    };
    sql.selectByEmail('Parent', email, (result) => {
        if (result && result.length != 0) {
            return res.json({ message: "USER OF THIS EMAIL IS ALREADY EXISTS", responseCode: 404 });
        }
        else {
            sql.insertQuery('parent', req.body, (result) => {
                let userId = result.insertId;
                let verificationUrl = `${url}/verify/${userId}/${email}/${token}`;
                sendMail(email, verificationUrl);
                return res.json({ message: "PARENT REGISTERED SUCESSFULLY", responseCode: 200, result });
            });
        }
    });
});



let childRegistration = router.post("/register/child", (req, res) => {
    let { name, image, latitude, longitude, temperature, pulse, nickName, watchKey, registrationDate = new Date(), parrentId, gender } = req.body;
    req.body = {
        name,
        latitude,
        longitude,
        temperature,
        pulse,
        nickName,
        watchKey,
        registrationDate,
        parrentId,
        gender
    }
    let bookWatch = {
        isAvailable: "NO"
    }

    sql.selectByWatchKey('watch', watchKey, (result) => {
        // console.log()
        if (result && result.length != 0) {
            if (result[0].isAvailable == "YES") {
                sql.insertQuery('child', req.body, (result) => {
                    // return res.json({ message: "CHILD INSERTED", responseCode: 200, result });
                });
                sql.updateByWatchKey('watch', watchKey, bookWatch, (result) => {
                    return res.json({ message: "CHILD INSERTED", responseCode: 200, result });
                });
            }
            else {
                return res.json({ message: "THIS KEY IS ALREADY IS BEIGN USED BY ANOTHER USER", responseCode: 404 });
            }
        }
        else {
            return res.json({ message: "INVALID KEY", responseCode: 404 });
        }
    });


});


let emailVerificationApi = router.get("/verify/:id/:email/:token", (req, res) => {
    let { id } = req.params;
    req.body = {
        status: "ACTIVE"
    }
    sql.updateQuery('parent', id, req.body, (result) => {
        return res.send('<h1 id="c" style="color:blue;">Congratulations your email address has been successfull verified,do login to rakhwala app and continue</h1>');
    })
});


module.exports = { userRegistration, childRegistration, emailVerificationApi }