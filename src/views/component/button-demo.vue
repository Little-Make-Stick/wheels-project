<template>
    <div class="button-demo-contain">
        <!-- status -->
        <card cardTitle="不同颜色">
            <m-button status="primary">button</m-button>
            <m-button status="info">button</m-button>
            <m-button status="succeed">button</m-button>
            <m-button status="warn">button</m-button>
            <m-button status="danger">button</m-button>
        </card>
        <!-- plain -->
        <card cardTitle="不同填充">
            <m-button status="primary" plain="full">button</m-button>
            <m-button status="info" plain="border">button</m-button>
            <m-button status="succeed" plain="text">button</m-button>
        </card>
        <!-- size -->
        <card cardTitle="不同尺寸">
            <m-button status="primary" size="mini">button</m-button>
            <m-button status="info" size="xs">button</m-button>
            <m-button status="succeed" size="md">button</m-button>  
            <m-button status="warn" size="xl">button</m-button>
        </card>
        <!-- disabled -->
        <card cardTitle="禁止状态">
            <m-button disabled>button</m-button>
        </card>
        <!-- round -->
        <card cardTitle="两端圆形">
            <m-button round>button</m-button>
        </card>
        <!-- circle -->
        <card cardTitle="圆形按钮">
            <m-button status="primary" circle>button</m-button>
            <m-button status="info" circle>btn</m-button>
            <m-button status="succeed" plain="border" circle>b</m-button>
        </card>
        <!-- square -->
        <card cardTitle="方形按钮">
            <m-button status="primary" square>button</m-button>
            <m-button status="info" square>btn</m-button>
            <m-button status="succeed" plain="border" square>b</m-button>
        </card>
    </div>
</template>
<script>
    import card from '../../components/card';
    import mButton from '../../components/m-button.vue';
    export default {
        data() {
            return {
            }
        },
        components: {
            card,
            mButton,
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style>
</style>