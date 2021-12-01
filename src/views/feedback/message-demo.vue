<template>
    <div class='message-demo-contain'>
        <card cardTitle="不同状态">
            <m-button status="primary" @click.native="statusMsg('primary')">primary</m-button>
            <m-button status="info"  @click.native="statusMsg('info')">info</m-button>
            <m-button status="succeed"  @click.native="statusMsg('succeed')">succeed</m-button>
            <m-button status="warn"  @click.native="statusMsg('warn')">warn</m-button>
            <m-button status="danger"  @click.native="statusMsg('danger')">danger</m-button>
        </card>
        <card cardTitle="不同位置">
            <m-button status="info" @click.native="positionMsg('top')">top</m-button>
            <m-button status="primary" @click.native="positionMsg('bottom')">bottom</m-button>
        </card>
        <card cardTitle="自定义图标">
            <m-button status="info" @click.native="iconMsg()">custom icon</m-button>
        </card>
        <card cardTitle="点击和关闭事件">
            <m-button status="info" @click.native="eventMsg()">close/click</m-button>
        </card>
        <div class="message-contain">
            <message ref="message"
                :status="msgProps.status || 'info'"
                :icon="msgProps.icon || ''" 
                :context="msgProps.context || 'context'" 
                :during="msgProps.during || 2000" 
                :position="msgProps.position || 'top'" 
                :close="msgProps.close || function (){return 0}" 
                :click="msgProps.click || function (){return 0}" 
            ></message>
        </div>
    </div>
</template>
<script>
    import mButton from '../../components/m-button.vue';
    import card from '../../components/card.vue';
    import message from '../../components/message.vue';
    export default{
        data(){
            return{
                msgProps:{
                    // status: 'info',
                    // icon: '',
                    // context: 'context',
                    // during: 2000,
                    // position: 'bottom'
                },
            }
        },
        components:{
            mButton,
            card,
            message,
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{
            statusMsg(status){
                this.msgProps = {};
                this.$set(this.msgProps,'status',status);
                this.$refs['message'].openMessage();
            },
            positionMsg(pos){
                this.msgProps = {};
                this.$set(this.msgProps,'position',pos);
                this.$refs['message'].openMessage();
            },
            iconMsg(){
                this.msgProps = {};
                this.$set(this.msgProps,'icon','fa fa-bath');
                this.$refs['message'].openMessage();
            },
            eventMsg(){
                this.msgProps = {};
                let clickHandle = function() {
                    alert('click');
                };
                let closeHandle = function() {
                    alert('close');
                };
                this.$set(this.msgProps,'click',clickHandle);
                this.$set(this.msgProps,'close',closeHandle);
                this.$refs['message'].openMessage();
            }
        },
    }
</script>
<style>
</style>