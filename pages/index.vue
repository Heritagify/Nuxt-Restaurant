<template>
    <div class="bg-[url(/img/heroBg.png)] bg-cover w-full h-[36.2rem]">
        <Header />
        <div class="border-4 border-white w-[20rem] mx-5 my-40 space-y-4">
            <h1 class="text-[#E9BD8C]">Delicious Cafe</h1>
            <h1 class="text-white text-5xl font-inter">Sweet Treats,</h1>
            <h1 class="text-white text-5xl font-sans">Perfect Eats</h1>

            <div class="flex space-x-5 border-2 border-green-800">
                <button class="rounded-lg px-4 py-2 text-sm bg-[#E9BD8C] text-white">Order Now</button>
                <button
                    class="rounded-lg px-4 py-2 text-sm text-[#E9BD8C] hover:bg-[#E9BD8C] hover:text-white flex items-center gap-2">
                    Learn More
                    <Icon name="mdi:arrow-right" />
                </button>
            </div>
        </div>
    </div>

    <TopProducts />
    <div class="relative w-full h-[16em] py-10">
        <!-- Background Image -->
        <NuxtImg src="/img/first-discount.png" alt="Discount" class="w-full h-full object-cover" />

        <!-- Overlay Content -->
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/40">
            <div class="text-white w-[20rem] text-center p-5">
                <h1 class="text-2xl font-bold">20% off your first order</h1>
                <p class="mt-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur!
                </p>
                <Button variant="tertiary" icon="mdi:arrow-right" class="mt-4">Learn More</Button>
            </div>
        </div>
    </div>



</template>