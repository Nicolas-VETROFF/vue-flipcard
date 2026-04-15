import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VFlipCard from '../components/VFlipCard.vue'

// RIGHT SIDE TESTS
describe('VFlipCard - Right', () => {
    it('should rotate to 180 degrees on click when flipSide is right', async () => {
        const wrapper = mount(VFlipCard, {
            props: {
            activeClick: true,
            flipSide: 'right'
            },
            slots: {
            front: 'Front',
            back: 'Back'
            }
        })

        await wrapper.find('.flip-card').trigger('click')
        expect(wrapper.vm.getRotation).toBe(180)
    })

   it('should not emit on drag when rotation is less than 90 degrees', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeDrag: true,
        flipSide: 'right'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    const el = wrapper.find('.flip-card').element
    el.dispatchEvent(new TouchEvent('touchstart', {
      bubbles: true,
      touches: [{ screenX: 0, screenY: 0 }] as any
    }))
    el.dispatchEvent(new TouchEvent('touchmove', {
      bubbles: true,
      touches: [{ screenX: 100, screenY: 0 }] as any // full rotation: 200px
    }))
    el.dispatchEvent(new TouchEvent('touchend', { bubbles: true }))

    expect(wrapper.emitted('flip:back')).toBeFalsy()
  })

  it('should emit flip:back on drag when rotation is greater than 90 degrees', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeDrag: true,
        flipSide: 'right'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    const el = wrapper.find('.flip-card').element
    el.dispatchEvent(new TouchEvent('touchstart', {
      bubbles: true,
      touches: [{ screenX: 0, screenY: 0 }] as any
    }))
    el.dispatchEvent(new TouchEvent('touchmove', {
      bubbles: true,
      touches: [{ screenX: 101, screenY: 0 }] as any // just past 90 degrees (full rotation: 200px)
    }))
    el.dispatchEvent(new TouchEvent('touchend', { bubbles: true }))

    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('flip:back')).toBeTruthy()
  })
})
