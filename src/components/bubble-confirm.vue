<template>
    <div class="bubble-card-component">
        <div class="bubble-card-content">
            <bubble :direction="direction" :align="align">
                <m-dialog status="confirm" titleIcon="fa fa-info-circle"></m-dialog>
            </bubble>
        </div>
    </div>
</template>
<script>
    import bubble from "./bubble.vue";
    import mDialog from "./m-dialog.vue";
    export default {
        props: {
            // [top, right, bottom, left]
            direction: { type: String, default: "right" },
            // [left, right, top, bottom, center]
            align: { type: String, default: "center" },
        },
        data() {
            return {};
        },
        components: {
            bubble,
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    };
</script>
<style lang="scss">
    .bubble-card-component {
        .bubble-card-content {
            .bubble-component {
                margin: 0;
                filter: drop-shadow(0 0 3px #ccc);

                .bubble-content {
                    padding: 0;

                    .m-dialog-component {
                        .m-dialog-shade{
                            position: relative;
                            width: 300px;
                            display: inline-block;
                            background-color: transparent;
                        }
                    }
                }

                .bubble-tail {
                    border: 5px solid #3c3d42;

                    &.direction-top {
                        right: 18px;
                        top: 0;
                        border-top: 0;
                        border-left-color: transparent;
                        border-right-color: transparent;

                        &.align-center {
                            right: calc(50% - 2.5px);
                        }

                        &.align-left {
                            right: calc(100% - 25px);
                        }
                    }

                    &.direction-right {
                        right: 0px;
                        top: 20px;
                        border-right: 0;
                        border-top-color: transparent;
                        border-bottom-color: transparent;

                        &.align-center {
                            top: calc(50% - 4.5px);
                        }

                        &.align-bottom {
                            top: calc(100% - 24px);
                        }
                    }

                    &.direction-bottom {
                        right: 18px;
                        bottom: 0;
                        border-bottom: 0;
                        border-left-color: transparent;
                        border-right-color: transparent;

                        &.align-center {
                            right: calc(50% - 2.5px);
                        }

                        &.align-left {
                            right: calc(100% - 25px);
                        }
                    }

                    &.direction-left {
                        left: 0px;
                        top: 20px;
                        border-left: 0;
                        border-top-color: transparent;
                        border-bottom-color: transparent;

                        &.align-center {
                            top: calc(50% - 5px);
                        }

                        &.align-bottom {
                            top: calc(100% - 24px);
                        }
                    }
                }
            }
        }
    }
</style>