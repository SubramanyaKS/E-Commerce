exports.ValidateName = function (name) {
    if (name.trim().length > 2 && name.trim().length<51) {
      console.log(name);
      return true;
    }
    return false;
  };
// eslint-disable-next-line no-undef
  exports.ValidateAge = function (date) {
    //console.log(date);
    var today = new Date();
    var birthDate =new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(age);
    console.log(today,"",birthDate,"",date);
    if (age > 20 && age<100) {
      return true;
    }
    return false;
  };
// eslint-disable-next-line no-undef
exports.ValidatePassword = function (password) {
  if (password.trim().length >= 5 && password.trim().length<=10) {
    console.log(password);
    return true;
  }
  return false;
};
// eslint-disable-next-line no-undef
exports.ValidatePhoneNo = function (number) {
  if (String(number).trim().length == 10) {
    //console.log(number);
    return true;
  }
  return false;
};
// eslint-disable-next-line no-undef
exports.ValidatePincode = function (number) {
  var pinno = number.toString();
  if (pinno.trim().length==6) {
    //console.log(number);
    return true;
  }
  return false;
};
// eslint-disable-next-line no-undef
exports.ValidateGender = function (gender) {
  console.log(gender);
  if (gender=="Male"|| gender=="female") {
    //console.log(password);
    return true;
  }
  return false;
};
