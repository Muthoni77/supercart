export const fancyTimeFormatter = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  let timeString = "";

  if (hours > 0) {
    timeString += hours.toString() + ":";
  }

  if (minutes > 0 || hours > 0) {
    timeString += minutes.toString() + ":";
  }

  timeString += seconds.toString();

  return timeString.trim();
};
