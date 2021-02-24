//jshint esversion:6

// console.log(module);
module.exports.getDate = getDate;

function getDate() {
  const today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  let day = today.toLocaleString("en-US", options);

  return day;
}

module.exports.getDay = getDay;

function getDay(){
  const today = new Date();

  let options = {
    weekday: "long"
  }

  let day = today.toLocaleString("en-US", options);

  return day;
}
