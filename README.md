# Vue FlipCard

An elegant and interactive Vue 3 flip-card component with support for touch interactions, clicks, and hover effects across 4 rotation directions.

## Features

- **4 flip directions**: `right`, `left`, `up`, `down`
- **Multiple interactions**: drag/swipe, click, hover
- **Mobile & Desktop**: compatible with touch and mouse
- **Customizable**: dimensions, styles, and transitions
- **High performance**: GPU-accelerated CSS 3D transforms
- **Fully typed**: complete TypeScript support

## Installation

```bash
npm install vue-flipcard
# or
yarn add vue-flipcard
# or
pnpm add vue-flipcard
```

## Usage

### For Vue 3 apps

#### Import the component

```typescript
import VFlipCard from 'vue-flipcard'
import 'vue-flipcard/dist/style.css'
```

Or register globally:

```typescript
import { createApp } from 'vue'
import VFlipCard from 'vue-flipcard'
import 'vue-flipcard/dist/style.css'

const app = createApp(App)
app.component('VFlipCard', VFlipCard.VFlipCard)
app.mount('#app')
```

### For Nuxt 3 (Auto-import)

Add the module to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@nv-dev/vue-flipcard'],
})
```

The `VFlipCard` component will be automatically imported throughout your Nuxt app. No manual imports needed!

```html
<template>
  <VFlipCard flip-side="right" active-click>
    <template #front>Front</template>
    <template #back>Back</template>
  </VFlipCard>
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
| `activeDrag` | Boolean | `false` | Enable flip on drag/swipe |
| `activeHover` | Boolean | `false` | Enable flip on hover (desktop only) |

## Slots

### `#front`
Content displayed on the front face of the card.

### `#back`
Content displayed on the back face of the card.

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

### Flip on drag
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

Currently, the component does not emit events. State changes are managed internally. To track changes, use slots with Vue refs.

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
