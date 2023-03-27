<script setup lang="ts">
const appConfig = useAppConfig()
const url = appConfig.client;
</script>


<template>
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
                        <img :src="`${url}/assets/img/Group 2022.png`" alt="">
                    </div>
                </div>
            </div>

        </section>
        <!-- ======= End Growing Enterprises Section ======= -->
  <footer id="footer " class="footer ">

        <div class="footer-content ">
            <div class="container ">
                <div class="row ">

                    <div class="col-lg-3 col-md-6 ">
                        <div class="footer-info ">
                            <h1>Ami Invest</h1>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links ">
                        <h4>Về chúng tôi</h4>
                        <ul>
                            <li><a href="# ">Giới thiệu</a></li>
                            <li><a href="# ">Báo cáo</a></li>
                            <li><a href="# "> Liên hệ</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links ">
                        <h4>Hỗ trợ</h4>
                        <ul>
                            <li><a href="# ">FAQ</a></li>
                            <li><a href="# "> Điều khoản sử dụng</a></li>
                            <li><a href="# ">Thông tin bảo mật</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-newsletter ">
                        <h4>Trò chuyện miễn phí</h4>
                        <p>You can contact Us to send email to us</p>
                        <form action=" " method="post" id="footer-subc">
                            <input type="email" name="email" placeholder="Your Email"><input type="submit" value="">
                        </form>

                    </div>
                    <div class="col-lg-2 col-md-6 footer-socials">
                        <div class="social-links order-first order-lg-last mb-3 mb-lg-0 ">
                            <a href="# " class="facebook "><img :src="`${url}/assets/img/icons/icon-fb.svg`" alt=""></a>
                            <a href="# " class="twitter "><img :src="`${url}/assets/img/icons/icons-twitter.svg`" alt=""></a>
                            <a href="# " class="linkedin "><img :src="`${url}/assets/img/icons/icons-linkin.svg`" alt=""></a>
                            <a href="# " class="instagram "><img :src="`${url}/assets/img/icons/icons-insta.svg`" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>







    </footer>
</template>