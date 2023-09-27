<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '@/store';
import { serviceMatrix } from '../services/queries/example';

const store = useStore<RootState>();
const userResponses = ref<number[]>([]);
  const products = ref<Product[]>([]);
const loading = ref(true);


const fetchData = async () => {
  try {
    const responses = store.getters['getUserResponses'];
    userResponses.value = responses || [];
    products.value = await serviceMatrix(userResponses.value);
    loading.value = false;
  } catch (err) {
    console.error('Error:', err);
    loading.value = false; // Make sure loading is set to false on error too
  }
};

onMounted(() => {
  fetchData();
});

</script>
<template>
  <h1>Suggestions</h1>
  <ul v-if="!loading && products.length > 0">
    <li v-for="product in products" :key="product.id" >
      {{ product.title }}
    </li>
  </ul>
  <p v-else-if="loading">Loading products...</p>
  <p v-else>No products available.</p>
</template>
