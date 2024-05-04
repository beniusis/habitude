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
      addedAt: new Date().toISOString().slice(0, 10)
    });
  };

  const remove = (id) => {
    list.value = list.value.filter((h) => h.id !== id);
  };

  watch(list, () => {
    habitsStorage.value = list.value;
  });

  return { list, add, remove };
});

export default useHabitsStore;
