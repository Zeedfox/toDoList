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

module.exports.getDay = function(){
  const today = new Date();
  let options = {
    weekday: "long"
  }
  return today.toLocaleString("en-US", options);
}

exports.getMonth = function(){
  const month = new Date();
  let options = {
    month: "long"
  }
  return month.toLocaleString("en-US", options);
}
