let imagesItems = [...document.querySelectorAll('.img-wrap')];

// 監視対象になった瞬間、activeを負荷する関数

let setItemAtive = (entries) => {
  console.log(entries);
  entries.forEach.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  })
}

let options = {
  rootMargin: "0px", //デフォルトで０.marginとほぼ同じ。
  threshold: 0.5, //閾値は0.2。これが１になると完全に画面におさまってから発動する
};


// どこにいるのか監視して、特定の位置に来たら関数を呼ぶ。

let observer = new IntersectionObserver(setItemActive, options);



// .image-wrapは、偶数と奇数で出現する場所が違います。

imagesItems.map((item, index) => {
  console.log(item, index);
  item.children[0].style.backgroundImage = "url(./images/1.jpg)";
  index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
  observer.observe(item);
});




observer.observe(imagesItems);







