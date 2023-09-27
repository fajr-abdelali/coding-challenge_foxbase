import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Option from '../components/Option/Option.vue';

describe('Option.vue', () => {
  it('renders the correct text from props', async () => {
    const optionsArray = ['Option 1', 'Option 2', 'Option 3'];
    const wrapper = mount(Option, {
      props: { optionsArray }
    });

    // Assert the rendered options
    expect(wrapper.findAll('input[type="radio"]').length).toBe(optionsArray.length);

    // Example assertion for the first option
    expect(wrapper.findAll('input[type="radio"]').at(0).element.value).toBe(optionsArray[0]);
  });

  // Add more test cases based on the component behavior
});
