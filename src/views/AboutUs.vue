<template>
    <div class="container  mx-auto md:px-6 mt-20" data-aos="fade-up" data-aos-duration="3000">
        <!-- Section: Design Block -->
        <section class="mb-32 mt-20">
            <img :src="image5" class="mb-6 object-cover h-[850px] w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt="image" />



            <h1 class="mt-10 text-3xl font-bold">
                Vision
            </h1>

            <p>To contribute towards the reduction of negative environmental impacts <br>  by enhancing the positive
                impacts.
            </p>

            <h1 class="mt-10 text-3xl font-bold">
                Mission
            </h1>
            <p>
                Through the detailed impact assessments, monitoring and auditing, we keep abreast with <br> the industry’s
                environmental impacts and assist them in managing the impacts and fulfilling heir compliance obligations

            </p>
        </section>
        <!-- Section: Design Block -->
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export default {
    data() {
        return {
            image5: require('@/assets/aboutus.jpg')
        }
    }
}
</script>
