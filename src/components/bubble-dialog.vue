<template>
    <div class="bubble-dialog-component">
        <div class="bubble-dialog-content">
            <bubble :direction="direction" :align="align">
                <m-dialog ref="dialog" status="confirm" 
                    :titleIcon="titleIcon"
                    :title="title"
                    :context="context"
                    :confirm="confirm"
                    :cancel="cancel"
                    >
                </m-dialog>
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
            // [confirm, normal, custom]
            titleIcon: { type: String,default: 'fa fa-info-circle'},
            title: { type: String, default: 'title' },
            context: { type: String, default: 'context' },
            confirm: {
                type: Object,
                default: function () {
                    return {
                        title: '确认',
                        handleFunct: (e) => {
                            alert('确认');
                            this.closeDialog(e);
                        }
                    }
                }
            },
            cancel: {
                type: Object,
                default: function () {
                    return {
                        title: '取消',
                        handleFunct: (e) => {
                            alert('取消');
                            this.closeDialog(e);
                        }
                    }
                }
            },
        },
        data() {
            return {};
        },
        components: {
            bubble,
            mDialog,
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {
            closeDialog(e){
                let dialog = e.target.parentNode.parentNode.parentNode.parentNode;
                let dialogComp = dialog.parentNode.parentNode.parentNode;
                let bubbleDialog = dialogComp.parentNode.parentNode.parentNode;
                bubbleDialog.style.display="none";
            }
        },
    };
</script>
<style lang="scss">
    .bubble-dialog-component {
        .bubble-dialog-content {
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