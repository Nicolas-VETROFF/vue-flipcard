<script setup lang="ts">
import { ref } from 'vue'

const test = ref<boolean>(true)
</script>

<template>
    <div>
        <h1>Vue Flip Card Example</h1>
        <VFlipCard
            v-model="test"
            width="400px"
            height="300px"
            active-drag
            active-click
            flip-side="left"
            @flip:front="console.log('Flipped to front')"
            @flip:back="console.log('Flipped to back')"
        >
            <template #front>
                <p>Front Side</p>
            </template>
            <template #back>
                <p>Back Side</p>
            </template>
        </VFlipCard>
    </div>
</template>
