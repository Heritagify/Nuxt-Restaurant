<template>
  <div class="md:mt-14 mb-10 p-7 lg:px-28 w-full">
    <h1 class="text-center text-3xl italic font-bold my-5">Top Products</h1>
 
    <!-- Modified grid layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center">
      <div 
        v-for="product in products" 
        :key="product.name" 
        class="bg-[url(/img/tp-bg.png)] bg-cover w-[22rem] md:w-52 h-[25em] lg:w-[21.5em] md:h-[19.5em] p-2 flex flex-col justify-between rounded-2xl"
      >
        <div class="flex justify-center">
          <NuxtImg :src="product.image" :alt="product.name" class="lg:w-48" />
        </div>
        <div>
          <div class="flex justify-between text-white text-xl md:text-sm">
            <p>${{ product.price }}</p>
            <Icon name="mdi:information-outline" />
          </div>
          <div class="flex justify-between text-white text-xl md:text-sm mt-2">
            <h1 class="md:w-10">{{ product.name }}</h1>
            <button class="text-white bg-red-800 h-8 px-2">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
 </template>

<script setup>
const products = [
  { image: "/img/peachDanish.svg", name: "Danish Peach", price: 15 },
  { image: "/img/danishFruit.svg", name: "Danish Fruit Bread", price: 35 },
  { image: "/img/multi-grain.svg", name: "Multi Grain Bread", price: 50 },
  { image: "/img/no_Knead.svg", name: "No Knead Bread", price: 40 },
  { image: "/img/baklava.svg", name: "Baklava pastry", price: 60 },
  { image: "/img/kaiserRoll.svg", name: "Kaiser Roll", price: 25 },
];
</script>