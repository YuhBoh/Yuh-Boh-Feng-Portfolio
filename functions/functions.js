const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats(){
  console.log( `in enoughSeats` );
  // check if seatsInCar >= number of passengers
  if ( seatsInCar >= passengers.length ){
    return true;
  }//end enough seats
  else{
    return false;
  }//end not enough seats
}//end enoughSeats

function getInCar( nameOfPassenger ){
  console.log( `in getInCar`, nameOfPassenger);
  // push this new passenger into our passengers array
  passengers.push( nameOfPassenger );
  return passengers;
} //end getInCar

function readyForRoadTrip(){
  if( enoughSeats() && tankFull ){
    return true;
  }
  else{
    return false;
  }// not ready
}// end readyForRoadTrip

getInCar( `You` );
getInCar( `dEV` );
getInCar( `Commander Wisdom` );
getInCar( `Anjie` );

console.log( enoughSeats( ));

console.log( `are we ready for the trip?`, readyForRoadTrip());