<template>
  <div class="contents animate__animated animate__fadeIn my-6 p-3">
  <div class="contents-title mb-2 p-1 ms-4 mb-3">
    <h2>今井食堂</h2>
  </div>
  <div class="sub-title mb-2 ms-5 p-2">
    <h3>鯖の味噌煮が美味しい、食堂!</h3>
  </div>
  <ul class="list list-unstyled ms-3 mb-3 ps-1">
    <li class="m-2"><NuxtLink to="#imformation" class="text-decoration-none p-2">店舗情報</NuxtLink></li>
    <li class="m-2"><NuxtLink to="#menu" class="text-decoration-none p-2">メニュー</NuxtLink></li>
  </ul>
  <div class="img m-auto mb-5">
    <img src="../../public/imaishoku/1.jpg" alt="今井食堂" class="shadow-lg">
  </div>
  <div id="imformation" class="mb-5 pt-5">
    <h3>今井食堂</h3>
    <p>上賀茂神社近くの食堂。骨もほとんど気にならず食べれる鯖の味噌煮やチキンカツなどがあり、店内での食事以外にお弁当を注文することができる食堂です。</p>
    <div class="feelings">
      <div class="sub-img">
        <img src="../../public/imaishoku/eat.jpg" alt="おすすめ定食" class="shadow-lg">
      </div>
      <div class="text">
        <p>店舗ではおすすめ定食(850円)を注文しました。鯖の味噌煮は骨を気にせず食べれて、味噌も甘すぎず辛すぎずご飯と一緒に食べてもとても良くおいしかったです。
          チキンカツやコロッケも、衣がとてもさくさくしていておいしかったです。
        </p>
        <div class="sub-img2">
          <img src="../../public/imaishoku/2.jpg" alt="おすすめ定食" class="shadow-lg">
        </div>
        <p>プロ野球選手が来店されたこともあるお店で、プロ野球好きな人は一度いってみてもいいかもしれません。</p>
      </div>
    </div>
     <b-table class="info-table">
           <b-thead>
      <b-tr>
        <b-th scope="col">
          営業時間
        </b-th>
        <b-th scope="col">
          定休日
        </b-th>
        <b-th scope="col">
          イートイン
        </b-th>
        <b-th scope="col">
          テイクアウト
        </b-th>
      </b-tr>
    </b-thead>
     <b-tbody>
      <b-tr>
        <b-th scope="row">
          11:00~<br>
          14:00
        </b-th>
        <b-td>水曜日<br>(休日は弁当販売のみ)</b-td>
        <b-td>○</b-td>
        <b-td>○</b-td>
      </b-tr>
      </b-tbody>
        </b-table>
  </div>

  <div id="menu" class="mb-5 pt-5">
    <h3 class="mb-5">メニュー</h3>
    <Carousel
    fade
    control
  >
    <CarouselInner>
      <CarouselItem>
        <img
          src="../../public/imaishoku/3.jpg" alt="メニュー1"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="../../public/imaishoku/4.jpg" alt="メニュー2"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="../../public/imaishoku/5.jpg" alt="メニュー3"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
  </div>
  </div>
</template>
