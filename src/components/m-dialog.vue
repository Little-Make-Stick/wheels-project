<template>
    <div class='m-dialog-component'>
        <div class="m-dialog-content" :class="status">
            <div class="m-dialog-shade">
                <div class="m-dialog">
                    <div v-if="status == 'custom'" class="custom">
                        <slot></slot>
                    </div>
                    <div v-else class="m-dialog-info">
                        <div class="title-icon">
                            <i :class="titleIcon"></i>
                        </div>
                        <div class="m-dialog-context">
                            <div class="title">{{title}}</div>
                            <div class="context">{{context}}</div>
                        </div>
                    </div>

                    <div class="confirm-m-dialog-options" v-if="status == 'confirm'">
                        <m-button class="m-dialog-confirm" status="info" @click.native="confirm.handleFunct">
                            {{confirm.title}}</m-button>
                        <m-button class="m-dialog-cancel" status="primary" @click.native="cancel.handleFunct">
                            {{cancel.title}}</m-button>
                    </div>
                    <div class="normal-m-dialog-options" v-if="status == 'normal'">
                        <m-button class="m-dialog-close" status="danger" @click.native="close.handleFunct">{{close.title}}
                        </m-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import mButton from './m-button.vue'
    export default {
        props: {
            // [confirm, normal, custom]
            status: { type: String, default: 'normal' },
            titleIcon: { type: String },
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
            close: {
                type: Object,
                default: function () {
                    return {
                        title: '关闭',
                        handleFunct: (e) => {
                            alert('关闭');
                            this.closeDialog(e);
                        }
                    }
                }
            },
        },
        data() {
            return {}
        },
        components: {
            mButton
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {
            closeDialog(e) {
                let dialog = e.target.parentNode.parentNode.parentNode.parentNode;
                dialog.style.display = 'none';
            }
        },
    }
</script>
<style lang="scss">
    .m-dialog-component {
        .m-dialog-content {
            .m-dialog-shade {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(213, 213, 214, 0.1);

                .m-dialog {
                    width: 300px;
                    padding: 25px;
                    border-radius: 8px;
                    background-color: rgb(46, 47, 51);


                    .m-dialog-info {
                        display: flex;
                        font-size: 22px;
                        line-height: 30px;

                        .title-icon {
                            margin-right: 10px;
                            font-size: 22px;
                            color: rgb(255, 149, 79);
                        }

                        .m-dialog-context {
                            .title {
                                font-size: 22px;
                            }

                            .context {
                                font-size: 18px;
                            }
                        }
                    }



                    .confirm-m-dialog-options {
                        display: flex;
                        justify-content: flex-end;
                        margin-top: 10px;

                        .m-dialog-confirm {
                            /* background-color: rgb(69,150,255); */
                        }

                        .m-dialog-cancel {
                            /* background-color: rgb(69,68,72); */
                        }
                    }

                    .normal-m-dialog-options {
                        display: flex;
                        justify-content: flex-end;
                        margin-top: 10px;

                        .m-dialog-close {
                            /* background-color: rgb(229,93,93); */
                        }

                    }
                }
            }
        }
    }

    .m-dialog-component {
        .m-button-component {
            padding: 5px;

            .m-button {
                padding: 5px 8px;
            }

            &:last-child {
                padding-right: 0;
            }

            &:first-child {
                padding-left: 0;
            }
        }
    }
</style>