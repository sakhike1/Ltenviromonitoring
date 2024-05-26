<template>
    <section class="bg-white dark:bg-gray-900">

        <div class="container px-6 py-16 mx-auto text-center">


            <div class="flex justify-center mt-10" data-aos="fade-up" data-aos-duration="3000">
                <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" :src="imageSrc" />
            </div>
        </div>
    </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export default {
    data() {
        return {
            imageSrc: require('@/assets/image.jpg')
        }
    }
}
</script>

<style lang="scss" scoped></style>