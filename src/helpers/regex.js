// Regex to check form validity

// US ZipCode
export const zipCodesRegex = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/;
// export const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
export const textRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
export const streetRegex = /^[0-9a-zA-Z ]+$/g;

/**
 * Check whether user is over 18 years old
 * @function checkBirthdateValidity
 * @param {string} birthdate
 * @returns {boolean}
 * */
export const checkBirthdateValidity = inputBirthdateValue => {
  const dayjs = require('dayjs');
  const today = dayjs();
  const birthdate = dayjs(inputBirthdateValue);

  return today.diff(birthdate, 'year') > 18 ||
    today.diff(birthdate, 'year') > 100
    ? true
    : false;
};
