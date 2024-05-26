<template>
    <div>
        <section class="py-24">
            <div class="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div
                    class="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
                    <div class="absolute right-0 top-0 h-full w-full flex justify-end">
                        <div class="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                            <span class="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45"></span>
                            <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45"></span>
                            <span
                                class="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45"></span>
                        </div>
                    </div>

                    <div class="absolute left-0 bottom-0 h-full w-full flex items-end">
                        <div class="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                            <span class="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45"></span>
                            <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45"></span>
                            <span
                                class="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45"></span>
                        </div>
                    </div>
                    <div class="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
                        <h1
                            class="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-950 dark:text-white">
                            Promoting conservation efforts <span
                                class="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">
                                and Strategic
                            </span> environmental education
                        </h1>
                        <p class="text-gray-700 dark:text-gray-300">
                            raising awareness about the importance of protecting our planet, encouraging communities to
                            adopt eco-friendly lifestyles.
                        </p>
                        <div class="mx-auto max-w-md sm:max-w-xl flex justify-center">
                            <router-link to="/Contact" type="button"
                                class="inline-flex mt-5 h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-gradient px-6 font-medium text-gray-100 transition-colors">Get
                                in touch
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

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