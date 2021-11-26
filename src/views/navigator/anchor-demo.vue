<template>
    <div class="anchor-demo-contain">
        <div class="anchor-nav">
            <a href="#content-1" class="anchor-link" @click="targetAnchor = 1"
                :class="{ active: targetAnchor == 1 }">1</a>
            <a href="#content-2" class="anchor-link" @click="targetAnchor = 2"
                :class="{ active: targetAnchor == 2 }">2</a>
            <a href="#content-3" class="anchor-link" @click="targetAnchor = 3"
                :class="{ active: targetAnchor == 3 }">3</a>
            <a href="#content-4" class="anchor-link" @click="targetAnchor = 4"
                :class="{ active: targetAnchor == 4 }">4</a>
        </div>
        <div class="anchor-content">
            <div class="content-1 content-card">
                <a id="content-1" class="content-title">1</a>
            </div>
            <div class="content-2 content-card">
                <a id="content-2" class="content-title">2</a>
            </div>
            <div class="content-3 content-card">
                <a id="content-3" class="content-title">3</a>
            </div>
            <div class="content-4 content-card">
                <a id="content-4" class="content-title">4</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                targetAnchor: 1,
            };
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    };
</script>
<style lang="scss">
    .anchor-demo-contain {
        display: flex;

        .anchor-nav {
            width: 220px;
            height: 100%;
            border-left: 1px dashed #eee;
            display: flex;
            flex-direction: column;
            position: sticky;
            top: 0;

            .anchor-link {
                padding: 8px 12px 8px 0;
                margin-left: -6px;
                letter-spacing: 1px;
                max-width: calc(220px - 24px);
                white-space: pre-wrap;
                overflow-wrap: break-word;

                &:before {
                    content: "";
                    height: 0px;
                    border: 3px solid transparent;
                    border-radius: 50%;
                    position: relative;
                    font-size: 0px;
                    left: 2px;
                    margin-right: 10px;
                }

                &:after {
                    content: "";
                    border: 6px solid transparent;
                    border-radius: 50%;
                    font-size: 0px;
                    position: absolute;
                    /* left: 0; */
                    z-index: -1;
                }

                &.active {
                    color: rgb(229, 93, 93);
                    font-size: 1.4rem;
                    display: flex;
                    align-items: center;

                    &:before {
                        border: 3px solid #fff;
                    }

                    &:after {
                        border: 6px solid #e55d5d;
                    }
                }
            }
        }

        .anchor-content {
            flex: 1;

            .content-card {
                width: 100%;
                height: 450px;

                // background-color: rgb(99,171,63);
                .content-title {
                    font-size: 1.2rem;
                    padding: 5px 10px;
                }
            }
        }
    }

    a {
        color: #fff;
    }

    .anchor-content .content-card:nth-child(2n) {
        // background-color: rgb(215,215,81);
    }
</style>