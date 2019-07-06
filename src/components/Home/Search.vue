<template>
  <div class="container-fluid">
    <div class="container-fluid search-box-wrapper">
      <ol class="breadcrumb pull-right">
        <li><input type="text" class="form-control" placeholder="搜索"></li>
        <li class="active " @click="popup" data-toggle="modal" data-target="#myModal">筛选<i class="fa fa-empire"></i></li>
      </ol>
    </div>
    <!-- 筛选模态框 -->
    <div :class="show" class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- 模态框主体 -->
          <div class="modal-body">
            <div class="product-list-main">
              <ul class="product-list-wrap" id="ul_select">
                <li class="select-result">
                  <dl id="dl_result" class="clearfix">
                    <dd class="select-no"></dd>
                    <dt><span id="clearAll">清空筛选</span></dt>
                  </dl>
                </li>
                <li class="select-list">
                  <dl id="select1" class="dl clearfix">
                    <dt>类别:</dt>
                    <div class="fl">
                      <dd><span>类别1</span></dd>
                      <dd><span>22</span></dd>
                      <dd><span>33</span></dd>
                    </div>
                  </dl>
                </li>
                <li class="select-list">
                  <dl id="select2" class="dl clearfix">
                    <dt>课程:</dt>
                    <div class="fl">
                      <dd><span>课程1</span></dd>
                      <dd><span>22</span></dd>
                      <dd><span>33</span></dd>
                      <dd><span>44</span></dd>
                      <dd><span>55</span></dd>
                      <dd><span>66</span></dd>
                      <dd><span>77</span></dd>
                    </div>
                    <div class="product-list-more"><i @click="more">更多</i><img src="images/more.png" alt=""></div>
                  </dl>
                </li>
                <li class="select-list">
                  <dl id="select3" class="dl clearfix">
                    <dt>教师:</dt>
                    <div class="fl">
                      <dd><span>何积丰</span></dd>
                      <dd><span>何老师</span></dd>
                      <dd><span>贺老师</span></dd>
                      <dd><span>冯老师</span></dd>
                      <dd><span>田老师</span></dd>
                      <dd><span>晖老师</span></dd>
                    </div>
                    <div class="product-list-more"><i>更多</i><img src="images/more.png" alt=""></div>
                  </dl>
                </li>
                <li class="select-list">
                  <dl id="select4" class="dl clearfix">
                    <dt>时间:</dt>
                    <div class="fl">
                      <dd><span>银</span></dd>
                      <dd><span href="#">1</span></dd>
                      <dd><span href="#">2</span></dd>
                      <dd><span href="#">3</span></dd>
                      <dd><span href="#">4</span></dd>
                      <dd><span href="#">5</span></dd>
                      <dd><span href="#">5</span></dd>
                      <dd><span href="#">7</span></dd>
                      <dd><span href="#">45</span></dd>
                    </div>
                    <div class="product-list-more"><i>更多</i><img src="images/more.png" alt=""></div>
                  </dl>
                </li>
                <li class="select-list">
                  <dl id="select5" class="dl clearfix">
                    <dt>其他:</dt>
                    <div class="fl">
                      <dd><span>1</span></dd>
                      <dd><span>2</span></dd>
                      <dd><span>3</span></dd>
                      <dd><span>4</span></dd>
                      <dd><span>5</span></dd>
                      <dd><span>6</span></dd>
                    </div>
                    <div class="product-list-more"><i>更多</i><img src="images/more.png" alt=""></div>
                  </dl>
                </li>

              </ul>
            </div>

          </div>
          <!-- 模态框底部 -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">确认</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<!--<script src="../assets/script/jquery.min.js"></script>-->
<!--<script src="../assets/plugin/bootstrap/js/bootstrap.js"></script>-->
<script>
    import $ from 'jquery'
    // import '../../assets/plugin/bootstrap/js/bootstrap'

    /*种类列表内容区*/
    $(".product-list-more i").click(function () {
        var exp = this.innerHTML == '更多';
        this.innerHTML = exp ? '收起' : '更多';
        $(this).parent().parent().find(".fl").height(exp ? 'auto' : '38px');
        var setheight = $(this).parent().parent().children(".fl").innerHeight();
        $(this).parent().parent().find("dt").height(setheight);
        if (this.innerHTML == '更多') {
            $(this).parent().find("img").css("transform", "rotate(0deg)")
        } else {
            $(this).parent().find("img").css("transform", "rotate(180deg)")
        }
    });

    function removeChose(obj, index) { //删除筛选
        var _index = index++;
        $("#ul_select").children(".select-list").eq(index).find(".selected").removeClass("selected");//删除商品选中样式
        $("#ul_select").children(".select-list").eq(index).find("dl").text();
        $("#ul_select").children("li").eq(_index).show();
        obj.remove();//当前按钮删除
        getResult();
    }

    /*筛选全部删除*/
    $("#clearAll").click(function () {
        $(this).parent().parent().find("dd").remove();
        $("#ul_select").children(".select-list").show();
    });
    $(function () {
        $("#ul_select").find(".dl").find("div").children("dd").click(function () { //每个商品分类行绑定点击事件
            $(this).addClass("selected").siblings("dd").removeClass("selected"); //当前元素选中，其余删除选中样式
            var index = $(this).parents(".select-list").index();//获取父级索引index
            var propertyName = $(this).parent().parent().children("dt").text();//获取当前商品的属性
            $(this).parent().parent().parent().hide();
            var goods = $(this).children("span").text();//获取当前种类名称
            $("#select_" + index).remove();//删除当前索引的筛选
            if (goods != '全部') { //若不是全部 在筛选区域添加种类
                $("#dl_result").append("<dd id='select_" + index + "' class='selected' onclick=removeChose($(this),'" + index + "')><span><i>" + propertyName + "</i><i>" + goods + "</i><i>x</i></span></dd>");
            }
            getResult();
        })
    });

    function getResult() { //结果处理
        var len_chose = $("#dl_result").children(".selected").length;
        if (len_chose > 0) { //若是筛选区域选中项大于0
            $(".select-no").hide();//暂时没有选择过滤条件 隐藏
        } else {
            $(".select-no").show();//暂时没有选择过滤条件 显示
        }
    }

    export default {
        name: "Search",
        data () {
            return {
                show: "on-hidden"
            }
        },
        methods: {
            popup: function () {
                this.show = "on-show"
            }
        }
    }
</script>

<style scoped>
  /*@import "../assets/css/style.css";*/
  @import "../../assets/plugin/font-awesome/css/font-awesome.css";
  @import '../../assets/css/iconfont.css';

  .search-box-wrapper {
    overflow: hidden;
  }

  .on-show {
    display: block;
  }

  .on-hidden {
    display: none;
  }
</style>
