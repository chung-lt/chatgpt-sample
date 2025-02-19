<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { useTextareaAutosize, useVModel } from '@vueuse/core';

const { textarea } = useTextareaAutosize();
const setValue = (value: string): void => {
    if (textarea.value) {
        textarea.value.value = value;
        textarea.value.focus();
        textarea.value.style.height = 'auto';
        textarea.value.style.height = `${textarea.value.scrollHeight}px`;
    }
};
// Expose the `setValue` method for external use
defineExpose({
    setValue
});
const props = defineProps<{
    class?: HTMLAttributes['class'];
    defaultValue?: string | number;
    modelValue?: string | number;
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue
});
</script>

<template>
    <textarea
        ref="textarea"
        v-model="modelValue"
        :class="
            cn(
                'flex flex-col items-center h-full w-full grow max-h-52 rounded-md border border-input bg-transparent p-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                props.class
            )
        "
    />
</template>
