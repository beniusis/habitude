import { defineStore } from 'pinia';
import { ref } from 'vue';

const DEFAULT_TIMEOUT = 5000;

const createToast = (message, status) => {
  return {
    message,
    status,
    id: Math.random() * 1000
  };
};

const useToastStore = defineStore('toast', () => {
  const toasts = ref([]);

  const updateState = (message, status) => {
    const toast = createToast(message, status);

    toasts.value.push(toast);

    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== toast.id);
    }, DEFAULT_TIMEOUT);
  };

  const success = (message) => updateState(message, 'success');

  const warning = (message) => updateState(message, 'warning');

  const error = (message) => updateState(message, 'error');

  return { toasts, success, warning, error };
});

export default useToastStore;
