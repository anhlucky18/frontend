<script setup lang="ts">
definePageMeta({
  layout: "bloglayout",
});
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
    { src:'_nuxt/assets/vendor/swiper/swiper-bundle.min.js'},
    {
      src: "_nuxt/assets/service.js",
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "bodyClose",
    },
  ],
});
const runtimeConfig = useRuntimeConfig();
var blogposts=null;
const appConfig = useAppConfig()
const url = appConfig.http;

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
</script>

<template>
<div style="height:92px;"></div>
 <main id="services">
        <!-- Banner -->
        <section id="sv-banner" class="sv-banner d-flex align-items-center banner-top">
            <div class="container d-flex flex-column">
                <div class="row">
                    <div class="col-12 col-lg-4 bn-content-left">

                        <h1>Uỷ thác<span> đầu tư</span></h1>
                        <p class="mt-8">Be an Investor and live your dream life , follow the links bellow to read more about the project</p>
                        <a href="#"><button>Trò chuyện miễn phí</button></a>

                    </div>
                    <div class="col-12 col-lg-8 bn-img-right">
                        
                        <img :src="`_nuxt/assets/img/sv-banner.png`" alt=" " />
                    </div>
                </div>
            </div>
        </section>
        <!-- End Banner -->

        <!-- Muc Tieu -->
        <section class="muc-tieu" id="muc-tieu">
            <div class="container " data-aos="fade-up ">

                <div class="section-header">
                    <h2><span class="wc-decoration">Mục tiêu</span></h2>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-3 sv-img-left">
                        <img :src="`_nuxt/assets/img/sv-mt-img.png`" alt=" " />
                    </div>
                    <div class="col-12 col-lg-9 sv-content-right">
                        <!-- <div class="d-flex justify-content-between"> -->
                        <div class="row">
                            <div class="col-6 sv-mt-top">
                                <img :src="`_nuxt/assets/img/icons/sv-mt1.svg`" alt="" class="mb-2">
                                <p>Phá bỏ rào cản về quy mô vốn, thời gian nghiên cứu cho các nhà đầu tư đơn lẻ, không chuyên.</p>
                            </div>
                            <div class="col-6 sv-mt-top">
                                <img :src="`_nuxt/assets/img/icons/sv-mt2.svg`" alt="" class="mb-2">
                                <p>Đầu tư hiệu quả cao hơn (so với VNIndex) trong mọi giai đoạn thị trường.</p>
                            </div>
                        </div>
                        <!-- <div class="d-flex justify-content-between mt-5" class=""> -->
                        <div class="row mt-4">
                            <div class="col-6 sv-mt-bot">
                                <img :src="`_nuxt/assets/img/icons/sv-mt3.svg`" alt="" class="mb-2">
                                <p>Bảo toàn vốn cho nhà đầu tư, phòng tránh rủi ro.</p>
                            </div>
                            <div class="col-6 sv-mt-bot">
                                <img :src="`_nuxt/assets/img/icons/sv-mt4.svg`" alt="" class="mb-2">
                                <p>Bảo toàn vốn cho nhà đầu tư, phòng tránh rủi ro.</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
        <!-- End Muc Tieu -->

        <!-- investment performance -->
        <section id="investment-performance" class="investment-performance">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-5 " id="ip-left-content">
                        <h2 class="ip-title-heading">Hiệu suất đầu tư</h2>
                        <p class="ip-item-text my-5">Lợi suất hoạt động ủy thác đầu tư từ tháng 07/2021 từng đạt 27% vào tháng 04/2022. Duy trì mức trên 15% trong 5 tháng tiếp theo, trong khi VNIndex giảm 15-20%.</p>
                        <a href="#" class="ip-item-link mt-2">Xem chi tiết &nbsp;&nbsp;&nbsp;<img :src="`_nuxt/assets/img/icons/Vector.svg`"  alt=""></a>
                        <h4 class="mt-10" id="loi-suat">Lợi suất năm <span class="orange-text">2021</span> của <br> hoạt động tự doanh <span class="orange-text">đạt 40%</span> </h4>

                    </div>
                    <div class="col-12 col-lg-7 pe-0" id="ip-right-image">
                        <img :src="`_nuxt/assets/img/banner/Group 2041.png`" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- End investment performance -->

        <!-- How we Work -->
        <section id="how-we-work" class="how-we-work">

            <div class="container" data-aos="fade-up">

                <div class="section-header">
                    <h2>Cách chúng tôi <span class="wc-decoration">làm việc</span></h2>
                    <p>Chúng tôi huy động nguồn tiền từ khách hàng hiện hữu của các công ty chứng khoán và các khách hàng nội bộ, đưa về cùng một tài khoản. Sau đó, đầu tư vào tất cả các lĩnh vực mà AMT có năng lực triển khai, được pháp luật cho phép.</p>
                </div>

                <div class="row mt-5">
                    <div class="col-lg-4 " data-aos="fade-up " data-aos-delay="200 ">
                        <div class="hww-box ">
                            <div class="hww-img"><img :src="`_nuxt/assets/img/icons/hww1.svg`" class="img-fluid " alt=" "></div>
                            <h3 class="hww-title">Lợi suất</h3>
                            <p class="hww-text">Chi trả lợi suất cho khách <br> hàng cố định theo kỳ hạn <br> ( 3-12 tháng)</p>

                        </div>
                    </div>

                    <div class="col-lg-4 " data-aos="fade-up " data-aos-delay="400 ">
                        <div class="hww-box">
                            <div class="hww-img"><img src="assets/img/icons/hww2.svg" class="img-fluid " alt=" "></div>
                            <h3 class="hww-title">Vốn góp</h3>
                            <p class="hww-text short">Tối thiểu <br> 100.000.000đ</p>

                        </div>
                    </div>

                    <div class="col-lg-4 " data-aos="fade-up " data-aos-delay="600 ">
                        <div class="hww-box">
                            <div class="hww-img"><img src="assets/img/icons/hww3.svg" class="img-fluid " alt=" "></div>

                            <h4 class="hww-title">Thời hạn hợp tác</h4>
                            <p class="hww-text short">Tối thiểu <br> 12 tháng</p>

                        </div>
                    </div>
                </div>

            </div>
            <div class="section-bottom mt-5">
                <a href="#openModal" id="open-modal">Xem chi tiết quy trình Uỷ thác</a>
                <!-- Modal -->
                
                <div id="openModal" class="modalDialog">
                    <div >
                        <a href="#close" title="Close" class="close hww-btn-close">X</a>
                        <swiper-container
                            :slides-per-view="1"
                            :space-between="spaceBetween"
                            :centered-slides="true"
                            :pagination="{
                            clickable: true
                            }"
                            @progress="onProgress"
                            @slidechange="onSlideChange"
                        >
                            <swiper-slide>
                                <img :src="`_nuxt/assets/img/qtnt.png`" alt="">
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="`_nuxt/assets/img/qtut.png`" alt="">
                            </swiper-slide>
                        </swiper-container>
                        
                    </div>
                    <a href="#close" title="Close" class="close" id="close">x</a>
                </div>
                
            </div>
        </section>
        <!-- End How we Work -->


        <!-- Main Product -->
        <section class="main-product" id="main-product">
            <div class="container mp-wrap">
                <div class="section-header">
                    <h2><span class="wc-decoration">Sản phẩm </span>chính</h2>
                </div>
                <div class="row mt-3">
                    <div class="col-12 col-lg-6 mp-content-left">
                        <div class="row" id="amisafe">
                            <div class="col-3">
                                <img :src="`_nuxt/assets/img/icons/rise1.svg`" alt="">
                            </div>
                            <div class="col-9">
                                <h4>AmiSafe</h4>
                                <p>Cam kết lãi cố <strong>định 8.7%/năm</strong> </p>
                            </div>
                        </div>
                        <div class="row" id="amisharing">
                            <div class="col-3">
                                <img :src="`_nuxt/assets/img/icons/rise2.svg`" alt="">
                            </div>
                            <div class="col-9">
                                <h4>AmiSharing</h4>
                                <p>Tỷ suất lợi nhuận mục tiêu <strong>6.7%/năm(*)</strong> </p>
                            </div>
                        </div>
                        <p class="mp-note mt-5">(*) Phần lợi nhuận vượt mục tiêu được phân chia theo tỷ lệ: KH: 80%/AMI: 20%.</p>
                    </div>
                    <div class="col-12 col-lg-6 mp-img-right">
                        <img :src="`_nuxt/assets/img/mp-img.png`" alt="">
                    </div>
                </div>
                <div class="mp-section-bottom">
                    <div class="row">
                        <div class="bot-left-content col-12 col-lg-8">
                            <h4>Bạn theo dõi hiệu quả đầu tư như thế nào?</h4>
                            <p class="mt-2">AMI cập nhật kết quả hàng ngày trên website. Báo cáo chi tiết của từng khách hàng sẽ được gửi vào thứ 6 tuần 2 và tuần 4 của tháng. Nội dung bao gồm danh mục hiện hữu, tỷ trọng tài khoản, tình trạng lãi/lỗ.</p>
                        </div>
                        <div class="bot-right-button col-12 col-lg-4">
                            <a href="#"><button>Đọc báo cáo</button></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Main Product -->

        <!-- FAQ -->
        <section class="faq" id="faq">
            <div class="container">
                <div class="section-header" style="text-align: left;">
                    <h2><span class="wc-decoration">FAQ</span></h2>
                </div>
                <div class="row faq-wrap">
                    <div class="col-12 col-lg-8 accord-list">
                        <div class="accordion accordion-flush px-xl-5" id="faqlist">

                            <div class="accordion-item" data-aos="fade-up" data-aos-delay="200">
                                <h3 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                        The expense windows adapted sir. Wrong widen drawn.
                                    </button>
                                </h3>
                                <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div class="accordion-body">
                                        Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                                    </div>
                                </div>
                            </div>
                            <!-- # Faq item-->

                            <div class="accordion-item" data-aos="fade-up" data-aos-delay="300">
                                <h3 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                        Six curiosity day assurance bed necessary?
                                </button>
                                </h3>
                                <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div class="accordion-body">
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
                                        cursus turpis massa tincidunt dui.
                                    </div>
                                </div>
                            </div>
                            <!-- # Faq item-->

                            <div class="accordion-item" data-aos="fade-up" data-aos-delay="400">
                                <h3 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                        Produce say the ten moments parties?
                                </button>
                                </h3>
                                <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div class="accordion-body">
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna
                                        molestie at elementum eu facilisis sed odio morbi quis
                                    </div>
                                </div>
                            </div>
                            <!-- # Faq item-->

                            <div class="accordion-item" data-aos="fade-up" data-aos-delay="500">
                                <h3 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                        Simple innate summer fat appear basket his desire joy?
                                </button>
                                </h3>
                                <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div class="accordion-body">
                                        <i class="bi bi-question-circle question-icon"></i> Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend
                                        donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </div>
                                </div>
                            </div>
                            <!-- # Faq item-->

                            <div class="accordion-item" data-aos="fade-up" data-aos-delay="600">
                                <h3 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                        Outward clothes promise at gravity do excited?
                                </button>
                                </h3>
                                <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div class="accordion-body">
                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                    </div>
                                </div>
                            </div>
                            <!-- # Faq item-->


                        </div>
                    </div>
                    <div class="col-12 col-lg-4 faq-direct-mail">
                        <img :src="`_nuxt/assets/img/icons/faq-dr-mail.svg`" alt="">
                        <h3 class="mt-5">Do you have more questions?</h3>
                        <p class="mt-5">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                        <a href="#" class="mt-5 faq-dr-link"><button>Shoot a Direct Mail</button></a>
                    </div>
                </div>


            </div>
        </section>
        <!-- End FAQ -->

        <!-- ======= Growing Enterprises Section ======= -->
        <!-- <section class="grow-enterprises" id="grow-enterprises">
            <div class="container" data-aos="fade-up ">
                <div class="row ">
                    <div class="col-12 col-lg-8 ge-content-left d-flex flex-grow-1 justify-content-center align-items-center ">
                        <div style="display: block; ">
                            <h2>
                                The Global Cloud Contact Center & PBX for Growing Enterprises
                            </h2>
                            <a href="#"><button>Trò chuyện miễn phí</button></a>
                        </div>

                    </div>
                    <div class="col-12 col-lg-4 ge-image-left ">
                        <img :src="`_nuxt/assets/img/Group 2022.png`" alt=" ">
                    </div>
                </div>
            </div>

        </section> -->
        <!-- ======= End Growing Enterprises Section ======= -->

    </main>
</template>