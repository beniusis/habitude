<script setup>
import useToastStore from '@/stores/toast';
import { storeToRefs } from 'pinia';
import ToastEntry from './ToastEntry.vue';

const toast = useToastStore();
const { toasts } = storeToRefs(toast);
</script>

<template>
  <ul
    v-if="toasts.length > 0"
    class="fixed bottom-2 flex w-full flex-col gap-2 sm:bottom-auto sm:right-2 sm:top-2 sm:w-fit sm:items-end"
  >
    <ToastEntry
      v-for="toast in toasts"
      :status="toast.status"
      :message="toast.message"
      :key="toast.id"
    />
  </ul>
</template>
