const rand = () => {
    return Math.floor(Math.random() * 2)
}
const game = () => {
    let num = Math.floor(Math.random() * 3)
    let option
    if(num === 0){
      option = "rock"
    }else if(num === 1){
      option = "paper"
    }else {
      option = "scissors"
    }
    return option
  }

module.exports = {
    rand,
    game
}