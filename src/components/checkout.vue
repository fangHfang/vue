<template>
    <div class="main">
        <div id="content">
            <header>
                <p class="back" @click="$router.go(-1)">&lt;</p>
                <p class="peisong">订单配送至</p>
                <p class="shouhuo">选择收货地址&#xe694;</p>
                <div class="getstop">
                    <div class="getstop_title1">
                        <p class="getstop_title1_zi1">送达时间</p>
                        <p class="getstop_title1_zi2">尽快送达(9:50送达) <span>&#xe694;</span></p>
                    </div>
                    <div class="yuding">
                        支持预定
                    </div>
                    <div class="pay_line"></div>
                    <div class="getstop_title1 pay_top">
                        <p class="getstop_title1_zi1">支付方式</p>
                        <p class="getstop_title1_zi2">支付宝 <span>&#xe694;</span></p>
                    </div>
                </div>
                <div class="description">
                    <div class="desc_title1">
                        {{shop.sname}}
                    </div>
                    <div class="desc_title2">
                        <div class="desc_title2_desc" v-for="item in list" :key="item.gid">
                            <p class="desc_title2_desc1">{{item.gname}}</p>
                            <div class="desc_title2_desc2">
                                <p class="desc_title2_desc2_num">x{{item.gcount}}</p>
                                <p class="desc_title2_desc2_price">￥{{item.gcount*item.gprice}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="desc_title3">
                        <div class="desc_title3_xinxi">
                            <p class="desc_title3_xinxi2">配送费</p>
                            <p class="desc_title3_xinxi3">￥{{shop.sdistributionfee}}</p>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="supermember">
                    <div class="supermembertitle_price">
                        <p class="supermembertitle_price_title">￥{{total}}&#xe69e;</p>
                    </div>
                </div>
            </main>
            <div class="pay">
                <p class="pay_price">￥<span>{{total}}</span></p>
                <a href="">
                    <div class="pay_button">确认支付</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "checkout",
        data: function () {
            return {
                shop: {},
                goods: [],
            }
        },
        computed: {
            list: function () {
                let list = [];
                this.goods.forEach(function (obj) {
                    obj.data.forEach(function (goods) {
                        if (goods.gcount > 0) {
                            list.push(goods);
                        }
                    })
                });
                if (list.length === 0) {
                    this.showlist = false;
                }
                return list;

            },
            total: function () {
                let total = 0;
                this.goods.forEach(function (obj) {
                    obj.data.forEach(function (goods) {
                        if (goods.gcount > 0) {
                            total += goods.gcount * goods.gprice;
                        }
                    })
                })
                total += this.shop.sdistributionfee;
                return total;
            }
        },
        mounted: function () {
            this.shop = JSON.parse(localStorage.shop);
            this.goods = JSON.parse(localStorage["goods" + this.shop.sid]);
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 561408 */
        src: url('https://at.alicdn.com/t/font_561408_y5bpsuy39apuv7vi.eot');
        src: url('https://at.alicdn.com/t/font_561408_y5bpsuy39apuv7vi.eot?#iefix') format('embedded-opentype'),
        url('https://at.alicdn.com/t/font_561408_y5bpsuy39apuv7vi.woff') format('woff'),
        url('https://at.alicdn.com/t/font_561408_y5bpsuy39apuv7vi.ttf') format('truetype'),
        url('https://at.alicdn.com/t/font_561408_y5bpsuy39apuv7vi.svg#iconfont') format('svg');
    }

    body {
        background-color: #f5f5f5;
    }

    header {
        width: 100%;
        height: 15.71rem;
        background: linear-gradient(#019eff, #ffffff);
        padding: 0 0.2rem;
        overflow: hidden;
    }

    .back {
        font-size: 0.53rem;
        color: #ffffff;
        margin-top: 0.76rem;
        display: inline-block;
        float: left;
        font-family: 'iconfont';
    }

    .peisong {
        font-size: 0.36rem;
        margin-left: 0.31rem;
        color: #ffffff;
        margin-top: 0.62rem;
        display: inline-block;
    }

    .shouhuo {
        font-size: 0.6rem;
        margin-top: 0.37rem;
        margin-left: 0.31rem;
        font-family: 'iconfont';
        color: #ffffff;
    }

    .getstop {
        width: 10.32rem;
        height: 3.8rem;
        background-color: #ffffff;
        border-radius: 0.05rem;
        margin-top: 0.34rem;
        padding: 0.58rem 0 0 0.45rem;
    }

    .getstop_title1 {
        width: 9.44rem;
        height: 0.48rem;
        line-height: 0.48rem;
    }

    .getstop_title1_zi1 {
        font-size: 0.4rem;
        color: #000000;
        float: left;

    }

    .getstop_title1_zi2 {
        font-size: 0.4rem;
        color: #2397fe;
        float: right;
        font-family: 'iconfont';
    }

    .getstop_title1_zi2 span {
        color: #d3d2d8;
    }

    .yuding {
        width: 1.44rem;
        height: 0.47rem;
        border: 0.01rem solid #999999;
        font-size: 0.28rem;
        text-align: center;
        line-height: 0.47rem;
        color: #999999;
        margin-top: 0.23rem;
        border-radius: 0.03rem;
    }

    .pay_line {
        width: 9.4rem;
        height: 0.5rem;
        border-bottom: 0.01rem dotted #e4e4e4;
    }

    .pay_top {
        margin-top: 0.6rem;
    }

    .description {
        width: 10.32rem;
        height: 7.76rem;
        margin-top: 0.28rem;
        background-color: #ffffff;
        padding: 0.54rem 0 0 0.47rem;
    }

    .desc_title1 {
        width: 9.43rem;
        height: 1.18rem;
        border-bottom: 0.05rem solid #dfdfdf;
        font-size: 0.48rem;
        color: #000000;
        font-weight: bold;
    }

    .desc_title2 {
        width: 9.43rem;
        height: 1.8rem;
        border-top: 0.01rem solid #e4e4e4;
        margin-top: 0.05rem;
        padding-top: 0.43rem;
    }

    .desc_title2 img {
        width: 1rem;
        height: 1rem;
        float: left;
    }

    .desc_title2_desc {
        width: 8.23rem;
        height: 1rem;
        float: left;
        margin-left: 0.2rem;
    }

    .desc_title2_desc1 {
        font-size: 0.34rem;
        color: #000000;
        float: left;
    }

    .desc_title2_desc2 {
        font-size: 0.34rem;
        color: #000000;
        float: right;
        width: 1.92rem;
        height: 0.4rem;
    }

    .desc_title2_desc2_num {
        float: left;
    }

    .desc_title2_desc2_price {
        float: right;
    }

    .desc_title3 {
        width: 9.44rem;
        height: 1.26rem;
        border-top: 0.01rem dotted #e4e4e4;
        border-bottom: 0.01rem dotted #e4e4e4;
        padding-top: 0.39rem;
    }

    .desc_title3_xinxi {
        width: 9.44rem;
        height: 0.5rem;
    }

    .desc_title3_xinxi1 {
        width: 0.96rem;
        height: 0.43rem;
        text-align: center;
        line-height: 0.43rem;
        border: 0.01rem solid #d3d6db;
        float: left;
        background-color: #eff3f6;
        font-size: 0.29rem;
        color: #8695aa;
    }

    .desc_title3_xinxi2 {
        font-size: 0.32rem;
        float: left;
        color: #000000;
        margin-left: 0.38rem;
    }

    .desc_title3_xinxi3 {
        font-size: 0.32rem;
        float: right;
        color: #000000;
    }

    .desc_title4 {
        width: 9.44rem;
        height: 1.49rem;
        border-bottom: 0.04rem solid #dfdfdf;
        font-size: 0.38rem;
        line-height: 1.49rem;
        color: #000000;
        margin-bottom: 0.05rem;
    }

    .desc_title5 {
        width: 9.44rem;
        height: 1.37rem;
        border-top: 0.01rem solid #dfdfdf;
        line-height: 1.37rem;
    }

    .desc_title5_xinxi1 {
        font-size: 0.3rem;
        color: #bbbbbb;
        font-family: 'iconfont';
        float: left;
    }

    .desc_title5_xinxi2 {
        font-size: 0.5rem;
        color: #000000;
        float: right;
    }

    .desc_title5_xinxi2 span {
        font-size: 0.38rem;
    }

    main {
        width: 100%;
        height: auto;
        margin-top: 0.27rem;
    }

    .supermember {
        width: 10.32rem;
        height: 2rem;
        margin: 0 auto;
        background-color: #ffffff;
        border-left: 0.06rem solid #d6c46e;
        padding: 0.53rem 0.43rem 0 0.4rem;
    }

    .supermember_title1 {
        font-size: 0.4rem;
        color: #000000;
        font-family: 'iconfont';
    }

    .supermembertitle {
        width: 4.27rem;
        height: 1rem;
        float: left;
    }

    .supermember_title2 {
        font-size: 0.29rem;
        color: #999999;
    }

    .supermembertitle_price {
        width: 2.4rem;
        height: 1.02rem;
        float: right;
        text-align: center;
        line-height: 1.02rem;
    }

    .supermembertitle_price_title {
        font-size: 0.4rem;
        font-family: 'iconfont';
    }

    .beizhu {
        width: 10.32rem;
        height: 4.42rem;
        margin: 0.26rem auto 2rem;
        background-color: #ffffff;
    }

    .beizhu_title1 {
        width: 100%;
        height: 1.45rem;
        border-top: 0.01rem solid #eeeeee;
        padding-left: 0.46rem;
        font-size: 0.4rem;
        line-height: 1.45rem;
    }

    .canju {
        float: left;
    }

    .canju_choose {
        float: right;
        font-size: 0.36rem;
        color: #bbbbbb;
        font-family: 'iconfont';
    }

    /*尾部*/
    .pay {
        width: 100%;
        height: 1.5rem;
        background-color: #3c3c3e;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    .pay_price {
        float: left;
        font-size: 0.45rem;
        color: #ffffff;
        margin-top: 0.46rem;
        margin-left: 0.46rem;
    }

    .pay_button {
        width: 3.85rem;
        height: 1.5rem;
        float: right;
        text-align: center;
        line-height: 1.5rem;
        color: #ffffff;
        font-size: 0.45rem;
        background-color: #59d178;
    }
</style>