<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ optionsArray: Array<{ text: string, next: string }> }>();
const emit = defineEmits(['answer']);
const selectedOption = ref<OptionType | null>(null);

const nextQuestion = () => {
    if (selectedOption.value) {
        emit('answer', selectedOption.value || false)
    }
}
</script>

<template>
    <div class="answers">
        <div v-for="option in optionsArray" :key="option.id" class="container">
            <input type="radio" :value="option" v-model="selectedOption" :id="option.id">
            <label :for="option.id">{{ option.text }}</label>
        </div>
        <button @click="nextQuestion">next</button>
    </div>
</template>

<style scoped >
.answers {
    display: flex;
    flex-direction: column;
}
</style>