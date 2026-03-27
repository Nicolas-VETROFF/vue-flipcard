# Vue FlipCard

An elegant and interactive Vue 3 flip-card component with support for drag interactions, clicks, and hover effects across 4 rotation directions.

⚠️ **Client-only component**: This component relies on DOM interactions and CSS 3D transforms. It cannot be rendered on the server and must be used only in client-side contexts.

## Features

- **4 flip directions**: `right`, `left`, `up`, `down`
- **Multiple interactions**: drag/swipe, click, hover
- **Mobile & Desktop**: compatible with touch and mouse
- **Customizable**: dimensions, styles, and transitions
- **High performance**: GPU-accelerated CSS 3D transforms
- **Fully typed**: complete TypeScript support

## Installation

```bash
npm install @nv-dev/vue-flipcard
# or
yarn add @nv-dev/vue-flipcard
# or
pnpm add @nv-dev/vue-flipcard
```

## Usage

### For Vue 3 apps

#### Import the component

```typescript
import VFlipCard from '@nv-dev/vue-flipcard'
```

Or register globally:

```typescript
import { createApp } from 'vue'
import VFlipCard from '@nv-dev/vue-flipcard'

const app = createApp(App)
app.use(VFlipCard)
app.mount('#app')
```

### For Nuxt 3 (Auto-import)

Add the module to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    '@nv-dev/vue-flipcard'
  ],
})
```

The `VFlipCard` component will be automatically imported throughout your Nuxt app. No manual imports needed!

Since this is a **client-only component**, wrap it with `<ClientOnly>`:

```html
<template>
  <ClientOnly>
    <VFlipCard flip-side="right" active-click>
      <!-- CODE -->
    </VFlipCard>
  </ClientOnly>
</template>
```

### Basic example

```html
<template>
  <VFlipCard
    width="200px"
    height="150px"
    flip-side="right"
    active-click
    active-drag
  >
    <template #front>
      <p>Front side</p>
    </template>
    <template #back>
      <p>Back side</p>
    </template>
  </VFlipCard>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | String | `'200px'` | Card width |
| `height` | String | `'150px'` | Card height |
| `flipSide` | `'left' \| 'right' \| 'up' \| 'down'` | `'right'` | Flip direction |
| `activeClick` | Boolean | `false` | Enable flip on click |
| `activeDrag` | Boolean | `false` | Enable flip on drag/swipe (mobile only) |
| `activeHover` | Boolean | `false` | Enable flip on hover (desktop only) |

## Slots

### `#front`
Content displayed on the front face of the card.

### `#back`
Content displayed on the back face of the card.

## Client-only Component

This component is **client-only** for now and cannot be server-side rendered (SSR).

### Using with Nuxt 3

Always wrap the component with `<ClientOnly>`:

```html
<template>
  <ClientOnly>
    <VFlipCard flip-side="right" active-click>
      <template #front>Front content</template>
      <template #back>Back content</template>
    </VFlipCard>
  </ClientOnly>
</template>
```

This prevents hydration mismatches and ensures your component renders correctly.

## Examples

### Flip on click
```html
<VFlipCard flip-side="right" active-click>
  <template #front><img src="front.jpg" /></template>
  <template #back><img src="back.jpg" /></template>
</VFlipCard>
```

### Flip on hover (desktop)
```html
<VFlipCard flip-side="up" active-hover>
  <template #front>Hover me</template>
  <template #back>Flipped!</template>
</VFlipCard>
```

### Flip on swipe (mobile)
```html
<VFlipCard flip-side="left" active-drag width="300px" height="200px">
  <template #front>Swipe left</template>
  <template #back>Content</template>
</VFlipCard>
```

### All interactions
```html
<VFlipCard
  flip-side="down"
  active-click
  active-drag
  active-hover
>
  <template #front>Front</template>
  <template #back>Back</template>
</VFlipCard>
```

## Flip directions

- **`right`**: Drag right side towards you (clockwise, rotateY)
- **`left`**: Drag left side towards you (counter-clockwise, rotateY)
- **`up`**: Drag top towards you (upward, rotateX)
- **`down`**: Drag bottom towards you (downward, rotateX)

## Behavior

### Click
- Toggles between front and back
- Works on mobile and desktop

### Drag/Swipe
- Move your finger/mouse in the flip direction
- 90-degree threshold to determine final side
- Smooth animation with configurable transitions

### Hover
- Desktop only (automatically detected)
- Shows back on hover, returns to front on leave

## Styling

The component uses CSS classes for easy customization:

```css
.flip-card-face {
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.front {
  background: #fff;
}

.back {
  background: #f7f7f7;
}
```

Customize with scoped CSS:

```html
<style scoped>
:deep(.flip-card-face) {
  border: 2px solid #your-color;
}
</style>
```

## Events

The component emits events when the card flips:

| Event | Payload | Description |
|-------|---------|-------------|
| `flip:front` | — | Emitted when the card flips to show the front face |
| `flip:back` | — | Emitted when the card flips to show the back face |

### Usage

```html
<template>
  <VFlipCard
    flip-side="right"
    active-click
    @flip:front="onFlipToFront"
    @flip:back="onFlipToBack"
  >
    <template #front>Front</template>
    <template #back>Back</template>
  </VFlipCard>
</template>

<script setup>
const onFlipToFront = () => {
  console.log('Card flipped to front')
}

const onFlipToBack = () => {
  console.log('Card flipped to back')
}
</script>
```

## Browser Support

- Chrome/Edge (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Mobile iOS/Android with Touch Events support

## Performance

- Uses CSS 3D transforms for GPU-accelerated animations
- Smooth CSS transitions (0.6s cubic-bezier by default)
- Minimal JavaScript computation

## License

MIT

## Author

Nicolas VETROFF

## Repository

https://github.com/nicolas-vetroff/vue-flipcard

## Contributing

This project is open to improvements and suggestions. Feel free to open issues.
