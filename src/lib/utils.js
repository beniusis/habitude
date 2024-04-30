/**
 * Get the dates of the current week.
 * @returns {Array<string>} Array of dates in ISO format (YYYY-MM-DD).
 */
export const getCurrentWeekDates = () => {
  const dates = [];
  const currentDate = new Date();

  for (let i = 0; i <= 6; i += 1) {
    // The first day of the week is Monday
    const first = currentDate.getDate() - currentDate.getDay() + 1 + i;
    const day = new Date(currentDate.setDate(first)).toISOString().slice(0, 10);
    dates.push(day);
  }

  return dates;
};

/**
 * Converts a date to a week day.
 * @param {string} date
 * @returns {string} Short version of the week day in US English.
 */
export const toWeekDay = (date) => {
  return new Date(date).toLocaleString('en-us', { weekday: 'short' });
};
