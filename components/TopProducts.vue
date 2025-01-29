<template>
    <div class="border border-red-500 mt-14 mb-10 p-6">
      <h1 class="text-center text-3xl italic font-bold my-5">Top Products</h1>
  
      <!-- Grid layout -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
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
  