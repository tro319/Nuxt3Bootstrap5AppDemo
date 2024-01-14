<template>
<div>
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

