<template>
  <header id="header-other" class="header fixed-top" data-scrollto-offset="0" style="background-color:#ffffff">
    <div class="container d-flex align-items-center justify-content-between">
      <a
        href="/"
        class="logo d-flex align-items-center scrollto me-auto me-lg-0"
      >
        <h1>Ami Invest<span>.</span></h1>
      </a>

      <nav id="navbar" class="navbar justify-content-end">
        <ul>
          <li class="">
            <a href="/"><span>Trang Chủ</span> </a>
          </li>

          <li class="dropdown"><a href="/uy-thac" class="ami-nav-menu active"><span>Dịch vụ</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                            <li>
                              <NuxtLink :to="`/uy-thac`">
                              Ủy thác đầu tư
                              </NuxtLink>
                            </li>
                            <li><a href="/bao-cao-tu-van">Báo cáo và tư vấn</a></li>
                        </ul>
                    </li>
          <li class="dropdown"><a href="#" class="ami-nav-menu"><span>Về chúng tôi </span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                            <li><a href="/about-us">Về Ami Invest</a></li>
                            <li><a href="/contact-us">Liên hệ</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </li>
          <li><a href="#">Blog</a></li>
          <!-- <li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li> -->
          <li>
            <a class="btn-top-signup scrollto" href="#"
              >Đăng ký</a
            >
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle d-none"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
</template>