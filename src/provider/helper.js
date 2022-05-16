import SecureStorage from "secure-web-storage";
var CryptoJS = require("crypto-js");
var SECRET_KEY = "my_secret_key";

function strongPassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;
  if (new RegExp(passwordRegex).test(password)) {
    return true;
  }
  return false;
}

function trimPassword(password) {
  let trimedPassword = password.trim();
  return trimedPassword.length === password.length;
}

function validateUrl(text) {
  //var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  //var re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
  var re =
    /^(https?:\/\/)?([\[0-9\p{L}\-.]+)\.([0-9\p{L}\-.]{2,6})([\/\w \.-]*)*\/?$/u;
  return re.test(text);
}

function validatealphanumeric(text) {
  //var re = /^[0-9\p{L}\-. ]*$/u;
  var re = /<("[^"]*"|'[^']*'|[^'">])*>/;
  //var re = /^[A-Z'-]$/i;

  if (re.test(text)) {
    return false;
  } else {
    return true;
  }
}

function validateNumericDecimal(text) {
  var re = /^\d{1,3}(\.\d{1,2})?$/;
  return re.test(text);
}

function validnumbers(value) {
  return /^\d*$/.test(value);
}

export default {
  SecureStorageFunc: (data, type, value = "") => {
    var secureStorage = new SecureStorage(localStorage, {
      hash: function hash(key) {
        key = CryptoJS.SHA256(key, SECRET_KEY);
        return key.toString();
      },

      encrypt: function encrypt(data) {
        data = CryptoJS.AES.encrypt(data, SECRET_KEY);
        data = data.toString();
        return data;
      },

      decrypt: function decrypt(data) {
        data = CryptoJS.AES.decrypt(data, SECRET_KEY);
        data = data.toString(CryptoJS.enc.Utf8);
        return data;
      },
    });

    if (type === "set") {
      secureStorage.setItem(data, value);
      return true;
    } else if (type === "get") {
      var decryptedData = secureStorage.getItem(data);
      return decryptedData;
    } else if (type === "clear") {
      secureStorage.clear();
    }
  },

  checkOnlyCharacter(event, forType = "") {
    if (event && event.target && event.target.id && event.target.value) {
      let finalValue = event.target.value.replace(/[^A-Z]/gi, "");
      document.getElementById(event.target.id).value = finalValue;
    }
  },

  validateSpace(value) {
    return !!value.trim();
  },

  validatePassword(value) {
    return strongPassword(value) && trimPassword(value);
  },

  validateEmail(email) {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  },

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
};
