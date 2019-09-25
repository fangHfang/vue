<template>
    <div class="main">
        <div class="head">
            <div class="addr">
                <span>&#xe61a;</span>
                <em>平安路> </em>
                <b>&#xe635;</b>
                <div class="weah">
                    <span>&#xe64d;</span>
                </div>
            </div>
            <input type="text" class="research" placeholder="炸鸡，满足你对美食的幻想">
        </div>
        <div class="headers"></div>
        <div class="banner">
            <img src="../assets/img/banner1_03.png" alt="">
            <img src="../assets/img/banner2_03.png" alt="">
            <img src="../assets/img/banner3_03.png" alt="">
            <img src="../assets/img/banner4_03.png" alt="">
            <img src="../assets/img/banner5_03.png" alt="">
            <img src="../assets/img/banner6_03.png" alt="">
        </div>
        <swiper :option="swiperOption">
            <swiper-slide>
                <div class="tit">
                    <router-link :to="{name:'category',query:{id:item.cid,name:item.cname}}" class="tit1"
                                 v-for="item in cats" :key="item.cid">
                        <img :src="'api/img/'+item.cthumb" alt="">
                        <span>{{item.cname}}</span>
                    </router-link>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="tit">
                    <router-link :to="{name:'category',query:{id:item.cid,name:item.cname}}" class="tit1"
                                 v-for="item in elsecats" :key="item.cid">
                        <img :src="'/api/img/'+item.cthumb" alt="">
                        <span>{{item.cname}}</span>
                    </router-link>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="youhui0">
            <strong>优惠专区</strong>
            <div class="youhui">
                <div class="youhui_item">
                    <img src="../assets/img/youhui1_03.png" alt="">
                </div>
                <div class="youhui_item">
                    <img src="../assets/img/youhui1_05.png" alt="">
                </div>
                <div class="youhui_item1">
                    <div class="youhui_item11">
                        <b>必吃</b>
                        <p>6折寻好味</p>
                        <img src="../assets/img/youhui1_09.png" alt="">
                    </div>
                    <div class="youhui_item11">
                        <b>必吃</b>
                        <p>6折寻好味</p>
                        <img src="../assets/img/youhui1_11.png" alt="">
                    </div>
                </div>
                <div class="youhui_item1">
                    <div class="youhui_item11">
                        <b>必吃</b>
                        <p>6折寻好味</p>
                        <img src="../assets/img/youhui1_12.png" alt="">
                    </div>
                    <div class="youhui_item11">
                        <b>必吃</b>
                        <p>6折寻好味</p>
                        <img src="../assets/img/youhui1_14.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="youhui0">
            <strong>为你优选</strong>
            <div class="youhui youxuan">
                <div class="youhui_item">
                    <img src="../assets/img/yx_03.png" alt="">
                </div>
                <div class="youhui_item">
                    <img src="../assets/img/yx_05.png" alt="">
                </div>
                <div class="youhui_item">
                    <img src="../assets/img/yx_09.png" alt="">
                </div>
                <div class="youhui_item">
                    <img src="../assets/img/yx_10.png" alt="">
                </div>
                <div class="youhui_item">
                    <img src="../assets/img/yx_13.png" alt="">
                </div>
                <div class="youhui_item">
                    <img src="../assets/img/yx_14.png" alt="">
                </div>
            </div>
        </div>
        <!-- footer部分 -->
        <div class="footer0"></div>
        <Footernav></Footernav>
    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import Footernav from "./footernav";
    import 'swiper/dist/css/swiper.css';

    export default {
        data: function () {
            return {
                cats: [],
                elsecats: [],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        mounted: function () {
            this.$http.get("/api/category").then((res) => {
                this.cats = res.body.slice(0, 10);
                this.elsecats = res.body.slice(10);
            });
            this.$store.state.nav = 1;
        },
        components: {
            swiper,
            swiperSlide,
            Footernav
        }
    }

</script>

<style scoped>
    .swiper-container .swiper-notification {
        z-index: 999;
        background: red;
    }

    .head {
        width: 100%;
        background: #FFF0D7;
        padding: 0.2rem;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999999999;
    }

    .headers {
        width: 100%;
        height: 3rem;
    }

    .addr {
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        color: #333;
        font-size: 0.14rem;
    }

    .addr span {
        font-family: 'iconfont';
        font-size: 0.14rem;
        display: block;
        float: left;
    }

    .addr em {
        display: block;
        float: left;
    }

    .addr b {
        font-family: 'iconfont';
        font-size: 1rem;
        float: right;
    }

    .weah {
        float: right;
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.3rem;
    }

    .weah span {
        font-family: 'iconfont';
        font-size: 1rem;
    }

    .research {
        width: 100%;
        height: 1rem;
        display: block;
        border: none;
    }

    .banner {
        width: 100%;
        height: 3rem;
        padding: 0.2rem;
        position: relative;
    }

    .banner img {
        width: 100%;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .tit3 {
        width: 100vw;
        position: relative;
    }

    .tit0 {
        overflow-x: scroll;
    }

    .tit2 {
        width: 200vw;
        overflow: hidden;
    }

    .tit0::-webkit-scrollbar {
        display: none;
    }

    .tit {
        width: 100vw;
        height: 6.3rem;
        float: left;
        padding: 0.5rem 0.2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
    }

    .tit1 {
        width: 1.8rem;
        background: #fff;
        text-align: center;
    }

    .tit1 img {
        width: 1.8rem;
        height: 1.8rem;
    }

    .tit1 span {
        display: block;
        margin-top: 0.2rem;
        font-size: 0.14rem;
        color: #333;
    }

    .pagers {
        width: 3rem;
        height: 0.1rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 6.2rem;
        left: 3.5rem;
    }

    .pager {
        width: 1.2rem;
        height: 0.1rem;
        border-radius: 0.1rem;
        background: #ccc;
    }

    .pageractive {
        background: #ffc640;
    }

    .youhui0 {
        padding: 0.3rem 0.2rem;
    }

    .youhui0 strong {
        display: block;
        font-size: 0.6rem;
        line-height: 0.5rem;
        font-weight: bold;
        color: #333;
    }

    .youhui {
        width: 100%;
        height: 7.8rem;
        margin-top: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
    }

    .youhui_item {
        width: 49%;
    }

    .youhui_item1 {
        width: 49%;
        margin-top: 0.1rem;
        display: flex;
        justify-content: space-between;
    }

    .youhui_item11 {
        width: 49%;
        height: 4rem;
        float: left;
        padding-top: 0.5rem;
        background: #fefaf6;
    }

    .youhui_item11 b {
        display: block;
        font-size: 0.2rem;
        color: #333;
    }

    .youhui_item11 p {
        font-size: 0.14rem;
        color: #999;
    }

    .youhui_item11 img {
        height: 2rem;
        display: block;
        margin-top: 0.5rem;
    }

    .youxuan {
        height: 11.8rem;
    }

    .dd_tit {
        margin-left: 0.5rem;
        margin-top: 0.2rem;
    }

    .dd_tit img {
        width: auto;
        height: 1rem;
    }

    .dd_item0 {
        overflow-x: scroll;
    }

    .dd_item0::-webkit-scrollbar {
        display: none;
    }

    .dd_item {
        width: 56rem;
    }

    .dd_item img {
        width: 8rem;
        height: auto;
        display: block;
        float: left;
        margin-right: 0.5rem;
    }

    .tuiijan {
        height: 1.6rem;
        padding-left: 0.5rem;
    }

    .tuijian_strong {
        display: block;
        font-size: 0.55rem;
        font-weight: bold;
    }

    .tuijian3 {
        width: 0.6rem;
        height: 0.02rem;
        background-color: #999999;
        margin-top: 0.79rem;
        margin-left: 0.1rem;
    }

    .choose {
        width: 100%;
        height: 0.78rem;
        font-size: 0.45rem;
        padding: 0 0.3rem;
        display: flex;
        justify-content: space-around;
        font-family: 'iconfont';
        color: #666;
    }

    .choose2 {
        width: 0.18rem;
        height: 0.13rem;
        margin-right: 0.81rem;
    }

    .choose3 {
        float: left;
        margin-right: 1rem;
    }

    .choose4 {
        float: left;
        margin-right: 0;
    }

    .pailie {
        width: 100%;
        /* height: 5.15rem; */
        border-top: 0.01rem solid #EEEEEE;
        padding: 0.5rem 0.3rem;
    }

    .pailie1 {
        width: 1.85rem;
        height: 1.85rem;
        margin-right: 0.35rem;
        float: left;
    }

    .pailie h1 {
        text-align: left;
        font-size: 0.53rem;
        margin-bottom: 0.3rem;
    }

    .pailie h2 {
        font-size: 0.3rem;
        color: #676767;
        margin-right: 0.27rem;
        float: left;
    }

    .pailie2 {
        margin-bottom: 0.3rem;
        height: 0.35rem;
    }

    .pailie3 {
        margin-bottom: 0.4rem;
        height: 0.35rem;
        font-family: 'iconfont';
    }

    .pailie3 span {
        float: left;
        margin-right: 0.15rem;
        font-size: 0.35rem;
    }

    .pailie3_shuxian {
        width: 0.03rem;
        height: 0.35rem;
        background-color: #999;
        float: left;
    }

    .pailie3_1 {
        margin-left: 0.15rem;
    }

    .pailie4 {
        margin-left: 2.3rem;
        font-size: 0.35rem;
        text-align: left;
        color: rgb(232, 71, 11);
        margin-bottom: 0.4rem;
    }

    .pailie5 {
        width: 8.5rem;
        height: 0.01rem;
        background-color: #eee;
        margin-left: 2.3rem;
        margin-bottom: 0.3rem;

    }

    .pailiez0 {
        height: 0.4rem;
        width: 100%;
        margin-bottom: 0.3rem;
    }

    .pailie6 {
        width: 0.4rem;
        height: 0.4rem;
        background-color: rgb(240, 115, 115);
        font-size: 0.35rem;
        color: white;
        line-height: 0.4rem;
        float: left;
        margin-left: 2.3rem;
        margin-right: 0.2rem;
    }

    .pailiez0 div.pailie8 {
        background-color: rgb(241, 136, 79);
    }

    .pailiez0 div.pailie2_2 {
        background-color: rgb(112, 188, 70);
    }

    .pailie7 {
        float: left;
        font-size: 0.35rem;
        color: #999;
    }

    .footer0 {
        float: left;
        height: 1.6rem;
        width: 100%;
        background-color: #fff;
    }

</style>