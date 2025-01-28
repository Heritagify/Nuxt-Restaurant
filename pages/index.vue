<template>
    <div class="bg-[url(/img/heroBg.png)] bg-cover w-full h-[35rem]">
        <header class="flex justify-between py-3 px-20">
            <!-- LOGO -->
            <img src="/img/logo.svg" alt="" class="w-14 h-14">
            <!-- NavItems -->
            <nav class="flex items-center space-x-4 text-sm">
                <a href="/" class="text-[#E9BD8C]">Home</a>
                <a href="/" class="text-white hover:bg-red-800">Menu</a>
                <a href="/about" class="p-2 text-white rounded-lg hover:bg-red-800 ">About</a>
                <a href="/contact" class="p-2 text-white rounded-lg hover:bg-red-800 ">Contact Us</a>
                <a href="/about" class="p-2 text-white rounded-lg hover:bg-red-800 ">Order Online</a>
            </nav>
                <div class="flex items-center space-x-4">
                    <button class="rounded-full w-20 py-2 text-sm bg-[#E9BD8C] text-white">Login</button>
                    <button class="rounded-full w-20 py-2 bg-white text-sm hover:bg-[#E9BD8C]"> Sign Up</button>
                </div>
        </header>
        <div class="border-4 border-white w-[20rem] mx-5 my-40 space-y-4">
            <h1 class="text-[#E9BD8C]">Delicious Cafe</h1>
            <h1 class="text-white text-5xl font-inter">Sweet Treats,</h1>
            <h1 class="text-white text-5xl">Perfect Eats</h1>

            <div>
                <button class="rounded-full w-20 py-2 text-sm bg-[#E9BD8C] text-white">Order Now</button>
                <button class="rounded-full w-20 py-2 text-sm bg-[#E9BD8C] text-white">Learn More </button>
            </div>
        </div>
    </div>
  </template>
  