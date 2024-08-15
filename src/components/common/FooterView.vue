<template>
    <div>
        <footer class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <div class="md:flex md:-mx-3 md:items-center md:justify-between">



                </div>



                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <router-link to="/Portfolio"
                                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Portfolio
                            </router-link>
                            <router-link to="/contact"
                                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Contact
                            </router-link>
                            <router-link to="/Service"
                                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Services</router-link>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-gray-800 dark:text-white">ltenviromonitoring services</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <router-link to="/Service"
                                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Services</router-link>
                            <router-link to="/AboutUs"
                                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About
                                us
                            </router-link>
                            <router-link to="/Portfolio"
                                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">projects
                            </router-link>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-gray-800 dark:text-white">Services</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <router-link to="/Service"
                                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Services</router-link>


                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-gray-800 dark:text-white">Contact Us</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <router-link to="/contact"
                                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">0814342904
                            </router-link>
                            <router-link to="/contact"
                                class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Tebogo@enviroassess.co.za</router-link>
                        </div>
                    </div>
                </div>

                <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700">

                <div class="flex flex-col items-center justify-between sm:flex-row">
                    <router-link to="/contact">

                    </router-link>

                    <p class="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2021. All Rights
                        Reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.imgbox {

    border-radius: 5px;
    width: 150px;
    height: 150px;
    display: table-cell;
    object-fit: cover;
}
</style>