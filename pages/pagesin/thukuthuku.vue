<template>
  <div class="contents animate__animated animate__fadeIn">
  <div class="contents-title">
    <h2>タイ料理の店 TUKTUK</h2>
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
    <h3>タイ料理の店 TUKTUK</h3>
    <p>上賀茂神社から、御園橋通りを西に歩いて5分くらいのところにあるお店。タイで修行を重ねたシェフが作る、カオマンガイなどの30種のタイ料理が楽しめます。</p>
    <div class="feelings">
      <div class="sub-img">
        <img src="../../public/thukuthuku/eat.jpg" alt="カオマンガイ">
      </div>
      <div class="text">
        <p>店舗では、カオマンガイセット(1100円)を注文しました。カオマンガイのタレもとてもおいしく、セットでついてきた春巻きも甘辛く仕上げられていて、とてもおいしかったです。
        </p>
      </div>
    </div>
        <b-table class="info-table">
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
        <b-td>なし</b-td>
        <b-td>○</b-td>
        <b-td>○</b-td>
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
        <img
          src="../../public/thukuthuku/2.jpg" alt="メニュー1"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="../../public/thukuthuku/3.jpg" alt="メニュー2"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="../../public/thukuthuku/4.jpg" alt="メニュー3"
        />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
  <p>メニュー詳細はこちらから→<a href="https://www.instagram.com/taifood_tuk_tuk/">TUKTUKインスタグラムアカウント</a>
  </p>
  </div>
  </div>

</template>
