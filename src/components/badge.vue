<template>
    <div class='badge-component'>
        <div ref="badge" class="badge-content" :class="classObj">
            <div class="badge-context">{{badgeText}}</div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            // [full, border]
            plain: {type: String,default: 'full'},
            bgColor: {type: String},
            textColor: {type: String},
            badge: {type: String,default: 'badge'},
        },
        data(){
            return{
                classObj:{},
                badgeText: this.badge,
            }
        },
        watch:{},
        computed:{},
        created(){
            this.classObj[`plain-${this.plain}`] = this.plain;
            this.$set(this.classObj,`plain-${this.plain}`,this.plain);
        },
        mounted(){
            if(Number(this.badge) > 99){
                this.badgeText = '99+';
            }

            // bgColor,fontColor,borderColor
            if(this.bgColor){
                this.$refs['badge'].style.backgroundColor = this.bgColor;
            }
            if(this.textColor){
                this.$refs['badge'].style.borderColor = this.textColor;
                this.$refs['badge'].style.color = this.textColor;
            }
            if(this.bgColor && !this.textColor){
                this.setBadgeColor();
            }
        },
        methods:{
            setBadgeColor(){
                return 'fff';
            }
        },
    }
</script>
<style lang="scss">
    .badge-component{
        display: inline-block;
        margin: 8px 15px;
        .badge-content{
            border-radius: 50%;
            background-color: red;
            color: #fff;
            border: 1px solid red;
            display: inline-block;
            transform: scale(0.7);
            .badge-context{
                padding: 2px;
                font-size: 10px;
                max-width: 20px;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        .plain-border{
            background-color: transparent;
        }
    }
</style>