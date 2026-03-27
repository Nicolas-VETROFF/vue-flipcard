import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import VFlipCard from '../components/VFlipCard.vue'

///////////
// EMITS //
///////////

describe('VFlipCard - Emits', () => {
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
