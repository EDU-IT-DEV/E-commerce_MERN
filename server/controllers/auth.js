const User = require("../models/user");

/* Client will send a reques (REQ) and server will send response(RES) in the http://localhost:8000/create-or-update-user
  res.json({
    data: "hey you hit create-or-update-user API endpoint",
  });
  */

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;

  const user = await User.findOneAndUpdate(
    { email },
    { name: email.split("@")[0], picture },
    { new: true }
  );
  if (user) {
    console.log("USER UPDATED", user);
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name: email.split("@")[0],
      picture,
    }).save();
    console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};

exports.currentUser = async (req, res) => {
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user); //it's the same that put ELSE return res.json(user);
  });
};
