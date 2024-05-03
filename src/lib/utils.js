/**
 * Returns the dates of the current week starting from Monday.
 * @returns {Array<string>} Array of dates in ISO format (YYYY-MM-DD).
 */
export const getCurrentWeekDates = () => {
  return new Array(7).fill(new Date()).map((date, i) => {
    const day = date.getDate() - date.getDay() + i + 1;
    return new Date(date.setDate(day)).toISOString().slice(0, 10);
  });
};

/**
 * Converts a date to a week day.
 * @param {string} date
 * @returns {string} Short version of the week day in US English.
 */
export const toWeekDay = (date) => {
  return new Date(date).toLocaleString('en-us', { weekday: 'short' });
};

/**
 * Checks if the date is in the future.
 * @param {string} date
 * @returns {boolean} True - if the date is in the future, otherwise - false.
 */
export const isDayDisabled = (date) => {
  return new Date(date).getTime() > new Date().getTime();
};
