const plane = "A320";
console.log(typeof plane[0]);

const airline = "TAP Air Portugal";
console.log(airline.slice(4));  // from index 4 slicing will start and 4 is included
console.log(airline.slice(4,7));

/// Extracting first word
console.log((airline.slice(0,airline.indexOf(" "))));  //first empty space
///Last word
console.log((airline.slice(airline.lastIndexOf(" ")+1)));
console.log(airline.slice(-2));///from backside
console.log(airline.slice(1,-1));

///Checking if seat is middle or not

const checkSeat = function(seat){
    const st = seat.slice(-1);
    if(st === "B" || st === "E"){
        console.log("You have got the middle seat");
    }else{
        console.log("Congrats you got the lucky seat");
    }
}
checkSeat("11B");
checkSeat("23C");
checkSeat("3E");

const passenger = "jONas";
const toLower = passenger.toLowerCase();
const correctPassenger = toLower[0].toUpperCase() + toLower.slice(1);
console.log(correctPassenger);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Alternative solution to replaceAll with regular expression
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const planes = 'Airbus A320neo';
console.log(planes.includes('A320'));
console.log(planes.includes('Boeing'));
console.log(planes.startsWith('Airb'));

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');