// 타입 종료


/// 문자
let str: string
let red: string = "Red"
let green: string = 'Green'
let myColor: string = `My color is ${red}.`
let yourColor: string = 'Your color is ' + green

/// 숫자
let num: number
let integer: number = 6
let foloat: number = 3.14
let infinity: number = Infinity
let nan: number = NaN

/// 불린
let isBoolean: boolean
let isDone: boolean = false

/// Null / Ubndefined
let nul: null
let und: undefined

/// 배열
const fruits: string[] =  ['Apple', 'Banana', 'Cherry']
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7]
const union: (string|number)[] = ['Apple', 1, 2, 'Banana', 3, 'Cherry']
const array: number[] = [1, 2, 3]

/// 객체
// typeof DATA === 'object'
const obj: object = {}
const arr: object = []
const func: object = function () {}

interface User {
    name: string
    age: number
    isValid: boolean
}
const userA: User = {
    name: 'asdasd',
    age: 44,
    isValid: true
}
const userB: User = {
    name: 'zxczxc',
    age: 55,
    isValid: false
}


/// 함수 
const add: (x: number, y: number) => number = function(x, y) {
    return x + y
}

const a: number = add(1, 2)

const hello: () => void = function () {
    console.log('Hello')
}
const h : void = hello()

/// Any

/// Unknown

/// Tuple

/// Void

/// Union

/// Intersection