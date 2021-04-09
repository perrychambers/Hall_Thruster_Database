import { shallowMount } from '@vue/test-utils'
import Toolbar from '@/components/Toolbar.vue'

describe('Toolbar.vue', () => {
    test('renders on the page', () => {
        const wrapper = shallowMount(Toolbar)
        expect(wrapper.exists()).toBe(true);
    })
})