import { numToRom } from '../exercises/roman-numerals'

describe('numToRom', () => {
    test('converts input for singular roman numerals', () => {
        expect(numToRom(1)).toBe('I')
        expect(numToRom(5)).toBe('V')
        expect(numToRom(10)).toBe('X')
        expect(numToRom(50)).toBe('L')
        expect(numToRom(100)).toBe('C')
        expect(numToRom(500)).toBe('D')
        expect(numToRom(1000)).toBe('M')
    })
    test('converts input for multiples of 1000', () => {
        expect(numToRom(4000)).toBe('MMMM')
        expect(numToRom(3000)).toBe('MMM')
        expect(numToRom(2000)).toBe('MM')
    })
    test('converts input for other numbers', () => {
        expect(numToRom(5554)).toBe('MMMMMDLIV')
        expect(numToRom(1000)).toBe('M')
        expect(numToRom(748)).toBe('DCCXLVIII')
        expect(numToRom(39)).toBe('XXXIX')
        expect(numToRom(83)).toBe('LXXXIII')
        expect(numToRom(7)).toBe('VII')
    })
})