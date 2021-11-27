<template>
    <div class='label-demo-contain'>
        <card cardTitle="不同填充">
            <m-label ></m-label>
            <m-label plain="full"></m-label>
            <m-label plain="border"></m-label>
        </card>
        <card cardTitle="不同边框">
            <m-label border="solid"></m-label>
            <m-label border="dashed"></m-label>
        </card>
        <card cardTitle="带有icon">
            <m-label icon=""></m-label>
            <m-label closed></m-label>
            <m-label closed :closeEvent="closeEvent"></m-label>
        </card>
        <card cardTitle="有颜色">
            <m-label bgColor="rgb(254,240,240)" textColor="rgb(169,68,66)"></m-label>
        </card>
    </div>
</template>
<script>
    import card from '../../components/card.vue';
    import mLabel from '../../components/m-label.vue';
    export default{
        data(){
            return{}
        },
        components:{
            card,
            mLabel
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{
            closeEvent(){
                alert('closeEvent')
            }
        },
    }
</script>
<style>
    .label-demo-contain{

    }
</style>