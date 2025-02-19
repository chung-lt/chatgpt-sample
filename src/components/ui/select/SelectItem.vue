<script setup lang="ts">
import { cn } from '@/lib/utils';
import { SelectItem, SelectItemIndicator, type SelectItemProps, useForwardProps } from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<SelectItemProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <SelectItem
        v-bind="forwardedProps"
        :class="
            cn(
                'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-4 mr-8 text-sm outline-none hover:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                props.class
            )
        "
    >
        <span class="absolute right-4 flex h-3 w-3 items-center justify-center">
            <SelectItemIndicator>
                <i class="bi bi-check text-xl"></i>
            </SelectItemIndicator>
        </span>
        <slot />
    </SelectItem>
</template>
