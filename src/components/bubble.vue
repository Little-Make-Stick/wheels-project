<template>
    <div class="bubble-component">
        <div class="bubble-content">
            <slot></slot>
        </div>
        <div class="bubble-tail" :class="classObj"></div>
    </div>
</template>
<script>
    export default {
        props: {
            // [top, right, bottom, left]
            direction: { type: String, default: "right" },
            // [left, right, top, bottom, center]
            align: { type: String, default: "center" },
        },
        data() {
            return {
                classObj: {},
            };
        },
        watch: {},
        computed: {},
        created() {
            this.classObj[`direction-${this.direction}`] = this.direction;
            this.classObj[`align-${this.align}`] = this.align;
        },
        mounted() { },
        methods: {},
    };
</script>
<style lang="scss">
    .bubble-component {
        display: inline-block;
        margin: 15px;
        position: relative;
        padding: 5px;

        .bubble-content {
            background-color: #fff;
            // box-shadow: 0 0 5px #ccc;
            filter: drop-shadow(0 0 3px #eee);
            display: inline-block;
            color: #000;
            padding: 4px 8px;
        }

        .bubble-tail {
            display: inline-block;
            border: 5px solid #fff;
            position: absolute;

            &.direction-top {
                right:6px;
                top: 0;
                border-top: 0;
                border-left-color: transparent;
                border-right-color: transparent;
                &.align-center{
                    right: calc(50% - 2.5px);
                }
                &.align-left{
                    right: calc(100% - 17px);
                }
            }

            &.direction-right {
                right: 0;
                top: 6px;
                border-right: 0;
                border-top-color: transparent;
                border-bottom-color: transparent;
                &.align-center{
                    top: calc(50% - 4.5px);
                }
                &.align-bottom{
                    top: calc(100% - 17px);
                }
            }

            &.direction-bottom {
                right:6px;
                bottom: 0;
                border-bottom: 0;
                border-left-color: transparent;
                border-right-color: transparent;
                &.align-center{
                    right: calc(50% - 2.5px);
                }
                &.align-left{
                    right: calc(100% - 17px);
                }
            }

            &.direction-left {
                left: 0;
                border-left: 0;
                border-top-color: transparent;
                border-bottom-color: transparent;
                &.align-center{
                    top: calc(50% - 5px);
                }
                &.align-bottom{
                    top: calc(100% - 17px);
                }
            }

        }
    }
</style>