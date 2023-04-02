function scuberGreetingForFeet(distance){
  // Write your code here!
    if (distance <= 400){
      return 'This one is on me!'
    }
    else if (distance >= 401 && distance <= 2000){
      return 'That will be twenty bucks.'
    }
    else if (distance >= 2001 && distance <=2500){
      return 'I will gladly take your thirty bucks.'
    }
    else if (distance >=2501){
      return 'No can do.'
    }
}

function ternaryCheckCity(city){
  // Write your code here!
let response = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return response
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return ('Thank you so much.');
    case "not as generous" :
      return ('Thank you.');
    case "thanks for everything" :
      return ('Bye.');
  }
}
