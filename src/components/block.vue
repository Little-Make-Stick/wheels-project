<template>
    <div class='block-component'>
        <div ref="block-content" class="block-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            color:{type: String,default: '#bb585d'}
        },
        data() {
            return {}
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { 
            this.$refs['block-content'].style.borderColor = this.color;
            this.$refs['block-content'].style.color = this.color;
        },
        methods: {},
    }
</script>
<style lang="scss">
    .block-component {
        margin: 20px 0;

        .block-content {
            line-height: 35px;
            padding: 8px 10px;
            border-left: 5px solid #000;
            border-radius: 0 0 4px 4px;
            background-color: #434448;
        }
    }
</style>