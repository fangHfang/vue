<template>
    <div class="main">
        <div class="footer">
            <!--<router-link to="/" :class="{footer2:$store.state.nav==1}">-->
            <router-link to="/category" class="footer2 footer1">
                <h2>&#xe699;</h2>
                <h3>首页</h3>
            </router-link>
            <a href="" class="footer1">
                <h2>&#xe768;</h2>
                <h3>所有商品</h3>
            </a>
            <router-link to="/checkout" class="footer1">
                <h2>&#xe768;</h2>
                <h3>购物车</h3>
            </router-link>
            <!--<router-link to="main" :class="{footer2:$store.state.nav==4}">-->
                <router-link to="/login" class="footer1">
                <h2>&#xe768;</h2>
                <h3>会员中心</h3>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footernav"
    }
</script>

<style scoped>
    .footer{
        height: 1.6rem;
        width: 100vw;
        overflow: hidden;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
        border-top: 0.01rem solid #9d9d9d;
    }
    .footer1{
        width: 25%;
        height: 1.99rem;
        float: left;
        text-align: center;
        margin-top: 0.1rem;
    }
    .footer1 h2{
        font-family: 'iconfont';
        font-size: 0.6rem;
        color: #9d9d9d;
        margin-top: 0.08rem;
    }
    .footer1 h3{
        color: #9d9d9d;
        font-size: 0.34rem;
    }
    .footer2 h2{
        font-family: 'iconfont';
        font-size: 0.6rem;
        color: #66a5ec;
        margin-top: 0.08rem;
    }
    .footer2 h3{
        color: #66a5ec;
        font-size: 0.34rem;
        margin-top: 0.03rem;
    }
    .footer2{
        border-bottom: 0.09rem solid #66a5ec;
    }
</style>