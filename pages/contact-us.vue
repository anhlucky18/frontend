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
 <main id="contact-us">
        <section id="contact-form" class="contact-form">
            <div class="container">
                <div class="row" id="contact-ami">
                    <div class="col-12 col-md-4 info-company">
                        <div class="row">
                            <h3><img src="assets/img/icons/call.svg" alt="">Call us</h3>
                            <p>(480) 555-0103</p>
                        </div>
                        <div class="row">
                            <h3><img src="assets/img/icons/location.svg" alt="">Location</h3>
                            <p>Canberra, Australia</p>
                        </div>
                        <div class="row">
                            <h3><img src="assets/img/icons/global.svg" alt="">Mail us</h3>
                            <p>michelle.rivera@example.com</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-8 form-lien-he">
                        <div class="row">
                            <h2>Liên hệ</h2>
                            <p>In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.</p>

                            <form action="" id="form-custom-lien-he">
                                <div class="mt-5 mb-5"><input type="text" placeholder="Name *" class="form-control"></div>
                                <div class="mt-5 mb-5"><input type="email" placeholder="Email *" class="form-control"></div>
                                <div class="mt-5 mb-5"> <input type="number" placeholder="Phone *" class="form-control"></div>
                                <div class="mt-5 mb-5"><input type="text" placeholder="Message" class="form-control"></div>
                                <div class="mt-10 mb-5">
                                    <button class="btn btn-custom-lien-he" type="submit">Submit Form</button>
                                </div>



                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    </main>
</template>