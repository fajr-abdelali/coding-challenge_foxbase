<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { RootState } from '@/store';
import { Questionnaire } from '@/types';
import Option from '../components/Option/Option.vue';
import questionnaireJson from '../questionnaire.json';

const store = useStore<RootState>();
const currentQuestionId = computed(() => store.state.user.currentQuestionId);
const userResponses = computed(() => store.state.user.responses);
const questionnaire: Questionnaire = questionnaireJson;

const currentPage = computed(() => {
  console.log(questionnaire[currentQuestionId.value])
  return questionnaire[currentQuestionId.value];
});

const goToNextQuestion = (selectedOption: OptionType) => {
  if (selectedOption) {
    store.commit('updateCurrentQuestion', selectedOption.next);
    store.commit('updateResponse', {
      questionId: currentQuestionId.value,
      response: (selectedOption.id - 1),
    });
  }else{
    serviceMatrix()
  }

}

const serviceMatrix = () => {
  console.log('service')
}


</script>
<template>
  <h1>{{ currentPage.text }}</h1>
  <Option @answer="goToNextQuestion" :optionsArray="currentPage.options"></Option>
  <pre>{{ userResponses }}</pre>
</template>
