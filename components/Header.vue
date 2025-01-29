<template>
    <NuxtLayout>
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
            <Button icon="mdi:login">Login</Button>
            <Button icon="mdi:account-plus">SignUp</Button>
        </div>
        </header>
    </NuxtLayout>
</template>