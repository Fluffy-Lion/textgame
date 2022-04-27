const character = require('./characters')
const { greeting, color } = require('./interactions')

const leon = new character.Main("leon")
let player
const start = async () => {
    let name = await greeting()
    // player = new character.Main(name)
    console.log(name)
}
const text1 = () => {
    console.log(`hello ${player.name}`)
}
start()