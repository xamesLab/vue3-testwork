<script setup lang="ts">
import { useStore, ICheckboxObject, Item } from '../stores';
import { ref, watch } from 'vue';

interface Props {
  chekboxObject: ICheckboxObject[],
}

interface EmitProps {
  change: (value: Item[]) => Item[];
}

const props = defineProps<Props>();

const emit = defineEmits<EmitProps>();

const store = useStore();

const initState = () => {
  const obj = {};
  props.chekboxObject.forEach(item => {
    obj[item.id] = false;
  });
  return obj;
}

const selectItem = ref<Record<string, Item>>(initState());

watch(selectItem, () => {
      const selectedItem: Item[] = [];

      props.chekboxObject.forEach(item => {
        if (!selectItem.value[item.id]) {
          return;
        }

        if (item.value) {
          selectedItem.push(item.value);
        } else {
          selectedItem.push(true);
        }
      });

      store.setItem(selectedItem);
      emit('change', selectedItem);
},
{
  deep: true,
});
</script>

<template>
  <div class="checkbox-wrapp">
    <label
      v-for="item in chekboxObject"
      :key="item.id"
    >
      <input
        type="checkbox"
        :name="item.id"
        :value="item.value"
        v-model="selectItem[item.id]"
      />
      {{ item.name }}
    </label>
  </div>
</template>

<style scoped>
.checkbox-wrapp {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.checkbox-wrapp > label {
  margin-bottom: 10px;
  cursor: pointer;
}
</style>