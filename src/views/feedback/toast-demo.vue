<template>
    <div class='toast-demo-contain'>
        <card cardTitle="不同状态">
            <!-- @click.native https://blog.csdn.net/qq_36620428/article/details/89202940 -->
            <m-button status="primary" @click.native="toastStatus('primary')">primary</m-button>
            <m-button status="info" @click.native="toastStatus('info')">info</m-button>
            <m-button status="succeed" @click.native="toastStatus('succeed')">succeed</m-button>
            <m-button status="warn" @click.native="toastStatus('warn')">warn</m-button>
            <m-button status="danger" @click.native="toastStatus('danger')">danger</m-button>
        </card>

        <card cardTitle="位置上下">
            <m-button status="info" @click.native="toastPosition('top')">Top</m-button>
            <m-button status="succeed" @click.native="toastPosition('center')">Center</m-button>
            <m-button status="warn" @click.native="toastPosition('bottom')">Bottom</m-button>
        </card>

        <card cardTitle="模态阻止点击">
            <m-button status="info" @click.native="toastShade">shade</m-button>
        </card>

        <card cardTitle="自定义图标">
            <m-button status="info" @click.native="toastCustomIcon">上传图片</m-button>
        </card>

        <card cardTitle="多行内容">
            <m-button status="info" @click.native="toastContext">多行内容</m-button>
        </card>

        <div ref="toastContain" class="toast-contain">
            <toast ref="toast" :customIcon="toastProps.icon"
                :status="toastProps.status || 'info'"
                :context="toastProps.context || '提示内容'"
                :timeOut="toastProps.timeOut || 2000"
                :shade="toastProps.shade || false"
                :position="toastProps.position || 'center'"
                
            ></toast>
        </div>
    </div>
</template>
<script>
    import toast from '../../components/toast.vue';
    import card from '../../components/card.vue';
    import mButton from '../../components/m-button.vue';
    export default{
        
        // provide(){
        //     return{
        //         reload: this.reload
        //     }
        // },
        data(){
            return{
                toastProps:{
                    // icon: '',
                    // status: 'info',
                    // context: '提示内容',
                    // timeOut: 2000,
                    // shade: false,
                    // position: 'bottom',
                    // open: false
                },
                isReload: true,
                
            }
        },
        components:{
            toast,
            card,
            mButton,
        },
        watch:{},
        computed:{},
        created(){
        },
        mounted(){},
        methods:{
            reload(){
                this.isReload = false;
                this.$nextTick(()=>{
                    this.isReload = true;
                });
                
            },
            initToast(){
                this.$set(this.toastProps,'icon','');
                this.$set(this.toastProps,'status','info');
                this.$set(this.toastProps,'context','提示内容');
                this.$set(this.toastProps,'timeOut',2000);
                this.$set(this.toastProps,'shade',false);
                this.$set(this.toastProps,'position','center');
            },
            toastStatus(status){
                // this.initToast();
                this.toastProps = {};
                this.$set(this.toastProps,'status',status);
                this.$refs.toast.openToast();
            },
            toastPosition(pos){
                // this.initToast();
                this.toastProps = {};
                this.$set(this.toastProps,'position',pos);
                this.$refs.toast.openToast();
            },
            toastShade(){
                // this.initToast();
                this.toastProps = {};
                this.$set(this.toastProps,'shade',true);
                this.$set(this.toastProps,'context','模态阻止点击');
                this.$refs.toast.openToast();
            },
            toastCustomIcon(){
                // this.initToast();
                this.toastProps = {};
                this.$set(this.toastProps,'icon','fa fa-upload');
                this.$set(this.toastProps,'context','上传图片');
                this.$refs.toast.openToast();
            },
            toastContext() {
                // this.initToast();
                this.toastProps = {};
                let context = '提示内容，多行提示内容，多行提示内容，多行提示内容，多行提示内容，多行提示内容，多行提示内容，多行提示内容，，多行提示内容';
                this.$set(this.toastProps,'context',context);
                this.$refs.toast.openToast();
            },
        },
    }
</script>
<style>
</style>
