<template>
    <div>
        <div 
            data-nav-overlay 
            aria-hidden="true" 
            class="fixed bg-gray-800/40 inset-0 z-30 lg:hidden"
            :class="{ 'hidden': !isOpen }"
            @click="closeNavbar"
        ></div>
        <header class="sticky top-0 w-full flex items-center h-16 border-b border-gray-100  z-40 bg-white dark:bg-gray-950">
            <nav class="relative mx-auto lg:max-w-7xl w-full px-4 flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center">
                    <router-link to="/" class="flex items-center">
                      <img 
    class="w-24 h-24 object-contain" 
    :src="require('@/assets/logo3.jpg')" 
    alt="Logo"
    style="filter: contrast(1.3) brightness(1.2);"
/>
                    </router-link>
                </div>

                <!-- Navigation Links -->
                <div 
                    class="absolute top-full left-0 right-0 lg:relative lg:top-0 w-full lg:w-auto bg-white dark:bg-gray-950
                    border-b dark:border-gray-800 lg:border-none py-4 lg:py-0 px-4 lg:px-0
                    transition-all duration-200 ease-in-out lg:transition-none
                    lg:flex lg:translate-y-0 lg:opacity-100 lg:visible"
                    :class="[
                        isOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-4 opacity-0 invisible lg:visible'
                    ]"
                >
                    <ul class="flex flex-col lg:flex-row gap-4 lg:items-center text-gray-700 dark:text-gray-300 lg:w-auto lg:ml-8">
                        <li v-for="(link, index) in navLinks" :key="index">
                            <router-link 
                                :to="link.path"
                                class="relative py-2 block duration-200 ease-in-out hover:text-indigo-600 after:absolute 
                                after:w-full after:left-0 after:bottom-0 after:h-0.5 after:rounded-full after:origin-left 
                                after:ease-in-out after:duration-200 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600"
                            >
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Mobile Menu Button -->
                <button 
                    class="outline-none border-l dark:border-l-gray-800 pl-3 relative py-3 lg:hidden"
                    @click="toggleNavbar"
                    aria-label="toggle navbar"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-6 w-6" 
                        fill="none"
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2"
                            :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
                        />
                    </svg>
                </button>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            navLinks: [
                { path: '/', name: 'Home' },
                { path: '/Service', name: 'Services' },
                { path: '/Contact', name: 'Contact' }
            ]
        }
    },
    methods: {
        toggleNavbar() {
            this.isOpen = !this.isOpen;
            document.body.classList.toggle('overflow-y-auto', !this.isOpen);
        },
        closeNavbar() {
            this.isOpen = false;
            document.body.classList.add('overflow-y-auto');
        }
    }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>