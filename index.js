// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  if (blocks < 42) {
    return (42 - blocks);
  } else {
    return (blocks - 42);
  }
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInFeet(blocks) * 264;
}
