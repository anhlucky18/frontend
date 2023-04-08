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
</script>

<template>
<div style="height:92px;"></div>
<main id="about-us">
        <!-- Banner -->
        <section class="about-us-banner">
            <div class="container">
                <div class="row d-flex justify-content-between align-items-end">
                    <div class="col-12 col-lg-8 title-head-left">
                        <h1>
                            <span style="color:#F9C729">Ami&M</span> was born to bring <br class="d-none d-md-flex"> better life for Companions
                        </h1>
                    </div>
                    <div class="col-12 col-lg-4 short-desc-left">
                        <p><span style="color: #1896CF;">"Amity & More":</span> Câu chuyện khởi nguồn từ khát vọng của những người bằng hữu mong muốn mang đến cuộc sống tốt đẹp hơn cho mình và những người mình yêu thương.</p>
                    </div>
                </div>
            </div>
            <div class="about-img-banner">
                <img src="assets/img/about-banner.png" alt="" style="width: 100%;">
            </div>
        </section>

        <section class="ami-history">
            <div class="container ">
                <div class="tabs-solutions mt-5 mb-5">
                    <ul class="nav nav-pills nav-fill d-flex justify-content-center align-items-center" id="solution-block">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="pill" href="#cau-chuyen">Câu chuyện</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#tam-nhin" data-bs-toggle="pill">Tầm nhìn</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#su-menh" data-bs-toggle="pill">Sứ mệnh</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#tinh-cach-doanh-nghiep" data-bs-toggle="pill">Tính cách doanh nghiệp</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#triet-ly-dau-tu" data-bs-toggle="pill">Triết lý đầu tư</a>
                        </li>
                    </ul>

                    <div class="tab-content mt-5">
                        <div class="tab-pane container about-element active " id="cau-chuyen">
                            <div class="row">
                                <p>
                                    Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau. Những người bạn cùng chung chí hướng đã nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M Việt Nam chính thức đi vào hoạt động. Học hỏi lẫn nhau, học từ sách vở, học
                                    <br> qua trải nghiệm, học từ những người đi trước, chúng tôi đã bước ra khỏi vùng an toàn, dám nghĩ khác để làm tốt hơn, chúng tôi khám phá được khoảng trống để tạo ra những điều khác biệt và cả khoảng trống cho sự
                                    phát <br> triển của chính mỗi người. Say sưa trong những vai trò riêng có của mình, chúng tôi không chỉ dừng ở làm đủ, làm tốt mà làm tốt hơn. Bảo ban nhau rời xa những điều vô ích để có nhiều hơn, thậm chí gấp đôi,
                                    gấp ba quỹ <br> thời gian 8 tiếng mỗi ngày để làm việc – chúng tôi “sống gấp” hơn để đi nhanh hơn. Tin tưởng nhau, vì nhau, không nhìn nhau mà cùng nhìn về một hướng, chúng tôi đã có đội ngũ những người đồng hành, đồng
                                    chí, đồng lòng.
                                </p>
                            </div>

                        </div>
                        <div class="tab-pane container fade about-element " id="tam-nhin">
                            <div class="row">
                                <p>
                                    Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau. Những người bạn cùng chung chí hướng đã nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M Việt Nam chính thức đi vào hoạt động. Học hỏi lẫn nhau, học từ sách vở, học
                                    <br> qua trải nghiệm, học từ những người đi trước, chúng tôi đã bước ra khỏi vùng an toàn, dám nghĩ khác để làm tốt hơn, chúng tôi khám phá được khoảng trống để tạo ra những điều khác biệt và cả khoảng trống cho sự
                                    phát <br> triển của chính mỗi người. Say sưa trong những vai trò riêng có của mình, chúng tôi không chỉ dừng ở làm đủ, làm tốt mà làm tốt hơn. Bảo ban nhau rời xa những điều vô ích để có nhiều hơn, thậm chí gấp đôi,
                                    gấp ba quỹ <br> thời gian 8 tiếng mỗi ngày để làm việc – chúng tôi “sống gấp” hơn để đi nhanh hơn. Tin tưởng nhau, vì nhau, không nhìn nhau mà cùng nhìn về một hướng, chúng tôi đã có đội ngũ những người đồng hành, đồng
                                    chí, đồng lòng.
                                </p>
                            </div>

                        </div>
                        <div class="tab-pane container fade about-element" id="su-menh">
                            <div class="row">
                                <p>
                                    Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau. Những người bạn cùng chung chí hướng đã nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M Việt Nam chính thức đi vào hoạt động. Học hỏi lẫn nhau, học từ sách vở, học
                                    <br> qua trải nghiệm, học từ những người đi trước, chúng tôi đã bước ra khỏi vùng an toàn, dám nghĩ khác để làm tốt hơn, chúng tôi khám phá được khoảng trống để tạo ra những điều khác biệt và cả khoảng trống cho sự
                                    phát <br> triển của chính mỗi người. Say sưa trong những vai trò riêng có của mình, chúng tôi không chỉ dừng ở làm đủ, làm tốt mà làm tốt hơn. Bảo ban nhau rời xa những điều vô ích để có nhiều hơn, thậm chí gấp đôi,
                                    gấp ba quỹ <br> thời gian 8 tiếng mỗi ngày để làm việc – chúng tôi “sống gấp” hơn để đi nhanh hơn. Tin tưởng nhau, vì nhau, không nhìn nhau mà cùng nhìn về một hướng, chúng tôi đã có đội ngũ những người đồng hành, đồng
                                    chí, đồng lòng.
                                </p>
                            </div>
                        </div>
                        <div class="tab-pane container fade about-element" id="tinh-cach-doanh-nghiep">
                            <div class="row">
                                <p>
                                    Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau. Những người bạn cùng chung chí hướng đã nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M Việt Nam chính thức đi vào hoạt động. Học hỏi lẫn nhau, học từ sách vở, học
                                    <br> qua trải nghiệm, học từ những người đi trước, chúng tôi đã bước ra khỏi vùng an toàn, dám nghĩ khác để làm tốt hơn, chúng tôi khám phá được khoảng trống để tạo ra những điều khác biệt và cả khoảng trống cho sự
                                    phát <br> triển của chính mỗi người. Say sưa trong những vai trò riêng có của mình, chúng tôi không chỉ dừng ở làm đủ, làm tốt mà làm tốt hơn. Bảo ban nhau rời xa những điều vô ích để có nhiều hơn, thậm chí gấp đôi,
                                    gấp ba quỹ <br> thời gian 8 tiếng mỗi ngày để làm việc – chúng tôi “sống gấp” hơn để đi nhanh hơn. Tin tưởng nhau, vì nhau, không nhìn nhau mà cùng nhìn về một hướng, chúng tôi đã có đội ngũ những người đồng hành, đồng
                                    chí, đồng lòng.
                                </p>
                            </div>
                        </div>
                        <div class="tab-pane container fade about-element" id="triet-ly-dau-tu">
                            <div class="row">
                                <p>
                                    Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau. Những người bạn cùng chung chí hướng đã nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M Việt Nam chính thức đi vào hoạt động. Học hỏi lẫn nhau, học từ sách vở, học
                                    <br> qua trải nghiệm, học từ những người đi trước, chúng tôi đã bước ra khỏi vùng an toàn, dám nghĩ khác để làm tốt hơn, chúng tôi khám phá được khoảng trống để tạo ra những điều khác biệt và cả khoảng trống cho sự
                                    phát <br> triển của chính mỗi người. Say sưa trong những vai trò riêng có của mình, chúng tôi không chỉ dừng ở làm đủ, làm tốt mà làm tốt hơn. Bảo ban nhau rời xa những điều vô ích để có nhiều hơn, thậm chí gấp đôi,
                                    gấp ba quỹ <br> thời gian 8 tiếng mỗi ngày để làm việc – chúng tôi “sống gấp” hơn để đi nhanh hơn. Tin tưởng nhau, vì nhau, không nhìn nhau mà cùng nhìn về một hướng, chúng tôi đã có đội ngũ những người đồng hành, đồng
                                    chí, đồng lòng.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </section>

        <div class="devide-line container"></div>

        <section id="leadership" class="leadership">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-3 title-block-left">
                        <h2 class="wc-title-heading">
                            <span class="wc-decoration">Ban lãnh đạo</span>
                        </h2>
                    </div>
                    <div class="col-12 col-lg-9 info-leadership">
                        <div class="row d-flex justify-content-between">
                            <div class="col-12 col-sm-6 leadership-item">
                                <div class="item-overlay-image">
                                    <img src="assets/img/team/buimanhlinh.png" alt="">
                                </div>

                                <div class="middle-img">
                                    <div class="text-overlay">
                                        <p>Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau. Những người bạn cùng chung chí hướng đã nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M Việt Nam chính thức đi vào hoạt động.
                                            <br> <br> Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau.</p>
                                    </div>
                                </div>
                                <div id="name-cname" class="mt-5">
                                    <h3>Ông Bùi Mạnh Linh</h3>
                                    <p>Chủ tịch HĐQT Ami Invest</p>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 leadership-item">
                                <div class="item-overlay-image"><img src="assets/img/team/dotiendung-mba.png" alt=""></div>

                                <div class="middle-img">
                                    <div class="text-overlay">
                                        <p>Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau. Những người bạn cùng chung chí hướng đã nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M Việt Nam chính thức đi vào hoạt động.
                                            <br> <br> Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau.</p>
                                    </div>
                                </div>
                                <div id="name-cname" class="mt-5">
                                    <h3>Ông Đỗ Tiến Dũng, MBA</h3>
                                    <p>Tổng Giám đốc Ami Invest</p>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-between mt-5">
                            <div class="col-12 col-sm-6 leadership-item">
                                <div class="item-overlay-image"><img src="assets/img/team/trinhminhkhanh-msc.png" alt=" "></div>

                                <div class="middle-img">
                                    <div class="text-overlay">
                                        <p>Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau. Những người bạn cùng chung chí hướng đã nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M Việt Nam chính thức đi vào hoạt động.
                                            <br> <br> Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau.</p>
                                    </div>
                                </div>
                                <div id="name-cname" class="mt-5">
                                    <h3>Trịnh Minh Khánh, MSc</h3>
                                    <p>TBP Phân tích và nghiên cứu</p>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 leadership-item ">
                                <div class="item-overlay-image"><img src="assets/img/team/phamngocchuong.png " alt=" "></div>

                                <div class="middle-img">
                                    <div class="text-overlay">
                                        <p>Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau. Những người bạn cùng chung chí hướng đã nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M Việt Nam chính thức đi vào hoạt động.
                                            <br> <br> Chuyện về Ami&M bắt đầu từ năm 2005 – thời điểm những người sáng lập đầu tiên gặp nhau.</p>
                                    </div>
                                </div>
                                <div id="name-cname" class="mt-5">
                                    <h3>Phạm Ngọc Chương</h3>
                                    <p>TBP Đầu tư và kinh doanh</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section id="van-hoa-doanh-nghiep" class="van-hoa-doanh-nghiep">
            <div class="container">
                <div id="img-top-vhdn">
                    <img src="assets/img/vhdn.png" alt="" style="width: 100%;">
                </div>
                <div id="about-vhdn">
                    <h2>Văn hoá doanh nghiệp</h2>
                    <p class="mt-3 text-top"><span style="color: #F9C729;">AMIROSE</span> là 7 tiêu chí riêng có trong văn hóa của Ami&M được quy chuẩn để đảm bảo <br> những giá trị cốt lõi xuyên suốt trong tổ chức.</p>
                    <div class="amirose mt-5">
                        <ul>
                            <li>
                                <h1>A</h1>
                            </li>
                            <li>
                                <h1>M</h1>
                            </li>
                            <li>
                                <h1>I</h1>
                            </li>
                            <li>
                                <h1>R</h1>
                            </li>
                            <li>
                                <h1>O</h1>
                            </li>
                            <li>
                                <h1>S</h1>
                            </li>
                            <li>
                                <h1>E</h1>
                            </li>
                        </ul>
                    </div>
                    <div class="amirose-value mt-4">
                        <ul>
                            <li>
                                <p class="text-value">
                                    <span class="gr-title">Amicable</span>
                                    <br> Thân thiện
                                </p>

                            </li>
                            <li>
                                <p class="text-value">
                                    <span class="gr-title">Modest</span>
                                    <br> Khiêm nhường
                                </p>

                            </li>
                            <li>
                                <p class="text-value">
                                    <span class="gr-title">Initiative</span>
                                    <br> Chủ động
                                </p>

                            </li>
                            <li>
                                <p class="text-value">
                                    <span class="gr-title">Responsibility</span>
                                    <br> Trách nhiệm
                                </p>

                            </li>
                            <li>
                                <p class="text-value">
                                    <span class="gr-title">Ollin</span>
                                    <br> Toàn tâm <br> toàn ý cho <br> công việc
                                </p>
                            </li>
                            <li>
                                <p class="text-value">
                                    <span class="gr-title">Sharing</span>
                                    <br> Chia sẻ
                                </p>
                            </li>
                            <li>
                                <p class="text-value">
                                    <span class="gr-title">Envision</span>
                                    <br> Tự nâng tầm
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


    </main>
</template>