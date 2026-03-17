<template>
  <div class="flip-card" :style="{ width, height }" @click="onClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" :aria-pressed="isFlipped">
    <div class="flip-card-inner" :class="{ flipped: isFlipped }">
      <div class="flip-card-face front"><slot name="front"></slot></div>
      <div class="flip-card-face back"><slot name="back"></slot></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  width: { type: String, default: '200px' },
  height: { type: String, default: '200px' },
  activeHover: { type: Boolean, default: false },
  activeClick: { type: Boolean, default: false },
  activeDrag: { type: Boolean, default: false },
})

const side = ref<'front' | 'back'>('front')
const isFlipped = computed(() => side.value === 'back')

// CLICK EVENT
function onClick() {
  if (!props.activeClick) return

  side.value = side.value === 'front' ? 'back' : 'front'
}


// HOVER EVENTS
function onMouseEnter() {
  if (!props.activeHover) return

  side.value = 'back'
}

function onMouseLeave() {
  if (!props.activeHover) return

  side.value = 'front'
}

</script>

<style scoped>
@import '../assets/flip-card.css';
</style>
