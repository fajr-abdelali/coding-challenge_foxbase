<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { RootState } from '@/store';
import { Questionnaire } from '@/types';
import Option from '../components/Option/Option.vue';
import questionnaireJson from '../questionnaire.json';
import { useRouter } from 'vue-router';


const $store = useStore<RootState>();
const $currentQuestionName = computed(() => $store.state.user.currentQuestionName);
const questionnaire: Questionnaire = questionnaireJson;
const router = useRouter();

const currentPage = computed(() => {
  return questionnaire.pages.find(q => q.name === $currentQuestionName.value);
});

const goToNextQuestion = (selectedOption: OptionType) => {
  if (selectedOption.next) {
    $store.commit('updateCurrentQuestion', selectedOption.next);
    $store.commit('updateResponse', selectedOption.id);
    router.push({ name: 'catchAll',path:selectedOption.next});
  } else {
    router.push({ name: 'suggestions' });
  }

}



</script>
<template>
  <h1>{{ currentPage?.text }}</h1>
  <Option @answer="goToNextQuestion" :optionsArray="currentPage?.options"></Option>
</template>
