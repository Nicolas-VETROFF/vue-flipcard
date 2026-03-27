import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import VFlipCard from '../components/VFlipCard.vue'

///////////
// EMITS //
///////////

describe('VFlipCard - Emits', () => {
  // TODO: Right is currently tested (hover, click, drag), but all sides should be tested

  // RIGHT
  it('should emit flip:back on click when activeClick is true', async () => {
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
    expect(wrapper.emitted('flip:back')).toBeTruthy()
  })

  it('should emit flip:front on second click', async () => {
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

    // First click - flip to back
    await wrapper.find('.flip-card').trigger('click')
    expect(wrapper.emitted('flip:back')).toBeTruthy()

    // Second click - flip to front
    await wrapper.find('.flip-card').trigger('click')
    expect(wrapper.emitted('flip:front')).toBeTruthy()
  })

  it('should emit flip:back on mouseenter when activeHover is true', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeHover: true,
        flipSide: 'right'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    await wrapper.find('.flip-card').trigger('mouseenter')
    expect(wrapper.emitted('flip:back')).toBeTruthy()
  })

  it('should emit flip:front on mouseleave when activeHover is true', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeHover: true,
        flipSide: 'right'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    await wrapper.find('.flip-card').trigger('mouseenter')
    await wrapper.find('.flip-card').trigger('mouseleave')
    expect(wrapper.emitted('flip:front')).toBeTruthy()
  })

  it('should not emit on click when activeClick is false', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeClick: false,
        flipSide: 'right'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    await wrapper.find('.flip-card').trigger('click')
    expect(wrapper.emitted('flip:front')).toBeFalsy()
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

    expect(wrapper.emitted('flip:back')).toBeTruthy()
  })

  // GLOBAL
  it('should not emit on click when activeClick is false', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeClick: false,
        flipSide: 'right'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    await wrapper.find('.flip-card').trigger('click')
    expect(wrapper.emitted('flip:front')).toBeFalsy()
  })

  it('should not emit on hover when activeHover is false', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeHover: false,
        flipSide: 'right'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    await wrapper.find('.flip-card').trigger('mouseenter')
    expect(wrapper.emitted('flip:back')).toBeFalsy()
  })

  it('should not emit on drag when activeDrag is false', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeDrag: false,
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
      touches: [{ screenX: 100, screenY: 0 }] as any
    }))
    el.dispatchEvent(new TouchEvent('touchend', { bubbles: true }))

    expect(wrapper.emitted('flip:back')).toBeFalsy()
  })


})

///////////
// PROPS //
///////////

describe('VFlipCard - Props', () => {
  it('should have correct default props', () => {
    const wrapper = mount(VFlipCard, {
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    expect(wrapper.props('width')).toBe('200px')
    expect(wrapper.props('height')).toBe('150px')
    expect(wrapper.props('activeHover')).toBe(false)
    expect(wrapper.props('activeClick')).toBe(false)
    expect(wrapper.props('activeDrag')).toBe(false)
    expect(wrapper.props('flipSide')).toBe('right')
  })

  it('should accept custom width and height', () => {
    const wrapper = mount(VFlipCard, {
      props: {
        width: '300px',
        height: '250px'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    expect(wrapper.props('width')).toBe('300px')
    expect(wrapper.props('height')).toBe('250px')
  })
})

///////////////
// ROTATIONS //
///////////////

describe('VFlipCard - Rotations', () => {
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

  it('should rotate to -180 degrees on click when flipSide is left', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeClick: true,
        flipSide: 'left'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    await wrapper.find('.flip-card').trigger('click')
    expect(wrapper.vm.getRotation).toBe(-180)
  })

  it('should rotate to 180 degrees on click when flipSide is up', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeClick: true,
        flipSide: 'up'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    await wrapper.find('.flip-card').trigger('click')
    expect(wrapper.vm.getRotation).toBe(180)
  })

  it('should rotate to -180 degrees on click when flipSide is down', async () => {
    const wrapper = mount(VFlipCard, {
      props: {
        activeClick: true,
        flipSide: 'down'
      },
      slots: {
        front: 'Front',
        back: 'Back'
      }
    })

    await wrapper.find('.flip-card').trigger('click')
    expect(wrapper.vm.getRotation).toBe(-180)
  })

  // TODO: infinite drag rotation tests
})
