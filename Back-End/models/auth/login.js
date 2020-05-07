const { router } = require("../../config/expressconfig");
const { sql } = require("../../config/dbConfig")



let userLoginApi = router.get("/login-user/:email/:password", (req, res) => {
    // let { email, password } = req.params;

    sql.selectQuery('Parent', req.params, (result) => {
        if (result && result.length != 0) {
            return res.json({ message: "LOGIN SUCCESS", responseCode: 200, user: result })
        }
        else {
            return res.json({ message: "USER NOT FOUND", responseCode: 404, user: result })
        }
    })
});




module.exports = { userLoginApi }