<template>
  <div class="contents animate__animated animate__fadeIn">
  <div class="contents-title">
    <h2>熊本ラーメン 肥後もっこす</h2>
  </div>
  <div class="sub-title">
    <h3>北山駅でてすぐの、ラーメン屋!</h3>
  </div>
  <ul class="list">
    <li><NuxtLink to="#imformation">店舗情報</NuxtLink></li>
    <li><NuxtLink to="#menu">メニュー</NuxtLink></li>
  </ul>
  <div class="img">
  <img src="../../public/mokkosu/1.jpg" alt="肥後もっこす">
  </div>
  <div id="imformation">
    <h3>熊本ラーメン肥後もっこす</h3>
    <p>京都市営地下鉄・北山駅4番出口をでて、北山通りを西に徒歩で2分くらい進んだところにあるラーメン店。チャーシューが柔らかくて、特においしいお店です。</p>
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
          src="../../public/mokkosu/2.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="../../public/mokkosu/3.jpg"
        />
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="../../public/mokkosu/4.jpg"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
  </div>
  </div>

  

</template>
