function scuberGreetingForFeet(distance){
  if (distance <=400){
    return 'This one is on me!'
  } else if(distance>2000 && distance <= 2500){ 
    return 'I will gladly take your 30 bucks.'
  }else if (distance >2500){
    return 'No can do.'
  }
  else (distance <=0){
    return 'Invalid Distance Number'
  }
}

function ternaryCheckCity(city){
  if city === 'NYC'{
    return 'Ok,sounds good.';
    else 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  if (tip === 'generous') {
    return 'Thank you so much!'
  }
  else if (tip === 'not as generous' {
    return 'Thankyou'
  }
  else (
    return 'Bye.'
  )
}