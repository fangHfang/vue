<template>
    <div class="main">
        <div class="head">
            <div class="head0">
                <span class="head1">&#xe600;</span>
                <span class="head2">&#xe635;</span>
            </div>
            <div class="head3">
                <a href="">
                    <img src="../assets/img/p3.png" alt="">
                </a>
                <span>admin</span>
                <em>海草海草</em>
            </div>
            <!--<div class="tit">-->
                <!--<div class="">-->
                    <!--<span>关注：</span>-->
                <!--</div>-->
                <!--<div class="">-->
                    <!--<span>动态：</span>-->
                <!--</div>-->
                <!--<div class="">-->
                    <!--<span>粉丝：</span>-->
                <!--</div>-->
            <!--</div>-->
        </div>
        <div class="tit tit_cel">
            <div class="cel">
                <em>&#xe609;</em>
                <span><br>收藏</span>
            </div>
            <div class="hist">
                <em>&#xe604;</em>
                <span><br>历史</span>
            </div>
            <div class="night">
                <em>&#xe63d;</em>
                <span><br>夜间</span>
            </div>
        </div>
        <div class="xxtz">
            <p><span>消息通知</span> <span> > </span></p>
        </div>
        <div class="xxtz">
            <p><span>我的钱包</span>
                <span>&nbsp;> </span>
            </p>
            <p><span>店铺特色</span>
                <span>&nbsp;> </span>
            </p>
        </div>

        <div class="xxtz">
            <p><span>用户反馈</span> <span>> </span></p>
            <p><span>系统设置</span> <span>> </span></p>
            <p><span>其他设置</span> <span>> </span></p>
        </div>
        <Footernav></Footernav>
    </div>
</template>

<script>
    import Footernav from "./footernav";
    export default {
        name: "mine.js",
        mounted: function () {
            this.$store.state.nav = 4;
        },
        components: {
            Footernav
        }
    }

</script>

<style scoped>
    body{
        background: #f4f5f6;
        overflow-y: scroll;
    }
    .head{
        width: 100%;
        font-size: 0.4rem;
        color: #fff;
        background: #393939;
        padding:0.3rem 0.5rem;
        overflow: hidden;
    }
    .head0{
        height: 0.5rem;
    }
    .head1{
        display: block;
        float: left;
        font-family: 'iconfont';
        font-size: 0.6rem;
    }
    .head2{
        display: block;
        float: right;
        font-family: 'iconfont';
        font-size: 0.6rem;
    }
    .head3{
        height: 2rem;
        margin-top: 0.5rem;
        overflow: hidden;
    }
    .head3 img{
        display: block;
        float: left;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }
    .head3 span{
        width: 7rem;
        display: block;
        float: left;
        margin-left: 0.5rem;
        line-height: 0.5rem;
        text-align: left;
        margin-top: 0.4rem;
        font-size: 0.5rem;
    }
    .head3 em{
        display: block;
        float: left;
        margin-left: 0.5rem;
        margin-top: 0.2rem;
        line-height: 0.5rem;
    }
    .tit{
        padding:0.5rem 0.7rem;
        border-radius: 0.1rem;
        margin-top: 0.3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: center;
    }
    .tit em{
        display: block;
        font-family: 'iconfont';
        font-size: 0.6rem;
        color: #75b5ec;
    }
    .tit span{
        width: 1.5rem;
        display: block;
        font-size: 0.36rem;
        color: #fff;
        text-align: center;
    }
    .tit_cel{
        background: #fff;
        border-bottom: 0.02rem #e8e8e8 solid;
        margin-top: 0;
        color:#333;
    }
    .tit_cel span{
        color: #333;
    }
    .cel em{
        color: #f7992b;
    }
    .hist em{
        color: #f76e95;
    }
    .night em {
        color: #7095ff;
    }
    .xxtz{
        background: #fff;
        font-size: 0.24rem;
        color: #333;
    }
    .xxtz p{
        padding:0.34rem 0.34rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.02rem #e8e8e8 solid;
    }
    .xxtz p span:nth-child(2){
        color: #6c6c6c;
    }
</style>