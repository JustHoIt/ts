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
//아무거나 할당 가능 그러나, 되도록 사용 X
let hello2: any = 'Hello world'
hello2 = 123
hello2 = false
hello2 = null
hello2 = {}
hello2 = []
hello2 = function() {}

/// Unknown
const a1: any = 123
const u: unknown = 123

const any: any = a1
const boo: boolean = a1
const num2: number = a1
const arr2: string[] = a1
const obj2: { x: string, y: number } = a1

/// Tuple
const tuple: [string, number, boolean] = ['a', 1, false]
const users: [number, string, boolean] []
= [[1, "A", true], [2, "B", false], [3, "C", true],]

/// Void
function hello3(msg: string): void {
    console.log(`Hello' ${msg}`)
}

const hi: void = hello3('world')

/// Never
const nev: [] = []

/// Union
let union2: string | number | number [] | boolean
union2 = 'Hello type!'
union2 = 1
union2 = [1,2,3]
union2 = false

let union3: (string | number | number [] | boolean) []
union3 = ['Hello type!', 1, [1,2,3], false]

/// Intersection
interface User3 {
    name: string,
    age: number
}
interface Validation {
    isValid: boolean
}

const ho: User & Validation = {
    name: 'homin',
    age: 222,
    isValid: true
}