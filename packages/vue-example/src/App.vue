<script setup lang="ts">
import {
  DinkieIconCherries12,
  DinkieIconCherries10,
  DinkieIconBird12,
  DinkieIconBirdFilled12,
  DinkieIconSmirkingFace12,
  DinkieIconTwitter12,
  DinkieIconTwitter10,
} from '@dinkie-icons/vue'
</script>

<template>
  <div class="App">
    <h1>Dinkie Icons</h1>
    <h2>9&times;9</h2>
    <div class="Container">
      <DinkieIconCherries10 class="Icon10" />
      <DinkieIconTwitter10 class="Icon10" />
    </div>
    <h2>11&times;11</h2>
    <div class="Container">
      <DinkieIconCherries12 class="Icon12" />
      <DinkieIconBird12 class="Icon12" />
      <DinkieIconBirdFilled12 class="Icon12" />
      <DinkieIconSmirkingFace12 class="Icon12" />
      <DinkieIconTwitter12 class="Icon12" />
    </div>
  </div>
</template>

<style scoped>
.App {
  font-family: 'system-ui', -apple-system, sans-serif;
  padding: 1rem;
  --pixel-size: 0.25rem;
}

.Container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.Icon10 {
  width: calc(10 * var(--pixel-size));
}

.Icon12 {
  width: calc(12 * var(--pixel-size));
}
</style>
