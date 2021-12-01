<template>
    <div class='actionsheet-demo-contain'>
        <card cardTitle="不同布局">
            <m-button status="warn" @click.native="displayActionsheet('list')">display-list</m-button>
            <m-button status="danger" @click.native="displayActionsheet('grid')">display-grid</m-button>
        </card>

        <card cardTitle="按钮内部不同布局">
            <m-button status="info" @click.native="flexActionsheet('list','row')">display-list--flex-row</m-button>
            <m-button status="succeed" @click.native="flexActionsheet('list','col')">display-list--flex-col</m-button>
            <m-button status="info" @click.native="flexActionsheet('grid','row')">display-grid--flex-row</m-button>
            <m-button status="succeed" @click.native="flexActionsheet('grid','col')">display-grid--flex-col</m-button>
        </card>

        <card cardTitle="单选/多选(单选自动关闭)">
            <m-button status="info" @click.native="mulitpleActionsheet(false)">单选</m-button>
            <m-button status="danger" @click.native="mulitpleActionsheet(true)">多选</m-button>
        </card>

        <card cardTitle="不会自动关闭">
            <m-button status="info" @click.native="autoCloseActionsheet(false)">单选</m-button>
            <m-button status="danger"  @click.native="autoCloseActionsheet(true)">多选</m-button>
        </card>

        <div class="activesheet-contain">
            <actionsheet ref="actionsheet" :display="actionsheetProps.display || 'list'"
                :flex="actionsheetProps.flex || 'row'" :showTitle="actionsheetProps.showTitle || false"
                :mainTitle="actionsheetProps.mainTitle || '主标题'" :subTitle="actionsheetProps.subTitle || '副标题'"
                :list="actionsheetProps.list || list" :multiple="actionsheetProps.multiple || false"
                :autoClose="actionsheetProps.autoClose"
                ></actionsheet>
        </div>
    </div>
</template>
<script>
    import card from '../../components/card.vue';
    import mButton from '../../components/m-button.vue';
    import actionsheet from '../../components/actionsheet.vue';
    export default {
        data() {
            return {
                actionsheetProps: {
                    // display: 'grid',
                    // flex: 'row',
                    // showTitle: false,
                    // mainTitle: '主标题',
                    // subTitle: '副标题',
                    // list: [
                    //     { name: 'item1', icon: '' },
                    //     { name: 'item2', icon: '' },
                    //     { name: 'item3', icon: '' },
                    // ],
                    // multiple: false,
                    autoClose: true,
                },
                list: [
                    { name: 'item1', icon: '' },
                    { name: 'item2', icon: '' },
                    { name: 'item3', icon: '' },
                ],
                iconList:[
                    { name: '飞书', icon: 'fa fa-telegram' },
                    { name: '邮箱', icon: 'fa fa-envelope-open' },
                    { name: '主题', icon: 'fa fa-adjust' },
                    { name: '蓝牙', icon: 'fa fa-bluetooth-b' },
                    { name: '计算器', icon: 'fa fa-calculator' },
                    { name: '源码', icon: 'fa fa-code' },
                ]
            }
        },
        components: {
            card,
            mButton,
            actionsheet,
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {
            displayActionsheet(display) {
                this.actionsheetProps = {autoClose: true,};
                this.$set(this.actionsheetProps,'display',display);
                this.$refs['actionsheet'].openActionsheet();
            },
            flexActionsheet(display, flex){
                this.actionsheetProps = {autoClose: true,};
                this.$set(this.actionsheetProps,'list',this.iconList);
                this.$set(this.actionsheetProps,'display',display);
                this.$set(this.actionsheetProps,'flex',flex);
                this.$refs['actionsheet'].openActionsheet();
            },
            mulitpleActionsheet(multiple){
                this.actionsheetProps = {autoClose: true,};
                this.$set(this.actionsheetProps,'multiple',multiple);
                this.$refs['actionsheet'].openActionsheet();
            },
            autoCloseActionsheet(multiple){
                this.actionsheetProps = {};
                this.$set(this.actionsheetProps,'autoClose',false);
                this.$set(this.actionsheetProps,'multiple',multiple);
                this.$refs['actionsheet'].openActionsheet();
            }
        },
    }
</script>
<style>
</style>