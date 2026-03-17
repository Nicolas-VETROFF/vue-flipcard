<template>
    <div>
        <h1>Vue Flip Card Example</h1>
        <FlipCard active-hover active-click>
            <template #front>
                <p>Front Side</p>
            </template>
            <template #back>
                <p>Back Side</p>
            </template>
        </FlipCard>
    </div>
</template>
