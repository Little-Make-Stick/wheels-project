<template>
    <div class='actionsheet-component' :value="uniqueRes" >
        <div class="actionsheet-shade"  v-if="isOpen" @click="closeActionsheet.call(this)">
            <div class="actionsheet-content">
                <div v-if="showTitle" class="title-context">
                    <div class="main-title">{{mainTitle}}</div>
                    <div class="sub-title">{{subTitle}}</div>
                </div>
                <div class="content-context" :class="'display-'+display" v-if="list && list.length">
                    <div class="btn-item" v-for="(item,i) in list" :key="i">
                        <div v-if="flex == 'row'" :class="['flex-'+flex, 'display-'+display]">
                            <m-button status="primary" :block="display == 'list'" :square="display=='grid'"
                                :icon="item.icon" @click.native.stop="changeRes(item.name)">{{item.name}}</m-button>
                        </div>
                        <div v-else :class="['flex-'+flex, 'display-'+display]">
                            <m-button status="primary" :block="display=='list'" :square="display=='grid'" :icon="item.icon"
                                @click.native.stop="changeRes(item.name)">
                            </m-button>
                            <div class="item-name">{{item.name}}</div>
                        </div>
                    </div>
                </div>
                <div class="cancel-btn">
                    <m-button status="primary" @click.native.stop="closeActionsheet.call(this)" block>取消</m-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import mButton from './m-button.vue';
    export default {
        props: {
            // [list, grid]
            display: { type: String, default: 'grid' },
            // [row, col]
            flex: { type: String, default: 'row' },
            showTitle: { type: Boolean, default: false },
            mainTitle: { type: String, default: 'mainTitle' },
            subTitle: { type: String, default: 'subTitle' },
            list: { type: Array },
            multiple: { type: Boolean, default: false },
            autoClose: { type: Boolean, default: true },
        },
        data() {
            return {
                isOpen: false,
                res: [],
            }
        },
        components: {
            mButton,
        },
        watch: {},
        computed: {
            uniqueRes(){
                return this.returnRes()
            }
        },
        created() {},
        mounted() {},
        methods: {
            closeActionsheet() {
                // console.log(this.$el);
                // this.$el.style.display = 'none';
                this.isOpen = false;
                this.returnRes()
            },
            openActionsheet() {
                this.isOpen = true;
                this.res=[];
                // console.log('this.autoClose===========',this.autoClose)
            },
            returnRes() {
                if (this.multiple) return [...new Set(this.res)];
                else return this.res[this.res.length - 1];
            },
            changeRes(params) {
                this.res.push(params);
                // console.log('this.autoClose===========',this.autoClose)
                // console.log('this.multiple===========',this.multiple)
                if(!this.multiple && this.autoClose){
                    this.closeActionsheet();
                }
            }
        },
    }
</script>
<style lang="scss">
    @keyframes translateYAnimate {
        0% {
            transform: translateY(100%);
        }

        100% {
            transform: translateY(0%);
        }
    }

    .actionsheet-component {
        .actionsheet-shade {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(34, 34, 35, .8);

            .actionsheet-content {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                transform: translateY(100%);
                animation: translateYAnimate 1s ease forwards;

                .m-button-component {
                    padding: 0;
                    margin: 1px 0;

                    .m-button {}
                }

                .title-context {
                    width: 100%;
                    text-align: center;
                    background-color: #3a2381;
                    padding: 8px 0;

                    .main-title {
                        font-size: 20px;
                        line-height: 25px;
                    }

                    .sub-title {
                        line-height: 30px;
                    }
                }

                .content-context {
                    position: relative;
                    width: 100%;
                    background-color: #25252a;


                    &.display-list {}

                    &.display-grid {
                        display: flex;
                        justify-content: center;
                        padding: 20px 10px 30px 10px;
                    }

                    .btn-item {
                        .flex-row {
                            text-align: center;

                            &.display-grid {
                                margin: 10px;

                                .m-button {
                                    max-width: 50px;
                                    width: 50px;
                                    margin: 10px;
                                }

                                i {
                                    font-size: 30px;
                                    /* margin: 10px; */
                                }
                            }

                            i {
                                /* font-size: 30px; */
                                margin-right: 10px;
                            }

                        }

                        .flex-col {
                            display: flex;
                            flex-direction: column;
                            align-items: center;

                            .m-button {
                                max-width: 50px;
                                width: 50px;
                                margin: 10px;
                                text-align: center;
                            }

                            i {
                                font-size: 30px;
                                margin-right: 0px;
                            }
                        }

                        &:hover {
                            .m-button {
                                color: red;
                            }
                        }
                    }
                }

                .cancel-btn {
                    text-align: center;
                }
            }
        }
    }
</style>