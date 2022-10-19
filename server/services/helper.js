const user = require('../models/userSchema');

exports.generateUserId = async () => {
  
    const users = await user.find({});
    const Id = "UI-"+("0000" + users.length).slice(-4);
    return Id;
  };