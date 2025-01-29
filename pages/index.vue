<template>
    <div class="bg-[url(/img/heroBg.png)] bg-cover w-full h-[36.2rem]">
        <header class="flex justify-between py-3 px-20">
            <!-- LOGO -->
            <img src="/img/logo.svg" alt="" class="w-14 h-14">
            <!-- NavItems -->
            <nav class="flex items-center space-x-4 text-sm">
                <a href="/" class="text-[#E9BD8C]">
                    <Icon name="mdi:home" />
                    Home</a>
                <a href="/" class="p-2 text-white rounded-lg hover:bg-[#E9BD8C]">
                    <Icon name="mdi:food" />
                    Menu</a>
                <a href="/contact" class="p-2 text-white rounded-lg hover:bg-[#E9BD8C] ">
                    <Icon name="mdi:phone" />
                    Contact Us</a>
                <a href="/about" class="p-2 text-white rounded-lg hover:bg-[#E9BD8C] ">
                    <Icon name="mdi:cart" />
                    Order Online</a>
                <a href="/about" class="p-2 text-white rounded-lg hover:bg-[#E9BD8C] ">
                    <Icon name="mdi:information-outline" />
                    About</a>
            </nav>
            <div class="flex items-center space-x-4">
                <button class="flex items-center gap-2 rounded-full p-2 px-4 text-sm bg-[#E9BD8C] text-white">
                    <Icon name="mdi:login" />
                    Login</button>
                <button class="flex items-center gap-2 rounded-full p-2 px-4 bg-white text-sm hover:bg-[#E9BD8C]">
                    <Icon name="mdi:account-plus" />
                    Sign Up</button>
            </div>
        </header>
        <div class="border-4 border-white w-[20rem] mx-5 my-40 space-y-4">
            <h1 class="text-[#E9BD8C]">Delicious Cafe</h1>
            <h1 class="text-white text-5xl font-inter">Sweet Treats,</h1>
            <h1 class="text-white text-5xl font-sans">Perfect Eats</h1>

            <div class="flex space-x-5 border-2 border-green-800">
                <button class="rounded-lg px-4 py-2 text-sm bg-[#E9BD8C] text-white">Order Now</button>
                <button class="rounded-lg px-4 py-2 text-sm text-[#E9BD8C] hover:bg-[#E9BD8C] hover:text-white flex items-center gap-2">
                    Learn More
                <Icon name="mdi:arrow-right" />
                </button>
            </div>
        </div>
    </div>

    
</template>