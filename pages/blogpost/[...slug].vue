<script setup lang="ts">
definePageMeta({
  layout: "bloglayout",
});
var blogposts=null;
const appConfig = useAppConfig()
const route = useRoute()
const url = appConfig.http;
 await useFetch(
  url+'api/blogposts?slug='+route.params.slug +'&page=1&limit=1'
).then((res) => {
        blogposts = res.data.value.data.map((v) => {
          let pic = v.pic

          if (pic) {
            v.pic = url + pic.replace('public/', '')
          }

          return v
        })
      })
var blogpost = blogposts[0];
var testFunction = () =>{
    console.log('test function ran');
  }

</script>
<template>
<section>
    <div class="sidebar-1">
<div class="header-content width_common" style="margin-top:50px;">

<span class="date">Thứ hai, 27/3/2023, 23:46 (GMT+7)</span>
</div>
<h1 class="title-detail">{{blogpost.name}} </h1>

    <div v-html="blogpost.content"></div>
</div>
    </section>
</template>
