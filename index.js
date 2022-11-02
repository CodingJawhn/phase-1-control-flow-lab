function scuberGreetingForFeet(value){
  if (value <= 400) {
  return `This one is on me!`
}
  else if (400 < value && value < 2000) {
    return `That will be twenty bucks.`
  }
  else if (2000 < value && value < 2500) {
    return `I will gladly take your thirty bucks.`
  }
  else if (value > 2500) {
    return `No can do.`
  }
}
// in order to declare a value in between two values, use &&

function ternaryCheckCity(city){
  return city === `NYC` ? `Ok, sounds good.` : `No go.`
}
// make sure to define what the city is

function switchOnCharmFromTip(tip){
  switch(tip){
    case `generous`:
      return `Thank you so much.`
    case `not as generous`:
      return `Thank you.`
    default:
      return `Bye.`
  }
}
// when using the switch function, make sure to use ':' when determining the return