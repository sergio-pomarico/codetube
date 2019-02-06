function formatedTime (secs) {
  const minutes = parseInt(secs/60, 10);
  const seconds = parseInt(secs%60, 10);

  return `${minutes}:${formatedSeconds(seconds.toString())}`
}

function formatedSeconds(number) {
  //if(typeof number === "number") number = number.toString()
  const pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
}

export {
  formatedTime,
  formatedSeconds
}