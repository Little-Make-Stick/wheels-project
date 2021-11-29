<template>
    <div class='bubble-confirm-demo-contain'>
        <card cardTitle="静态展示">
            <bubble-confirm direction="top" align="left"></bubble-confirm>
            <bubble-confirm direction="top" align="center"></bubble-confirm>
            <bubble-confirm direction="top" align="right"></bubble-confirm>

            <bubble-confirm direction="right" align="top"></bubble-confirm>
            <bubble-confirm direction="right" align="center"></bubble-confirm>
            <bubble-confirm direction="right" align="bottom"></bubble-confirm>

            <bubble-confirm direction="bottom" align="left"></bubble-confirm>
            <bubble-confirm direction="bottom" align="center"></bubble-confirm>
            <bubble-confirm direction="bottom" align="right"></bubble-confirm>

            <bubble-confirm direction="left" align="top"></bubble-confirm>
            <bubble-confirm direction="left" align="center"></bubble-confirm>
            <bubble-confirm direction="left" align="bottom"></bubble-confirm>
        </card>
    </div>
</template>
<script>
    import card from '../../components/card.vue';
    import bubbleConfirm from '../../components/bubble-confirm.vue';
    export default{
        data(){
            return{}
        },
        watch:{},
        components: {
            card,
            bubbleConfirm,
        },
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style>
</style>