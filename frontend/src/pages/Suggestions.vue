<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '@/store';
import { serviceMatrix } from '../services/queries/example';



const $store = useStore<RootState>();
const $userResponses = computed(() => $store.state.user.responses);

serviceMatrix().then(() => {
    }).catch(err => { console.log(err) })

</script>
<template>
  <h1>Suggestions</h1>
  <pre>{{ $userResponses }}</pre>

</template>
