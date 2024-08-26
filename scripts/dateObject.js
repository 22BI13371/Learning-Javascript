// https://javascript.info/date

"use-strict";

/* --------------------------------  */

// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

// Show it using alert.

// let date = new Date(2012, 1, 21, 10, 12);
// console.log(date.getDay());

/* --------------------------------  */

// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

// For instance:

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"

function getWeekDay(date) {
  let weekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return weekdays[date.getDay()];
}

/* --------------------------------  */

// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getLocalDay(date) );       // tuesday, should show 2

function getLocalDay(date) {
  return date.getDay() ? date.getDay() : 7;
}

/* --------------------------------  */

// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// P.S. The function should not modify the given date.

function getDateAgo(date, days) {
  return new Date(date.getTime() - days * 86400 * 1000).getDate();
}

/* --------------------------------  */

// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

// Parameters:

//     year – four-digits year, for instance 2012.
//     month – month, from 0 to 11.

// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month);
  date.setMonth(month + 1);
  date.setDate(0);

  // Alternate solution
  // let date = new Date(year, month + 1, 0);

  return date.getDate();
}

/* --------------------------------  */

// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

// For instance, if now were 10:00 am, and there was no daylight savings shift, then:

// getSecondsToday() == 36000 // (3600 * 10)

// The function should work in any day. That is, it should not have a hard-coded value of “today”.

function getSecondsToday() {
  let today = new Date();
  let startToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((today - startToday) / 1000);
}

// console.log(getSecondsToday());
/* --------------------------------  */

// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then:

// getSecondsToTomorrow() == 3600

// P.S. The function should work at any day, the “today” is not hardcoded.

function getSecondsToTomorrow() {
  let date = new Date();
  return Math.round(86400 - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()));
}

console.log(getSecondsToTomorrow());
/* --------------------------------  */

// Write a function formatDate(date) that should format date as follows:

//     If since date passed less than 1 second, then "right now".
//     Otherwise, if since date passed less than 1 minute, then "n sec. ago".
//     Otherwise, if less than an hour, then "m min. ago".
//     Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.

// For instance:

// alert( formatDate(new Date(new Date - 1)) ); // "right now"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// // yesterday's date like 31.12.16 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
  let now = new Date();
  let timeDiff = now - date;

  if (timeDiff < 1000) {
    return "right now";
  } else if (Math.round(timeDiff < 60 * 1000)) {
    return `${Math.round(timeDiff / 1000)} sec. ago`;
  } else if (Math.round(timeDiff < 3600 * 1000)) {
    return `${Math.round(timeDiff / (60 * 1000))} min. ago`;
  } else {
    let year = date.getFullYear() % 1000 < 10 ? "0" + (date.getFullYear() % 1000) : date.getFullYear() % 1000;
    let month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    return `${day}.${month}.${year} ${hour}:${minute}`;
  }
}

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */

/* --------------------------------  */
