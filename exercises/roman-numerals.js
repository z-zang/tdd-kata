export const numToRom = (number) => {
    let numeralArray = [];

    // M, 1000
    if (number >= 1000) {
        const quotient = Math.floor(number / 1000)
        const remainder = number % 1000
        
        if (quotient >= 1) {
            numeralArray.push(...Array(quotient).fill("M"))
        }
        
        console.log('quotient', quotient)
        console.log('remainder', remainder)
    }
    
    if (number === 500) return 'D'
    if (number === 100) return 'C'
    if (number === 50) return 'L'
    if (number === 10) return 'X'
    if (number === 5) return 'V'
    if (number === 1) return 'I'

    // console.log('numeralArray', numeralArray)

    return numeralArray.join('')
}
