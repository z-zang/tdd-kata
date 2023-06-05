export const numToRom = (numberToConvert) => {
    // Different sequential letter combinations:
    /*
        M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, I
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    */

    const romNumMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4, 
        I: 1
    }

    let finalNumeralString = '';

    Object.keys(romNumMap).forEach((romNum) => {
        let quotient = Math.floor(numberToConvert / romNumMap[romNum]);
        
        // remove amount now represented by letters
        numberToConvert -= quotient * romNumMap[romNum];
        // and letters to final string
        finalNumeralString += romNum.repeat(quotient);
    })

    return finalNumeralString;
}