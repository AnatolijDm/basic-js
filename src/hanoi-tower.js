module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let tur = (2 ** disksNumber) - 1;
    let time = tur / (turnsSpeed / 3600);
    const obj = {
        turns: tur,
        seconds: time
    }
    return obj;
}