// src/store/index.ts
import { createStore } from 'vuex';
import userModule from './modules/user';

export interface RootState {
}

const store = createStore({
  modules: {
    user: userModule,
  },
});

export default store;
