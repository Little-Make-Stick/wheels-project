<template>
    <div class='notice-component'>
        <div class="notice-content">
            <div class="notice">
                <m-dialog :status="notice.status || 'info'" 
                    :titleIcon="notice.icon" 
                    :title="notice.title || 'title'"
                    :context="notice.context || 'context'" 
                    :isConfirmOptions="notice.isConfirmOptions || false"
                    :isCloseOptions="notice.isCloseOptions || false" 
                    :confirm="notice.confirm || confirm"
                    :cancel="notice.cancel || cancel" 
                    :close="notice.close || close" 
                    :closeHandler="closeNotice"
                    isCloseIcon>
                </m-dialog>
            </div>
        </div>
    </div>
</template>
<script>
    import mDialog from './m-dialog.vue';
    export default {
        props: {
            notice: { type: Object },
            i: { type: Number },
            j: { type: Number },
        },
        data() {
            return {
                confirm: {
                    title: '确认',
                    handleFunct: this.confirmHandler
                },
                cancel: {
                    title: '取消',
                    handleFunct: this.cancelHandler
                },
                close: {
                    title: '关闭',
                    handleFunct: this.closeHandler
                },
            }
        },
        components: {
            mDialog,
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {
            confirmHandler(e) {
                alert('确认');
                this.closeNotice(e);
            },
            cancelHandler(e) {
                alert('取消');
                this.closeNotice(e);
            },
            closeHandler(e) {
                alert('关闭');
                this.closeNotice(e);
            },

            closeNotice(e) {
                // this.$el.style.display = "none";
                this.$emit('close',this.i,this.j)
            },
        },
    }
</script>
<style lang="scss">
    /* .notice-component {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;

        .notice-content {
            .notice {
                transform: scale(.9);

                .m-dialog-component {

                    .m-dialog-shade {
                        position: relative;
                        width: 300px;
                        display: inline-block;
                        background-color: transparent;

                        .m-dialog {
                            padding: 10px;
                            background-color: #3c3d42;
                            margin: 4px 0;
                            border-radius: 4px;
                        }
                    }
                }
            }
        }
    } */
</style>