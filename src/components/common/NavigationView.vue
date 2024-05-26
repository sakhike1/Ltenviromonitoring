<template>
    <div>
        <div data-nav-overlay aria-hidden="true" class="fixed bg-gray-800/40 inset-0 z-30 hidden lg:hidden"></div>
        <header class="sticky top-0 w-full flex items-center h-20  dark:border-b-gray-900 z-40   ">
            <nav
                class="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                <div class="flex items-center min-w-max">
                    <router-link to="/" class="flex items-center pr-4">
                        <img class="imgbox " :src="require('@/assets/200.png')" alt="Logo" />

                    </router-link>
                </div>

                <div data-navbar
                    class="absolute top-full  translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b  dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6">
                    <ul
                        class="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
                        <li>
                            <router-link to="/"
                                class="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/Portfolio"
                                class="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Portfolio</router-link>
                        </li>
                        <li>
                            <router-link to="/Service"
                                class="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Services</router-link>
                        </li>
                        <li>
                            <router-link to="/AboutUs"
                                class="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">About
                                us</router-link>
                        </li>
                        <li>
                            <router-link to="/Contact"
                                class="relative py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600">Contact</router-link>
                        </li>
                    </ul>
                    <div class="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
                        <router-link to="/Contact"
                            class="relative flex justify-center px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-gray-100 dark:before:bg-gray-900 text-indigo-600 dark:text-white hover:before:scale-105">
                            <span class="relative">Book a call</span>
                        </router-link>
                    </div>
                </div>
                <div class="flex items-center lg:hidden">
                    <button data-toggle-navbar data-is-open="false" aria-label="toggle navbar"
                        class="outline-none border-l  dark:border-l-gray-800 pl-3 relative py-3">
                        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>

export default {
    mounted() {
        const btnHumb = document.querySelector("[data-toggle-navbar]");
        const navbar = document.querySelector("[data-navbar]");
        const overlay = document.querySelector("[data-nav-overlay]");

        if (btnHumb && navbar && overlay) {
            const toggleBtnAttr = () => {
                const isOpen = btnHumb.getAttribute("data-is-open");
                btnHumb.setAttribute("data-is-open", isOpen === "true" ? "false" : "true");

                if (isOpen === "false") {
                    document.body.classList.add("overflow-y-auto");
                    overlay.classList.add("hidden");
                    overlay.setAttribute("aria-hidden", "true");
                } else {
                    document.body.classList.remove("overflow-y-auto");
                    overlay.classList.remove("hidden");
                    overlay.setAttribute("aria-hidden", "false");
                }
            };

            btnHumb.addEventListener("click", () => {
                navbar.classList.toggle("invisible");
                navbar.classList.toggle("opacity-0");
                navbar.classList.toggle("translate-y-10");
                toggleBtnAttr();
            });

            overlay.addEventListener("click", () => {
                navbar.classList.add("invisible");
                navbar.classList.add("opacity-0");
                navbar.classList.add("translate-y-10");
                toggleBtnAttr();
            });
        }
    }
};
</script>

<style scoped>
button[data-toggle-navbar][data-is-open="true"] #line-1 {
    transform: rotate(45deg) translateY(.324rem);
}

button[data-toggle-navbar][data-is-open="true"] #line-2 {
    transform: rotate(-45deg) translateY(-0.324rem);
}

.imgbox {
    width: 150px;
    height: auto;
    object-fit: fill;
}
</style>