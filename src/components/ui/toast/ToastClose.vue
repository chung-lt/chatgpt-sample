<script setup lang="ts">
import { cn } from '@/lib/utils';
import { ToastClose, type ToastCloseProps } from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<
    ToastCloseProps & {
        class?: HTMLAttributes['class'];
    }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ToastClose
        v-bind="delegatedProps"
        :class="
            cn(
                'absolute right-2 top-1 rounded-md p-1 text-white opacity-0 transition-opacity hover:text-white focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
                props.class
            )
        "
    >
        <i class="bi bi-x"></i>
    </ToastClose>
</template>
