const generateValuesArray = size => {
    return Array.from({length: size}, () => Math.floor(Math.random() * size + 10));
}
export default generateValuesArray;