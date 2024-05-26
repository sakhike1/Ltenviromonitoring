<template>
    <div>
        <section class="py-20" data-aos="fade-up" data-aos-duration="3000">
            <div class="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
                <div class="text-center max-w-3xl mx-auto space-y-4">
                    <h1 class="text-gray-900 dark:text-white font-semibold text-4xl">
                        What we offer
                    </h1>
                    <p class="text-gray-700 dark:text-gray-300">
                        These are some of the services we offer
                    </p>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 transition-all will-change-transform gap-6 lg:gap-8">
                    <div @mousemove="onMouseMove" @mouseleave="onMouseLeave" :style="cardStyle"
                        class="p-5 sm:p-6 lg:p-8 rounded-3xl border transition-all will-change-transform  border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                        <div
                            class="rounded-xl bg-gray-200 dark:bg-gray-800 p-3 text-gray-900 dark:text-white w-max relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                        <div class="mt-6 space-y-4 relative ">
                            <h2 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Environmental impact assessment (EIA)
                            </h2>

                        </div>
                        <span
                            class="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
                    </div>
                    <div @mousemove="onMouseMove" @mouseleave="onMouseLeave" :style="cardStyle"
                        class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all will-change-transform bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                        <div
                            class="rounded-xl bg-gray-200 dark:bg-gray-800  p-3 text-gray-900 dark:text-white w-max relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                        <div class="mt-6 space-y-4 relative">
                            <h2 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Water use licenses (WUL)

                            </h2>

                        </div>
                        <span
                            class="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
                    </div>
                    <div @mousemove="onMouseMove" @mouseleave="onMouseLeave" :style="cardStyle"
                        class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all will-change-transform bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                        <div
                            class="rounded-xl bg-gray-200 dark:bg-gray-800  p-3 text-gray-900 dark:text-white w-max relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                        <div class="mt-6 space-y-4 relative">
                            <h2 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Atmospheric emissions licenses (AEL)

                            </h2>

                        </div>
                        <span
                            class="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
                    </div>
                    <div @mousemove="onMouseMove" @mouseleave="onMouseLeave" :style="cardStyle"
                        class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all will-change-transform bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                        <div
                            class="rounded-xl bg-gray-200 dark:bg-gray-800  p-3 text-gray-900 dark:text-white w-max relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                        <div class="mt-6 space-y-4 relative">
                            <h2 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Internal and external audits
                            </h2>

                        </div>
                        <span
                            class="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
                    </div>
                    <div @mousemove="onMouseMove" @mouseleave="onMouseLeave" :style="cardStyle"
                        class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all will-change-transform bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                        <div
                            class="rounded-xl bg-gray-200 dark:bg-gray-800  p-3 text-gray-900 dark:text-white w-max relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                        <div class="mt-6 space-y-4 relative">
                            <h2 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Environmental management systems

                            </h2>

                        </div>
                        <span
                            class="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
                    </div>
                    <div @mousemove="onMouseMove" @mouseleave="onMouseLeave" :style="cardStyle"
                        class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all will-change-transform bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                        <div
                            class="rounded-xl bg-gray-200 dark:bg-gray-800  p-3 text-gray-900 dark:text-white w-max relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                        <div class="mt-6 space-y-4 relative">
                            <h2 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Waste management.

                            </h2>

                        </div>
                        <span
                            class="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
                    </div>
                    <div @mousemove="onMouseMove" @mouseleave="onMouseLeave" :style="cardStyle"
                        class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all will-change-transform bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                        <div
                            class="rounded-xl bg-gray-200 dark:bg-gray-800  p-3 text-gray-900 dark:text-white w-max relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                        <div class="mt-6 space-y-4 relative">
                            <h2 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Compliance monitoring
                            </h2>

                        </div>
                        <span
                            class="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
                    </div>
                    <div @mousemove="onMouseMove" @mouseleave="onMouseLeave" :style="cardStyle"
                        class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all will-change-transform bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                        <div
                            class="rounded-xl bg-gray-200 dark:bg-gray-800  p-3 text-gray-900 dark:text-white w-max relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                        <div class="mt-6 space-y-4 relative">
                            <h2 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Dust-fallout monitoring (including PM2.5 and PM10)
                            </h2>

                        </div>
                        <span
                            class="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
                    </div>
                    <div @mousemove="onMouseMove" @mouseleave="onMouseLeave" :style="cardStyle"
                        class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all will-change-transform bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                        <div
                            class="rounded-xl bg-gray-200 dark:bg-gray-800  p-3 text-gray-900 dark:text-white w-max relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                        <div class="mt-6 space-y-4 relative">
                            <h2 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Groundwater and surface-water monitoring
                            </h2>

                        </div>
                        <span
                            class="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full"></span>
                    </div>

                </div>

            </div>
        </section>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function throttle(func, delay) {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

export default {
    name: 'CardTilt',
    setup() {
        const rotate = ref({ x: 0, y: 0 });

        const onMouseMove = throttle((e) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 4;
            const rotateY = (centerX - x) / 4;

            rotate.value = { x: rotateX, y: rotateY };
        }, 100);

        const onMouseLeave = () => {
            rotate.value = { x: 0, y: 0 };
        };

        const cardStyle = computed(() => ({
            transform: `perspective(1000px) rotateX(${rotate.value.x}deg) rotateY(${rotate.value.y}deg) scale3d(1, 1, 1)`,
            transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
        }));

        return {
            onMouseMove,
            onMouseLeave,
            cardStyle,
        };
    },
};
</script>

<style scoped>
.card {
    transition: all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
}
</style>