// let date = new Date();
// let currentDate = date.toISOString().split("T")[0];

export const getWeekDay = (UNIX_timestamp) => {
  if (!UNIX_timestamp) return null;
  const a = new Date(UNIX_timestamp * 1000); //this wasted 2 hours
  let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekDays[a.getDay()];
};

export const getDate = (UNIX_timestamp) => {
  if (!UNIX_timestamp) return null;
  const a = new Date(UNIX_timestamp * 1); //this wasted 2 hours
  const year = a.getFullYear();
  const month = `0${a.getMonth() + 1}`;
  const date = a.getDate();
  const time = date + " " + month.substr(-2) + " " + year;
  return time;
};

export const timeConverter = (UNIX_timestamp) => {
  if (!UNIX_timestamp) return null;
  const a = new Date(UNIX_timestamp * 1000); //this wasted 2 hours in original project
  const hour = a.getHours();
  const min = "0" + a.getMinutes();
  const time = hour + ":" + min.substr(-2);
  return time;
};

// export const timeConverter = (UNIX_timestamp) => {
//   if (!UNIX_timestamp) return null;
//   const a = new Date(UNIX_timestamp * 1); //this wasted 2 hours
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   const year = a.getFullYear();
//   const month = months[a.getMonth()];
//   const date = a.getDate();
//   const hour = a.getHours();
//   const min = a.getMinutes();
//   const time = date + " " + month + " " + year + "   -   " + hour + ":" + min;
//   // console.log(time);
//   return time;
// };
