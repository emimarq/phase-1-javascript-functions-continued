// code your solution here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

console.log(saturdayFun('study'));

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

console.log(mondayWork('work'));

function wrapAdjective(visFlair = '*') {
  return function(keyWord = 'special') {
    return `You are ${visFlair}${keyWord}${visFlair}!`
  }
}