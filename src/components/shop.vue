<template>
    <div class="main">
        <div class="preload" v-if="show">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzUgNjAzIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yKSI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIgNjloMzc1djUzNEgyeiIvPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yIDBoMzc1djY5SDJ6Ii8+PHJlY3Qgd2lkdGg9IjY2IiBoZWlnaHQ9IjY2IiB4PSIxNTciIHk9IjIzIiBmaWxsPSIjRjZGNkY2IiByeD0iMiIvPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik02NSA5OWgyNTB2MjRINjV6bTAgMzFoMjUwdjEzSDY1eiIvPjxwYXRoIGZpbGw9IiNGNkY2RjYiIGQ9Ik02NSAxNTBoMjUwdjEzSDY1ek0yIDMwMGg3N3YzMDNIMnoiLz48cGF0aCBzdHJva2U9IiNGNkY2RjYiIGQ9Ik0yNi41IDE3Mi41aDMyNnYyOGgtMzI2eiIvPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik01MCAxODBoMjgwdjEzSDUweiIvPjxwYXRoIHN0cm9rZT0iI0Y2RjZGNiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTS41IDI0OC41aDM3OS4wMDUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OCAyNzgpIj48cGF0aCBmaWxsPSIjRUVFIiBkPSJNMjY3IDgydi0zLjk5OGEuOTk5Ljk5OSAwIDEgMC0yIDBWODJoLTMuOTk4YS45OTkuOTk5IDAgMSAwIDAgMkgyNjV2My45OThhLjk5OS45OTkgMCAxIDAgMiAwVjg0aDMuOTk4YS45OTkuOTk5IDAgMSAwIDAtMkgyNjd6bS0xIDEyYy02LjA3NSAwLTExLTQuOTI1LTExLTExczQuOTI1LTExIDExLTExIDExIDQuOTI1IDExIDExLTQuOTI1IDExLTExIDExeiIvPjxyZWN0IHdpZHRoPSI3NCIgaGVpZ2h0PSI3NCIgeD0iMSIgeT0iMTMiIGZpbGw9IiNGNkY2RjYiIHJ4PSIyIi8+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTg3IDEzaDE0MHYxNkg4N3ptMCAyNWgxMjZ2MTFIODd6bTAgMzFoMzN2MThIODd6Ii8+PHBhdGggc3Ryb2tlPSIjRjZGNkY2IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNLjQ3MyAxLjVoMjkzLjAzMiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OCAzOTMpIj48cGF0aCBmaWxsPSIjRUVFIiBkPSJNMjY3IDgydi0zLjk5OGEuOTk5Ljk5OSAwIDEgMC0yIDBWODJoLTMuOTk4YS45OTkuOTk5IDAgMSAwIDAgMkgyNjV2My45OThhLjk5OS45OTkgMCAxIDAgMiAwVjg0aDMuOTk4YS45OTkuOTk5IDAgMSAwIDAtMkgyNjd6bS0xIDEyYy02LjA3NSAwLTExLTQuOTI1LTExLTExczQuOTI1LTExIDExLTExIDExIDQuOTI1IDExIDExLTQuOTI1IDExLTExIDExeiIvPjxyZWN0IHdpZHRoPSI3NCIgaGVpZ2h0PSI3NCIgeD0iMSIgeT0iMTMiIGZpbGw9IiNGNkY2RjYiIHJ4PSIyIi8+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTg3IDEzaDE0MHYxNkg4N3ptMCAyNWgxMjZ2MTFIODd6bTAgMzFoMzN2MThIODd6Ii8+PHBhdGggc3Ryb2tlPSIjRjZGNkY2IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNLjQ3MyAxLjVoMjkzLjAzMiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OCA1MDkpIj48cGF0aCBmaWxsPSIjRUVFIiBkPSJNMjY3IDgydi0zLjk5OGEuOTk5Ljk5OSAwIDEgMC0yIDBWODJoLTMuOTk4YS45OTkuOTk5IDAgMSAwIDAgMkgyNjV2My45OThhLjk5OS45OTkgMCAxIDAgMiAwVjg0aDMuOTk4YS45OTkuOTk5IDAgMSAwIDAtMkgyNjd6bS0xIDEyYy02LjA3NSAwLTExLTQuOTI1LTExLTExczQuOTI1LTExIDExLTExIDExIDQuOTI1IDExIDExLTQuOTI1IDExLTExIDExeiIvPjxyZWN0IHdpZHRoPSI3NCIgaGVpZ2h0PSI3NCIgeD0iMSIgeT0iMTMiIGZpbGw9IiNGNkY2RjYiIHJ4PSIyIi8+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTg3IDEzaDE0MHYxNkg4N3ptMCAyNWgxMjZ2MTFIODd6bTAgMzFoMzN2MThIODd6Ii8+PHBhdGggc3Ryb2tlPSIjRjZGNkY2IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNLjQ3MyAxLjVoMjkzLjAzMiIvPjwvZz48cGF0aCBmaWxsPSIjRUVFIiBkPSJNNTAgMjIyaDI5djE2SDUwem0zOSAzNWgyOXYxNkg4OXpNOSAyNjdoNTB2MTVIOXptMCA1NGg1MHYxNUg5em0wIDQ5aDUwdjE1SDl6bTAgMTAxaDUwdjE1SDl6bTAtNDloNTB2MTVIOXptMCAxMDFoNTB2MTVIOXptMCA1MGg1MHYxNUg5em0xNjYtMzUxaDI5djE2aC0yOXptMTI2IDBoMjl2MTZoLTI5eiIvPjxwYXRoIGZpbGw9IiNGNUY1RjUiIGQ9Ik0yIDU1NmgzNzV2NDdIMnoiLz48L2c+PC9zdmc+"
                 alt="">
        </div>
        <div class="top" style="background: rgba(204,125,85,0.73)"
             :style="{backgroundImage:'url(/api/img/'+shopmessage.spicture+')'}">
            <div class="back" @click="$router.go(-1)">&lt;</div>
            <div class="logo">
                <img :src="'/api/img/'+shopmessage.sthumb" alt="">
            </div>
        </div>
        <div class="title" @click="alert=true">
            <span v-if="shopmessage.sbrand==1">品牌</span>
            {{shopmessage.sname}}
        </div>
        <div class="mask" :class="{show:alert}">
            <div class="alertbox" :class="{active:alert}">
                <span v-if="shopmessage.sbrand==1">品牌</span>
                <strong style="font-size: 0.5rem"> {{shopmessage.sname}}</strong>
                <ul>
                    <li style="color:yellowgreen">4.9</li>
                    <li style="color:yellowgreen">792</li>
                    <li style="color:yellowgreen">9.4</li>
                    <li style="color:yellowgreen">9.1</li>
                </ul>
                <ul style="margin-top: 0;">
                    <li>评分</li>
                    <li>月售</li>
                    <li>环境</li>
                    <li>环境</li>
                </ul>
                <p style="font-size: 0.2rem;color:gray">欢迎光临，用餐高峰期待提前下单，谢谢。</p>
            </div>
            <div class="close" @click="alert=false">x</div>
        </div>
        <div class="goods">
            <div class="goods-left">
                <ul ref="left">
                    <li v-for="item in types" :key="item.gid" :class="{activetype:tid==item.gid}"
                        @click="handleclick(item.gid)">{{item.tname}}
                    </li>
                </ul>
            </div>
            <div class="goods-right">
                <ul ref="right">
                    <li v-for="item in goods">
                        <h3 class="typename">{{item.name}}</h3>
                        <div class="item" v-for="g in item.data">
                            <div class="imgbox">
                                <img :src="'/api/img/'+g.gthumb" alt="">
                            </div>
                            <div class="gmessage">
                                <h3>{{g.gname}}</h3>
                                <p>¥{{g.gprice}}</p>
                                <div class="number">
                                    <div class="dec" v-show="g.gcount>0" @click="dec(g)">-</div>
                                    <div v-show="g.gcount>0">{{g.gcount}}</div>
                                    <div class="add" @click="add(g)">+</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom" @click="handleshowlist">
            <div :class="['shoppingcar',{scale:car},{sactive:number>0}]">
                <div class="count" v-if="number!==0">{{number}}</div>
            </div>
            <div class="price">
                <div class="nowprice">¥{{total}}</div>
                <div class="sdistributionfee">
                    配送费${{shopmessage.sdistributionfee}}
                </div>
            </div>
            <div class="right">
                <div v-if="last>0">
                    <span v-if="number==0">¥{{shopmessage.schargingfee}}起送</span>
                    <span v-if="number>0">还差¥{{last}}起送</span>
                </div>
                <div class="buy" v-else>
                    <router-link to="/login" class="jiesuan">去结算</router-link>
                </div>
            </div>
        </div>
        <div :class="['mask2',{show:showlist}]" @click="showlist=false">
        </div>
        <div :class="['bottom-menu',{in:showlist,out:!showlist}]">
            <div style="text-align: right" @click="clear">清空</div>
            <div>
                <ul class="wrapper">
                    <li v-for="item in list">
                        <div class="name">{{item.gname}}</div>
                        <div class="action">
                            <span @click="dec(item)">-</span>
                            <span>{{item.gcount}}</span>

                            <span @click="add(item)">+</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    // view-model 视图模型    view
    export default {
        name: "shop",
        data: () => ({
            sid: 0,  //当前店铺的id
            shopmessage: {}, //当前店铺的信息
            show: true,  // 控制预加载的图片是否显示
            alert: false,  // 控制弹出窗是否显示
            types: [], // 当前店铺中的小分类
            tid: 0,
            goods: [],  //类型+商品信息
            rs: "", //右侧的滚动实例
            car: false,
            number: 0, //已选择商品的个数
            total: 0,
            showlist: false,  //菜单栏是否需要展示
        }),
        mounted: function () {
            this.sid = this.$route.query.sid;
            this.$http.get("/api/getshop?sid=" + this.sid).then(res => {
                this.shopmessage = res.body[0];
                localStorage.shop = JSON.stringify(this.shopmessage);
                this.show = false;
            });
            this.$http.get("/api/getgoodstype?sid=" + this.sid).then(res => {
                this.types = res.body;
                this.tid = res.body[0].gid;
                this.$nextTick(function () {
                    new BScroll(".goods-left", {
                        bounce: false,
                        mouseWheel: true,
                        click: true
                    });
                    let left = this.$refs.left;
                    let first = left.querySelector("li:first-child");
                    first.onclick = function () {
                        document.documentElement.scrollTop = 0;
                    }
                });
            });
            this.$http.get("/api/getgoods?sid=" + this.sid).then(res => {
                if (localStorage["goods" + this.shopmessage.sid]) {
                    this.goods = JSON.parse(localStorage["goods" + this.shopmessage.sid]);
                } else {
                    this.goods = res.body;
                }
                this.$nextTick(function () {
                    this.rs = new BScroll(".goods-right", {
                        bounce: false,
                        mouseWheel: true,
                        click: true,
                        probeType: 3,
                        preventDefault: false,
                        momentum: false
                    });
                    let right = this.$refs.right;
                    let lis = right.querySelectorAll("li");
                    this.goods.forEach((obj, index) => {
                        obj.ot = lis[index].offsetTop;
                    });
                    this.rs.on("scroll", (pos) => {
                        this.goods.forEach((obj) => {
                            if (obj.ot <= Math.abs(pos.y)) {
                                this.tid = obj.tid;
                            }
                            if (Math.abs(pos.y) > 300) {
                                this.rs.options.preventDefault = true;
                            } else {
                                this.rs.options.preventDefault = false;
                            }
                        })
                    });
                })
            });
        },
        computed: {
            last: function () {
                console.log(this.shopmessage.schargingfee);
                console.log(this.total);
                console.log(this.shopmessage.sdistributionfee);
                console.log(this.shopmessage.schargingfee - this.total - this.shopmessage.sdistributionfee);
                return this.shopmessage.schargingfee - this.total - this.shopmessage.sdistributionfee
            },
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
            }
        }
        ,
        watch: {
            goods:
                {
                    handler: function () {
                        let n = 0;
                        let p = 0;
                        this.goods.forEach((obj) => {
                            obj.data.forEach(item => {
                                if (item.gcount > 0) {
                                    n += item.gcount;
                                    p += item.gcount * item.gprice;
                                }
                            })
                        });
                        this.number = n;
                        this.total = p;
                        localStorage["goods" + this.shopmessage.sid] = JSON.stringify(this.goods);
                    }
                    ,
                    deep: true
                }
        }
        ,
        methods: {
            handleclick: function (id) {
                this.tid = id;
                document.documentElement.scrollTop = 1000;
                let ot = this.goods.filter(v => v.tid == id)[0].ot;
                this.rs.scrollTo(0, -ot, 300);
            }
            ,
            add: function (g) {
                let st;
                clearTimeout(st);
                g.gcount++;
                this.car = true;
                st = setTimeout(() => {
                    this.car = false;
                }, 800)
            }
            ,
            dec: function (g) {
                g.gcount--;
            }
            ,
            handleshowlist: function () {
                if (this.total > 0) {
                    this.showlist = !this.showlist;
                }
            }
            ,
            clear: function () {
                this.list.forEach(function (goods) {
                    goods.gcount = 0;
                })
            }
        }
    }
</script>

<style scoped>
    .top {
        width: 100vw;
        height: 10vh;
        position: relative;
        background-size: cover;
    }

    .alertbox span {
        background: yellow;
        padding: 2px;
        font-size: 0.2rem;
        color: #ff3f44;
    }

    .jiesuan {
        font-size: 0.14rem;
    }

    .back {
        width: 8vw;
        height: 8vw;
        position: absolute;
        left: 2vw;
        top: 2vw;
        text-align: center;
        line-height: 5vw;
        color: #fff;
        font-size: 0.3rem;
    }

    .logo {
        position: absolute;
        width: 20vw;
        height: 20vw;
        left: 40vw;
        bottom: -10vw;
    }

    .preload {
        display: block;
        width: 100vw;
        height: 100vh;
    }

    .title {
        width: 100vw;
        height: 10vh;
        line-height: 10vh;
        text-align: center;
        margin-top: 10vh;
        font-weight: bold;
        font-size: 16px;
    }

    .title span {
        background: yellow;
        padding: 2px;
        font-size: 0.2rem;
        color: #ff3f44;
    }

    .alertbox {
        width: 80vw;
        height: 50vw;
        background: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        display: none;
        padding: 0.2rem 0.3rem;
    }

    .alertbox ul{
        height: 1rem;
        width: 75vw;
        margin-top: 0.3rem;
        display: flex;
        flex-wrap: nowrap;
    }

    .alertbox ul li {
        width: 19vw;
        height: 1rem;
        font-size: 0.2rem;
    }

    .mask, .mask2 {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.47);
        position: fixed;
        left: 0;
        top: 0;
        display: none;
        z-index: 999;
    }

    .mask.show {
        display: block;
    }

    .mask2.show {
        display: block;
    }

    @keyframes brounceOut {
        0% {
            transform: scale(0.5, 0.5);
        }
        100% {
            transform: scale(1, 1);
        }
    }

    .active {
        animation: brounceOut .3s forwards;
        display: block;
    }

    .close {
        position: absolute;
        width: 10vw;
        height: 10vw;
        bottom: 20vh;
        border: 1px solid #fff;
        border-radius: 50%;
        left: 45vw;
        color: #fff;
        text-align: center;
        line-height: 10vw;
    }

    .goods {
        width: 100vw;
        height: 92vh;
        background: #ccc;
        text-align: left;
        border-top: 1px solid #999;
        margin-bottom: 8vh;
    }

    .goods-left {
        width: 25vw;
        height: 100%;
        float: left;
        overflow: hidden;
        position: relative;
    }

    .goods-left li {
        width: 100%;
        height: 15vh;
        line-height: 15vh;
        color: #333;
        padding-left: 2vw;
        text-align: left;
        background: #ccc;
        font-size: 12px;
    }

    .goods-left li.activetype {
        background: #fff;
    }

    .goods-right {
        width: 75vw;
        height: 100%;
        float: left;
        background: #fff;
        overflow: hidden;
        position: relative;
    }

    .goods-right li {
        min-height: 20vh;
    }

    .goods-right .typename {
        width: 100%;
        height: 5vh;
        line-height: 5vh;
        font-size: 0.4rem;
    }

    .goods-right .item {
        width: 100%;
        height: 15vh;
        font-size: 0.2rem;
        position: relative;
    }

    .imgbox {
        width: 25vw;
        height: 25vw;
        float: left;
    }

    .imgbox img {
        width: 21vw;
        height: 21vw;
        margin: 2vw;
        display: block;
    }

    .gmessage {
        width: 50vw;
        height: 100%;
        float: left;
    }

    .gmessage p {
        margin-top: 7vh;
        color: orange;
    }

    .number {
        position: absolute;
        width: 30vw;
        height: 4vh;
        right: 0;
        bottom: 0;
        line-height: 4vh;
        font-size: 12px;
    }

    .number div {
        width: 6vw;
        height: 6vw;
        text-align: center;
        line-height: 6vw;
        border-radius: 50%;
        font-weight: bold;
        float: left;
        margin: 0 2vw;
        color: #333;
    }

    .number .add {
        float: right;
        background: #2395ff;
        color: #fff;
    }

    .number .dec {
        background: #fff;
        border: 1px solid #2395ff;
        color: #2395ff;
    }

    .bottom {
        width: 100vw;
        height: 8vh;
        background: #666;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 99999;
    }

    .shoppingcar {
        width: 12vw;
        height: 12vw;
        position: absolute;
        left: 10vw;
        bottom: 5vw;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) no-repeat center #333;
        background-size: 50% auto;
        border-radius: 50%;
    }

    .shoppingcar.sactive {
        background-color: #2395ff;;
    }

    .price {
        width: 30vw;
        height: 8vh;
        float: left;
        margin-left: 30vw;
    }

    .nowprice {
        font-size: 16px;
        color: #fff;
        line-height: 4vh;
    }

    .sdistributionfee {
        font-size: 12px;
        color: #ccc;
        line-height: 3vh;
    }

    .right {
        width: 30vw;
        float: right;
        text-align: center;
        color: #fff;
        line-height: 8vh;
    }

    .buy {
        width: 30vw;
        height: 8vh;
        text-align: center;
        color: #fff;
        font-size: 0.14rem;
        line-height: 8vh;
        background: #4cd964;
    }

    .count {
        position: absolute;
        width: 4vw;
        height: 4vw;
        right: 0;
        top: 0;
        background: #ff8b39;
        font-size: 12px;
        text-align: center;
        line-height: 4vw;
        color: #fff;
        border-radius: 50%;
    }

    @keyframes scale {
        0% {
            transform: scale(1, 1);
        }
        50% {
            transform: scale(1.3, 1.3);
        }
        100% {
            transform: scale(1, 1);
        }
    }

    .scale {
        animation: scale 0.8s cubic-bezier(0.73, -0.68, 0.35, 1.65);
    }

    .bottom-menu {
        width: 100%;
        background: #fff;
        position: fixed;
        bottom: -30vh;
        left: 0;
        z-index: 9999;
    }

    @keyframes in {
        0% {
            bottom: -60vh;
        }
        100% {
            bottom: 8vh;
        }
    }

    .in {
        animation: in .5s forwards;
    }

    @keyframes out {
        0% {
            bottom: 8vh;
        }
        100% {
            bottom: -60vh;
        }
    }

    .out {
        animation: out .5s forwards;
    }

    .bottom-menu li {
        width: 100vw;
        height: 10vh;
        background: #f33;
        line-height: 10vh;
    }

    .bottom-menu li .name {
        width: 50vw;
        float: left;
        text-align: center;
    }

    .bottom-menu li .action {
        width: 50vw;
        float: left;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    .bottom-menu li span {
        display: block;
        width: 10vw;
        height: 10vw;
        color: #fff;
        border-radius: 50%;
    }

    .wrapper {
        max-height: 50vh;
        overflow: auto;
    }
</style>