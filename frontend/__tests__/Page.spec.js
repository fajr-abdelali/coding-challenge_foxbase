// Import necessary dependencies and the component
import { mount } from '@vue/test-utils';
import Page from '../src/pages/Page.vue';
import { createStore } from 'vuex';

// Mock the Vuex store
const store = createStore({
  state: {
    user: {
      currentQuestionName: 'start'
    }
  }
});

jest.mock('vuex', () => ({
  ...jest.requireActual('vuex'),
  useStore: () => store
}));

// Mock the router
const mockRouter = {
  push: jest.fn()
};

jest.mock('vue-router', () => ({
  useRouter: () => mockRouter
}));

describe('Page', () => {
  it('should render the current page text', async () => {
    const wrapper = mount(Page);
    await wrapper.vm.$nextTick();

    // Replace with appropriate selector based on your component structure
    expect(wrapper.find('h1').text()).toContain('scope of application');
  });

  it('should call router.push when goToNextQuestion is called', async () => {
    const wrapper = mount(Page);
    await wrapper.vm.$nextTick();

    // Replace with a valid OptionType object based on your scenario
    const selectedOption = { id: '1', next: 'nextQuestion' };
    await wrapper.vm.goToNextQuestion(selectedOption);

    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'catchAll', path: 'nextQuestion' });
  });

  // Add more test cases based on the component behavior
});
