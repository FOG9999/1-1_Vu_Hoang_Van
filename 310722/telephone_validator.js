/**
 * 1. kiểm tra xem có area code hay k, nếu có thì phải bằng 1 -> tách đoạn còn lại để validate
 * 2. validate sdt:
 * 2.1. 2 dấu "-": split tách các chuỗi cách nhau bởi '-'
 * 2.2. (xxx) xxx-xxxx: check 5 ký tự đầu và phần 2 là các ký tự còn lại có theo format xxx-xxxx
 * 2.3. 2 dấu ' '
 * 2.4. một chuỗi toàn số
 */

function validateTelephone(str) {
  let areaCodes = ["1 ", "1("];
  let areaCodeIndex = areaCodes.indexOf(str.substring(0, 2));
  console.log('areacode: ', areaCodeIndex)
  if (areaCodeIndex >= 0) {
    if (areaCodeIndex === 0) {
      let numberStr = str.substring(2, str.length);
      return validateNumberString(numberStr);
    } else {
      let numberStr = str.substring(1, str.length);
      return validateNumberString(numberStr);
    }
  } else {
    return validateNumberString(str);
  }

  function validateNumberString(numberSt) {
    console.log(numberSt)
    let numberOfHyphens = 0,
      numberOfSpaces = 0;
    for (let i = 0; i < numberSt.length; i++) {
      let character = numberSt.charAt(i); // lấy ra ký tự tại index i trên string numberSt
      if (character === "-") {
        numberOfHyphens++;
      }
      if (character === " ") {
        numberOfSpaces++;
      }
    }
    if (numberOfHyphens === 2 && numberOfSpaces === 0) {
      // truong hop 2.1
      let hyphenSplits = numberSt.split('-'); // xxx-xxx-xxxx -> ['xxx','xxx','xxxx']
      let isValid = true;
      let checkAllNumber = /\D/;
      console.log(hyphenSplits)
      hyphenSplits.forEach((val, index) => {
        if(checkAllNumber.test(val)){
            isValid = false;
        }
        // check length tung phan tu
        if((index === 0 || index === 1) && val.length !== 3){
            isValid = false;
        }
        if(index === 2 && val.length !== 4){
            isValid = false;
        }
      })
      return isValid;
    } else if (numberOfHyphens === 1 && (numberOfSpaces === 1 || numberOfSpaces === 0)) {
      // truong hop 2.2 (xxx)xxx-xxxx or (xxx) xxx-xxxx
      let isValid = true;
      let hyphenSplits = numberSt.split('-');
      if(hyphenSplits.length === 2 && hyphenSplits[1].length === 4){
        if(/\D/.test(hyphenSplits[1])){
            isValid = false;
        }
        else {
            if(/^\((\d){3}\)(\s){0,1}(\d){3}$/.test(hyphenSplits[0]) === false){
                isValid = false;
            }
        }
        return isValid;
      }
      else {
        return false;
      }

    } else if (numberOfHyphens == 0 && numberOfSpaces === 2) {
      // truong hop 2.3
      let spaceSplits = numberSt.split(' '); // xxx-xxx-xxxx -> ['xxx','xxx','xxxx']
      let isValid = true;
      let checkAllNumber = /\D/;
      console.log(spaceSplits)
      spaceSplits.forEach((val, index) => {
        if(checkAllNumber.test(val)){
            isValid = false;
        }
        // check length tung phan tu
        if((index === 0 || index === 1) && val.length !== 3){
            isValid = false;
        }
        if(index === 2 && val.length !== 4){
            isValid = false;
        }
      })
      return isValid;
    } else if (numberOfHyphens === 0 && numberOfSpaces == 0) {
        // truong hop 2.4
        console.log('numberSt', numberSt);
        if(numberSt.length === 10){
            return /(\d){10}/.test(numberSt) && !/\D/.test(numberSt); // bao gồm 10 chữ số và k bao gồm non-digit
        }
        else return false;
    }
    else {
        return false;
    }
  }
}

console.log(validateTelephone('2(757)622-7382'))