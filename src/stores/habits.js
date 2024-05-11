import { formatDate } from '@/lib/utils';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

const habitsStorage = useLocalStorage('habits', []);

/**
 * Checks if a habit with the provided name already exists in the habit list.
 * @param {string} name
 * @returns {Boolean} True - if the habit with the provided name already exists in the habit list. False - if it does not exist.
 */
const exists = (name) => {
  return habitsStorage.value.some((h) => h.name === name);
};

const useHabitsStore = defineStore('habits', () => {
  const list = ref(habitsStorage.value);

  /**
   * Adds a new habit to the habit list.
   * @param {string} habitName
   * @returns If the habit with the provided name already exists in the habit list.
   */
  const add = (habitName) => {
    if (exists(habitName)) return;

    list.value.push({
      id: list.value.length > 0 ? list.value[list.value.length - 1].id + 1 : 1,
      name: habitName,
      completedAt: {},
      stoppedAt: null
    });
  };

  /**
   * Removes a habit from the habit list.
   * @param {number} id
   */
  const remove = (id) => {
    list.value = list.value.filter((h) => h.id !== id);
  };

  /**
   * Changes the existing habit's name.
   * @param {number} id
   * @param {string} name
   * @returns If the habit with the provided name already exists in the habit list.
   */
  const edit = (id, name) => {
    if (exists(name)) return;

    const habit = list.value.find((h) => h.id === id);
    habit.name = name;
  };

  /**
   * Updates the completion status of a habit on a specific date.
   * @param {number} id
   * @param {string} date
   * @param {boolean} status
   */
  const update = (id, date, status) => {
    const habit = list.value.find((h) => h.id === id);

    if (status === false) {
      delete habit.completedAt[date];
    } else {
      habit.completedAt[date] = status;
    }
  };

  /**
   * Stops a habit from being tracked from the specific date going forward.
   * @param {number} id
   * @param {string} date
   */
  const stop = (id, date) => {
    const habit = list.value.find((h) => h.id === id);
    habit.stoppedAt = formatDate(date);
  };

  watch(list, () => {
    habitsStorage.value = list.value;
  });

  return { list, add, remove, edit, update, stop };
});

export default useHabitsStore;
