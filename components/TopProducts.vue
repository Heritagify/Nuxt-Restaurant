<template>
    <div class="border border-red-500 mt-14 mb-10 p-6">
      <h1 class="text-center text-3xl italic font-bold my-5">Top Products</h1>
  
      <!-- Grid layout -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="product in products" 
          :key="product.name" 
          class="bg-[url(/img/tp-bg.png)] bg-cover w-[11em] h-[14.5em] p-2"
        >
          <img :src="product.image" alt="" class="w-28 h-28 ml-6">
          <div class="flex justify-between text-white text-sm mt-10">
            <p>${{ product.price }}</p>
            <Icon name="mdi:information-outline" />
          </div>
          <div class="flex justify-between text-white text-xs my-2">
            <h1 class="w-10">{{ product.name }}</h1>
            <button class="text-white bg-red-800 h-8 px-2">Add</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const products = [
    { image: "/img/peachDanish.svg", name: "Danish Peach", price: 40 },
    { image: "/img/danishFruit.svg", name: "Butter Croissant", price: 35 },
    { image: "/img/chocoMuffin.svg", name: "Choco Muffin", price: 50 },
    { image: "/img/cinnamonRoll.svg", name: "Cinnamon Roll", price: 45 },
  ];
  </script>
  