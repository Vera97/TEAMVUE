<template>
  <div>
    <header class="main">
      <div class="container">
        <nav class="navbar" role="navigation">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <h2 class="text-white">教师端-首页</h2>
          </div>
          <div class="collapse navbar-collapse">
            <div class="navbar-right menu-main">
              <ul class="nav navbar-nav">
                <!--<li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span>Home</span> <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="index.htm">Home, version 1</a></li>
                        <li><a href="index2.htm">Home, version 2</a></li>
                        <li><a href="index3.htm">Home, version 3</a></li><li><a href="http://www.cssmoban.com/">Home, version 4</a></li>
                    </ul>
                </li>-->
                <li><a href="about-us.htm"><span>教学资源</span></a></li>
                <li><a href="categories.htm"><span>在线备课</span></a></li>
                <li><a href="features.htm"><span>我的班级</span></a></li>
                <li><a href="contact.htm"><span>开始上课</span></a></li>
              </ul>
              <a class="btn btn-theme navbar-btn btn-default sign-in" href="#">登录</a>
              <a class="btn btn-theme navbar-btn btn-orange  sign-up" href="register.htm">注册</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
  @import '../../assets/css/style.css';
</style>
