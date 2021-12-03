<template>
    <div class='dialog-demo-contain'>
        <card cardTitle="对话框">
            <m-button status="info" @click.native="normalDialog = true">normalDialog</m-button>

            <m-button status="warn" @click.native="confirmDialog = true">confirmDialog</m-button>

            <m-button status="danger" @click.native="customDialog = true">customDialog</m-button>

            <m-dialog ref="mDialog" v-if="confirmDialog" status="confirm" titleIcon="fa fa-info-circle"
                :confirm="{ title: 'confirm',handleFunct: clickHandle }"
                :cancel="{ title: 'cancel',handleFunct: clickHandle }"
                :close="{ title: 'close',handleFunct: clickHandle }"></m-dialog>
            <m-dialog ref="mDialog" v-if="normalDialog" status="normal" titleIcon="fa fa-info-circle"
                :close="{ title: 'close',handleFunct: clickHandle }"></m-dialog>
            <m-dialog ref="mDialog" v-if="customDialog" status="custom"
                :close="{ title: 'close',handleFunct: clickHandle }" class="custom-m-dialog">
                <div class="title">
                    custom
                </div>
                <div class="context">
                    <input type="text" placeholder="please enter your name">
                </div>
                <div class="options">
                    <m-button plain="border" size="mini" status="succeed">按钮一</m-button>
                    <m-button plain="border" size="mini" status="warn">按钮一</m-button>
                    <m-button plain="border" size="mini" status="danger">按钮一</m-button>
                    <m-button status="primary" size="mini" @click.native="clickHandle">取消</m-button>
                </div>
            </m-dialog>
        </card>
        <card cardTitle="对话框">
            <m-button status="info" @click.native="normalDialog_ = true">normalDialog</m-button>

            <m-button status="warn" @click.native="confirmDialog_ = true">confirmDialog</m-button>

            <m-button status="danger" @click.native="customDialog_ = true">customDialog</m-button>

            <m-dialog ref="mDialog" v-if="confirmDialog_" status="confirm" titleIcon="fa fa-info-circle"
                :confirm="{ title: 'confirm',handleFunct: clickHandle }"
                :cancel="{ title: 'cancel',handleFunct: clickHandle }"
                :close="{ title: 'close',handleFunct: clickHandle }" isCloseIcon></m-dialog>
            <m-dialog ref="mDialog" v-if="normalDialog_" status="normal" titleIcon="fa fa-info-circle"
                :close="{ title: 'close',handleFunct: clickHandle }" isCloseIcon></m-dialog>
            <m-dialog ref="mDialog" v-if="customDialog_" status="custom" isCloseIcon
                :close="{ title: 'close',handleFunct: clickHandle }" class="custom-m-dialog">
                <div class="title">
                    custom
                </div>
                <div class="context">
                    <input type="text" placeholder="please enter your name">
                </div>
                <div class="options">
                    <m-button plain="border" size="mini" status="succeed">按钮一</m-button>
                    <m-button plain="border" size="mini" status="warn">按钮一</m-button>
                    <m-button plain="border" size="mini" status="danger">按钮一</m-button>
                    <m-button status="primary" size="mini" @click.native="clickHandle">取消</m-button>
                </div>
            </m-dialog>
        </card>
    </div>
</template>
<script>
    import card from '../../components/card.vue';
    import mButton from '../../components/m-button.vue';
    import mDialog from '../../components/m-dialog.vue';
    export default {
        data() {
            return {
                confirmDialog: false,
                normalDialog: false,
                customDialog: false,
                confirmDialog_: false,
                normalDialog_: false,
                customDialog_: false
            }
        },
        components: {
            card,
            mDialog,
            mButton,
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {
            clickHandle(e) {
                // console.log(e)
                this.normalDialog = false;
                this.confirmDialog = false;
                this.customDialog = false;
                // console.log(this.$refs['mDialog'])
                this.$refs['mDialog'].closeDialog(e);
            }
        },
    }
</script>
<style lang="scss">
    .dialog-demo-contain {
        .card-component {
            .m-button-component {}

            .custom-m-dialog {
                .title {
                    font-size: 22px;
                    line-height: 30px;
                }

                .context {
                    margin: 20px 0;
                }

                .options {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 10px;

                }
            }
        }
    }
</style>