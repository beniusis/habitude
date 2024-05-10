import { formatDate } from '@/lib/utils';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

const habitsStorage = useLocalStorage('habits', []);

const exists = (name) => {
  return habitsStorage.value.some((h) => h.name === name);
};

const useHabitsStore = defineStore('habits', () => {
  const list = ref(habitsStorage.value);

  const add = (habitName) => {
    if (exists(habitName)) return;

    list.value.push({
      id: list.value.length > 0 ? list.value[list.value.length - 1].id + 1 : 1,
      name: habitName,
      completedAt: {},
      stoppedAt: null
    });
  };

  const remove = (id) => {
    list.value = list.value.filter((h) => h.id !== id);
  };

  const edit = (id, name) => {
    const habit = list.value.find((h) => h.id === id);
    habit.name = name;
  };

  const update = (id, date, status) => {
    const habit = list.value.find((h) => h.id === id);

    if (status === false) {
      delete habit.completedAt[date];
    } else {
      habit.completedAt[date] = status;
    }
  };

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
