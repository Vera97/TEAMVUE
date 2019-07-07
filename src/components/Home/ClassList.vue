<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <!-- Category boxes with icon & name -->
      <div class="row category-box-row">
        <div class="col-md-2">
          <a href="videos-grid.htm" class="category-box-item">
            <i class="fa fa-camera fa-5x" style="font-size:48px;"></i>
            <h2>科目一</h2>
          </a>
        </div>
        <div class="col-md-2">
          <a href="videos-grid.htm" class="category-box-item">
            <i class="fa fa-cogs fa-5x" style="font-size:48px;"></i>
            <h2>科目二</h2>
          </a>
        </div>
        <div class="col-md-2">
          <a href="videos-grid.htm" class="category-box-item">
            <i class="fa fa-list-alt fa-5x" style="font-size:48px;"></i>
            <h2>科目三</h2>
          </a>
        </div>
        <div class="col-md-2">
          <a href="videos-grid.htm" class="category-box-item">
            <i class="fa fa-list-alt fa-5x" style="font-size:48px;"></i>
            <h2>科目四</h2>
          </a>
        </div>
        <div class="col-md-2">
          <a href="videos-grid.htm" class="category-box-item">
            <i class="fa fa-list-alt fa-5x" style="font-size:48px;"></i>
            <h2>科目五</h2>
          </a>
        </div>
        <div class="col-md-2">
          <a href="videos-grid.htm" class="category-box-item">
            <i class="fa fa-list-alt fa-5x" style="font-size:48px;"></i>
            <h2>科目六</h2>
          </a>
        </div>

      </div>
      <!-- Pagination -->
      <center>
        <ul class="pagination">
          <li class="disabled"><a href="#"><i class="fa fa-angle-left"></i></a></li>
          <li class="active"><a href="videos-list.htm">1 <span class="sr-only">(current)</span></a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
        </ul>
      </center>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ClassList"
    }
</script>

<style scoped>

</style>
