module.exports = function transform(arr) {
    if  (arr.length == 0) {
        return arr;
    }
    if (arr.length === undefined) {
        throw new Error();
    }
    if (typeof arr === 'number') {
        throw new Error();
    }
    if (typeof arr === 'string') {
        throw new Error();
    }
    if (arr === true || arr === false) {
        throw new Error();
    }
    if (arr === undefined || arr === null) {
        throw new Error();
    }
    if (arr.indexOf('--discard-prev', 0) === 0) {
        arr.splice(arr.indexOf('--discard-prev', 0), 1);
    }
    if (arr.indexOf('--double-prev', 0) === 0) {
        arr.splice(arr.indexOf('--double-prev', 0), 1);
    }
    if (arr.indexOf('--discard-next', 0) === arr.length - 1) {
        arr.splice(arr.indexOf('--discard-next', 0), 1);
    }
    if (arr.indexOf('--double-next', 0) === arr.length - 1) {
        arr.splice(arr.indexOf('--double-next', 0), 1);
    }

    arr.forEach(element => {
        if (element === '--discard-next') {
            arr.splice(arr.indexOf(element, 0), 2);
        } 
        if (element === '--discard-prev') {
            arr.splice(arr.indexOf(element, 0) - 1, 2);
        }
        if (element === '--double-next') {
            arr.splice(arr.indexOf(element, 0), 1, arr[arr.indexOf(element, 0) + 1]);
        }
        if (element === '--double-prev') {
            arr.splice(arr.indexOf(element, 0), 1, arr[arr.indexOf(element, 0) - 1])
        }
    });
    arr.forEach(element => {
        if (element === undefined) {
            arr.splice(arr.indexOf(element, 0), 1);
        }
    });
    return arr;
};
