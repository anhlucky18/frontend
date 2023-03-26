<template>
    <section class="why-choose-ami overflow-hidden" id="why-choose-ami">
      <div class="container">
        <h2 class="wc-title-heading text-center mb-10">
          Tại sao khách hàng
          <span class="wc-decoration">lựa chọn Ami Invest?</span>
        </h2>

        <!-- //chart -->
        
        <div class="row">
          <div class="col-12 col-md-7 wc-img-left">
            <client-only>
                <Chart_VNindex/>
            </client-only>
          </div>
          <div class="col-12 col-md-5 wc-content-right">
            <div class="row">
              <div class="col-6 wc-ct-top">
                <img :src="`_nuxt/assets/img/icons/Group1.svg`" alt="" class="mb-2" />
                <p>
                  Tăng trưởng <br />
                  IU Value vượt <br />
                  VNIndex
                </p>
              </div>
              <div class="col-6 wc-ct-top">
                <img :src="`_nuxt/assets/img/icons/Group2.svg`" alt="" class="mb-2" />
                <p>
                  Lựa chọn <br />
                  danh mục đầu tư <br />
                  kỹ càng
                </p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-6 wc-ct-bot">
                <img :src="`_nuxt/assets/img/icons/Group3.svg`" alt="" class="mb-2" />
                <p>
                  Quản trị rủi ro <br />danh mục tốt trong <br />
                  thời kỳ khó khăn
                </p>
              </div>
              <div class="col-6 wc-ct-bot">
                <img :src="`_nuxt/assets/img/icons/surface1.svg`" alt="" class="mb-2" />
                <p>
                  Đội ngũ quản lý <br />
                  kinh nghiệm, nhiệt <br />
                  thành, và tận tâm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>