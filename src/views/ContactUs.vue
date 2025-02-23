<template>
  <div class="container my-24 px-6 mx-auto">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800" data-aos="fade-up" data-aos-duration="3000">
      <div class="relative overflow-hidden bg-no-repeat bg-cover"
        style="background-position: 50%; background-image: url('https://mdbootstrap.com/img/new/textures/full/284.jpg'); height: 300px;">
      </div>
      <div class="container text-gray-800 px-4 md:px-12">
        <div class="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6"
          style="margin-top: -100px; background: hsla(0, 0%, 100%, 0.8); backdrop-filter: blur(30px);">
          <div class="flex flex-wrap">
            <div class="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
              <div class="flex flex-wrap">
                <!-- Contact Block -->
                <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset"
                          class="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                            d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="grow ml-6">
                      <p class="font-bold mb-1">email us or call us</p>
                      <p class="text-gray-500">service@enviroassess.co.za</p>
                      <p class="text-gray-500">081434 2904 or 069367 1343</p>
                    </div>
                  </div>
                </div>
                <!-- Sales Block -->
                <div class="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper"
                          class="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="currentColor"
                            d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="grow ml-6">
                      <p class="font-bold mb-1">email us </p>
                      <p class="text-gray-500">service@enviroassess.co.za</p>

                    </div>
                  </div>
                </div>
                <!-- Press Block -->

                <!-- Bug Report Block -->

                <!-- End Contact Blocks -->
              </div>
            </div>
          </div>
        </div>
      </div>
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
      // Remove unused image data
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