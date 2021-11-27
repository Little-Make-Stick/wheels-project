<template>
    <div class='toast-component'>
        <div refs="toast" class="toast-content">
            <div class="toast-shade" :class="{'isShade': shade}">
                <div class="toast">
                    <div class="toast-icon">
                        <div class="icon-status">
                            <i :class="statusIcon"></i>
                        </div>
                        <div class="icon-custom">
                            <i :class="customIcon"></i>
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
        props: {
            customIcon: { type: String, },
            status: { type: String, defult: 'info' },
            context: { type: String, defult: '提示内容' },
            timeOut: { type: Number, defult: 3000 },
            shade: { type: Boolean, default: false }
        },
        data() {
            return {}
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
        created() { },
        mounted() {
            setTimeout(() => {
                this.$refs.toast.style.display = "none";
            }, this.timeOut)
        },
        methods: {},
    }
</script>
<style>
    .toast-component {
        .toast-content {
            .toast-shade {
                display: flex;
                height: 100%;
                .toast {
                    background-color: rgb(213, 213, 214);
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

                &.position-top{
                    padding-top: 30px;
                    align-items: flex-start;
                }

                &.position-center{
                    align-items: center;
                }

                &.position-bottom{
                    padding-bottom: 30px;
                    align-items: flex-end;
                }

            }

            &.isShade {
                display: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgb(213, 213, 214, 0.1);
            }
        }
    }
</style>