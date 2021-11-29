<template>
    <div class='bubble-card-demo-contain'>
        <card cardTitle="静态展示">
            <div class="grid">
                <bubble-card cardTitle="确定要关" direction="top" align="left">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="top" align="center">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="top" align="right">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="right" align="top">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="right" align="center">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="right" align="bottom">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="bottom" align="left">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="bottom" align="center">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="bottom" align="right">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="left" align="top">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="left" align="center">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
                <bubble-card cardTitle="确定要关" direction="left" align="bottom">
                    提示内容提示内容提示内容提示内容
                    提示内容提示内容提示内容提示内容
                </bubble-card>
            </div>
        </card>
    </div>
</template>
<script>
    import card from '../../components/card.vue';
    import bubbleCard from '../../components/bubble-card.vue';
    export default {
        data() {
            return {}
        },
        components: {
            card,
            bubbleCard,
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss">
    .bubble-card-demo-contain{
        .card-component{
            .grid{
                display: grid;
                grid-template-columns: repeat(3,1fr);
                grid-template-rows: repeat(4,1fr);
                grid-gap: 25px;
            }
        }
    }
</style>