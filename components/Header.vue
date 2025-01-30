<template>
    <NuxtLayout>
        <header class="relative flex flex-col md:flex-row justify-between items-center py-3 px-4 md:px-20">
            <!-- LOGO -->
            <img src="/img/logo.svg" alt="" class="w-14 h-14">

            <!-- Mobile Menu Button -->
            <button @click="isMenuOpen = !isMenuOpen" class="absolute right-4 top-4 md:hidden">
                <Icon name="mdi:menu" class="text-white text-2xl"/>
            </button>

            <!-- NavItems -->
            <nav :class="[
                'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-sm',
                'w-full md:w-auto',
                'mt-4 md:mt-0',
                isMenuOpen ? 'block' : 'hidden md:flex'
            ]">
                <a href="/" class="text-[#E9BD8C] flex items-center gap-2">
                    <Icon name="mdi:home" />
                    Home
                </a>
                <a href="/" class="p-2 text-white rounded-lg hover:bg-[#E9BD8C] flex items-center gap-2">
                    <Icon name="mdi:food" />
                    Menu
                </a>
                <a href="/contact" class="p-2 text-white rounded-lg hover:bg-[#E9BD8C] flex items-center gap-2">
                    <Icon name="mdi:phone" />
                    Contact Us
                </a>
                <a href="/about" class="p-2 text-white rounded-lg hover:bg-[#E9BD8C] flex items-center gap-2">
                    <Icon name="mdi:cart" />
                    Order Online
                </a>
                <a href="/about" class="p-2 text-white rounded-lg hover:bg-[#E9BD8C] flex items-center gap-2">
                    <Icon name="mdi:information-outline" />
                    About
                </a>
            </nav>

            <!-- Auth Buttons -->
            <div class="flex items-center space-x-4 mt-4 md:mt-0">
                <Button icon="mdi:login">Login</Button>
                <Button icon="mdi:account-plus">SignUp</Button>
            </div>
        </header>
    </NuxtLayout>
</template>

<script setup>
const isMenuOpen = ref(false)
</script>