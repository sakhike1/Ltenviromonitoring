<template>
    <div class="bg-green-800 text-white w-full font-[sans-serif]">
        <div class="grid md:grid-cols-2 gap-4 items-center md:max-h-[475px] overflow-hidden">
            <div class="relative w-full h-full">
                <img :src="image2" class="w-full h-full object-cover shrink-0" />
                <span class="w-full h-full absolute inset-0 bg-blue-300 opacity-50"></span>
            </div>
            <div class="p-6 max-w-xl mx-auto">

                <div class="mt-6">
                    <p class="text-sm text-gray-300">Addressing environmental needs is crucial for enhancing the Earth's
                        sustainability and ensuring a healthy future for all its inhabitants</p>
                    <p class="mt-2 text-sm text-gray-300">
                        Central to this effort is the preservation and restoration of natural habitats, which play a
                        vital role in maintaining biodiversity and ecological balance. Sustainable practices such as
                        reforestation</p>
                </div>
                <div class="flex">
                    <router-link to="/Contact" type="button"
                        class="inline-flex mt-5 h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-gradient px-6 font-medium text-gray-100 transition-colors">
                        Contact us
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image2: require('@/assets/image2.jpg'),
        }
    }
}
</script>

<style scoped>
@keyframes background-shine {
    0% {
        background-position: 200% 0;
    }

    100% {
        background-position: -200% 0;
    }
}

.animate-background-shine {
    animation: background-shine 3s infinite linear;
}

.bg-gradient {
    background: linear-gradient(110deg, #000103 45%, #1e2631 55%, #000103);
    background-size: 200% 100%;
}
</style>