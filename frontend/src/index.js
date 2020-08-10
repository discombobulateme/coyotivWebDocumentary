const Jumpers = require('./jumpers')
const Places = require('./places')
/*
const paloma = {
  name: 'Paloma',
  age: 37,
  email: 'p@p.com',
  password: '123456',
  baseStart: 2009,
  instructor: 'Ruy Fernandes',
  places: [],
}
*/

const paloma = new Jumpers('paloma', 37, 'p@p.com', '123456', 2009, 'Ruy Fernandes', 'Ponde de Resende')
const kjerag = new Places('e', 450, 'green grass, with cows')

paloma.addJump(203)
kjerag.addPlaces('Kjerag')

console.log(paloma.jumps)
console.log(kjerag.type)

// setter test not allowing to overwrite diary property
// paloma.diary = 'Uhu'
