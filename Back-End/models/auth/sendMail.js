var nodemailer = require('nodemailer');




let sendMail = (recipitant, material) => {
  // console.log("recipitant&&&&&&&", recipitant);
  // console.log("material&&&&&&&", material);

  var transporter = nodemailer.createTransport({
    pool: true,
    service: 'gmail',
    // host: "smtp.example.com",
    // port: 465,
    // secure: true, // use TLS
    auth: {
      user: "bilalqmr41@gmail.com",
      pass: ""
    }
  });




  var mailOptions = {
    from: 'bilalqmr41@gmail.com',
    to: recipitant,
    subject: 'Verify your RAKHWALA APP email through given link',
    // text: material,
    html: '<h1>Hi FROM RAKHWALA</h1><h4> click on the link below to verify your rakhwala app email</h4><br/>' + material
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = {
  sendMail
};

