<template>
    <div class="main">
        <div class="head">
            <div class="head-tit">
                <div class="head_title">{{name}}</div>
                <div class="back" @click="goback">&lt;</div>
            </div>
            <div class="head_cont">
                <div class="head_items">
                    <div :class="{active:tid==0}" @click="tid=0">全部</div>
                    <div :class="{active:tid==0}">包子</div>
                    <div :class="{active:tid==0}">热粥</div>
                        <div :class="{active:tid==0}">鸡蛋</div>
                        <div :class="{active:tid==0}">点心</div>
                        <div :class="{active:tid==0}">煎饼</div>
                    <div v-for="item in type" :key="item.tid" @click="tid=item.tid" :class="{active:tid==item.tid}">
                        {{item.tname}}
                    </div>
                </div>
                <div class="more" @click="showmore">+</div>
            </div>
        </div>
        <div class="mask" v-show="showbg">
            <div class="m_cont">
                <div class="m_head">
                    <p>请选择分类</p>
                    <p @click="showbg=false">X</p>
                </div>
                <ul class="m_left">
                    <li>全部</li>
                    <li v-for="item in cats" :key="item.cid" :class="{active:item.cid==nowtype}"
                        @click="nowtype=item.cid">{{item.cname}}
                    </li>
                </ul>
                <ul class="m_right">
                    <li><img :src="'/api/img/'+nowimg" alt="">
                        <span>全部</span></li>
                    <li v-for="item in types" :key="item.tid"><img :src="'/api/img/'+item.thumb" alt="">
                        <span>{{item.tname}}</span></li>
                </ul>
            </div>
        </div>
        <!-- 店铺 -->
        <div class="ms_pztc">
            <scroller :on-refresh="refresh" :on-infinite="infinite">
                <ul>
                    <li class="pailie" v-for="item in shops" :key="item.sid">
                        <router-link :to="{name:'shop',query:{sid:item.sid}}">
                            <div class="pailie1">
                                <img :src="'/api/img/'+item.sthumb" alt="">
                            </div>
                            <div class="e_d_r">
                                <div class="pailie2">
                                    <h1>{{item.sname}}</h1>
                                    <h2>分<span>{{item.start}}</span></h2>
                                    <h2>月售 <span>{{item.sange}}</span></h2>
                                    <h2>蜂鸟专送</h2>
                                </div>
                                <div class="pailie3">
                                    <p>起送 <span>{{item.sendingfee}}</span>￥</p>
                                    <div class="pailie3_shuxian"></div>
                                    <p class="pailie3_1">配送费&#xe645; <span>{{item.deliveryfee}}</span></p>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </scroller>
        </div>
    </div>
</template>
<script>
    export default {
        name: "category",
        data: function () {
            return {
                name: "",   //当前栏目名称
                cid: "",    //当前栏目id
                type: [],   //当前栏目包含的子栏目
                showbg: false, //是否显示顶部菜单
                cats: [],   //顶部菜单包含的栏目信息
                types: [],  //顶部菜单包含的子栏目信息
                nowtype: 1, //顶部菜单当前显示类型
                shops: [],  //当前显示的店铺信息
                page: 0,     //当前显示的店铺页数
                tid: 0       //当前默认显示的小分类的id
            }
        },
        mounted: function () {
            this.name = this.$route.query.name;
            this.cid = this.$route.query.id;
            this.$http.get("/api/gettype?cid" + this.cid).then(res=> {
                this.type = res.body;
            });
            this.$http.get("/api/getallshop?cid=" + this.cid).then(res => {
                this.shops = res.body;
            });
        },
        computed: {
            nowimg: function () {
                if (this.cats.length === 0) {
                    return;
                } else {
                    return this.cats.filter(v => v.cid === this.nowtype)[0].cthumb;
                }
            }
        },
        watch: {
            nowtype: function () {
                this.gettype();
            },
            tid: function () {
                this.page = 0;
                if (this.tid == 0) {
                    this.refresh(function () {
                    });
                    return;
                }
                this.$http.get("/api/getsomeshop?tid=" + this.tid).then(function (req) {
                    this.shops = req.body;
                })
            }
        },
        methods: {
            goback: function () {
                this.$router.go(-1);
            },
            //打开菜单顶部
            showmore: function () {
                this.showbg = true;
                this.$http.get("/api/category").then(res => {
                    this.cats = res.body;
                });
                this.gettype();
            },
            //获取当前大分类下的小分类
            gettype: function () {
                this.$http.get("/api/gettype?cid=" + this.nowtype).then(res => {
                    this.types = res.body;
                })
            },
            //更新店铺数据
            refresh: function (done) {
                if (this.tid == 0) {
                    this.$http.get("/api/getallshop?cid=" + this.cid).then(res => {
                        this.shops = res.body;
                        done();
                    });
                } else {
                    this.$http.get("/api/getsomeshop?tid=" + this.tid).then(function (req) {
                        this.shops = req.body;
                        done();
                    })
                }
            },
            //加载更多店铺数据
            infinite: function (done) {
                if (this.tid == 0) {
                    this.page++;
                    this.$http.get("/api/getallshop?cid=" + this.cid + "&page=" + this.page).then(res => {
                        if (res.body.length === 0) {
                            done(true);
                            return;
                        }
                        this.shops = this.shops.concat(res.body);
                        this.$nextTick(function () {
                            done();
                        });// 在当前dom更新完毕之后
                    });
                } else {
                    this.page++;
                    this.$http.get("/api/getsomeshop?tid=" + this.tid + "&page=" + this.page).then(function (res) {
                        if (res.body.length === 0) {
                            done(true);
                            return;
                        }
                        this.shops = this.shops.concat(res.body);
                        this.$nextTick(function () {
                            done();
                        });// 在当前dom更新完毕之后
                    })
                }
            }
        }
    }
</script>
<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 572244 */
        src: url('https://at.alicdn.com/t/font_572244_5wyxrb22nvjcerk9.eot');
        src: url('https://at.alicdn.com/t/font_572244_5wyxrb22nvjcerk9.eot?#iefix') format('embedded-opentype'),
        url('https://at.alicdn.com/t/font_572244_5wyxrb22nvjcerk9.woff') format('woff'),
        url('https://at.alicdn.com/t/font_572244_5wyxrb22nvjcerk9.ttf') format('truetype'),
        url('https://at.alicdn.com/t/font_572244_5wyxrb22nvjcerk9.svg#iconfont') format('svg');
    }

    .mask {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }

    .m_cont {
        width: 100vw;
        height: 70vh;
        background: #fff;
    }

    .m_head {
        width: 100vw;
        height: 6vh;
        float: left;
        padding: 0.2rem 2vw;
        background: #ccc;
        font-size: 0.5rem;
        color: #333;
        display: flex;
        justify-content: space-between;
    }

    .m_left {
        width: 30vw;
        height: 64vh;
        background: aliceblue;
        float: left;
        overflow: auto;
    }

    .m_right {
        width: 70vw;
        height: 64vh;
        background: #fff;
        float: left;
    }

    .m_right li img {
        width: 0.5rem;
        height: 0.5rem;
        float: left;
        margin-right: 0.4rem;
        border-radius: 0.5rem;
    }

    .m_left li, .m_right li {
        margin-top: 0.5rem;
        font-size: 0.5rem;
        color: #333;
        text-align: left;
        padding: 0 0.5rem;
    }

    .head_cont {
        width: 100%;
    }

    .head_items {
        width: 90vw;
        height: 0.7rem;
        float: left;
        overflow-x: auto;
        text-align: left;
        overflow-y: hidden;
        white-space: nowrap;
    }

    .more {
        width: 10vw;
        height: 0.7rem;
        background: rgb(246, 197, 64);
        float: left;
        line-height: 0.7rem;
        text-align: center;
        font-size: 0.6rem;
        color: aliceblue;
    }

    .head_items div {
        height: 0.7rem;
        vertical-align: top;
        display: inline-block;
        font-size: 0.5rem;
        color: #333;
        margin: 0 0.2rem;
    }

    .head {
        width: 100%;
        background: rgb(255, 198, 64);
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }

    .head-tit {
        width: 100%;
        padding: 0.14rem 0.34rem;
        float: left;
    }

    .back {
        color: #333;
        font-size: 0.5rem;
        line-height: 0.8rem;
        position: absolute;
        top: 0;
        left: 0.34rem;
    }

    .head_title {
        margin: 0 auto;
        font-size: 0.5rem;
    }

    body {
        font-size: 12px;
    }

    main {
        width: 100%;
        position: absolute;
        top: 1.29rem;
        flex-direction: column;
        overflow-y: scroll;
    }

    .xiaofenlei1 img {
        width: 1.3rem;
        height: 1.3rem;
    }

    .xiaofenlei1 a {
        width: 1.5rem;
        height: 0.35rem;
        /* text-align: center; */
        line-height: 0.35rem;
        margin-left: 0.2rem;
    }

    .xiaofenlei_top div.xiaofenlei5 {
        margin-right: 0;
    }

    .xiaofenlei_bottom {
        width: 100%;
        height: 1.3rem;
    }

    .xiaofenlei_bottom1 {
        width: 0.3rem;
        height: 0.06rem;
        background-color: #B4B4B4;
        margin-top: 0.62rem;
        float: left;
        margin-right: 0.12rem;
        margin-left: 4.9rem;
    }

    .xiaofenlei_bottom2 {
        width: 0.3rem;
        height: 0.06rem;
        background-color: #DDDDDD;
        margin-top: 0.62rem;
        float: left;
    }

    .guanggao {
        height: 2.56rem;
        width: 10.26rem;
        background-color: #F7F7F7;
        margin-left: 0.3rem;
        padding-top: 0.4rem;
        padding-left: 0.4rem;
        position: relative;
    }

    .guanggao1 {
        font-size: 0.5rem;
        color: #333;
        font-weight: bold;
    }

    .guanggao2 {
        font-size: 0.38rem;
        color: #777;
    }

    .guanggao3 {
        font-size: 0.35rem;
        color: #af8260;
        margin-top: 0.2rem;
        font-weight: bold;

    }

    .guanggao img {
        float: right;
        width: 3.5rem;
        height: 2.1rem;
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;

    }

    .tuiijan {
        width: 100%;
        height: 1.6rem;
        padding-left: 3.5rem;
    }

    .tuijian1 {
        width: 0.6rem;
        height: 0.02rem;
        background-color: #999999;
        float: left;
        margin-top: 0.79rem;
        margin-right: 0.1rem;
    }

    .tuijian3 {
        width: 0.6rem;
        height: 0.02rem;
        background-color: #999999;
        margin-top: 0.79rem;
        float: left;
        margin-left: 0.1rem;
    }

    .tuijian2 {
        line-height: 1.6rem;
        float: left;
        font-size: 0.48rem;
        color: black;
        font-weight: bold;
    }

    .choose {
        width: 100%;
        height: 0.78rem;
        font-size: 0.45rem;
        padding: 0 0.3rem;
        /* 	display: flex;
            justify-content:space-around; */
        font-family: 'iconfont';
        color: #666;
    }

    .choose p.choose1 {
        margin-right: 0.18rem;
        float: left;
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

    .pailie2 span {
        color: #ff934c;
    }

    .pailie2 h1 {
        text-align: left;
        font-size: 0.53rem;
        margin-bottom: 0.3rem;
        color: #333;
    }

    .pailie h2 {
        font-size: 0.3rem;
        color: #676767;
        margin-right: 0.27rem;
        float: left;
    }

    .pailie2 {
        margin-bottom: 0.3rem;
        overflow: hidden;
    }

    .pailie3 {
        margin-bottom: 0.4rem;
        height: 0.35rem;
        font-family: 'iconfont';
    }

    .pailie3 p {
        float: left;
        margin-right: 0.15rem;
        font-size: 0.35rem;
        text-align: left;
        color: #999;
    }
    .pailie3 p span{
        color: #ffc778;
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
        color: rgb(232, 71, 11);
        margin-bottom: 0.4rem;
        text-align: left;
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

    .footer {
        width: 100%;
        height: 1.5rem;
        background-color: #F6F6F6;
        position: fixed;
        bottom: 0;
        left: 0;
        padding-top: 0.2rem;
        border-top: 0.01rem solid #C8C8C8;
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        justify-content: space-around;
        color: #818181;
    }

    .footer1 {
        width: 0.75rem;
        height: 1.15rem;
        text-align: center;
        float: left;
        /* margin-right: 1.2rem; */

    }

    .footer1 p {
        width: 0.65rem;
        height: 0.65rem;
        font-family: 'iconfont';
        font-size: 0.65rem;
        text-align: center;
        margin-bottom: 0.1rem;
        margin-left: 0.05rem;
    }

    .footer1 span {
        font-size: 0.3rem;
    }

    .ms_pztc {
        width: 100%;
        height: 20rem;
        overflow: hidden;
        padding: 0 0.3rem;
        margin-top: 1.7rem;
        position: relative;
    }

    .ms_pztc1 {
        width: 100%;
        height: 0.8rem;
        margin-top: 0.3rem;
        font-size: 0.5rem;
        color: #363636;
        font-weight: bold;
    }

    .ms_pztc1 p {
        float: left;
    }

    .ms_pztc1 span {
        font-size: 0.35rem;
        float: right;
        font-family: 'iconfont';
        color: #666;
    }

    .ms_pztc2 {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .ms_pztc2 img {
        width: 3.3rem;
        height: 3.3rem;
    }

    .ms_pztc3 {
        width: 3.3rem;
        height: 2.5rem;
        float: left;
        margin-right: 0.15rem;
    }

    .ms_pztc3:last-child {
        margin-right: 0;
    }

    .ms_pztc31 {
        width: 2.75rem;
        height: 0.42rem;
        font-weight: bold;
        font-size: 0.42rem;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 0.3rem;
        margin-left: 0.22rem;
        line-height: 0.42rem;
        white-space: nowrap;
    }

    .ms_pztc3 i {
        font-size: 0.3rem;
        color: grey;
        margin-top: 0.25rem;
        display: block;
    }

    .ms_pztc3 p {
        font-family: 'iconfont';
        font-size: 0.32rem;
        font-weight: bold;
        margin-top: 0.25rem;
    }

    .pzheader1 {
        width: 100%;
        height: 1.45rem;
        position: fixed;
        left: 0;
        top: 0;
        font-size: 0.4rem;
        font-family: 'iconfont';
        line-height: 1.45rem;
        font-weight: bold;
        padding: 0 0.6rem;
        background-color: white;
    }

    .pzheader1 p {
        float: left;
        margin-right: 1.2rem;
    }

    .pzheader1 span {
        font-size: 0.52rem;
    }

    .pzgreen div.pzheader2 {
        position: fixed;
        left: 0;
        top: 1.45rem;
        background: white;
    }

    .meishihead1 ul.pzheader3 {
        background: white;
        border: 0;
        color: #9A9A9A;
    }

    .pzcontentzong {
        width: 100%;
        height: 6.45rem;
        background-color: white;
        margin-top: 2.75rem;
        padding-top: 0.3rem;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
    }

    .pzcontent div.pzcontentzong2 {
        margin-top: 0.5rem;
    }

    .pzcontent1 {
        width: 100%;
        height: 1.08rem;
        margin-bottom: 0.65rem;
    }

    .pzcontent1 img {
        width: 1.08rem;
        height: 1.08rem;
        float: left;
        margin-right: 0.3rem;
    }

    .pzcontent1 p {
        height: 0.45rem;
        font-size: 0.45rem;
        line-height: 0.45rem;
        color: #666;
        float: left;
    }

    .pzcontent1 i {
        float: left;
        height: 0.5rem;
        line-height: 0.5rem;
        padding: 0 0.02rem;
        border: 0.03rem solid #D1AB8D;
        border-radius: 0.03rem;
        color: #A45B1C;
        font-size: 0.3rem;
        width: 1.7rem;
        text-align: center;
        margin-top: 0.6rem;
        margin-left: -4.1rem;
    }

    .pzcontent1_2 {
        height: 0.3rem;
        float: right;
        font-size: 0.3rem;
        line-height: 0.3rem;
    }

    .pzcontent1_2_shuxian {
        width: 0.03rem;
        height: 0.2rem;
        background-color: #ccc;
        float: left;
    }

    .pzcontent1_2 p {
        float: left;
        margin-right: 0.15rem;
        font-size: 0.26rem;
        height: 0.3rem;
        line-height: 0.3rem;
    }

    .pzcontent1_2 p:last-child {
        margin-left: 0.15rem;
    }

    .pzcontent2 {
        width: 100%;
        height: 3.39rem;
        margin-bottom: 0.6rem;
    }

    .pzcontent2 img {
        width: 3.3rem;
        height: 3.3rem;
        float: left;
    }

    .pzcontent2 p {
        font-size: 0.5rem;
        width: 6rem;
        float: left;
        margin-bottom: 1.4rem;
        margin-left: 0.4rem;
    }

    .pzcontent2 span {
        font-size: 0.5rem;
        font-family: 'iconfont';
        color: #BC2D2E;
        font-weight: bold;
        margin-left: 0.35rem;
        float: left;
    }

    .pzcontent2 h1 {
        font-family: 'iconfont';
        font-weight: bold;
        margin-left: 0.35rem;
        float: right;
        font-size: 0.6rem;
    }

    .pzcontent3 {
        height: 0.35rem;
        width: 3.8rem;
        margin: 0 auto;
        text-align: center;
    }

    .pzcontent3 p {
        font-size: 0.35rem;
        font-family: 'iconfont';
        text-align: center;
        color: #999999;
    }

    .xiang_top {
        width: 100%;
        height: 3rem;
    }

    .xiang_top_cp {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
    }

    .xiang_top img {
        height: 3rem;
    }

    .xiang_xia {
        background-color: white;
    }

    .xiang_xia1 {
        width: 100%;
        height: 10.8rem;
        margin-bottom: 0.5rem;
    }

    .xiang_xia1 img {
        height: 10.8rem;
        background-color: pink;
    }

    .xiang_xia2 {
        font-size: 0.5rem;
        width: 9rem;
        height: 0.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 0.5rem;
        margin: 0 auto;
        font-weight: bold;
        margin-bottom: 0.3rem;
    }

    .xiang_xia3 {
        padding-left: 0.5rem;
        height: 0.5rem;
        margin-bottom: 0.4rem;
    }

    .xiang_xia3 p {
        float: left;
        color: #9F9F9F;
        margin-right: 0.15rem;
        font-size: 0.3rem;
    }

    .xiang_xia4 {
        font-size: 0.4rem;
        font-weight: bold;
        color: #FF543C;
        height: 0.4rem;
        padding-left: 0.5rem;
        font-family: 'iconfont';
        margin-bottom: 1.08rem;
    }

    .xiang_xia5 {
        width: 0.65rem;
        height: 0.65rem;
        font-size: 0.65rem;
        color: #2496FF;
        font-family: 'iconfont';
        float: right;

    }

    .xiang_xia6 {
        font-size: 0.36rem;
        padding-left: 0.5rem;
        color: #666;
        margin-bottom: 0.8rem;
    }

    .xiang_xia7 {
        font-family: 'iconfont';
        margin: 0 auto;
        text-align: center;
        font-size: 0.5rem;
        color: #CCCCCC;
    }

    .gwc_header {
        width: 100%;
        height: 1.7rem;
        position: fixed;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, #0af, #0085ff);
        padding-left: 0.6rem;
        color: white;
        line-height: 1.7rem;
    }

    .gwc_header a {
        float: left;
        font-size: 0.48rem;
        margin-right: 1.1rem;
        font-family: 'iconfont';
    }

    .gwc_header span {
        font-size: 0.52rem;
    }

    .gwc_content {
        width: 100%;
        height: 6.5rem;
        background-color: white;
        margin-top: 1.7rem;
    }

    .gwc_content1 {
        width: 100%;
        height: 1.45rem;
        line-height: 1.45rem;
        font-size: 0.45rem;
        border-bottom: 0.01rem solid #DEDEDE;
    }

    .gwc_content1 p {
        margin-left: 0.6rem;
        float: left;
        font-weight: bold;
    }

    .gwc_content1 span {
        font-size: 0.35rem;
        color: #999999;
    }

    .gwc_content1 h1 {
        font-size: 0.35rem;
        color: #999999;
        font-family: 'iconfont';
        float: right;
        margin-right: 0.6rem;
    }

    .gwc_content2 {
        width: 100%;
        height: 2.2rem;
        border-bottom: 0.01rem solid #DEDEDE;
        padding-left: 0.6rem;
        padding-right: 0.6rem;

    }

    .gwc_content2_img {
        width: 1.35rem;
        height: 1.35rem;
        float: left;
        margin-top: 0.48rem;
        margin-right: 0.3rem;
    }

    .gwc_content2_img img {
        width: 1.35rem;
        height: 1.35rem;
    }

    .gwc_content2_2 {
        height: 0.5rem;
        width: 7.35rem;
        margin-top: 0.48rem;
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.5rem;
        line-height: 0.5rem;
    }

    .gwc_content2_2 p {
        float: left;
    }

    .gwc_content2 div.gwc_content2_3 {
        font-size: 0.3rem;
        color: #999999;
        float: left;
    }

    .gwc_content2 div.gwc_content2_3 span {
        /* float: left; */
        float: right;
        font-size: 0.35rem;
        color: #FF543C;
        font-family: 'iconfont';
        font-weight: bold;
    }

    .gwc_content3 {
        width: 100%;
        height: 1.6rem;
        border-bottom: 0.01rem solid #DEDEDE;
        padding: 0 0.6rem;
        font-family: 'iconfont';
        font-size: 0.4rem;
        line-height: 1.6rem;
    }

    .gwc_content3 p {
        float: left;
    }

    .gwc_content3 span {
        float: right;
        color: #FF543C;
    }

    .gwc_content4 {
        width: 100%;
        height: 1.35rem;
        border-bottom: 0.01rem solid #DEDEDE;
        font-family: 'iconfont';
        padding: 0 0.6rem;
        font-size: 0.4rem;
        float: right;
        line-height: 1.35rem;
    }

    .gwc_content4 span, .gwc_content4 p, .gwc_content4 h1 {
        float: right;
        font-size: 0.4rem;
    }

    .gwc_content4 p {
        margin-left: 0.35rem;
        color: white;
        width: 1.95rem;
        height: 0.85rem;
        line-height: 0.85rem;
        text-align: center;
        background-color: #58D178;
        margin-top: 0.25rem;
        border-radius: 0.1rem;
    }

    .gwc_content4 span {
        color: #666;
    }

    .gwc_content4 h1 {
        color: #FF543C;
    }

    .gwc_header span.use_wode {
        margin-left: 2.3rem;
    }

    .user_content1 {
        width: 100%;
        height: 3.8rem;
        background: linear-gradient(90deg, #0af, #0085ff);
        margin-top: 1.7rem;
        padding-left: 0.6rem;
        padding-right: 0.6rem;
        padding-top: 0.8rem;
    }

    .user_content1_1 {
        width: 2.1rem;
        height: 2.1rem;
        background-color: green;
        /* margin-top: 0.8rem; */
        float: left;
        margin-right: 0.56rem;
    }

    .user_content1_2 {
        font-size: 0.5rem;
        color: white;
        margin-bottom: 0.4rem;

    }

    .user_content1_2 p {
        font-size: 0.3rem;
    }

    .user_content1_3 {
        float: right;
        margin-top: -1.1rem;
        font-size: 0.5rem;
        color: white;
    }

    .user_content2 {
        width: 100%;
        height: 1.45rem;
        background-color: white;
        border-bottom: 0.01rem solid #DEDEDE;
        padding-left: 0.6rem;
        padding-right: 0.6rem;
        font-size: 0.5rem;
        line-height: 1.45rem;
        font-family: 'iconfont';
    }

    .user_content2 span {
        margin-right: 0.5rem;
        float: left;
        color: rgb(74, 165, 240);
    }

    .user_content2 span.user_content2_2 {
        color: rgb(148, 217, 74);
    }

    .user_content2 span.user_content2_3 {
        color: rgb(252, 123, 83);
    }

    .user_content2 p {
        float: right;
        color: #BBBBBB;
    }

    .usedit_content {
        width: 100%;
        height: 3.55rem;
        background-color: white;
        margin-top: 1.95rem;

    }

    .usedit_content_1 {
        height: 2.08rem;
        width: 100%;
        background-color: white;
        border-bottom: 0.01rem solid #DEDEDE;
        font-size: 0.5rem;
        line-height: 2.08rem;
        padding: 0 0.6rem;
    }

    .usedit_content_1 img {
        width: 1.68rem;
        height: 1.68rem;
        float: right;
        margin-top: 0.2rem;
    }

    .usedit_content2 {
        width: 100%;
        height: 8.65rem;
        background-color: white;
        margin-top: 0.25rem;
    }

    .useridetscreen {
        background-color: #F5F5F5;
    }

    .usedit_content2_1 {
        height: 1.42rem;
        width: 100%;
        background-color: white;
        border-bottom: 0.01rem solid #DEDEDE;
        font-size: 0.45rem;
        line-height: 1.42rem;
        padding-left: 0.6rem;
        color: #9A9A9A;
    }

    .usedit_content2_2 {
        width: 100%;
        height: 1.45rem;
        background-color: white;
        border-bottom: 0.01rem solid #DEDEDE;
        font-size: 0.5rem;
        line-height: 1.45rem;
        padding: 0 0.6rem;
    }

    .usedit_content2_2 p {
        float: right;
    }

    .usedit_content2_2 span {
        float: left;
        margin-right: 0.65rem;
        font-family: 'iconfont';
    }

</style>