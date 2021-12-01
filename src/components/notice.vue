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
                <div class="notice-list" :class="{'isCollapse':group.list.length>3}">
                    <div class="notice--module" v-for="(item,j) in group.list" :key="j">
                        <div class="notice" :ref="'notice-'+i+'-'+j">
                            <m-dialog :status="item.status || 'info'" :titleIcon="item.icon"
                                :title="item.title || 'title'" :context="item.context || 'context'"
                                :isConfirmOptions="item.isConfirmOptions || false"
                                :isCloseOptions="item.isCloseOptions || false"
                                :confirm="item.confirm || {title: confirm.title , handleFunct: confirmHandler}"
                                :cancel="item.cancel || {title: cancel.title , handleFunct: cancelHandler}"
                                :close="item.close || {title: close.title , handleFunct: closeHandler}" isCloseIcon>
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
            confirmHandler(i, j) {
                console.log(this)
                this.$el.style.display = 'none';
                // alert('确认');
                // this.closeNotice(i,j);
            },
            cancelHandler(i, j) {
                console.log(this)
                this.$el.style.display = 'none';
                // alert('取消');
                // this.closeNotice(i,j);
            },
            closeHandler(i, j) {
                console.log(this)
                this.$el.style.display = 'none';
                // alert('关闭');
                // this.closeNotice(i,j);
            },

            closeNotice(i, j) {
                // let dialog = e.target.parentNode.parentNode.parentNode.parentNode;
                // let notice = dislog.parentNode.parentNode;
                let notice = this.$refs['notice-' + i + '-' + j];
                notice.style.display = 'none';
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
                .group-title {
                    display: flex;
                    background-color: #3c3d42;
                    justify-content: space-between;
                    /* width: calc(100% + 20px); */
                    width: 300px;
                    padding: 8px 10px;
                    transform: scale(.8);

                    .title-context {
                        flex: 1;
                        text-align: left;
                    }

                    .close-btn {
                        padding: 0 8px;
                    }
                }

                .notice-list {
                    position: absolute;
                    top: 0px;
                    right: 0px;

                    .notice {
                        transform: scale(.8);

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
                                    margin: -4px 0;
                                    border-radius: 4px;
                                }
                            }
                        }
                    }

                    &.isCollapse {
                        .notice {
                            position: absolute;
                            top: 40px;
                            right: 16px;
                        }

                        .notice--module:nth-child(2) {
                            position: absolute;
                            top: 7px;
                            opacity: .5;
                            right: calc(300px * 0.01);
                            transform: scale(.98);
                        }

                        .notice--module:nth-child(3) {
                            position: absolute;
                            top: 14px;
                            opacity: .3;
                            right: calc(300px * 0.02);
                            transform: scale(.96);
                        }
                    }
                }
            }
        }
    }
</style>