<template>
    <div>
        <div class="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
            <div class="max-md:max-w-lg mx-auto">
                <h2 class="text-4xl font-extrabold text-gray-800 mb-10">Environmental specialist</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        class="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img :src="gloves" alt="Blog Post 1" class="w-full h-64 object-cover" />
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold mb-2">Groundwater and surface-water monitoring</h3>
                            <p class="text-sm opacity-75">This is the process of checking, observing, or keeping track
                                of the quality of water from any activity that has a potential to pollute water
                                resources. We use the following standards to compare results and determine compliance:
                            </p>

                        </div>
                    </div>
                    <div
                        class="bg-gradient-to-b from-purple-800 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img :src="plant" alt="Blog Post 2" class="w-full h-64 object-cover" />
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold mb-2">Biodiversity monitoring (alien invasive plant
                                eradication)</h3>
                            <p class="text-sm opacity-75">The is the process of eradicating alien invasive vegetation to
                                control them from spreading</p>

                        </div>
                    </div>
                    <div
                        class="bg-gradient-to-b from-teal-800 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img :src="noise" alt="Blog Post 3" class="w-full h-64 object-fill" />
                        <div class="p-6">
                            <h3 class="text-2xl font-semibold mb-2">Noise monitoring </h3>
                            <p class="text-sm opacity-75">This is the process of checking, observing, or keeping track
                                of any disturbing noise to the surrounding communities or neighbours; and to control any
                                environmental noise impact caused by client’s activities/services</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gloves: require('@/assets/gloves.jpg'),
            plant: require('@/assets/plant.jpg'),
            noise: require('@/assets/noise.jpg'),

        }
    }

}
</script>

<style lang="scss" scoped></style>