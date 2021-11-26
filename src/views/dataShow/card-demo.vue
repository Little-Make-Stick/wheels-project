<template>
    <div class='card-demo-contain'>
        <card cardTitle="卡片1">
            测试内容测试内容测试内容测试内容
            测试内容测试内容测试内容测试内容
            测试内容测试内容测试内容测试内容
            测试内容测试内容测试内容测试内容
        </card>
        <card cardTitle="卡片1" title-icon="fa fa-bookmark-o" more>
            测试内容测试内容测试内容测试内容
            测试内容测试内容测试内容测试内容
            测试内容测试内容测试内容测试内容
            测试内容测试内容测试内容测试内容
        </card>

        <div class="line">
            <card cardTitle="卡片1">
                测试内容测试内容测试内容测试内容
                测试内容测试内容测试内容测试内容
                测试内容测试内容测试内容测试内容
                测试内容测试内容测试内容测试内容
            </card>
            <card cardTitle="卡片1" title-icon="fa fa-bookmark-o" more>
                测试内容测试内容测试内容测试内容
                测试内容测试内容测试内容测试内容
                测试内容测试内容测试内容测试内容
                测试内容测试内容测试内容测试内容
            </card>
            <card cardTitle="卡片1">
                测试内容测试内容测试内容测试内容
                测试内容测试内容测试内容测试内容
                测试内容测试内容测试内容测试内容
                测试内容测试内容测试内容测试内容
            </card>
        </div>
    </div>
</template>
<script>
    import card from '../../components/card.vue';
    export default{
        data(){
            return{}
        },
        components:{
            card,
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss">
    .line{
        display: flex;
        justify-content: space-between;
        .card-component{
            margin: 5px 8px;
        }
        .card-component:first-child{
            margin-left: 0;
        }
        .card-component:last-child{
            margin-right: 0;
        }
    }
</style>