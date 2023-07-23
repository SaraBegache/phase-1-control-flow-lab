// Function for scuberGreetingForFeet()
function scuberGreetingForFeet(distanceInFeet) {
  if (distanceInFeet <= 400) {
    return 'This one is on me!';
  } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
    return 'That will be twenty bucks.';
  } else if (distanceInFeet >= 2000 && distanceInFeet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

// Function for ternaryCheckCity()
function ternaryCheckCity(destination) {
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function for switchOnCharmFromTip()
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}


// how to properly evaluate whether 5 is greater than 2 AND 5 is less than 4 using logical operators

const result = 2 < 5 && 5 < 4;
console.log(result); // Output: false

