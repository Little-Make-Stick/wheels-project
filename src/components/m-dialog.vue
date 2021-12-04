<template>
    <div class='m-dialog-component'>
        <div class="m-dialog-content" :class="status">
            <div class="m-dialog-shade">
                <div class="m-dialog">
                    <div v-if="status == 'custom'" class="custom">
                        <slot></slot>
                    </div>
                    <div v-else class="m-dialog-info">
                        <div class="title-icon" :class="'status-'+status">
                            <i :class="_titleIcon"></i>
                        </div>
                        <div class="m-dialog-context">
                            <div class="title">{{title}}</div>
                            <div class="context">{{context}}</div>
                        </div>
                        <div class="close-icon" v-if="isCloseIcon" @click="titleCloseDialog">
                            <i class="fa fa-times"></i>
                        </div>
                    </div>

                    <div class="confirm-m-dialog-options" v-if="status != 'normal' && status != 'custom' && isConfirmOptions">
                        <m-button class="m-dialog-confirm" status="info" @click.native="confirm.handleFunct">
                            {{confirm.title}}</m-button>
                        <m-button class="m-dialog-cancel" status="primary" @click.native="cancel.handleFunct">
                            {{cancel.title}}</m-button>
                    </div>
                    <div class="normal-m-dialog-options" v-if="status != 'confirm' && status != 'custom'  && isCloseOptions">
                        <m-button class="m-dialog-close" status="danger" @click.native="close.handleFunct">
                            {{close.title}}
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
            // [confirm, normal, custom, info, primary, succeed, warn, danger]
            status: { type: String, default: 'normal' },
            titleIcon: { type: String },
            title: { type: String, default: 'title' },
            isCloseIcon: { type: Boolean, default: false },
            context: { type: String, default: 'context' },
            isConfirmOptions: { type: Boolean, default: true },
            isCloseOptions: { type: Boolean, default: true },
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
            closeHandler: {
                type: Function
            }
        },
        data() {
            return {}
        },
        components: {
            mButton
        },
        watch: {},
        computed: {
            _titleIcon() {
                if (this.titleIcon) return this.titleIcon;
                else {
                    switch (this.status) {
                        case 'info':
                            return 'fa fa-info-circle';
                            break;
                        case 'succeed':
                            return 'fa fa-check-circle';
                            break;
                        case 'warn':
                            return 'fa fa-exclamation-circle';
                            break;
                        case 'danger':
                            return 'fa fa-times-circle';
                            break;
                        default:
                            return 0;
                            break;
                    }
                }
            }
        },
        created() { },
        mounted() { },
        methods: {
            closeDialog(e) {
                this.$el.style.display = 'none';
            },
            titleCloseDialog(e){
                this.$el.style.display = 'none';
                if(this.closeHandler) this.closeHandler();
            }
        },
    }
</script>
<style lang="scss">
    $color:(
        'primary': rgb(46, 47, 51),
        'info': rgb(69, 150, 255),
        'succeed': rgb(87, 189, 124),
        'warn': rgb(255, 149, 79),
        'danger': rgb(229, 93, 93),
    );
    @each $key,$val in $color{
        .title-icon.status-#{$key}{
            color: $val;
        }
    };
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
                        justify-content: space-between;
                        font-size: 22px;
                        line-height: 30px;

                        .title-icon {
                            margin-right: 10px;
                            font-size: 22px;
                            
                        }

                        .m-dialog-context {
                            flex: 1;
                            text-align: left;
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