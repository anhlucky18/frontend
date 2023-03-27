<template>
  <carousel  :settings="settings">
    <slide v-for="slide in 3" :key="slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="swiper-slide">
            <div class="testimonial-item row">
              <div class="col-3 ttm-right-img">
                <img
                  :src="`_nuxt/assets/img/testimonials/testimonials1.png`"
                  class="testimonial-img"
                  alt=" "
                />
              </div>
              <div class="col-9 ttm-text-left">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat.
                </p>
                <h3>Chị Mỹ Anh {{slide}}</h3>
                <h4>Công ty TNHH INNSA</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "Testimonials",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
      wrapAround: true,
      autoplay: 2000,
    },
  }),
};

// <section id="testimonials" class="testimonials">
//       <div class="container" data-aos="fade-up ">
//         <!-- fsdfsdjf dfjsdklfjsdkl -->
// <div
//   id="carouselExampleInterval"
//   class="testimonials-slider swiper swiper-container carousel slide"
//   data-bs-ride="carousel"
// >
//           <div class="carousel-inner">
//             <div class="carousel-item active" data-bs-interval="2000">
//   <div class="swiper-slide">
//     <div class="testimonial-item row">
//       <div class="col-3 ttm-right-img">
//         <img
//           src="assets/img/testimonials/testimonials1.png "
//           class="testimonial-img"
//           alt=" "
//         />
//       </div>
//       <div class="col-9 ttm-text-left">
//         <p>
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
//           sed diam nonummy nibh euismod tincidunt ut laoreet dolore
//           magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
//           quis nostrud exerci tation ullamcorper suscipit lobortis
//           nisl ut aliquip ex ea commodo consequat.
//         </p>
//         <h3>Chị Mỹ Anh1</h3>
//         <h4>Công ty TNHH INNSA</h4>
//       </div>
//     </div>
//               </div>
//             </div>
//             <div class="carousel-item" data-bs-interval="2000">
//               <div class="swiper-slide">
//                 <div class="testimonial-item row">
//                   <div class="col-3 ttm-right-img">
//                     <img
//                       src="assets/img/testimonials/testimonials1.png "
//                       class="testimonial-img"
//                       alt=" "
//                     />
//                   </div>
//                   <div class="col-9 ttm-text-left">
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
//                       sed diam nonummy nibh euismod tincidunt ut laoreet dolore
//                       magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
//                       quis nostrud exerci tation ullamcorper suscipit lobortis
//                       nisl ut aliquip ex ea commodo consequat.
//                     </p>
//                     <h3>Chị Mỹ Anh 2</h3>
//                     <h4>Công ty TNHH INNSA</h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <div class="swiper-slide">
//                 <div class="testimonial-item row">
//                   <div class="col-3 ttm-right-img">
//                     <img
//                       src="assets/img/testimonials/testimonials1.png "
//                       class="testimonial-img"
//                       alt=" "
//                     />
//                   </div>
//                   <div class="col-9 ttm-text-left">
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
//                       sed diam nonummy nibh euismod tincidunt ut laoreet dolore
//                       magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
//                       quis nostrud exerci tation ullamcorper suscipit lobortis
//                       nisl ut aliquip ex ea commodo consequat.
//                     </p>
//                     <h3>Chị Mỹ Anh 3</h3>
//                     <h4>Công ty TNHH INNSA</h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleInterval"
//             data-bs-slide="prev"
//           >
//             <img
//               src="assets/img/icons/prev.svg"
//               alt=""
//               class="swiper-button-prev"
//             />
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleInterval"
//             data-bs-slide="next"
//           >
//             <img
//               src="assets/img/icons/next.svg"
//               alt=""
//               class="swiper-button-next"
//             />
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//         <!-- fsdfsdjf dfjsdklfjsdkl -->
//       </div>
//     </section>
</script>