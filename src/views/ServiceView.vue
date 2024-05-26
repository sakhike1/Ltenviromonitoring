<template>
    <div class="container mx-auto mt-20 p-6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <!-- Image at the top -->
        <img :src="image6" alt="Top Image" class="w-full object-fit  rounded-lg mb-8 h-[600px]" />

        <!-- Services Section -->
        <div class="space-y-8">
            <div v-for="service in services" :key="service.id"
                class="bg-white p-6 rounded-lg  shadow-lg hover:scale-105 transition-transform duration-300">
                <h2 class="text-xl font-semibold mb-4">{{ service.header }}</h2>
                <h2 class="text-xl font-semibold mb-4">{{ service.header2 }}</h2>
                <ul class="list-disc list-inside">
                    <li v-for="(item, index) in service.items" :key="index" class="mb-2">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
        <BlogViews />
    </div>
</template>

<script>
import BlogViews from '../components/common/BlogViews.vue'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export default {
    components: {
        BlogViews
    },
    name: 'ServicesComponent',
    data() {
        return {
            image6: require('@/assets/nice.jpg'),
            services: [
                {
                    id: 1,
                    header: 'Environmental impact assessment (EIA)',
                    header2: 'LT Enviromonitoring undertakes the required environmental assessment (basic assessment or full EIA assessments) for any listed activity in terms of NEMA. This service may include',
                    items: ['The application processes', 'Public participation process', 'Basic assessment process or the EIA process', 'Environmental management plans', 'Post monitoring (ECOs)',
                        'the appeal process as well the post authorisation monitoring'
                    ],
                },
                {
                    id: 2,
                    header: 'Water use licenses (WUL)',
                    header2: 'We undertake the water use license application process for all the section 21 listed activities in terms of the national water act (act 36 of 1998). ',
                    items: ['Online application process', 'Public participation processes', 'Liasing with the relevant authorities', 'Compiling technical report', 'Post authorisation monitoring', 'Water quality monitoring, lab testing, analysis, interpretation, and report writing',],
                },
                {
                    id: 3,
                    header: 'Atmospheric emissions licenses (AEL)',
                    header2: 'For all your atmospheric emissions we undertake the following process',
                    items: ['Application for AEL', 'Compilation of technical reports', 'Stack monitoring', 'Any other post authorisation monitoring requirements'],
                },
                {
                    id: 4,
                    header: 'Internal and external audits',

                    items: ['We conduct internal and external audits required in terms of the conditions of the environmental authorisations, water use licenses, AELs, etc',],
                },
                {
                    id: 5,
                    header: 'Environmental management systems',
                    header2: 'We are team of Environmental professionals with years of experience in the mining industry where ISO 14001 was being implemented daily. We have the capacity to establish the environmental management system for any company that would like to conform to internal standards for managing their environmental impacts. Once the system is established, we help the client to maintain the systems and ensure it is always adequate, suitable and effective to achieve client’s intended environmental outcome',
                    items: ['Assisting the organisation to be certified in terms of ISO14001:2015 standard', 'Quarterly review of the management system', 'Auditing of the management system'],
                },
                {
                    id: 6,
                    header: 'Waste management.',

                    items: ['We assist virus organisations to comply with norms and standard as well applications for waste management licenses',],
                },
                {
                    id: 7,
                    header: 'Compliance monitoring',
                    header2: 'LT Enviromonitoring provides suitably qualified environmental control officer/s (ECO) to execute, amongst others (and also as per terms of reference), the following duties on site',
                    items: ['Monitor and report performance in line with the relevant framework or approved environmental management plans and environmental licenses; and assist clients with implementation', 'Liaise with relevant government departments and other stakeholders on all environmental issues', 'Ensure compliance of activities with the applicable environmental legislations - Compile audit reports and submit to relevant environmental authorities', 'Report to Environmental Management Committees (EMCs)', 'Keep record of all activities on site, problems identified, transgressions noted and a schedule of tasks undertaken by the ECO', 'Keep records relating to monitoring and auditing on site and make them available for inspection to any relevant competent authority in respect of the development', 'Continually advise clients on all environmental issue'],
                },
                {
                    id: 8,
                    header: 'Dust-fallout monitoring (including PM2.5 and PM10)',

                    items: ['This is the process of checking, observing, or keeping track of dust fallout from any activity that has a potential to emit excessive dust. The standard method we used is in terms of the ASTM D-1739 using the bucket system. The results are calculated and interpreted and compared with the legal requirements of dust fallout in term of the Air Quality Act in order to determine compliance. Procedure followed is as follows: - Bucket handling and preparation - Bucket field collection and bucket stand holder servicing - Weighing filters - Laboratory sampling filters - Calculations and results analysis - Assess the results and produce a dust fallout report',],
                },
                {
                    id: 9,
                    header: 'Groundwater and surface-water monitoring',
                    header2: 'This is the process of checking, observing, or keeping track of the quality of water from any activity that has a potential to pollute water resources. We use the following standards to compare results and determine compliance',
                    items: ['General water standard for effluent quality (NWA) - SANS 241: 2006 for potable water and treated sewerage effluent', '⦁	We sample water for both chemical and bacteriological analysis', 'Sample are tested in the accredited lab', 'All tested parameters/elements are also accredited', 'Interpret the results and compile a monitoring report'],
                },
                {
                    id: 10,
                    header: 'Noise monitoring ',
                    items: ['This is the process of checking, observing, or keeping track of any disturbing noise to the surrounding communities or neighbours; and to control any environmental noise impact caused by client’s activities/services',],
                },
                {
                    id: 11,
                    header: 'Biodiversity monitoring (alien invasive plant eradication)',
                    items: ['The is the process of eradicating alien invasive vegetation to control them from spreading. We identify where areas have been affected by the invasive plants and develop an invasive plant map. We use labour intensive method to eradicate them and/or use environmentally friendly chemicals to eradicate them',],
                },
            ],
        };
    },
};
</script>

<style scoped></style>