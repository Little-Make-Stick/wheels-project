<template>
    <div class='warntip-component'>
        <div class="warntip-content" :class="statusClass">
            <div class="warntip-icon">
                <i :class="statusIcon"></i>
            </div>
            <div class="warntip-context">
                <div class="warntip-title">{{title}}</div>
                <div class="warntip-descript">{{context}}</div>
            </div>
            <div class="warntip-option">
                <router-link class="detail-btn" v-if="link" :to="link">查看详情</router-link>
                <div v-else class="close-btn" @click="closeEvent">
                    <i class="fa fa-times"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            // [info, succeed, warn, danger]
            status:{type:String,default:'info'},
            link:{type:String},
            title:{type:String},
            context:{type:String,default:'警告提示内容'},
        },
        data(){
            return{
            }
        },
        watch:{},
        computed:{
            statusClass(){
                return 'status-'+this.status;
            },
            statusIcon(){
                switch(this.status){
                    case 'info':
                        return 'fa fa-info-circle';
                        break;
                    case 'succeed':
                        return 'fa fa-check-circle';
                        break;
                    case 'warn':
                        return 'fa fa-exclamation-circle';
                        break;
                    case 'danger':
                        return 'fa fa-times-circle';
                        break;
                    default:
                        return 0;
                        break;
                }
            }
        },
        created(){},
        mounted(){},
        methods:{
            closeEvent(e){
                let warntip = e.target.parentNode.parentNode.parentNode;
                warntip.style.display='none';
            }
        },
    }
</script>
<style lang="scss">
    .warntip-component{
        margin: 15px 20px;
        .warntip-content{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 10px 18px;
            border-radius: 4px;
            font-size: 12px;
            line-height: 30px;
            &.status-info{
                color: rgb(15, 86, 160);
                background-color: rgb(217, 237, 247);
            }
            &.status-succeed{
                color: rgb(34,87,35);
                background-color: rgb(240, 249, 235);
            }
            &.status-warn{
                color: rgb(186, 107, 17);
                background-color: rgb(253, 246, 236);
            }
            &.status-danger{
                color: rgb(169, 68, 66);
                background-color: rgb(254, 240, 240);
            }
            .warntip-icon{
                margin-right: 10px;
                line-height: 30px;
                height: 30px;
            }
            .warntip-context{
                flex: 1;
                text-align: left;
                line-height: 20px;
                .warntip-title{
                    font-size: 22px;
                    margin-bottom: 8px;
                    font-weight: bold;
                }
                .warntip-descripe{}
            }
            .warntip-option{
                margin-left: 10px;
                line-height: 30px;
                height: 30px;
                .detail-btn{
                    color: red;
                }
                .close-btn{
                    color:rgb(190, 183, 183);
                }
            }
            
        }
    }
</style>