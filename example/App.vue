<template>
    <div>
        <h1>Vue Flip Card Example</h1>
        <FlipCard active-drag active-click flip-side="left" width="300px" height="200px">
            <template #front>
                <p>Front Side</p>
            </template>
            <template #back>
                <p>Back Side</p>
            </template>
        </FlipCard>
    </div>
</template>
