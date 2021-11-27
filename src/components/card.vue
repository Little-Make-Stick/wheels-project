<template>
    <div class='card-component'>
        <div class="card-title">
            <div class="title-icon">
                <i :class="titleIcon"></i>
            </div>
            <div class="title-content">{{cardTitle}}</div>
            <div class="more-icon">
                <i class="fa fa-ellipsis-h" v-if="more"></i>
            </div>
        </div>
        <div class="card-content">
            <!-- <slot name="cardcontent" :cat="cat"></slot> -->
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            cardTitle: { type: String, default: 'Title' },
            titleIcon: { type: String },
            more: { type: Boolean, default: false }
        },
        data() {
            return {}
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss">
    .card-component {
        background-color: rgb(46, 47, 51);
        padding: 16px;
        margin-bottom: 15px;
        width: calc(100% - 32px);
        color: #fff;
        .card-title {
            line-height: 30px;
            
            letter-spacing: 2px;
            border-bottom: 1px solid rgb(26, 27, 28);
            display: flex;
            /* justify-content: space-between; */
            align-items: center;
            width: 100%;
            .title-icon{
                margin-right: 10px
            }
            .title-content {
                white-space: nowrap;
                text-overflow: ellipse;
                overflow: hidden;
                flex: 1;
                text-align: left;
            }
            .more-icon{
                margin-left: 10px
            }
        }

        .card-content {
            padding-top: 10px;
        }
    }
</style>