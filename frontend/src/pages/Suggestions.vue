<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '@/store';
import { serviceMatrix } from '../services/queries/example';



const $store = useStore<RootState>();
const $userResponses = computed(() => $store.state.user.responses);
console.log($userResponses.value)

const dataToBeSent = [1,0,2,1];


onMounted(async () => {
  try {
    const poop = await serviceMatrix(dataToBeSent);
    console.log(poop)
  } catch (err) {
    console.error('Error:', err);
  }
});


</script>
<template>
  <h1>Suggestions</h1>
  <!-- <pre>{{ $userResponses }}</pre> -->
</template>
