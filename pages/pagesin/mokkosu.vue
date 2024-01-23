<template>
  <div class="contents animate__animated animate__fadeIn my-6 p-3">
  <div class="contents-title mb-2 p-1 ms-4 mb-3">
    <h2>熊本ラーメン 肥後もっこす</h2>
  </div>
  <div class="sub-title mb-2 ms-5 p-2">
    <h3>北山駅でてすぐの、ラーメン屋!</h3>
  </div>
  <ul class="list list-unstyled ms-3 mb-3 ps-1">
    <li class="m-2"><NuxtLink to="#imformation" class="text-decoration-none p-2">店舗情報</NuxtLink></li>
    <li class="m-2"><NuxtLink to="#menu" class="text-decoration-none p-2">メニュー</NuxtLink></li>
  </ul>
  <div class="img m-auto mb-5">
  <img src="../../public/mokkosu/1.jpg" alt="肥後もっこす" class="shadow-lg">
  </div>
  <div id="imformation" class="mb-5 pt-5">
    <h3 class="ms-5 my-4">熊本ラーメン 肥後もっこす</h3>
    <p class="ms-5 my-4 p-2">京都市営地下鉄・北山駅4番出口をでて、北山通りを西に徒歩で2分くらい進んだところにあるラーメン店です。スープやチャーシューが美味しいお店です。</p>
    <div class="feelings">
      <div class="sub-img m-auto mb-5">
        <img src="../../public/mokkosu/eat.jpg" alt="旨辛ラーメン" class="shadow-lg">
      </div>
      <div class="text ms-5 my-4 p-2">
        <p>店舗では、うま辛ラーメン(950円)を注文しました。程いい辛さでスープも、チャーシューもトロトロで柔らかくとてもおいしかったです。</p>
      </div>
    </div>
     <b-table class="info-table m-auto mb-5">
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
        <b-td>不定休</b-td>
        <b-td>○</b-td>
        <b-td>×</b-td>
      </b-tr>
      </b-tbody>
        </b-table>
  </div>

  <div id="menu" class="mb-5 pt-5">
    <h3 class="mb-5 ms-5">メニュー</h3>
    <Carousel
    fade
    control
  >
    <CarouselInner>
      <CarouselItem>
        <img
          src="../../public/mokkosu/2.jpg" alt="メニュー1" class="mb-5 m-auto"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="../../public/mokkosu/3.jpg" alt="メニュー2" class="mb-5 m-auto"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="../../public/mokkosu/4.jpg" alt="メニュー3" class="mb-5 m-auto"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
  </div>
  </div>

  

</template>
