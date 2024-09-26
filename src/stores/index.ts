import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface ICheckboxObject {
    id: string;
    name: string;
    value?: string;
}

export type Item = string | boolean;

export const useStore = defineStore('store', () => {
    const name = ref('');
    const selected = ref<Item[]>([]);

    const setName = (value: string) => {
        name.value = value;
    };

    const setItem = (value: Item[]) => {
        selected.value = value;
    };

    return {
        name,
        selected,
        setName,
        setItem,
    }
});