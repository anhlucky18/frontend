<script setup lang="ts">
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
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

  
      const spaceBetween = 10;
      

const runtimeConfig = useRuntimeConfig();
var blogposts=null;
const appConfig = useAppConfig()
const url = appConfig.http;
</script>

<template>
    <main id="report-consult">
        <div style="height:92px;"></div>
    
        <!-- Banner -->
        <section id="report-consult-banner" class="report-consult-banner d-flex align-items-center banner-top">
            <div class="container d-flex flex-column">
                <div class="row">
                    <div class="col-12 col-lg-5 bn-content-left">

                        <h1>Báo cáo & <span>tư vấn</span></h1>
                        <p class="mt-8">Xem nhanh báo cáo thị trường hàng ngày, hay tải về các phân tích chuyên sâu.</p>
                        <a href="#"><button>Đăng ký thành viên</button></a>

                    </div>
                    <div class="col-12 col-lg-7 bn-img-right">
                        <img src="assets/img/report-consult.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- End Banner -->

        <!-- Newest -->

        <section id="newest" class="newest">

            <div class="container" data-aos="fade-up">

                <div class="section-header">
                    <h2><span class="wc-decoration">Mới nhất</span></h2>

                </div>

                <div class="row">
                    <div class="col-lg-4 " data-aos="fade-up " data-aos-delay="200 ">
                        <div class="new-box">
                            <h3 class="new-title">Kỳ vọng sự phục hồi tích cực trong các tháng cuối năm </h3>
                            <p class="new-text mt-3">Theo các chuyên gia, thị trường chứng khoán đã điều chỉnh về mức hấp dẫn. Kỳ vọng thị trường sẽ có sự tăng trưởng mạnh mẽ trong những tháng cuối năm 2022 và có thể trở lại mức lịch sử trong năm 2023.</p>
                            <div class="time-readmore d-flex justify-content-start mt-5">
                                <p class="time-news">23/12/2022</p>
                                <span class="new-space">|</span>
                                <a href="" class="new-readmore">Xem thêm</a>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4 " data-aos="fade-up " data-aos-delay="400 ">
                        <div class="new-box">
                            <h3 class="new-title">Kỳ vọng sự phục hồi tích cực trong các tháng cuối năm </h3>
                            <p class="new-text mt-3">Theo các chuyên gia, thị trường chứng khoán đã điều chỉnh về mức hấp dẫn. Kỳ vọng thị trường sẽ có sự tăng trưởng mạnh mẽ trong những tháng cuối năm 2022 và có thể trở lại mức lịch sử trong năm 2023.</p>
                            <div class="time-readmore d-flex justify-content-start mt-5">
                                <p class="time-news">23/12/2022</p>
                                <span class="new-space">|</span>
                                <a href="" class="new-readmore">Xem thêm</a>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4 " data-aos="fade-up " data-aos-delay="600 ">
                        <div class="new-box">
                            <h3 class="new-title">Kỳ vọng sự phục hồi tích cực trong các tháng cuối năm </h3>
                            <p class="new-text mt-3">Theo các chuyên gia, thị trường chứng khoán đã điều chỉnh về mức hấp dẫn. Kỳ vọng thị trường sẽ có sự tăng trưởng mạnh mẽ trong những tháng cuối năm 2022 và có thể trở lại mức lịch sử trong năm 2023.</p>
                            <div class="time-readmore d-flex justify-content-start mt-5">
                                <p class="time-news">23/12/2022</p>
                                <span class="new-space">|</span>
                                <a href="" class="new-readmore">Xem thêm</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Newest -->

        <!-- Download a Lot -->
        <section id="download-a-lot" class="download-a-lot">

            <div class="container" data-aos="fade-up">

                <div class="section-header">
                    <h2><span class="wc-decoration">Tải nhiều</span></h2>

                </div>

            </div>
            <div class="container-wrap">
                <div class="container" style="position: relative;">
                    <swiper-container
                        :slides-per-view="3"
                        :space-between="spaceBetween"
                        
                        :navigation="{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }"
                        :breakpoints="{
                            768: {
                                slidesPerView: 3,
                            },
                            }"
                        
                    >
                        <swiper-slide>
                            <div class="col-12 " data-aos="fade-up " data-aos-delay="200 ">
                                <div class="new-box">
                                    <h3 class="new-title">Kỳ vọng sự phục hồi tích cực trong các tháng cuối năm </h3>
                                    <div class="time-readmore d-flex justify-content-start mt-5">
                                        <p class="time-news">23/12/2022</p>
                                        <span class="new-space">|</span>
                                        <a href="" class="new-dl"><img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                    </div>

                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="col-12" data-aos="fade-up " data-aos-delay="400 ">
                                    <div class="new-box">
                                        <h3 class="new-title">Kỳ vọng sự phục hồi tích cực trong các tháng cuối năm </h3>
                                        <div class="time-readmore d-flex justify-content-start mt-5">
                                            <p class="time-news">23/12/2022</p>
                                            <span class="new-space">|</span>
                                            <a href="" class="new-dl"><img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                        </div>

                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="col-12" data-aos="fade-up " data-aos-delay="400 ">
                                    <div class="new-box">
                                        <h3 class="new-title">Kỳ vọng sự phục hồi tích cực trong các tháng cuối năm </h3>
                                        <div class="time-readmore d-flex justify-content-start mt-5">
                                            <p class="time-news">23/12/2022</p>
                                            <span class="new-space">|</span>
                                            <a href="" class="new-dl"><img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                        </div>

                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="col-12" data-aos="fade-up " data-aos-delay="400 ">
                                    <div class="new-box">
                                        <h3 class="new-title">Kỳ vọng sự phục hồi tích cực trong các tháng cuối năm </h3>
                                        <div class="time-readmore d-flex justify-content-start mt-5">
                                            <p class="time-news">23/12/2022</p>
                                            <span class="new-space">|</span>
                                            <a href="" class="new-dl"><img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                        </div>

                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="col-12" data-aos="fade-up " data-aos-delay="400 ">
                                    <div class="new-box">
                                        <h3 class="new-title">Kỳ vọng sự phục hồi tích cực trong các tháng cuối năm </h3>
                                        <div class="time-readmore d-flex justify-content-start mt-5">
                                            <p class="time-news">23/12/2022</p>
                                            <span class="new-space">|</span>
                                            <a href="" class="new-dl"><img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                        </div>

                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="col-12" data-aos="fade-up " data-aos-delay="400 ">
                                    <div class="new-box">
                                        <h3 class="new-title">Kỳ vọng sự phục hồi tích cực trong các tháng cuối năm </h3>
                                        <div class="time-readmore d-flex justify-content-start mt-5">
                                            <p class="time-news">23/12/2022</p>
                                            <span class="new-space">|</span>
                                            <a href="" class="new-dl"><img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                        </div>

                                    </div>
                                </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="col-12" data-aos="fade-up " data-aos-delay="400 ">
                                    <div class="new-box">
                                        <h3 class="new-title">Kỳ vọng sự phục hồi tích cực trong các tháng cuối năm </h3>
                                        <div class="time-readmore d-flex justify-content-start mt-5">
                                            <p class="time-news">23/12/2022</p>
                                            <span class="new-space">|</span>
                                            <a href="" class="new-dl"><img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                        </div>

                                    </div>
                                </div>
                        </swiper-slide>
                    </swiper-container>
                        <img src="assets/img/icons/sw-prev.svg" alt="" class="swiper-button-prev" style="left: -2px;">
                        <img src="assets/img/icons/next.svg" alt="" class="swiper-button-next" style="right: -2px;">
                    
                </div>

            </div>
        </section>
        <!-- End Download a Lot -->


        <section class="report-lists" id="report-lists">
            <div class="container">
                <div class="m-4 report-wrap">
                    <ul class="nav nav-tabs" id="myTabReport">
                        <li class="rpl nav-item">
                            <a href="#daily-report" class="nav-link " data-bs-toggle="tab">Báo cáo ngày</a>
                        </li>
                        <li class="rpl nav-item">
                            <a href="#industry-report" class="nav-link active" data-bs-toggle="tab">Báo cáo ngành</a>
                        </li>
                        <li class="rpl nav-item">
                            <a href="#analysis-report" class="nav-link" data-bs-toggle="tab">Báo cáo phân tích</a>
                        </li>
                        <li class="rpl nav-item">
                            <a href="#macro-report" class="nav-link" data-bs-toggle="tab">Báo cáo vĩ mô</a>
                        </li>
                    </ul>
                    <div class="form-search-report">
                        <form action="">
                            <input type="text" name="search-report" id="search-report" placeholder="Tìm từ khoá....">
                            <img src="assets/img/icons/search.svg" alt="" id="search-indent-icon">
                            <label for="date-picker" tabindex="0"></label>
                            <input type="date" class="custom-hidden" id="date-picker">
                        </form>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane fade show active report-item" id="industry-report">
                            <div class="row">
                                <div class="col-12 col-md-10 rp-item-left">
                                    <h3>Biến động tỷ giá hối đoái và tác động đến các doanh nghiệp niêm yết</h3>
                                    <p class="mt-4">
                                        Áp lực lên tỷ giá USD/VND tăng mạnh trong tháng 10/2022 và Ngân hàng Nhà nước ( NHNN) liên tục có những biện pháp điều hành để ổn định thị trường ngoại hối. Vào ngày 17/10, NHNN đã thông báo quyết định điều chỉnh biên độ tỷ giá giao ngay USD/VND từ mức
                                        +/- 3% lên +/- 5%. Tiếp đó, giá bán USD giao ngay tại Sở GDNHNN được nâng lên 24.380 đồng, từ mức 23.925 đồng trước đó và tiếp tục tăng lên 24.870 đồng sau một tuần (24/10, tương đương mức tăng 7,4% so với cuối
                                        năm 2021). Bên cạnh đó, lãi suất điều hành cũng đã được NHNN điều chỉnh tăng thêm 100 điểm cơ bản lần thứ hai trong vòng hai tháng, với mục đích chính để giảm áp lực đối với tỷ giá, trong bối cảnh lạm phát vẫn trong
                                        tầm kiểm soát. Xem thêm >
                                    </p>
                                </div>
                                <div class="col-12 col-md-2 rp-item-right">
                                    <p class="time-news">30/12/2022</p>
                                    <a href="" class="new-dl"> <img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 col-md-10 rp-item-left">
                                    <h3>Biến động tỷ giá hối đoái và tác động đến các doanh nghiệp niêm yết</h3>
                                    <p class="mt-4">
                                        Áp lực lên tỷ giá USD/VND tăng mạnh trong tháng 10/2022 và Ngân hàng Nhà nước ( NHNN) liên tục có những biện pháp điều hành để ổn định thị trường ngoại hối. Vào ngày 17/10, NHNN đã thông báo quyết định điều chỉnh biên độ tỷ giá giao ngay USD/VND từ mức
                                        +/- 3% lên +/- 5%. Tiếp đó, giá bán USD giao ngay tại Sở GDNHNN được nâng lên 24.380 đồng, từ mức 23.925 đồng trước đó và tiếp tục tăng lên 24.870 đồng sau một tuần (24/10, tương đương mức tăng 7,4% so với cuối
                                        năm 2021). Bên cạnh đó, lãi suất điều hành cũng đã được NHNN điều chỉnh tăng thêm 100 điểm cơ bản lần thứ hai trong vòng hai tháng, với mục đích chính để giảm áp lực đối với tỷ giá, trong bối cảnh lạm phát vẫn trong
                                        tầm kiểm soát. Xem thêm >
                                    </p>
                                </div>
                                <div class="col-12 col-md-2 rp-item-right">
                                    <p class="time-news">29/12/2022</p>
                                    <a href="" class="new-dl"> <img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-10 rp-item-left">
                                    <h3>Biến động tỷ giá hối đoái và tác động đến các doanh nghiệp niêm yết</h3>
                                    <p class="mt-4">
                                        Áp lực lên tỷ giá USD/VND tăng mạnh trong tháng 10/2022 và Ngân hàng Nhà nước ( NHNN) liên tục có những biện pháp điều hành để ổn định thị trường ngoại hối. Vào ngày 17/10, NHNN đã thông báo quyết định điều chỉnh biên độ tỷ giá giao ngay USD/VND từ mức
                                        +/- 3% lên +/- 5%. Tiếp đó, giá bán USD giao ngay tại Sở GDNHNN được nâng lên 24.380 đồng, từ mức 23.925 đồng trước đó và tiếp tục tăng lên 24.870 đồng sau một tuần (24/10, tương đương mức tăng 7,4% so với cuối
                                        năm 2021). Bên cạnh đó, lãi suất điều hành cũng đã được NHNN điều chỉnh tăng thêm 100 điểm cơ bản lần thứ hai trong vòng hai tháng, với mục đích chính để giảm áp lực đối với tỷ giá, trong bối cảnh lạm phát vẫn trong
                                        tầm kiểm soát. Xem thêm >
                                    </p>
                                </div>
                                <div class="col-12 col-md-2 rp-item-right">
                                    <p class="time-news">28/12/2022</p>
                                    <a href="" class="new-dl"> <img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-10 rp-item-left">
                                    <h3>Biến động tỷ giá hối đoái và tác động đến các doanh nghiệp niêm yết</h3>
                                    <p class="mt-4">
                                        Áp lực lên tỷ giá USD/VND tăng mạnh trong tháng 10/2022 và Ngân hàng Nhà nước ( NHNN) liên tục có những biện pháp điều hành để ổn định thị trường ngoại hối. Vào ngày 17/10, NHNN đã thông báo quyết định điều chỉnh biên độ tỷ giá giao ngay USD/VND từ mức
                                        +/- 3% lên +/- 5%. Tiếp đó, giá bán USD giao ngay tại Sở GDNHNN được nâng lên 24.380 đồng, từ mức 23.925 đồng trước đó và tiếp tục tăng lên 24.870 đồng sau một tuần (24/10, tương đương mức tăng 7,4% so với cuối
                                        năm 2021). Bên cạnh đó, lãi suất điều hành cũng đã được NHNN điều chỉnh tăng thêm 100 điểm cơ bản lần thứ hai trong vòng hai tháng, với mục đích chính để giảm áp lực đối với tỷ giá, trong bối cảnh lạm phát vẫn trong
                                        tầm kiểm soát. Xem thêm >
                                    </p>
                                </div>
                                <div class="col-12 col-md-2 rp-item-right">
                                    <p class="time-news">27/12/2022</p>
                                    <a href="" class="new-dl"> <img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-10 rp-item-left">
                                    <h3>Biến động tỷ giá hối đoái và tác động đến các doanh nghiệp niêm yết</h3>
                                    <p class="mt-4">
                                        Áp lực lên tỷ giá USD/VND tăng mạnh trong tháng 10/2022 và Ngân hàng Nhà nước ( NHNN) liên tục có những biện pháp điều hành để ổn định thị trường ngoại hối. Vào ngày 17/10, NHNN đã thông báo quyết định điều chỉnh biên độ tỷ giá giao ngay USD/VND từ mức
                                        +/- 3% lên +/- 5%. Tiếp đó, giá bán USD giao ngay tại Sở GDNHNN được nâng lên 24.380 đồng, từ mức 23.925 đồng trước đó và tiếp tục tăng lên 24.870 đồng sau một tuần (24/10, tương đương mức tăng 7,4% so với cuối
                                        năm 2021). Bên cạnh đó, lãi suất điều hành cũng đã được NHNN điều chỉnh tăng thêm 100 điểm cơ bản lần thứ hai trong vòng hai tháng, với mục đích chính để giảm áp lực đối với tỷ giá, trong bối cảnh lạm phát vẫn trong
                                        tầm kiểm soát. Xem thêm >
                                    </p>
                                </div>
                                <div class="col-12 col-md-2 rp-item-right">
                                    <p class="time-news">26/12/2022</p>
                                    <a href="" class="new-dl"> <img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                </div>
                            </div>

                            <div class="rp-paginate">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">
                                                    <!-- <i class="fa fa-chevron-left" aria-hidden="true"></i> -->
                                                    
                                                </span>
                                            </a>
                                        </li>
                                        <li class="active"><a href="#">01</a></li>
                                        <li><a href="#">02</a></li>
                                        <li><a href="#">03</a></li>
                                        <li><a href="#">04</a></li>
                                        <li><a href="#">05</a></li>
                                        <li><a href="#">06</a></li>
                                        <li><a href="#">07</a></li>
                                        <li><a href="#">08</a></li>
                                        <li><a href="#">09</a></li>
                                        <li><a href="#">10</a></li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">
                                                    <!-- <i class="fa fa-chevron-right" aria-hidden="true"></i> -->
                                                    >
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="tab-pane fade show report-item" id="daily-report">
                            <div class="row">
                                <div class="col-10 rp-item-left">
                                    <h3>Biến động tỷ giá hối đoái và tác động đến các doanh nghiệp niêm yết</h3>
                                    <p class="mt-4">
                                        Áp lực lên tỷ giá USD/VND tăng mạnh trong tháng 10/2022 và Ngân hàng Nhà nước ( NHNN) liên tục có những biện pháp điều hành để ổn định thị trường ngoại hối. Vào ngày 17/10, NHNN đã thông báo quyết định điều chỉnh biên độ tỷ giá giao ngay USD/VND từ mức
                                        +/- 3% lên +/- 5%. Tiếp đó, giá bán USD giao ngay tại Sở GDNHNN được nâng lên 24.380 đồng, từ mức 23.925 đồng trước đó và tiếp tục tăng lên 24.870 đồng sau một tuần (24/10, tương đương mức tăng 7,4% so với cuối
                                        năm 2021). Bên cạnh đó, lãi suất điều hành cũng đã được NHNN điều chỉnh tăng thêm 100 điểm cơ bản lần thứ hai trong vòng hai tháng, với mục đích chính để giảm áp lực đối với tỷ giá, trong bối cảnh lạm phát vẫn trong
                                        tầm kiểm soát. Xem thêm >
                                    </p>
                                </div>
                                <div class="col-2 rp-item-right">
                                    <p class="time-news">23/12/2022</p>
                                    <a href="" class="new-dl"> <img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade show report-item" id="analysis-report">
                            <div class="row">
                                <div class="col-10 rp-item-left">
                                    <h3>Biến động tỷ giá hối đoái và tác động đến các doanh nghiệp niêm yết</h3>
                                    <p class="mt-4">
                                        Áp lực lên tỷ giá USD/VND tăng mạnh trong tháng 10/2022 và Ngân hàng Nhà nước ( NHNN) liên tục có những biện pháp điều hành để ổn định thị trường ngoại hối. Vào ngày 17/10, NHNN đã thông báo quyết định điều chỉnh biên độ tỷ giá giao ngay USD/VND từ mức
                                        +/- 3% lên +/- 5%. Tiếp đó, giá bán USD giao ngay tại Sở GDNHNN được nâng lên 24.380 đồng, từ mức 23.925 đồng trước đó và tiếp tục tăng lên 24.870 đồng sau một tuần (24/10, tương đương mức tăng 7,4% so với cuối
                                        năm 2021). Bên cạnh đó, lãi suất điều hành cũng đã được NHNN điều chỉnh tăng thêm 100 điểm cơ bản lần thứ hai trong vòng hai tháng, với mục đích chính để giảm áp lực đối với tỷ giá, trong bối cảnh lạm phát vẫn trong
                                        tầm kiểm soát. Xem thêm >
                                    </p>
                                </div>
                                <div class="col-2 rp-item-right">
                                    <p class="time-news">23/12/2022</p>
                                    <a href="" class="new-dl"> <img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade show report-item" id="macro-report">
                            <div class="row">
                                <div class="col-10 rp-item-left">
                                    <h3>Biến động tỷ giá hối đoái và tác động đến các doanh nghiệp niêm yết</h3>
                                    <p class="mt-4">
                                        Áp lực lên tỷ giá USD/VND tăng mạnh trong tháng 10/2022 và Ngân hàng Nhà nước ( NHNN) liên tục có những biện pháp điều hành để ổn định thị trường ngoại hối. Vào ngày 17/10, NHNN đã thông báo quyết định điều chỉnh biên độ tỷ giá giao ngay USD/VND từ mức
                                        +/- 3% lên +/- 5%. Tiếp đó, giá bán USD giao ngay tại Sở GDNHNN được nâng lên 24.380 đồng, từ mức 23.925 đồng trước đó và tiếp tục tăng lên 24.870 đồng sau một tuần (24/10, tương đương mức tăng 7,4% so với cuối
                                        năm 2021). Bên cạnh đó, lãi suất điều hành cũng đã được NHNN điều chỉnh tăng thêm 100 điểm cơ bản lần thứ hai trong vòng hai tháng, với mục đích chính để giảm áp lực đối với tỷ giá, trong bối cảnh lạm phát vẫn trong
                                        tầm kiểm soát. Xem thêm >
                                    </p>
                                </div>
                                <div class="col-2 rp-item-right">
                                    <p class="time-news">23/12/2022</p>
                                    <a href="" class="new-dl"> <img src="assets/img/icons/dl-a-lot.svg" alt=""> Tải xuống</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


    </main>
</template>