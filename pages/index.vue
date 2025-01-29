<template>
    <div class="bg-[url(/img/heroBg.png)] bg-cover w-full h-[36.2rem]">
        <Header />
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

    <div class="border border-red-500 mt-14 mb-10">
        <h1 class="text-center text-3xl italicize font-bold my-5">Top Products</h1>

        <div class="">
            <div class="bg-[url(/img/tp-bg.png)] bg-cover w-[11em] h-[14.5em] p-2">
                <img src="/img/peachDanish.svg" alt="" class="w-28 h-28 ml-6">
                <div class="flex justify-between text-white text-sm mt-10">
                    <p>$40</p>
                    <Icon name="mdi:information-outline" />
                </div>
                <div class="flex justify-between text-white text-xs my-2">
                    <h1 class="w-10">Danish Peach</h1>
                    <button class="text-white bg-red-800 h-8 px-2">Add</button>
                </div>
            </div>
        </div>
    </div>
    <!-- <TopProducts/> -->


</template>