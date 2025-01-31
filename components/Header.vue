<template>
    <NuxtLayout>

        <!-- For larger screen -->
        <header class="hidden md:flex justify-between py-3 px-20">
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
            <Button icon="mdi:login">Login</Button>
            <Button icon="mdi:account-plus">SignUp</Button>
        </div>
        </header>



<!--  -->
        <header class="flex flex-col md:hidden py-3 px-4 md:px-20">
            <!-- Logo and Hamburger Row -->
            <div class="flex justify-between items-center w-full">
                <img src="/img/logo.svg" alt="" class="w-16 h-16 md:w-14 md:h-14">
                <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
                    <Icon name="mdi:menu" class="text-white text-2xl"/>
                </button>
            </div>
 
            <!-- NavItems and Auth Buttons -->
            <div :class="[isMenuOpen ? 'block' : 'hidden md:flex', 'w-full']">
                <nav class="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 md:text-sm">
                    <a href="/" class="text-[#E9BD8C] w-full md:w-auto flex items-center gap-2 p-2">
                        <Icon name="mdi:home" />
                        Home
                    </a>
                    <a href="/" class="w-full md:w-auto p-2 text-white rounded-lg hover:bg-[#E9BD8C] flex items-center gap-2">
                        <Icon name="mdi:food" />
                        Menu
                    </a>
                    <a href="/contact" class="w-full md:w-auto p-2 text-white rounded-lg hover:bg-[#E9BD8C] flex items-center gap-2">
                        <Icon name="mdi:phone" />
                        Contact Us
                    </a>
                    <a href="/about" class="w-full md:w-auto p-2 text-white rounded-lg hover:bg-[#E9BD8C] flex items-center gap-2">
                        <Icon name="mdi:cart" />
                        Order Online
                    </a>
                    <a href="/about" class="w-full md:w-auto p-2 text-white rounded-lg hover:bg-[#E9BD8C] flex items-center gap-2">
                        <Icon name="mdi:information-outline" />
                        About
                    </a>
 
                    <!-- Auth Buttons moved inside nav for mobile -->
                    <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0 mx-16 md:mx-0">
                        <Button icon="mdi:login" class="w-full md:w-auto">Login</Button>
                        <Button icon="mdi:account-plus" class="w-full md:w-auto">SignUp</Button>
                    </div>
                </nav>
            </div>
        </header>
    </NuxtLayout>
 </template>
 
 <script setup>
 const isMenuOpen = ref(false)
 </script>