<template>
    <div class='bubble-card-component'>
        <div class="bubble-card-content">
            <bubble :direction="direction" :align="align">
                <card :cardTitle="cardTitle" :titleIcon="titleIcon" :more="more">
                    <slot></slot>
                </card>
            </bubble>
        </div>
    </div>
</template>
<script>
    import bubble from './bubble.vue';
    import card from './card.vue';
    export default {
        props: {
            cardTitle: { type: String, default: 'Title' },
            titleIcon: { type: String },
            more: { type: Boolean, default: false },
            // [top, right, bottom, left]
            direction: { type: String, default: "right" },
            // [left, right, top, bottom, center]
            align: { type: String, default: "center" },
        },
        data() {
            return {}
        },
        components: {
            bubble,
            card,
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss">
    .bubble-card-component {
        .bubble-card-content {
            .bubble-component {
                margin: 0 !important;

                .bubblt-content {
                    padding: 0 !important;

                    .card-component {
                        margin-bottom: 0 !important;
                    }
                }
            }
        }

    }
</style>