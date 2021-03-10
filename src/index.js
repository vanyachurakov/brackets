module.exports = function check(str, bracketsConfig) {
    let strArr = str.split("");
    let isBracketsSplice = true;
    while (isBracketsSplice) {
        isBracketsSplice = false;
        for (let i = 0; i < strArr.length; i++) {
            bracketsConfig.forEach((element) => {
                if (
                    strArr.indexOf(element[0], i) != -1 &&
                    strArr.indexOf(element[1], i + 1) ==
                        strArr.indexOf(element[0], i) + 1
                ) {
                    strArr.splice(strArr.indexOf(element[0], i), 2);
                    i -= 2;
                    let isBracketsSplice = true;
                }
            });
        }
    }
    return strArr.length == 0 ? true : false;
};

// console.log(
//     check("((()))()", [
//         ["(", ")"],
//         ["[", "]"],
//     ])
// );
