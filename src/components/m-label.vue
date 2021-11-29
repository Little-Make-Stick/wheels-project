<template>
    <div class='m-label-component'>
        <div ref="m-label" class="m-label-content" :class="classObj">
            <div class="m-label-icon" v-if="icon">
                <i :class="icon"></i>
            </div>
            <div class="m-label-context">{{label}}</div>
            <div class="m-label-close" v-if="closed" 
                @click="targetCloseEvent">
                <i class="fa fa-times"></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            // [full, border]
            plain: {type: String,default: 'full'},
            // [solid, dashed]
            border: {type: String,default: ''},
            bgColor: {type: String, default: 'rgb(0,0,0)'},
            textColor: {type: String},
            label: {type: String,default: 'label'},
            icon: {type: String},
            closed: {type: Boolean,default: false},
            closeEvent: {
                type: Function,
            }
        },
        data(){
            return{
                classObj: {}
            }
        },
        watch:{},
        computed:{},
        created(){
            // this.classObj[`plain-${this.plain}`] = this.plain;
            this.$set(this.classObj,`plain-${this.plain}`,this.plain);
            // this.classObj[`border-${this.border}`] = this.border;
            this.$set(this.classObj,`border-${this.border}`,this.border);
        },
        mounted(){
            // bgColor,fontColor,borderColor
            if(this.bgColor){
                this.$refs['m-label'].style.backgroundColor = this.bgColor;
            }
            if(this.textColor){
                this.$refs['m-label'].style.borderColor = this.textColor;
                this.$refs['m-label'].style.color = this.textColor;
            }
            if(this.bgColor && !this.textColor){
                this.setLabelColor();
            }
        },
        methods:{
            setLabelColor(){
                return '#000';
            },
            targetCloseEvent(e){
                
                if(this.closeEvent){
                    this.closeEvent();
                }else{
                    let labelNode = e.target.parentNode.parentNode;
                    labelNode.style.display="none";
                }
            }
        },
    }
</script>
<style lang="scss">
    .m-label-component{
        display: inline-block;
        .m-label-content{
            display: flex;
            align-items: center;
            font-size: 8px;
            padding: 3px 10px;
            margin: 8px;
            border: .7px solid #fff;
            .m-label-icon{
                margin-right: 2px;
            }
            .m-label-context{
                max-width: 50px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .m-label-close{
                margin-left: 2px;
            }
        }
        .border-dashed{
            border-style: dashed;
        }
        .plain-border{
            background-color: transparent !important;
        }
    }
</style>