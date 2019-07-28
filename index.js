// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  if (blocks < 42) {
    return (42 - blocks);
  } else {
    return (blocks - 42);
  }
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination){
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}
