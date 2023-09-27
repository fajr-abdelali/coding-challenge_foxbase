<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '../store/index';
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
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});

</script>
<template>
  <h1>Suggestions</h1>
  <ul class="product-grid" v-if="!loading && products.length > 0">
    <li class="product-item" v-for="product in products" :key="product.id">
      <img :src="product.image">
      <h5 class="title">{{ product.title }}</h5>
    </li>
  </ul>
  <p v-else-if="loading">Loading products...</p>
  <p v-else>No products available.</p>
</template>
<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  list-style: none;
}

.product-item {
  border: 1px solid #ccc;
}

.product-item img {
  width: 100%;
  height: 14em;
  object-fit: cover;
  object-position: top;
}
.product-item .title{
  margin-top: 0;
  padding: 0px .8em;
}
</style>
