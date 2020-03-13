module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = 1;
        function calcul(ar) {
            function call(are) {
                const array = [];
                are.forEach(element => {
                    if (element.length >= 0 && typeof element !== 'string') {
                        array.push(element);
                        if (array.length === 1) {
                            result = result + 1;
                            call(element);
                        }
                    }
                })
            }
        call(ar);
        }
        calcul(arr);
        return result;
    }
};


/* function calculateDepth(arr) {
    let result = [];

    function callb(add) {
        add.forEach(element => {
            let recc = 1;
            if (element.length >= 0 && typeof element !== 'string') {
                let vel = [];
                vel.push(recc);
                recc = recc + 1;
                callb(element);
                result.push(vel);
            }
        })
    }

    callb(arr);
    return result;
}
calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]) */