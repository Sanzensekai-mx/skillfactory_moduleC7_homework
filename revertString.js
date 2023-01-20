function revertString(str) {
    return str.split("").reverse().join("")
}

console.log(revertString('hello'));

export default revertString;