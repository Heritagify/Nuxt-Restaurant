<template>
    <button
      :class="computedClasses"
      @click="handleClick"
    >
      <!-- Show the icon if provided -->
      <Icon v-if="icon" :name="icon" class="w-5 h-5" />
      <slot /> <!-- Button text -->
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    icon: {
      type: String,
      default: '', // Optional icon
    },
    variant: {
      type: String,
      default: 'default', // Default style
    },
    onClick: Function, // Optional onClick handler
  });
  
  // Dynamic Tailwind styles based on `variant`
  const computedClasses = computed(() => {
    return [
      'flex items-center gap-2 rounded-full p-2 px-4 text-sm bg-white hover:bg-[#E9BD8C]',
      {
        // Default style
        'bg-[#E9BD8C] hover:bg-[#d8a772]': props.variant === 'default',
        // Primary style
        'bg-blue-500 text-white hover:bg-blue-700': props.variant === 'primary',
        // Secondary style
        'bg-gray-500 text-white hover:bg-gray-700': props.variant === 'secondary',
        // Tertiary style
        'bg-gray-500 text-white bg-red-800 hover:bg-gray-500': props.variant === 'tertiary',
      },
    ];
  });
  
  const handleClick = () => {
    if (props.onClick) props.onClick();
  };
  </script>
  