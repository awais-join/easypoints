export const toHoursAndMinutes = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h:${minutes}m`;
};

export const toAMPMTime = (dateString: string| number) => {
  let date = new Date(dateString);
  let hours: number | string = date.getHours();
  let minutes: number | string = date.getMinutes();
  let ap = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes.toString().padStart(2, '0');
  let mergeTime = hours + ':' + minutes + ' ' + ap;
  return mergeTime;
};

export const dateToDayAndMonth = (timestamp: string)=> {
  const parsedDate: Date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  const formattedDate: string = parsedDate.toLocaleDateString('en-US', options);
  
  const day: number = parsedDate.getDate();
  const suffix: string = (day >= 11 && day <= 13) ? "th" : { 1: "st", 2: "nd", 3: "rd" }[day % 10] || "th";
  
return `${formattedDate.slice(0, 3)} ${formattedDate.slice(4)}${suffix}`;

}

export const getTimeForSlider = (number: number) => {
  const hours = Math.floor((number - 1) / 2);
  const minutes = number % 2 === 0 ? '30' : '00';
  const period = hours < 12 ? 'AM' : 'PM';
  const formattedHours =
    hours === 0 || hours === 12 ? '12' : (hours % 12).toString();

  return `${formattedHours}:${minutes} ${period}`;
};