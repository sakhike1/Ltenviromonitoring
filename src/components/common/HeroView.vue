<template>
    <div>
        <div class="bg-green-800 font-[sans-serif] text-white p-6 mt-20">
            <div class="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto" data-aos="fade-right"
                data-aos-duration="3000">
                <div class="md:h-[400px]">
                    <img :src="HeroImage" class="w-full rounded-md h-full object-contain" />
                </div>
                <div class="max-md:text-center">

                    <p class="mt-6 text-sm">We strive for contribution in the reduction of negative environmental
                        impacts and enhance the postive impacts</p>
                    <router-link to="/Contact" type="button"
                        class="inline-flex mt-5 h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-gradient px-6 font-medium text-gray-100 transition-colors">Contact
                        us </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export default {
    data() {
        return {
            HeroImage: require('@/assets/water1.jpg')
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