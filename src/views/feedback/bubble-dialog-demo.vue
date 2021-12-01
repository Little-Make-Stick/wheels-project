<template>
    <div class='bubble-dialog-demo-contain'>
        <card cardTitle="静态展示">
            <div class="grid">
                <bubble-dialog direction="top" align="left"
                    title="title1-1"
                ></bubble-dialog>
                <bubble-dialog direction="top" align="center"
                    title="title1-2"
                ></bubble-dialog>
                <bubble-dialog direction="top" align="right"
                    title="title1-3"
                ></bubble-dialog>

                <bubble-dialog direction="right" align="top"
                    title="title2-1"
                ></bubble-dialog>
                <bubble-dialog direction="right" align="center"
                    title="title2-2"
                ></bubble-dialog>
                <bubble-dialog direction="right" align="bottom"
                    title="title2-3"
                ></bubble-dialog>

                <bubble-dialog direction="bottom" align="left"
                    title="title3-1"
                ></bubble-dialog>
                <bubble-dialog direction="bottom" align="center"
                    title="title3-2"
                ></bubble-dialog>
                <bubble-dialog direction="bottom" align="right"
                    title="title3-3"
                ></bubble-dialog>

                <bubble-dialog direction="left" align="top"
                    title="title4-1"
                ></bubble-dialog>
                <bubble-dialog direction="left" align="center"
                    title="title4-2"
                ></bubble-dialog>
                <bubble-dialog direction="left" align="bottom"
                    title="title4-3"
                ></bubble-dialog>
            </div>
        </card>
    </div>
</template>
<script>
    import card from '../../components/card.vue';
    import bubbleDialog from '../../components/bubble-dialog.vue';
    export default {
        data() {
            return {}
        },
        watch: {},
        components: {
            card,
            bubbleDialog,
        },
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss">
    .bubble-dialog-demo-contain {

        .card-component {
            padding: 20px;

            .grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(4, 1fr);
                grid-gap: 15px;

                .bubble-dialog-component {
                    transform: scale(70%);
                    .m-dialog-component {
                        .m-dialog{
                            border-radius: 2px;
                        }
                        .m-dialog-context {
                            .title {
                                color: #fff;
                            }

                            .context {
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>