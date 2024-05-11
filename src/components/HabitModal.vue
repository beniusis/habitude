<script setup>
import { ref } from 'vue';
import useHabitsStore from '@/stores/habits';
import useToastStore from '@/stores/toast';
import PrimaryButton from './PrimaryButton.vue';

const habits = useHabitsStore();
const toast = useToastStore();

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  },
  type: {
    type: String,
    default: 'add'
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['closeAdd', 'closeEdit']);

const habitName = ref(props.data ? props.data.name : '');

const closeModal = () => {
  if (props.type === 'add') {
    emit('closeAdd');
  } else {
    emit('closeEdit');
  }
};

const saveAction = () => {
  if (props.type === 'add') {
    try {
      habits.add(habitName.value);
      toast.success(`Habit created!`);
    } catch (error) {
      toast.error(error);
    }
    habitName.value = '';
  } else {
    try {
      habits.edit(props.data.id, habitName.value);
      toast.success(`Habit's name changed!`);
    } catch (error) {
      toast.error(error);
    }
  }

  closeModal();
};
</script>

<template>
  <div class="fixed inset-0 h-screen w-full bg-gray-500 bg-opacity-75" v-show="isOpen">
    <div class="flex min-h-full items-center justify-center p-4 text-center">
      <div
        class="relative flex flex-col items-center justify-center gap-3 rounded-lg bg-background p-10"
      >
        <svg
          class="absolute right-2 top-2 cursor-pointer fill-text"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          @mousedown="closeModal"
        >
          <path
            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
          ></path>
        </svg>
        <label class="sr-only" for="habit-name">Habit name</label>
        <input
          class="mt-4 w-full rounded-md bg-secondary px-4 py-2 text-xs text-text outline-none transition-all duration-300 ease-out placeholder:text-text sm:text-sm"
          type="text"
          id="habit-name"
          placeholder="Enter the name of a habit"
          v-model="habitName"
        />
        <PrimaryButton
          class="w-full capitalize"
          :disabled="habitName.length === 0"
          @click="saveAction"
          >{{ props.type }}</PrimaryButton
        >
      </div>
    </div>
  </div>
</template>
