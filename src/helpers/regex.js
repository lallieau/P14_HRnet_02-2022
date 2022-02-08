// Regex to check form validity

// US ZipCode
export const zipCodesRegex = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/;
export const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
export const textRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
export const streetRegex = /^[0-9a-zA-Z ]+$/g;

/**
 * Check whether user is over 18 years old
 * @function checkBirthdateValidity
 * @param {string} birthdate
 * @returns {boolean}
 * */
export const checkBirthdateValidity = birthdate => {
  const optimizedBirthday = birthdate.replace(/-/g, '/');
  const userBirthday = new Date(optimizedBirthday);
  const userAge = ~~((Date.now() - userBirthday) / 31557600000);
  return userAge < 18 || userAge > 100 ? true : false;
};
