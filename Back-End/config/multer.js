var multer = require("multer");

// var upload = multer({ dest: 'uploads/', limits: 52428800 })


var storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    let mimetype = file.mimetype.split("/")
    cb(null, file.fieldname + "-" + Date.now() + "." + mimetype[1]);
  },
});

const upload = multer({
  storage: storage,
  limits: 52428800,
});




module.exports = upload;
