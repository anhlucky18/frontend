<script setup lang="ts">
var blogposts = null;
var tintucthitruongs = null;
var gocnhins = null;
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
const url = appConfig.http;
await useFetch(url + "api/blogposts?page=1&limit=3").then((res) => {
  blogposts = res.data.value.data.map((v) => {
    let pic = v.pic;

    if (pic) {
      v.pic = url + pic.replace("public/", "");
    }

    return v;
  });
});
await useFetch(url + "api/blogposts?page=1&limit=3&category=thitruong").then((res) => {
  tintucthitruongs = res.data.value.data.map((v) => {
    let pic = v.pic;

    if (pic) {
      v.pic = url + pic.replace("public/", "");
    }

    return v;
  });
});
await useFetch(url + "api/blogposts?page=1&limit=3&category=gocnhin").then((res) => {
  gocnhins = res.data.value.data.map((v) => {
    let pic = v.pic;

    if (pic) {
      v.pic = url + pic.replace("public/", "");
    }

    return v;
  });
});
</script>
<template>
<section id="recent-blog-posts " class="recent-blog-posts">
      <div class="container" data-aos="fade-up ">
        <div class="section-header">
          <h2><span class="wc-decoration">Tin tức - Blog</span></h2>
        </div>
        <div class="tab-link-blog">
          <ul
            class="nav nav-pills nav-fill justify-content-center align-items-center"
            id="blog-block" role="tablist">
          
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="pill" href="#blog-all"
                >Tất cả</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#tin-tuc-thi-truong"
                data-bs-toggle="pill"
                >Tin tức thị trường</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#goc-nhin" data-bs-toggle="pill"
                >Góc nhìn</a
              >
            </li>
          </ul>
          <div class="tab-content mt-5" id="pills-tabContent">
            <div class="tab-pane container sl-element active" id="blog-all" role="tabpanel">
              <div class="row">
                <div
                  v-for="post in blogposts"
                  :key="post.id"
                  class="col-lg-4"
                  data-aos="fade-up "
                  data-aos-delay="200 "
                >
                  <div class="post-box">
                    <NuxtLink :to="`/blogpost/${post.slug}`">
                      <div class="post-img">
                        <img
                          :src="post.pic"
                          class="img-fluid"
                          :alt="post.pic"
                        />
                      </div>

                      <h3 class="post-title">
                        {{ post.name }}
                      </h3>
                      <p>1 phút trước</p>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane container sl-element fade" id="tin-tuc-thi-truong" role="tabpanel">
              <div class="row">
                <div
                  v-for="post in tintucthitruongs"
                  :key="post.id"
                  class="col-lg-4"
                  data-aos="fade-up "
                  data-aos-delay="200 "
                >
                  <div class="post-box">
                    <NuxtLink :to="`/blogpost/${post.slug}`">
                      <div class="post-img">
                        <img
                          :src="post.pic"
                          class="img-fluid"
                          :alt="post.pic"
                        />
                      </div>

                      <h3 class="post-title">
                        {{ post.name }}
                      </h3>
                      <p>1 phút trước</p>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane container sl-element fade" id="goc-nhin" role="tabpanel">
              <div class="row">
                <div
                  v-for="post in gocnhins"
                  :key="post.id"
                  class="col-lg-4"
                  data-aos="fade-up "
                  data-aos-delay="200 "
                >
                  <div class="post-box">
                    <NuxtLink :to="`/blogpost/${post.slug}`">
                      <div class="post-img">
                        <img
                          :src="post.pic"
                          class="img-fluid"
                          :alt="post.pic"
                        />
                      </div>

                      <h3 class="post-title">
                        {{ post.name }}
                      </h3>
                      <p>1 phút trước</p>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>