<template>
<div class="o-about">
    <div class="about" ref="targetAbout">
        <h2 class="title">IntersectionObserverってなあに？</h2>
        <p class="description">
            IntersectionObserverとはJavaScriptで用意されている、DOM要素の交差判定APIです。<br />
            今までoffsetを使って実装されていたような、スクロールで実行するアニメーションが楽に実装できます。<br />
            この下から、使いこなしのサンプルを見ていきましょう。
        </p>
    </div>
    <div class="merits">
        <h3 class="title" ref="targetAboutListTitle">
            IntersectionObserverを使うといいことが!
        </h3>
        ...
    </div>
</div>
</template>
<script setup lang="ts">
const targetAbout = ref<HTMLElement | null>(null)
const targetAboutListTitle = ref<HTMLElement | null>(null)

const elements = [
    targetAbout,
    targetAboutListTitle,
]

onMounted(() => {
    useIntersectionObserver().doObserve(elements)
})
</script>

