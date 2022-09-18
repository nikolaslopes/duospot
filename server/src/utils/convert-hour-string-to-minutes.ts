// 18:00 -> ["18", "30"] -> [18, 30]

export const convertHourStringToMinutes = (hourString: string) => {
  const [hours, minutes] = hourString.split(":").map(Number);

  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
};
