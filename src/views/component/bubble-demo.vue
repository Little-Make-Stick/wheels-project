<template>
    <div class='bubble-demo-contain'>
        <card cardTitle="上">
            <bubble direction="top">上默认</bubble>
            <bubble direction="top" align="left">
                上左
            </bubble>
            <bubble direction="top" align="center">
                上中
            </bubble>
            <bubble direction="top" align="right">
                上右
            </bubble>
        </card>
        <card cardTitle="右">
            <bubble direction="right">右默认</bubble>
            <bubble direction="right" align="top">
                右上
            </bubble>
            <bubble direction="right" align="center">
                右中
            </bubble>
            <bubble direction="right" align="bottom">
                右下
            </bubble>
        </card>
        <card cardTitle="下">
            <bubble direction="bottom">下默认</bubble>
            <bubble direction="bottom" align="left">
                下左
            </bubble>
            <bubble direction="bottom" align="center">
                下中
            </bubble>
            <bubble direction="bottom" align="right">
                下右
            </bubble>
        </card>
        <card cardTitle="左">
            <bubble direction="left">左默认</bubble>
            <bubble direction="left" align="top">
                左上
            </bubble>
            <bubble direction="left" align="center">
                左中
            </bubble>
            <bubble direction="left" align="bottom">
                左下
            </bubble>
        </card>
    </div>
</template>
<script>
    import card from '../../components/card.vue';
    import bubble from '../../components/bubble.vue'
    export default{
        data(){
            return{}
        },
        components:{
            card,
            bubble,
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style>
</style>