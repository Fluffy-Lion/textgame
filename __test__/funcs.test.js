let { rand } = require('../funcs')
let { game } = require('../interactions')

describe("rand function test", () => {
    let arrayGen = () => {
        let arr = []
        for(let i = 0; i < 10; i++){
            let num = rand()
            arr.push(num)
        }
        return arr
    }
    test("arrayGen from rand is never 2", () => {
        expect(arrayGen()).not.toContain(2)
    })
    test("arrayGen from rand contains 0", () => {
        expect(arrayGen()).toContain(0)
    })
    test("arrayGen from rand contains 1", () => {
        expect(arrayGen()).toContain(1)
    })
})
describe("game function", () => {
    let arrayGen = () => {
        let arr = []
        for(let i = 0; i < 10; i++){
            let option = game()
            arr.push(option)
        }
        return arr
    }
    test("returns a string", () => {
        expect(arrayGen()).toContain("scissors")
    })
    test("returns a string", () => {
        expect(arrayGen()).toContain("rock")
    })
    test("returns a string", () => {
        expect(arrayGen()).toContain("paper")
    })
})