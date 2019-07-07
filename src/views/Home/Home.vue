<template>
  <div>
    <Nav></Nav>
    <Search></Search>
    <Carousel></Carousel>
    <ClassList></ClassList>
    <Footer></Footer>
  </div>
</template>

<script>
    import Nav from "../../components/Home/Nav";
    import Search from "../../components/Home/Search";
    import Carousel from "../../components/Home/Carousel";
    import ClassList from "../../components/Home/ClassList";
    import Footer from "../../components/Home/Footer";
    export default {
        name: "home",
        components: {Footer, ClassList, Carousel, Search, Nav},
        // beforeRouteEnter(to, from, next) {
        //     get();
        //     next(vm => {
        //         set(vm);
        //     })
        // }
    }
</script>

<style scoped>

</style>
