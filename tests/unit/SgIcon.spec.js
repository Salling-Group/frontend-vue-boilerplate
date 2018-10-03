import { mount } from '@vue/test-utils';
import SgIcon from '@/components/SgIcon.vue';

describe('SgIcon', () => {
  describe('Properties', () => {
    it('has a required type property', () => {
      const wrapper = mount(SgIcon, {
        propsData: {
          type: 'user',
        },
      });
      expect(wrapper.vm.$options.props.type.type).toBe(String);
      expect(wrapper.vm.$options.props.type.required).toBeTruthy();
    });

    it('has a prefix property with a default value', () => {
      const wrapper = mount(SgIcon, {
        propsData: {
          type: 'user',
        },
      });
      expect(wrapper.vm.$options.props.prefix.type).toBe(String);
      expect(wrapper.vm.$options.props.prefix.default).toBe('material-icons');
    });
  });

  it('renders correctly', () => {
    const wrapper = mount(SgIcon, {
      propsData: {
        type: 'user',
        prefix: 'icon',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
