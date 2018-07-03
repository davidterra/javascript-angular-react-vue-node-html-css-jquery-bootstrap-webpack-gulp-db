const quaserArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaserArray)
Object.defineProperty(quaserArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaserArray[0])

const meuArray = ['Rafale', 'Ana', 'Bia']
console.log(quaserArray.toString(), meuArray)