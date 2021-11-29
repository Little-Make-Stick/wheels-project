<template>
    <div class='m-button-component'>
        <div ref="mButton" class="m-button" 
            :class="classObj"
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
            // 颜色状态 [primary,info,succeed,warn,danger]
            status:{type:String,default:'primary'},
            // 填充状态 [full,border,text]
            plain:{type:String,default:'full'},
            circle:{type:Boolean,default:false},
            round:{type:Boolean,default:false},
            square:{type:Boolean,default:false},
            disabled:{type:Boolean,default:false},
            // 按钮图标
            icon:{type:String},
        },
        data(){
            return{
                classObj:{
                    'disabled': this.disabled,
                    'round': this.round,
                    'circle': this.circle,
                    'square': this.square,

                    // 'plain-'+this.plain: this.plain,
                    // 'status-'+this.status: this.status,
                    // 'size-'+this.size: this.size,

                    // `plain-${this.plain}`: this.plain,
                    // `status-${this.status}`: this.status,
                    // `size-${this.size}`: this.size,
                }
            }
        },
        watch:{},
        computed:{},
        created(){
            // this.classObj[`plain-${this.plain}`] = this.plain;
            this.$set(this.classObj,`plain-${this.plain}`,this.plain);
            // this.classObj[`status-${this.status}`] = this.status;
            this.$set(this.classObj,`status-${this.status}`,this.status);
            // this.classObj[`size-${this.size}`] = this.size;
            this.$set(this.classObj,`size-${this.size}`,this.size);
        },
        mounted(){
            if(this.circle || this.square){
                this.$nextTick(()=>{
                // console.log(this.$refs.mButton.clientWidth);
                this.$refs.mButton.style.height = this.$refs.mButton.clientWidth+'px';
                this.$refs.mButton.style.width = this.$refs.mButton.clientWidth+'px';
                // console.log(this.$refs.mButton.style,this.$refs.mButton.style.fontSize);
            })
            }
        },
        methods:{},
    }
</script>
<style lang="scss">

$status:(
    'primary': rgb(69,68,72),
    'info': rgb(69,150,255),
    'succeed': rgb(87,189,124),
    'warn': rgb(255,149,79),
    'danger': rgb(229,93,93),
);
$size:(
    'mini': .6rem,
    'xs': .8rem,
    'md': 1rem,
    'xl': 1.4rem,
);

.m-button-component,.m-button{
    display: inline-block;
    padding: 8px 20px;
    border-radius: 2px;
}

@each $key ,$val in $status{
    .plain-full.status-#{$key}{
        background-color: $val;
        border: 1px solid $val;
        color: #fff;
    }
    .plain-border.status-#{$key}{
        border: 1px solid $val;
        color: $val;
    }

    .plain-text.status-#{$key}{
        color: $val;
    }
};

@each $key ,$val in $size{
    .size-#{$key}{
        font-size: $val;
    }
};


.disabled{
    opacity: 0.7;
    /* 鼠标禁止触发事件 */
    // pointer-events: none;
    /* 鼠标禁止样式 */
    cursor: not-allowed;
}

.round{
    border-radius: 20px;
}

.circle,.square{
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle{
    border-radius: 50%;
}


</style>