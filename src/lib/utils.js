/**
 * Returns the current date.
 * @returns {string} Current date in ISO format (YYYY-MM-DD).
 */
export const getCurrentFormattedDate = () => {
  return new Date().toISOString().slice(0, 10);
};

/**
 * Returns the dates of the last 7 days starting from today in the reversed order.
 * @returns {Array<string>} Array of dates in ISO format (YYYY-MM-DD).
 */
export const getLastSevenDaysDates = () => {
  return new Array(7)
    .fill(new Date())
    .map((date, i) => {
      return new Date(new Date().setDate(date.getDate() - i)).toISOString().slice(0, 10);
    })
    .reverse();
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

/**
 * Formats the string as a month and day.
 * @param {string} date
 * @returns {string} Month (abbreviation) and day of the date.
 */
export const getMonthAndDay = (date) => {
  return new Date(date).toLocaleString('en-us', { month: 'short', day: 'numeric' });
};
