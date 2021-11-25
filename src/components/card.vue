<template>
    <div class='card-component'>
        <div class="card-title">
            {{cardTitle}}
        </div>
        <div class="card-content">
            <!-- <slot name="cardcontent" :cat="cat"></slot> -->
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default{
        prop:{
            cardTitle:{type:String,default:'Title'}
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
<style scoped>
    .card-component{
        background: rgba(46,47,51);
        padding: 16px;
    }
    .card-component .card-title{
        line-height: 30px;
        color: #fff;
        letter-spacing: 2px;
        border-bottom: rgba(26,27,28);
    }
</style>