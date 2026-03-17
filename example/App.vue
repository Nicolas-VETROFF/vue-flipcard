<template>
    <div class="app">
        <h1>Vue Flip Card Example</h1>
        <FlipCard activeHover activeClick>
            <template #front>
                <p>Front Side</p>
            </template>
            <template #back>
                <p>Back Side</p>
            </template>
        </FlipCard>
    </div>
</template>
