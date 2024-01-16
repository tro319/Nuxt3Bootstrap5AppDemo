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
    <p>京都市営地下鉄・北山駅4番出口をでて、北山通りを西に徒歩で2分くらい進んだところにあるラーメン店です。スープやチャーシューが美味しいお店です。</p>
    <div class="feelings">
      <div class="sub-img">
        <img src="../../public/mokkosu/eat.jpg" alt="カオマンガイ">
      </div>
      <div class="text">
        <p>店舗では、うま辛ラーメン(950円)を注文しました。程いい辛さでスープも、チャーシューもトロトロで柔らかくとてもおいしかったです。</p>
      </div>
    </div>
     <b-table class="info-table">
           <b-thead>
      <b-tr>
        <b-th scope="col">
          営業時間(昼)
        </b-th>
        <b-th scope="col">
          営業時間(夜)
        </b-th>
        <b-th scope="col">
          定休日
        </b-th>
        <b-th scope="col">
          イートイン
        </b-th>
        <b-th scope="col">
          宅配
        </b-th>
      </b-tr>
    </b-thead>
     <b-tbody>
      <b-tr>
        <b-th scope="row">
          11:30~<br>
          14:30
        </b-th>
        <b-th scope="row">
          18:00~<br>
          22:00
        </b-th>
        <b-td>月曜日</b-td>
        <b-td>○</b-td>
        <b-td>×</b-td>
      </b-tr>
      </b-tbody>
        </b-table>
  </div>

  <div id="menu">
    <h3>メニュー</h3>
    <Carousel
    fade
    control
  >
    <CarouselInner>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="https://source.unsplash.com/random/1920x1080?sig=1"
        />
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="https://source.unsplash.com/random/1920x1080?sig=2"
        />
      </CarouselItem>
      <CarouselItem>
        <CarouselItemImage
          width="800"
          src="https://source.unsplash.com/random/1920x1080?sig=3"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
  </div>
  </div>

  

</template>
