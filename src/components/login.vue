<template>
    <div class="main">
        <div class="mainers">
            <h3><a onClick="history.back()"><</a>欢迎登陆</h3>
            <ul>
                <li>用户名: <input type="text" v-model="username" class="text">
                </li>
                <li>密&nbsp;&nbsp;&nbsp;码: <input type="password" class="password" v-model="password">
                </li>
                <li><input type="button" value="登录" class="btn" @click="submit">
                </li>
                <li>
                    <router-link to="/sign" style="display:block;margin:0 auto;">还没有账号？点击注册</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data: function () {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            submit: function () {
                // this.$http.get("/api/login?username=" + this.username).then(res => {
                //     let password = res.body[0].password;
                //     if (this.password === password) {
                //         localStorage.username = JSON.stringify(this.username);
                //         this.$router.push({name: "mine"})
                //     } else {
                        this.$router.push({name: "mine"})
                    // }
                // });
            }
        }
    }
</script>

<style scoped>
    body {
        font-size: .5rem;
    }
.mainers{
    width: 100%;
    height: 100vh;
    background: url("../assets/img/800.jpg");
    background-position: bottom;
    background-size: cover;
}
    h3 {
        width: 100%;
        height: 8vh;
        text-align: center;
        line-height: 8vh;
        color: #333;
        font-size: .6rem;
        letter-spacing: 2px;
        font-weight: normal;
        position: relative;
    }

    h3 > a {
        position: absolute;
        left: 3vw;
        top: 0;
        line-height: 8vh;
        font-weight: normal;
    }

    .main {
        background: #fff;
        width: 100vw;
        height: 100vh;
    }

    li {
        width: 100%;
        height: 10vh;
        padding-top: 4.5vh;
        font-size: 0.45rem;
    }

    .text, .password {
        width: 55vw;
        height: 4vh;
        margin: 0 5vw;
        box-sizing: border-box;
        padding: 0 2vw;
        border: 0.02rem solid #333;
    }

    .text:focus, .password:focus, .btn:focus {
        outline: none;
    }
    .btn {
        width: 70vw;
        height: 4.5vh;
        background: #fff;
        border: 0.02rem solid #333;
    }

    li a {
        color: #333;
        font-size: 0.35rem;
    }
</style>