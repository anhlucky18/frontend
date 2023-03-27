<script setup lang="ts">
useServerSeoMeta({
  title: "Ami Invest",
  ogTitle: "Ami Invest Site",
  description: "Website đầu tư chứng khoán và quản lý tài sản",
  ogDescription: "Website đầu tư chứng khoán và quản lý tài sản",
  //ogImage: 'https://example.com/image.png',
  //twitterCard: 'summary_large_image',
});

useHead({
  script: [
    {
      src: "_nuxt/assets/homepage.js",
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "bodyClose",
    },
  ],
});
const runtimeConfig = useRuntimeConfig();
var blogposts=null;
const appConfig = useAppConfig()
const url = appConfig.http;
 await useFetch(
  url+'api/blogposts?page=1&limit=3'
).then((res) => {
        blogposts = res.data.value.data.map((v) => {
          let pic = v.pic

          if (pic) {
            v.pic = url + pic.replace('public/', '')
          }

          return v
        })
      })


// const logos = [
//   { id: 1, link: "assets/img/clients/client-1.png", active: "active" },
//   { id: 2, link: "/assets/img/clients/client-2.png" },
//   { id: 3, link: "assets/img/clients/client-3.png" },
//   { id: 4, link: "assets/img/clients/client-4.png" },
//   { id: 5, link: "assets/img/clients/client-5.png" },
//   { id: 6, link: "assets/img/clients/client-6.png" },
//   { id: 7, link: "assets/img/clients/client-7.png" },
//   { id: 8, link: "assets/img/clients/client-8.png" },
// ];
// let items = document.querySelectorAll('#recipeCarousel.carousel .carousel-item')
// console.log(items)
// items.forEach((el) => {
//     // console.log(el)
//     const minPerSlide = 4
//     let next = el.nextElementSibling
//     for (var i=1; i<minPerSlide; i++) {
//         if (!next) {
//             // wrap carousel by using first child
//         	next = items[0]
//       	}
//         let cloneChild = next.cloneNode(true)
//         console.log(cloneChild)
//         if(el){
//             // el.appendChild(cloneChild.children[0])
//             next = next.nextElementSibling
//         }
//     }
// })
</script>

<template>

  <section
    id="ami-banner"
    class="hero-animated d-flex align-items-center banner-top"
  >
    <div class="container d-flex flex-column overflow-hidden">
      <!-- <img src=" assets/img/hero-carousel/hero-carousel-3.svg " class="img-fluid animated ">
            <h2>Welcome to <span>HeroBiz</span></h2>
            <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
            <div class="d-flex ">
                <a href="#about " class="btn-get-started scrollto ">Get Started</a>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ " class="glightbox btn-watch-video d-flex align-items-center "><i class="bi bi-play-circle "></i><span>Watch Video</span></a>
            </div> -->
      <div class="row">
        <div
          class="col-12 col-lg-5 banner-title justify-content-start banner-left-content"
        >
          <h1>
            Hãy để <span>tiền của bạn</span> phát huy hết giá trị của mình
          </h1>
          <p class="mt-8">
            Ami Invest giúp bạn quản lý, đầu tư và sử dụng tài sản hiệu quả
          </p>
          <a href=" "><button>Trò chuyện miễn phí</button></a>
        </div>
        <div
          class="col-12 col-lg-7 banner-right-image d-flex justify-content-end"
        >
          <img :src="`_nuxt/assets/img/banner/Group 2042.png`" alt=" " />
        </div>
      </div>
      <div class="row" id="banner-amount">
        <div class="col-12 col-lg-4 bn-amount" id="von-dieu-le">
          <h2 class="number-heading">
            10M <br /><span class="banner-content-block">Vốn điều lệ</span>
          </h2>
        </div>
        <div class="col-12 col-lg-4 bn-amount" id="quan-ly-ts">
          <h2 class="number-heading">
            1000+ <br /><span class="banner-content-block"
              >Tài sản quản lý</span
            >
          </h2>
        </div>
        <div class="col-12 col-lg-4 bn-amount" id="ty-suat">
          <h2 class="number-heading">
            90% <br />
            <span class="banner-content-block">Tỷ suất sinh lời</span>
          </h2>
        </div>
      </div>
    </div>
  </section>

  <main id="main ">
    <!-- =======ami solutions ======= -->
    <section id="ami-solutions " class="ami-solutions">
      <div class="container">
        <div class="solution-head">
          <h2 class="solution-title-heading">
            Đồng hành cùng bạn, hướng đến mục tiêu
          </h2>
          <p class="solution-text-heading">
            Các giải pháp của Ami Invest giúp bạn giải quyết vấn đề tài chính.
          </p>
        </div>
        <div class="tabs-solutions mt-5 mb-5">
          <ul
            class="nav nav-pills nav-fill d-flex justify-content-center align-items-center"
            id="solution-block"
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="pill"
                href="#uy-thac-dau-tu"
                >Ủy thác đầu tư</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#dau-tu" data-bs-toggle="pill"
                >Đầu tư</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bao-cao-tu-van" data-bs-toggle="pill"
                >Báo cáo & tư vấn</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#dau-tu-bds" data-bs-toggle="pill"
                >Hợp tác <br />
                đầu tư BĐS</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#giai-phap-tai-chinh"
                data-bs-toggle="pill"
                >Giải pháp <br />
                tài chính</a
              >
            </li>
          </ul>

          <div class="tab-content mt-5">
            <div
              class="tab-pane container sl-element active"
              id="uy-thac-dau-tu"
            >
              <div class="row">
                <div class="col-12 col-md-7 sl-left-image">
                  <img :src="`_nuxt/assets/img/giaiphap/uy-thac-dau-tu.png`" alt="" />
                </div>
                <div class="col-12 col-md-5 sl-right-content">
                  <h3 class="sl-item-title text-left">Ủy thác đầu tư</h3>
                  <p class="sl-item-text my-5">
                    Đầu tư cổ phiếu niêm yết giao dịch trên sàn chứng khoán Việt
                    Nam. Bên cạnh đó, nghiên cứu thêm các doanh nghiệp cổ phần
                    chưa niêm yết.
                  </p>
                  <a href="#" class="sl-item-link mt-2"
                    >Xem chi tiết &nbsp;&nbsp;&nbsp;<img
                      :src="`_nuxt/assets/img/icons/Vector.svg`"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
            <div class="tab-pane container fade sl-element" id="dau-tu">
              <div class="row">
                <div class="col-12 col-md-7 sl-left-image">
                  <img :src="`_nuxt/assets/img/giaiphap/uy-thac-dau-tu.png`" alt="" />
                </div>
                <div class="col-12 col-md-5 sl-right-content">
                  <h3 class="sl-item-title text-left">Đầu tư</h3>
                  <p class="sl-item-text my-5">
                    Đầu tư cổ phiếu niêm yết giao dịch trên sàn chứng khoán Việt
                    Nam. Bên cạnh đó, nghiên cứu thêm các doanh nghiệp cổ phần
                    chưa niêm yết.
                  </p>
                  <a href="#" class="sl-item-link mt-2"
                    >Xem chi tiết &nbsp;&nbsp;&nbsp;<img
                      :src="`_nuxt/assets/img/icons/Vector.svg`"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
            <div class="tab-pane container fade sl-element" id="bao-cao-tu-van">
              <div class="row">
                <div class="col-12 col-md-7 sl-left-image">
                  <img :src="`_nuxt/assets/img/giaiphap/uy-thac-dau-tu.png`" alt="" />
                </div>
                <div class="col-12 col-md-5 sl-right-content">
                  <h3 class="sl-item-title text-left">Báo cáo & tư vấn</h3>
                  <p class="sl-item-text my-5">
                    Đầu tư cổ phiếu niêm yết giao dịch trên sàn chứng khoán Việt
                    Nam. Bên cạnh đó, nghiên cứu thêm các doanh nghiệp cổ phần
                    chưa niêm yết.
                  </p>
                  <a href="#" class="sl-item-link mt-2"
                    >Xem chi tiết &nbsp;&nbsp;&nbsp;<img
                      :src="`_nuxt/assets/img/icons/Vector.svg`"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
            <div class="tab-pane container fade sl-element" id="dau-tu-bds">
              <div class="row">
                <div class="col-12 col-md-7 sl-left-image">
                  <img :src="`_nuxt/assets/img/giaiphap/uy-thac-dau-tu.png`" alt="" />
                </div>
                <div class="col-12 col-md-5 sl-right-content">
                  <h3 class="sl-item-title text-left">Hợp tác đầu tư BĐS</h3>
                  <p class="sl-item-text my-5">
                    Đầu tư cổ phiếu niêm yết giao dịch trên sàn chứng khoán Việt
                    Nam. Bên cạnh đó, nghiên cứu thêm các doanh nghiệp cổ phần
                    chưa niêm yết.
                  </p>
                  <a href="#" class="sl-item-link mt-2"
                    >Xem chi tiết &nbsp;&nbsp;&nbsp;<img
                      :src="`_nuxt/assets/img/icons/Vector.svg`"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane container fade sl-element"
              id="giai-phap-tai-chinh"
            >
              <div class="row">
                <div class="col-12 col-md-7 sl-left-image">
                  <img :src="`_nuxt/assets/img/giaiphap/uy-thac-dau-tu.png`" alt="" />
                </div>
                <div class="col-12 col-md-5 sl-right-content">
                  <h3 class="sl-item-title text-left">Giải pháp tài chính</h3>
                  <p class="sl-item-text my-5">
                    Đầu tư cổ phiếu niêm yết giao dịch trên sàn chứng khoán Việt
                    Nam. Bên cạnh đó, nghiên cứu thêm các doanh nghiệp cổ phần
                    chưa niêm yết.
                  </p>
                  <a href="#" class="sl-item-link mt-2"
                    >Xem chi tiết &nbsp;&nbsp;&nbsp;<img
                      :src="`_nuxt/assets/img/icons/Vector.svg`"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Solutions Section -->

    <!-- investment performance -->
    <section id="investment-performance" class="investment-performance">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5" id="ip-left-content">
            <h2 class="ip-title-heading">Hiệu suất đầu tư</h2>
            <p class="ip-item-text my-5">
              Lợi suất hoạt động ủy thác đầu tư từ tháng 07/2021 từng đạt 27%
              vào tháng 04/2022. Duy trì mức trên 15% trong 5 tháng tiếp theo,
              trong khi VNIndex giảm 15-20%.
            </p>
            <a href="#" class="ip-item-link mt-2"
              >Xem chi tiết &nbsp;&nbsp;&nbsp;<img
                :src="`_nuxt/assets/img/icons/Vector.svg`"
                alt=""
            /></a>
            <h4 class="mt-10" id="loi-suat">
              Lợi suất năm <span class="orange-text">2021</span> của <br />
              hoạt động tự doanh <span class="orange-text">đạt 40%</span>
            </h4>
          </div>
          <div class="col-12 col-md-7 pe-0" id="ip-right-image">
            <img :src="`_nuxt/assets/img/banner/Group 2041.png`" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- End investment performance -->

    <!-- ======= Why choose ======= -->
    <Homepage_Why/>

    <!-- ======= End Why choose ======= -->

    <!-- ======= Testimonials Section ======= -->
    
    <Testimonials_slide/>
    
    <!-- End Testimonials Section -->


    <!-- ======= Clients Section ======= -->
    
     <div id="clients " class="clients ">
         <div class="container " data-aos="zoom-out ">
         <Carousel_component/>
         </div>
            <!-- <div class="container " data-aos="zoom-out ">

                <div class="clients-slider swiper ">
                    <div class="swiper-wrapper align-items-center ">
                        <div class="swiper-slide "><img src="assets/img/clients/client-1.png " class="img-fluid " alt=" "></div>
                        <div class="swiper-slide "><img src="assets/img/clients/client-2.png " class="img-fluid " alt=" "></div>
                        <div class="swiper-slide "><img src="assets/img/clients/client-3.png " class="img-fluid " alt=" "></div>
                        <div class="swiper-slide "><img src="assets/img/clients/client-4.png " class="img-fluid " alt=" "></div>
                        <div class="swiper-slide "><img src="assets/img/clients/client-5.png " class="img-fluid " alt=" "></div>
                        <div class="swiper-slide "><img src="assets/img/clients/client-6.png " class="img-fluid " alt=" "></div>
                        <div class="swiper-slide "><img src="assets/img/clients/client-7.png " class="img-fluid " alt=" "></div>
                        <div class="swiper-slide "><img src="assets/img/clients/client-8.png " class="img-fluid " alt=" "></div>
                    </div>
                </div>

            </div> -->
        </div> 
    <!-- End Clients Section -->

    <!-- ======= Recent Blog Posts Section ======= -->
    <section id="recent-blog-posts " class="recent-blog-posts">
      <div class="container" data-aos="fade-up ">
        <div class="section-header">
          <h2><span class="wc-decoration">Tin tức - Blog</span></h2>
        </div>
        <div class="tab-link-blog">
          <ul
            class="nav nav-pills nav-fill justify-content-center align-items-center"
            id="blog-block"
          >
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
          <div class="tab-content mt-5">
            <div class="tab-pane container sl-element active" id="blog-all">
              <div class="row">
                <div v-for="post in blogposts" :key="post.id" class="col-lg-4" data-aos="fade-up " data-aos-delay="200 ">
                  <div class="post-box">
                    <div class="post-img">
                      <img
                        :src="post.pic"
                        class="img-fluid"
                        :alt="post.pic"
                      />
                    </div>

                    <h3 class="post-title">
                      {{post.name}}
                    </h3>
                    <p>1 phút trước</p>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Recent Blog Posts Section -->
    <!-- ======= Growing Enterprises Section ======= -->
        <section class="grow-enterprises" id="grow-enterprises">
            <div class="container" data-aos="fade-up ">
                <div class="row">
                    <div class="col-12 col-lg-8 ge-content-left d-flex flex-grow-1 justify-content-center align-items-center">
                        <div style="display: block;">
                            <h2>
                                The Global Cloud Contact Center & PBX for Growing Enterprises
                            </h2>
                            <a href="#"><button>Trò chuyện miễn phí</button></a>
                        </div>

                    </div>
                    <div class="col-12 col-lg-4 ge-image-left">
                        <img :src="`_nuxt/assets/img/Group 2022.png`" alt="">
                    </div>
                </div>
            </div>

        </section>
        <!-- ======= End Growing Enterprises Section ======= -->

  </main>
</template>
    