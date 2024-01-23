<template>
  <div class="contents animate__animated animate__fadeIn my-6 p-3">
  <div class="contents-title mb-2 p-1 ms-4 mb-3">
    <h2>タイ料理の店 TUKTUK</h2>
  </div>
  <div class="sub-title mb-2 ms-5 p-2">
    <h3>タイ人シェフが作る、本格タイ料理が楽しめる!</h3>
  </div>
  <ul class="list list-unstyled ms-3 mb-3 ps-1">
    <li class="m-2"><NuxtLink to="#imformation" class="text-decoration-none p-2">店舗情報</NuxtLink></li>
    <li class="m-2"><NuxtLink to="#menu" class="text-decoration-none p-2">メニュー</NuxtLink></li>
  </ul>
  <div class="img m-auto mb-5">
    <img src="../../public/thukuthuku/1.jpg" alt="TUKTUK" class="shadow-lg">
  </div>
  <div id="imformation" class="mb-5 pt-5">
    <h3 class="ms-5 my-4">タイ料理の店 TUKTUK</h3>
    <p class="ms-5 my-4 p-2">上賀茂神社から、御園橋通りを西に歩いて5分くらいのところにあるお店。タイで修行を重ねたシェフが作る、カオマンガイなどの30種のタイ料理が楽しめます。</p>
    <div class="feelings">
      <div class="sub-img m-auto mb-5">
        <img src="../../public/thukuthuku/eat.jpg" alt="カオマンガイ" class="shadow-lg">
      </div>
      <div class="text ms-5 my-4 p-2">
        <p>店舗では、カオマンガイセット(1100円)を注文しました。カオマンガイのタレもとてもおいしく、セットでついてきた春巻きも甘辛く仕上げられていて、とてもおいしかったです。
        </p>
      </div>
    </div>
        <b-table class="info-table m-auto mb-5">
           <b-thead>
      <b-tr>
        <b-th scope="col">
          営業時間(日~木)
        </b-th>
        <b-th scope="col">
          営業時間(金~土)
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
          23:00
        </b-th>
        <b-th scope="row">
          11:00~<br>
          翌1:00
        </b-th>
        <b-td>月曜日</b-td>
        <b-td>○</b-td>
        <b-td>○</b-td>
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
          src="../../public/thukuthuku/2.jpg" alt="メニュー1" class="mb-5 m-auto"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="../../public/thukuthuku/3.jpg" alt="メニュー2" class="mb-5 m-auto"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="../../public/thukuthuku/4.jpg" alt="メニュー3" class="mb-5 m-auto"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
  <p class="ms-5 mb-3">メニュー詳細はこちらから→<a href="https://www.instagram.com/taifood_tuk_tuk/">TUKTUKインスタグラムアカウント</a>
  </p>
  </div>
  </div>

</template>
