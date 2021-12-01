<template>
    <div class="message-component" :class="'position-'+position">
        <div class="message-content" v-if="isOpen" 
            @click="click" 
            :class="['status-' + status + '-bg', 'status-' + status + '-font']">
            <div class="message-icon">
                <i :class="iconClass"></i>
            </div>
            <div class="message-context">
                {{ context }}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            // [info, primary, succeed, warn, danger]
            status: { type: String, default: "info" },
            icon: { type: String },
            context: { type: String, default: "context" },
            during: { type: Number, default: 2000 },
            position: { type: String, default: "top" },
            click: {type: Function,default: function(){return 0}},
            close: {type: Function,default: function(){return 0}},
        },
        data() {
            return {
                isOpen: false,
                timeOutId: 0,
            };
        },
        watch: {
            isOpen(newV,oldV){
                if(oldV){
                    this.close();
                }
            }
        },
        computed: {
            iconClass() {
                if (this.icon) return this.icon;
                switch (this.status) {
                    case "info":
                        return "fa fa-info-circle";
                        break;
                    case "succeed":
                        return "fa fa-check-circle";
                        break;
                    case "warn":
                        return "fa fa-exclamation-circle";
                        break;
                    case "danger":
                        return "fa fa-times-circle";
                        break;
                    default:
                        return 0;
                        break;
                }
            },
        },
        created() { },
        mounted() { },
        methods: {
            openMessage() {
                this.isOpen = true;
                if(this.timeOutId)clearTimeout(this.timeOutId);
                this.timeOutId = setTimeout(() => {
                    this.isOpen = false;
                }, this.during);
            },
        },
    };
</script>
<style lang="scss">
    $bgColor: ("info-bg": rgb(217, 237, 247),
        "primary-bg": rgb(60, 61, 66),
        "succeed-bg": rgb(240, 239, 235),
        "warn-bg": rgb(253, 246, 236),
        "danger-bg": rgb(254, 240, 240),
    );
    $fontColor: ("info-font": rgb(15, 86, 160),
        "primary-font": rgb(182, 182, 184),
        "succeed-font": rgb(34, 87, 35),
        "warn-font": rgb(167, 107, 17),
        "danger-font": rgb(169, 68, 66),
    );

    @each $key,
    $value in $bgColor {
        .status-#{$key} {
            background-color: $value;
        }
    }

    @each $key,
    $value in $fontColor {
        .status-#{$key} {
            color: $value;
        }
    }

    .message-component {
        margin: 8px 0;
        width: 100%;
        position: absolute;
        left: 0;
        z-index: 9;

        &.position-top{
            top: 5%;
        }

        &.position-bottom{
            top: 90%;
        }

        .message-content {
            max-width: 250px;
            margin: 0 auto;
            padding: 12px 15px;
            border-radius: 3px;
            display: flex;
            font-size: 16px;
            align-items: flex-start;

            .message-icon {
                margin-right: 15px;
            }

            .message-context {}
        }
    }
</style>