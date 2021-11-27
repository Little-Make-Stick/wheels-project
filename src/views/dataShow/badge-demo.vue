<template>
    <div class='badge-demo-contain'>
        <card cardTitle="普通徽章">
            <badge></badge>
            <badge badge="0"></badge>
            <badge badge="1"></badge>
            <badge badge="2"></badge>
            <badge badge="3"></badge>
            <badge badge="abc"></badge>
            <badge badge="99"></badge>
            <badge badge="999"></badge>
        </card>
        <card cardTitle="不同填充">
            <badge badge="99" plain="full"></badge>
            <badge badge="999" plain="border"></badge>
        </card>
        <card cardTitle="不同颜色">
            <badge></badge>
            <badge badge="0"></badge>
            <badge badge="1"></badge>
            <badge badge="2"></badge>
            <badge badge="3"></badge>
            <badge badge="abc"></badge>
            <badge badge="99"></badge>
            <badge badge="999"></badge>
        </card>
    </div>
</template>
<script>
    import card from '../../components/card.vue';
    import badge from '../../components/badge.vue';
    export default{
        data(){
            return{}
        },
        components:{
            card,
            badge
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style>
    .badge-demo-contain{

    }
</style>