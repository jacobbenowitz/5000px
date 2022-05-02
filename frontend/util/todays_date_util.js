// credit https://bobbyhadz.com/blog/javascript-convert-milliseconds-to-hours-minutes-seconds

export function getTodaysDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy; // format date

  return today;
}

export function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds,
  )}`;
}

export function convertMsToHours(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  hours = hours % 24;

  return padTo2Digits(hours)
};

export function convertMsToMinutes(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  minutes = minutes % 60;

  return padTo2Digits(minutes);
}

export function hoursSinceUpload(uploadDate) {
  const uploadTime = new Date(uploadDate);
  const currentTime = new Date();
  const msSinceUpload = currentTime - uploadTime;
  return convertMsToHours(msSinceUpload);
}

export function minutesSinceUpload(uploadDate) {
  const uploadTime = new Date(uploadDate);
  const currentTime = new Date();
  const msSinceUpload = currentTime - uploadTime;
  return convertMsToMinutes(msSinceUpload);
}

export function timeSinceUplaod(uploadDate) {
  const hoursAgo = hoursSinceUpload(uploadDate)
  const minutesAgo = minutesSinceUpload(uploadDate)
  if (hoursAgo < 1) {
    return `${minutesAgo} minutes ago`
  } else {
    return `${hoursAgo} hours ago`
  }
}