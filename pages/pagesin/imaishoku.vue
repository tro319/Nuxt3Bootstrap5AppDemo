<template>
  <div class="contents animate__animated animate__fadeIn my-6 p-3">
  <div class="contents-title mb-2 p-1 ms-4 mb-3">
    <h2 class="fs-2 fw-bold">今井食堂</h2>
  </div>
  <div class="sub-title mb-2 ms-5 p-2">
    <h3 class="fs-3">鯖の味噌煮が美味しい、食堂!</h3>
  </div>
  <ul class="list list-unstyled ms-3 mb-3 ps-1">
    <li class="m-2"><NuxtLink to="#imformation" class="text-dark fs-4 text-decoration-none p-2">店舗情報</NuxtLink></li>
    <li class="m-2"><NuxtLink to="#menu" class="text-dark fs-4 text-decoration-none p-2">メニュー</NuxtLink></li>
  </ul>
  <div class="img m-auto mb-5">
    <img src="../../public/imaishoku/1.jpg" alt="今井食堂" class="mw-100 shadow-lg">
  </div>
  <div id="imformation" class="mb-5 pt-5">
    <h3 class="fs-3 ms-5 my-4">今井食堂</h3>
    <p class="fs-6 ms-5 my-4 p-2">上賀茂神社近くの食堂。骨もほとんど気にならず食べれる鯖の味噌煮やチキンカツなどがあり、店内での食事以外にお弁当を注文することができる食堂です。</p>
    <div class="feelings">
      <div class="sub-img m-auto mb-5">
        <img src="../../public/imaishoku/eat.jpg" alt="おすすめ定食" class="mw-100 shadow-lg">
      </div>
      <div class="text ms-5 my-4 p-2">
        <p class="fs-6">店舗ではおすすめ定食(850円)を注文しました。鯖の味噌煮は骨を気にせず食べれて、味噌も甘すぎず辛すぎずご飯と一緒に食べてもとても良くおいしかったです。
          チキンカツやコロッケも、衣がとてもさくさくしていておいしかったです。
        </p>
        <div class="sub-img2 m-auto mb-5">
          <img src="../../public/imaishoku/2.jpg" alt="おすすめ定食" class="mw-100 shadow-lg">
        </div>
        <p class="fs-6 my-4 p-2">プロ野球選手が来店されたこともあるお店で、プロ野球好きな人は一度いってみてもいいかもしれません。</p>
      </div>
    </div>
     <b-table class="info-table m-auto mb-5">
           <b-thead>
      <b-tr>
        <b-th scope="col" class="fs-6">
          営業時間
        </b-th>
        <b-th scope="col" class="fs-6">
          定休日
        </b-th>
        <b-th scope="col" class="fs-6">
          イートイン
        </b-th>
        <b-th scope="col" class="fs-6">
          テイクアウト
        </b-th>
      </b-tr>
    </b-thead>
     <b-tbody>
      <b-tr>
        <b-th scope="row" class="fs-6">
          11:00~<br>
          14:00
        </b-th>
        <b-td class="fs-6">水曜日<br>(休日は弁当販売のみ)</b-td>
        <b-td class="fs-6">○</b-td>
        <b-td class="fs-6">○</b-td>
      </b-tr>
      </b-tbody>
        </b-table>
  </div>

  <div id="menu" class="mb-5 pt-5">
    <h3 class="fs-3 mb-5 ms-5">メニュー</h3>
    <Carousel
    fade
    control
  >
    <CarouselInner>
      <CarouselItem>
        <img
          src="../../public/imaishoku/3.jpg" alt="メニュー1" class="mb-5 m-auto"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="../../public/imaishoku/4.jpg" alt="メニュー2" class="mb-5 m-auto"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="../../public/imaishoku/5.jpg" alt="メニュー3" class="mb-5 m-auto"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
  </div>
  </div>
</template>
