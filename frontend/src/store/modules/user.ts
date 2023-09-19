// src/store/modules/user.ts
import { Module, MutationTree, ActionTree } from 'vuex';
import { RootState } from '@/store';

interface UserState {
  progress: Record<string, any>;
  currentQuestionId: string;
  responses: Record<string, any>;
}

const state: UserState = {
  progress: {},
  currentQuestionName: 'start',
  responses: [],  
};

const mutations: MutationTree<UserState> = {
  updateCurrentQuestion(state, nextQuestionName: string) {
    state.currentQuestionName = nextQuestionName;
  },
  updateResponse(state, response:number) {
    state.responses = [... state.responses,response];
  },
};

const getters: GetterTree<UserState, RootState> = {
  getUserResponses(state) {
    return state.responses;
  },
};

const actions: ActionTree<UserState, RootState> = {
  // Implement your actions here...
};

const userModule: Module<UserState, RootState> = {
  state,
  mutations,
  actions,
};

export default userModule;
