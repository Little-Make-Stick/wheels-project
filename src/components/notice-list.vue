<template>
    <div class='notice-list-component'>
        <div class="notice-list-content">
            <div class="notice-group" v-for="group in noticeGroups" :key="group.id">
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
                    <notice :notice="item" :i="group.id" :j="item.id"
                        v-for="item in group.list" :key="item.id"
                        @close="removeListItem">
                    </notice>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import notice from './notice.vue';
    export default {
        props: {
            groups: { type: Array },
        },
        data() {
            return {
                noticeGroups: this.groups,
            }  
        },
        components: {
            notice,
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {
            removeListItem(groupIndex,listIndex){
                this.noticeGroups[groupIndex-1].list.splice(listIndex-1,1);
                console.log(this.noticeGroups)
            }
        },
    }
</script>
<style lang="scss">
    .notice-list-component {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;

        .notice-list-content {
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

                        .notice-component{
                            position: absolute;
                            top: 10px;
                            right: 16px;
                        }
                        .notice-component:first-child {
                            position: relative;
                            top: 10px;
                            right: 0px;
                        }

                        .notice-component:nth-child(2) {
                            position: absolute;
                            top: 17px;
                            opacity: .5;
                            right: calc(300px * 0.01 + 16px);
                            transform: scale(.98);
                        }

                        .notice-component:nth-child(3) {
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