  function howManyDalmatians(number) {
  
  const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];

   if(number <= 10) {
    return dogs[0];
   } else if(number <= 50) {
    return dogs[1];
   } else if(number === 100) {
    return dogs[2];
   } else {
    return dogs[3];
   }
return respond
}


var howManyDalmatians = function(number) {
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  var respond = (number <= 10) ? dogs[0] : (number <= 50) ? dogs[1] : (number === 101) ? dogs[3] : dogs[2];
  return respond;
};