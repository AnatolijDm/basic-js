module.exports = function repeater(str, obj) {
    let result;
    if (str === true) {
        str = 'true'
    }
    if (str === null) {
        str = 'null';
    }
    let sep = '+';
    if (obj.separator !== undefined) {
        sep = obj.separator;
    }
    if (obj.addition !== undefined) {
        str = str + obj.addition;
        if (obj.additionRepeatTimes !== undefined && obj.additionRepeatTimes > 1) {
            for (i = 1; i < obj.additionRepeatTimes; i++) {
                str = str + obj.additionSeparator + obj.addition;
            }
        }
    }
    result = str;
    if (obj.repeatTimes > 1) {
        for (i = 1; i < obj.repeatTimes; i++) {
            result = result + sep + str;
        }
    }
    return result;
};
  