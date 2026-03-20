<script setup lang="ts">
</script>

<template>
    <div>
        <h1>Vue Flip Card Example</h1>
        <VFlipCard
            active-drag
            flip-side="left"
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
