<template>
    <div class='notice-component'>
        <div class="notice-content">
            <div class="notice-group" v-for="(group,i) in groups" :key="i">
                <div class="group-title" v-if="group.list.length > 3">
                    <div class="title-context">{{group.title || '通知中心'}}</div>
                    <div class="close-btn">
                        <i class="fa fa-times"></i>
                    </div>
                    <div class="collapse-btn">
                        <i class="fa fa-angle-down"></i>
                    </div>
                </div>
                <div class="notice-list" :class="{'isCollapse':group.list.length > 3}">
                    <div class="notice--module" v-for="(item,j) in group.list" :key="j">
                        <div class="notice" :ref="'notice-'+i+'-'+j">
                            <m-dialog :status="item.status || 'info'" :titleIcon="item.icon"
                                :title="item.title || 'title'" :context="item.context || 'context'"
                                :isConfirmOptions="item.isConfirmOptions || false"
                                :isCloseOptions="item.isCloseOptions || false"
                                :confirm="item.confirm || {title: confirm.title , handleFunct: confirmHandler}"
                                :cancel="item.cancel || {title: cancel.title , handleFunct: cancelHandler}"
                                :close="item.close || {title: close.title , handleFunct: closeHandler}" 
                                :closeHandler="titleCloseNotice"
                                isCloseIcon
                            >
                            </m-dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import mDialog from './m-dialog.vue';
    export default {
        props: {
            groups: { type: Array },
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
                let dialog = e.target.parentNode.parentNode.parentNode.parentNode;
                let notice = dislog.parentNode.parentNode;
                console.log(notice)
                // let notice = this.$refs['notice-' + i + '-' + j];
                notice.style.display = 'none';
            },
            titleCloseNotice(dialog){
                console.log(dialog)
                // let dialog = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
                let notice = dialog.parentNode.parentNode.parentNode;
                // notice.style.display = 'none';
                this.$el.removeChild(notice)
            }
        },
    }
</script>
<style lang="scss">
    .notice-component {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;

        .notice-content {
            .notice-group {
                position: relative;
                margin: 10px 0;
                .group-title {
                    display: flex;
                    background-color: #3c3d42;
                    justify-content: space-between;
                    /* width: calc(100% + 20px); */
                    width: 300px;
                    padding: 8px 10px;
                    transform: scale(.9);

                    .title-context {
                        flex: 1;
                        text-align: left;
                    }

                    .close-btn {
                        padding: 0 8px;
                    }
                }

                .notice-list {
                    position: relative;
                    top: 0px;
                    right: 0px;

                    .notice {
                        transform: scale(.9);

                        .m-dialog-component {

                            /* opacity: 0.5; */
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

                    &.isCollapse {

                        .notice--module{
                            position: absolute;
                            top: 10px;
                            // right: 8px;
                        }
                        .notice--module:first-child {
                            position: relative;
                            top: 10px;
                            // right: 16px;
                        }

                        .notice--module:nth-child(2) {
                            position: absolute;
                            top: 17px;
                            opacity: .5;
                            right: calc(300px * 0.01 + 16px);
                            transform: scale(.98);
                        }

                        .notice--module:nth-child(3) {
                            position: absolute;
                            top: 24px;
                            opacity: .3;
                            right: calc(300px * 0.02 + 16px);
                            transform: scale(.94);
                        }
                    }
                }
            }
        }
    }
</style>