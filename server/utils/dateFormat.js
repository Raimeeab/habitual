const addDateSuffix = (date) => {
  let dateToString = date.toString();

  // Get last char of date string
  const lastChar = dateToString.charAt(dateToString.length - 1);

  if (lastChar === "1" && dateToString !== "11") {
    dateToString = `${dateToString}st`;
  } else if (lastChar === "2" && dateToString !== "12") {
    dateToString = `${dateToString}nd`;
  } else if (lastChar === "3" && dateToString !== "13") {
    dateToString = `${dateToString}rd`;
  } else {
    dateToString = `${dateToString}th`;
  }

  return dateToString;
};

// Function to format a timestamp, accepts the timestamp and an `options` object as parameters
module.exports = (
  timestamp,
  { monthLength = "short", dateSuffix = true } = {}
) => {
  // Create month object
  const months = {
    0: monthLength === "short" ? "Jan" : "January",
    1: monthLength === "short" ? "Feb" : "February",
    2: monthLength === "short" ? "Mar" : "March",
    3: monthLength === "short" ? "Apr" : "April",
    4: monthLength === "short" ? "May" : "May",
    5: monthLength === "short" ? "Jun" : "June",
    6: monthLength === "short" ? "Jul" : "July",
    7: monthLength === "short" ? "Aug" : "August",
    8: monthLength === "short" ? "Sep" : "September",
    9: monthLength === "short" ? "Oct" : "October",
    10: monthLength === "short" ? "Nov" : "November",
    11: monthLength === "short" ? "Dec" : "December",
  };

  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];

  const dayOfMonth = dateSuffix
    ? addDateSuffix(dateObj.getDate())
    : dateObj.getDate();

  const year = dateObj.getFullYear();
  let hour =
    dateObj.getHours() > 12
      ? Math.floor(dateObj.getHours() - 12)
      : dateObj.getHours();

  // If hour is 0 (12:00am), change it to 12
  if (hour === 0) {
    hour = 12;
  }

  const minutes = (dateObj.getMinutes() < 10 ? "0" : "") + dateObj.getMinutes();

  // Set `am` or `pm`
  const periodOfDay = dateObj.getHours() >= 12 ? "pm" : "am";

  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimeStamp;
};
