<template>
    <div class="container mt-20 mx-auto p-6" data-aos="fade-up" data-aos-duration="3000">
        <!-- Image at the top -->
        <img :src="image6" alt="Top Image" class="w-full  rounded-lg mb-8 object-cover h-[600px]" />
        <div class="space-y-8">
            <h1 class="space-y-8 font-bold">Directors Experience.</h1>
            <p>The Director of LT Enviromonitoring has a national diploma in environmental management,
                hons BSC in
                environmental monitoring and modelling. She has over 18 years of experience in environmental sciences
                field.
                She started her professional job as an environmental intern at the Provincial Department of
                environmental
                Affairs and late appointed as an environmental officer and senior environmental officer.
                She worked for various consulting firms such as AGE (Africa Geoenvironmental Services,) DIGES, Mokwale,
                Kgaothabo and many other small consulting firms. She joined the national department of Environmental
                Affairs
                as an Assistant Director for 5 years still working with the EIA reviews, regulations, and
                authorisations.
                She left the public service to join the mining sector and worked for 6 years with her duties still
                mainly
                focused on the EIAS and many others. The Director is currently registered as a professional
                environmental
                assessment practitioner recognised by EAPASA with registration no. 2019/1135 and works as an independent
                environmental assessment practitioner in Johannesburg south, East and west. Below is the list of some of
                the
                EIA successfully worked on.
            </p>
        </div>
        <!-- Services Section -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 m-20  ">
            <div v-for="service in services" :key="service.id"
                class="bg-gradient-to-b from-gray-900 to-gray-600  p-6 rounded-lg shadow-lg space-y-8">
                <h2 class="text-xl text-white font-semibold mb-4">{{ service.header }}</h2>
                <ul class="list-disc text-white list-inside">
                    <li v-for="(item, index) in service.items" :key="index" class="mb-2">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export default {
    name: 'ServicesComponent',
    data() {
        return {
            image6: require('@/assets/clean.jpg'),
            services: [
                {
                    id: 1,
                    header: 'EIA Reports completed in terms of EIA regulations 2006',
                    items: ['EIA Report and EMP', 'EIA Report and EMP', 'EIA Report and EMP', 'Basic Assessment Report', 'Basic Assessment Report', 'EIA Report ',



                        'Basic assessment report ', 'Scoping, EIA Report and EMP', 'Scoping, EIA Report and EMP', 'Scoping, EIA Report and EMP', 'EMPr', 'Basic assessment report and EMP', 'Basic assessment report and EMP', 'Basic assessment report and EMP', 'Scoping, EIA Report and EMP ', 'Basic assessment report and EMP', 'EMP', 'Basic Assessment report and EMP', 'Environmental screening report and EMP', 'Basic assessment process (EA)', 'Section 24G application', 'Ecological Impact Assessment ', 'Section 24G application', 'Basic assessment process (EA)', 'Basic assessment process (EA)', 'Scoping, EIA and EMPr', 'Specialised report  ',
                    ],
                },
                {
                    id: 2,
                    header: 'Project name',
                    items: ['Gaseloane demarcation of residential development', 'Security village at Letabasdrift', 'Fertilizer plant in Phalaborwa', 'Mokopane cemetery', 'Residential development in Polokwane', 'Industrial development in Polokwane', 'Upgrading of gravel road from Mamaolo to Tooseng - Limpopo', 'Development of piggery and poultry in Dopeni- Limpopo', 'Development of a filling station in Shayandima, Limpopo', 'Demarcation of residential ervens at Dresden – Limpopo', 'Developed and EMP for the entire Vhembe District Municipality, Limpopo', 'Road upgrade from Balmoral to Ogies – Mpumalanga', 'Development of a new school at Mamitwa, Limpopo', 'Bulk water Supply in Bushbuckridge, Limpopo', 'Demarcation of 400 residential ervens in Ga-Lekgothoane, Limpopo', 'Armersfort bulk water supply, Mpumalanga', 'Construction of VIP toilets, Mpumalanga', 'Construction of 60km road from Litchetenburg to Deelpan, Northwest', 'Waterdal agricultural Holding, Sebokeng, Gauteng', 'Development of a ferrous and nonferrous metal foundry, Brakpan, Gauteng', 'Development of a sheet metal business in Sebokeng, Gauteng ',
                        'Development of renewable energy projects, Western Cape', 'Refurbishing of a wastewater treatment facility in Malelane, Mpumalanga', 'Development of residential area, Zuurfontein, Vanderbiljpark, Gauteng', 'Development of a filling station on farm Alewynpoort, Gauteng', 'Development of a township in Emfuleni Municipality, Gauteng', 'Development of a rehabilitation and implementation plan',],
                },
                {
                    id: 3,
                    header: 'Year',
                    items: ['2008', '2008', '2008', '2008', '2008', '2008', '2008', '2008', '2008', '2008', '2009', '2009', '2009', '2009', '2009', '2009', '2009', '2015', '2016', '2016', '2016', '2017', '2018', '2019', '2022', '2023',],
                },

            ],
        };
    },
};
</script>

<style scoped></style>