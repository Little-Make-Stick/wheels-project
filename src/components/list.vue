<template>
    <div v-if="list && list.length" class='list-component' :class="{'card-list': card}">
        <div class="list-item" v-for="(item,i) in list" :key="i">
            <div class="item-content">
                <div class="item-icon" v-if="item.icon">
                    <i :class="item.icon"></i>
                </div>
                <div class="item-context">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-descripe" v-if="item.descripe">{{item.descripe}}</div>
                </div>
                <router-link tag="div" :to="item.link" class="item-more">
                    <div v-if="item.moreText">
                        <div v-if="item.moreIcon">
                            <i :class="item.moreIcon"></i>
                        </div>
                        <div v-else>详细信息</div>
                    </div>
                    <div v-else></div>
                    <span class="more-icon">&gt;</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            card: {type: Boolean,default: false},
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
<style lang="scss">
.list-component{
    margin: 10px 0;
    border: 1px solid rgb(67,67,67);
    border-width: 1px 0 1px 0;
    .item-content{
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        border-bottom: 1px solid rgb(67,67,67);
        .item-icon{
            margin-right: 10px;
        }
        .item-context{
            flex: 1;
            text-align: left;
            display: flex;
            flex-direction: column;
            white-space: nowrap;
            text-overflow: ellipsis;
            .item-title{}
            .item-descripe{
                font-size: 10px;
                color: rgb(100, 102, 98);
            }
        }
        .item-more{
            display: flex;
            align-items: center;
            *{
                margin: 0 6px;
            }
            .more-icon{
                color: rgb(100, 102, 98);
            }
        }
    }
    &.card-list{
        border-width: 1px;
        margin: 10px 15px;
        border-radius: 4px;
    }
}
</style>