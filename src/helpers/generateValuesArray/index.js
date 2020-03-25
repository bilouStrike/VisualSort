const generateValuesArray = size => {
    let array = [];
    while (array.length < size) {
        array.push(Math.floor(Math.random() * 12) + 12);
    }
    return array
}
export default generateValuesArray;