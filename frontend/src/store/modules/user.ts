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
  currentQuestionId: 'start',
  responses: {},  
};

const mutations: MutationTree<UserState> = {
  updateCurrentQuestion(state, nextQuestionId: string) {
    state.currentQuestionId = nextQuestionId;
  },
  updateResponse(state, { questionId, response }) {
    state.responses[questionId] = response;
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
