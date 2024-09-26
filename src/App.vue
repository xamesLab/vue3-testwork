<script setup lang="ts">
import { ref, watch } from 'vue';
import Checkbox from './components/Checkbox.vue';
import { useStore, ICheckboxObject, Item } from './stores';

const MOCK_OBJ: ICheckboxObject[] = [
    {
        id: '1',
        name: 'checkbox1',
        value: 'checkbox1',
    },
    {
        id: '2',
        name: 'checkbox2'
    },
    {
        id: '3',
        name: 'checkbox3',
        value: 'checkbox3',
    },
    {
        id: '4',
        name: 'checkbox4'
    }
];

const store = useStore();
const name = ref<string>(store.name);

const change = (value: Item[]) => {};

watch(name, (value) => {
  store.setName(value);
});
</script>

<template>
  <div class="app">
    <input
        type="text"
        v-model="name"
    />
    <Checkbox
        :chekboxObject="MOCK_OBJ"
        @change="change"
    />
    <p>{{ store.name }}</p>
    <p v-if="store.selected.length">{{ store.selected }}</p>
  </div>
</template>

<style scoped>
  .app {
    padding: 2rem 3rem;
  }

  .app > input {
    margin-bottom: 20px;
  }

  .app > p:last-child {
    margin-top: 10px;
  }
</style>
