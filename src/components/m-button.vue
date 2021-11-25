<template>
    <div class='m-button-component'>
        <div class="m-button" 
            :size="size"
            :status="status"
            :plain="plain"
            :circle="circle"
            :round="round"
            :disabled="disabled"
            >
            <i :class="icon"></i>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            // [mini,xs,md,xl]
            size:{type:String,default:'md'},
            // 颜色状态 [primary,succeed,warn,danger]
            status:{type:String,default:'primary'},
            // 填充状态 [full,border,text]
            plain:{type:String,default:'full'},
            circle:{type:Boolean,default:false},
            round:{type:Boolean,default:false},
            disabled:{type:Boolean,default:false},
            // 按钮图标
            icon:{type:String},
        },
        data(){
            return{}
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style>
</style>