const router = require("../../config/expressconfig");
const conn = require("../../config/dbConfig");
var upload = require("../../config/multer");



const registerApi = router.post("/user-register", upload.single("myImg"), (req, res) => {
  // console.log(req.files, "MY FILEEEEEEEEEEEEEEEEEEEEEEEEEE");
  // conn.connect((err) => {
  //   if (err) {
  //     console.error("error connecting: " + err.stack);
  //     return;
  //   }
  //   conn.query(
  //     `CALL insertUser('${req.body.userName}','${req.body.userEmail}')`, (err, result) => {
  //       err ? console.log("User Registering error", err) : console.log(result)
  //       return res
  //     });
  //   console.log("connected as id " + conn.threadId);
  // })
});

const loginApi = router.get("/user-login", (req, res) => {
  return res.send("YOU LOGGED IN");
});

module.exports = {
  loginApi,
  registerApi
};
