<template>
    <div v-if="list && list.length" class='list-component'>
        <div class="list-item" v-for="(item,i) in list" :key="i">
            <div class="item-content">
                <div class="item-icon">
                    <i :class="item.icon"></i>
                </div>
                <div class="item-context">item.text</div>
                <div class="item-more"><div v-if="item.moreText">详细信息</div>&gt;</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            list: {type: Array}
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