let { app } = require("./config/expressconfig");
let main = app();

//------------ AUTHENTICATION--------------
let { userLoginApi } = require("./models/auth/login");

main.use("/", userLoginApi);


//------------- REGISTRATION--------------------
let { userRegistration, childRegistration, emailVerificationApi } = require("./models/auth/registeration");

main.use("/", userRegistration);
main.use("/", childRegistration);
main.use("/", emailVerificationApi);

//------------ ROOT REQUEST-------------------
main.get("/", (req, res) => {
    return res.json({ message: "BISMILAH-HIR-RAHMAN-IR-RAHIM \n  ALLAH HU AKBAR" })
})