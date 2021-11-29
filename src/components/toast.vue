<template>
    <!-- https://blog.csdn.net/weixin_45977625/article/details/108805389 -->
    <!-- https://blog.csdn.net/weixin_44872995/article/details/100882048 -->
    <div v-if="isOpen" :key="timer" class='toast-component' :class="{'isShade':shade}">
        <div ref="toast" class="toast-content">
            <div class="toast-shade" :class="classObj">
                <div class="toast">
                    <div class="toast-icon">
                        <div v-if="customIcon" class="icon-custom">
                            <i :class="customIcon"></i>
                        </div>
                        <div v-else class="icon-status">
                            <i :class="statusIcon"></i>
                        </div>
                    </div>
                    <div class="toast-context">
                        {{context}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        // inject: ['reload'],
        props: {
            customIcon: { type: String, },
            // [info, succeed, warn, danger]
            status: { type: String, defult: 'info' },
            context: { type: String, defult: '提示内容' },
            timeOut: { type: Number, defult: 3000 },
            shade: { type: Boolean, default: false },
            // [top, center, bottom]
            position: { type: String, defult: 'center' },
            // open: { type: Boolean, default: true },
        },
        data() {
            return {
                isOpen: false,
                classObj: {
                    'isShade': this.shade,
                },
                timeOutId: 0,
                timer: +new Date(),
            }
        },
        watch: {},
        computed: {
            statusIcon() {
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
        },
        created() {
            // this.classObj['position-'+this.position] = this.position;
            // this.$set(this.classObj, 'position-' + this.position, this.position);
        },
        mounted() { },
        methods: {
            openToast() {
                // this.reload();
                this.$nextTick(() => {
                    this.timer=+new Date();
                    this.$set(this.classObj, 'position-' + this.position, this.position);
                    if (this.timeOutId) clearTimeout(this.timeOutId);
                    this.isOpen = true;
                    this.timeOutId = setTimeout(() => {
                        this.classObj = {};
                        this.isOpen = false;
                    }, this.timeOut)
                })
            }
        },
    }
</script>
<style lang="scss">
    .toast-component {
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        display: inline-block;

        .toast-content {
            height: 100%;
            position: relative;

            .toast-shade {
                display: flex;
                height: 100%;
                justify-content: center;
                z-index: 999;
                position: relative;

                &.position-top {
                    align-items: flex-start;
                    .toast {
                        margin-bottom: 0px;
                        margin-top: 80px;
                    }
                }

                &.position-center {
                    align-items: center;

                    .toast {
                        margin-top: 0px;
                        margin-bottom: 0px;
                    }
                }

                &.position-bottom {
                    align-items: flex-end;
                    .toast {
                        margin-top: 0px;
                        margin-bottom: 80px;
                    }
                }

                .toast {
                    max-width: 300px;
                    white-space: wrap;
                    word-break: break-word;
                    background-color: rgb(213, 213, 214);
                    color: #000;
                    font-size: 16px;
                    padding: 12px;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .toast-icon {
                        font-size: 30px;
                    }

                    .toast-context {
                        font-size: 12px;
                        line-height: 30px;
                    }
                }
            }
        }

        &.isShade {
            left: 0;
            width: 100%;
            background-color: rgba(213, 213, 214, 0.1);
        }
    }
</style>