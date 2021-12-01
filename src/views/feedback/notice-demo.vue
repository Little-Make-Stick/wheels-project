<template>
    <div class='notice-demo-contain'>
        <card cardTitle="不同状态">
            <m-button status="primary">默认通知</m-button>
            <m-button status="info">消息通知</m-button>
            <m-button status="succeed">成功通知</m-button>
            <m-button status="warn">警告通知</m-button>
            <m-button status="danger">报错通知</m-button>
        </card>
        <card cardTitle="不同分组">
            <m-button status="primary">默认分组</m-button>
            <m-button status="info">日志分组</m-button>
            <m-button status="succeed">下载分组</m-button>
        </card>
        <card cardTitle="确认通知">
            <m-button status="info">确认通知</m-button>
        </card>
        <card cardTitle="关闭通知">
            <m-button status="info">关闭通知</m-button>
        </card>
        <card cardTitle="自定义图标">
            <m-button status="info">自定义图标</m-button>
        </card>
        <div class="notice-contain">
            <notice :groups="groups"></notice>
        </div>
    </div>
</template>
<script>
    import card from '../../components/card.vue';
    import mButton from '../../components/m-button.vue';
    import notice from '../../components/notice.vue';
    export default{
        data(){
            return{
                groups:[
                    {
                        title: '',
                        list: [{},{},{},{},]
                    },
                    {
                        title: '',
                        list: [{},{},{},]
                    }
                ]
            }
        },
        components:{
            card,
            mButton,
            notice,
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss">

</style>