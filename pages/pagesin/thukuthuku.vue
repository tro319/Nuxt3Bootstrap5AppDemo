<template>
  <div class="contents animate__animated animate__fadeIn">
  <div class="contents-title">
    <h2>タイ料理専門店 TUKTUK</h2>
  </div>
  <div class="sub-title">
    <h3>タイ人シェフが作る、本格タイ料理が楽しめる!</h3>
  </div>
  <ul class="list">
    <li><NuxtLink to="#imformation">店舗情報</NuxtLink></li>
    <li><NuxtLink to="#menu">メニュー</NuxtLink></li>
  </ul>
  <div class="img">
    <img src="../../public/thukuthuku/1.jpg" alt="TUKTUK">
  </div>
  <div id="imformation">
    <h3>TUKTUK</h3>
    <p>上賀茂神社から、御園橋通りを西に歩いて5分くらいのところにあるお店。タイで修行を重ねたシェフが作る、カオマンガイなどのタイ料理が楽しめます。</p>
  </div>
  <div id="menu">
    <h3>メニュー</h3>
    <Carousel
    control
    indicators
  >
    <CarouselInner>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="../../public/thukuthuku/2.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="../../public/thukuthuku/3.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="../../public/thukuthuku/4.jpg"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
  </div>
  </div>

</template>
