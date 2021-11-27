<template>
    <div class='contain'>
        <card cardTitle="简单警告提示">
            <warntip status="info"></warntip>
            <warntip status="succeed"></warntip>
            <warntip status="warn"></warntip>
            <warntip status="danger"></warntip>
        </card>

        <card cardTitle="带链接的警告提示">
            <warntip status="info" link="/"></warntip>
            <warntip status="succeed" link="/"></warntip>
            <warntip status="warn" link="/"></warntip>
            <warntip status="danger" link="/"></warntip>
        </card>

        <card cardTitle="带标题的警告提示">
            <warntip status="info" title="标题"></warntip>
            <warntip status="succeed" title="标题"></warntip>
            <warntip status="warn" title="标题"></warntip>
            <warntip status="danger" title="标题"></warntip>
        </card>

        <card cardTitle="带标题的警告提示">
            <warntip status="info" link="/" title="标题"></warntip>
            <warntip status="succeed" link="/" title="标题"></warntip>
            <warntip status="warn" link="/" title="标题"></warntip>
            <warntip status="danger" link="/" title="标题"></warntip>
        </card>
    </div>
</template>
<script>
    import warntip from '../../components/warntip.vue';
    import card from '../../components/card.vue';
    export default {
        data() {
            return {}
        },
        components: {
            warntip,
            card,
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