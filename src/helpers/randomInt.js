function randomInt(min, max) {
  if (max===min) return min;
  else if (max<min) throw new Error("Max must be greater than min");
  else return Math.floor((Math.random() * (max-min+1)) + min);
}

export default randomInt;