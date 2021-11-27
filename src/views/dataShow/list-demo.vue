<template>
    <div class='list-demo-contain'>
        <list class="list-simple" :list="simpleList"></list>
        <list class="list-simple" :list="moreList"></list>
        <list class="list-simple" :list="iconList"></list>
        <list class="list-simple" :list="wholeList"></list>

        <list class="list-simple" card :list="simpleList"></list>
        <list class="list-simple" card :list="moreList"></list>
        <list class="list-simple" card :list="iconList"></list>
        <list class="list-simple" card :list="wholeList"></list>
    </div>
</template>
<script>
    import list from '../../components/list.vue';
    export default{
        data(){
            return{
                simpleList:[
                    {title: '列表1',link:"/"},
                    {title: '列表2',link:"/"},
                    {title: '列表3',link:"/"},
                ],
                moreList:[
                    {title: '列表1',moreText:true,link:"/"},
                    {title: '列表2',moreText:true,link:"/"},
                    {title: '列表3',moreText:true,link:"/"},
                ],
                iconList:[
                    {title: '列表1',icon:'fa fa-podcast',moreText:true,link:"/"},
                    {title: '列表2',icon:'fa fa-snowflake-o',moreText:true,link:"/"},
                    {title: '列表3',icon:'fa fa-superpowers',moreText:true,link:"/"},
                ],
                wholeList:[
                    {title: '列表1',descripe:'列表描述1',icon:'fa fa-podcast',moreText:true,moreIcon:'fa fa-bookmark',link:"/"},
                    {title: '列表2',descripe:'列表描述2',icon:'fa fa-snowflake-o',moreText:true,moreIcon:'fa fa-commenting',link:"/"},
                    {title: '列表3',descripe:'列表描述3',icon:'fa fa-superpowers',moreText:true,moreIcon:'fa fa-code',link:"/"},
                ]
            }
        },
        components:{
            list,
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