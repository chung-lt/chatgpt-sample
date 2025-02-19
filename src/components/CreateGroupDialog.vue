<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGroupStore } from '@/stores/groupStore';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import TooltipProvider from './ui/tooltip/TooltipProvider.vue';
import TooltipTrigger from './ui/tooltip/TooltipTrigger.vue';

const groupStore = useGroupStore();
const { groupName } = storeToRefs(groupStore);

const isDialogOpen = ref<boolean>(false);
const loading = ref<boolean>(false);

const isCreateGroupNameInputEmpty = ref<boolean>(false);
const clearGroupNameEmptyError = () => {
    isCreateGroupNameInputEmpty.value = false;
};

const isSubmitting = ref<boolean>(false);

const handleCreateNewGroup = async () => {
    console.log("Create new group");
};

const onOpenCreateGroup = () => {
    loading.value = false;
    clearGroupNameEmptyError();
    isDialogOpen.value = true;
    groupName.value = '';
};

watch(groupName, (valueAvailable) => {
    if (valueAvailable) {
        isCreateGroupNameInputEmpty.value = false;
    }
});
</script>

<template>
    <Dialog v-model:open="isDialogOpen">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button
                        as-child
                        size="sm"
                        class="flex gap-3 bg-gray-900 text-white hover:bg-gray-800 hover:text-white cursor-pointer"
                        style="border-radius: 50%"
                        @click="onOpenCreateGroup"
                    >
                        <i class="bi bi-plus-lg"></i>
                    </Button>
                </TooltipTrigger>
                <TooltipContent style="z-index: 50">
                    <div>{{ t('group.tooltip.createNewGroup') }}</div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <DialogContent class="sm:max-w-[425px]">
            <div class="flex gap-3">
                <DialogHeader>
                    <DialogTitle>{{ t('group.dialog.createGroupDialogHeader') }}</DialogTitle>
                </DialogHeader>
            </div>
            <div class="w-full">
                <!-- <span class="text-blue-400" v-for="error in v$.$errors" :key="error.$uid"> {{ error.$property }} - {{ error.$message }}</span> -->
                <Input
                    :disabled="loading || isSubmitting"
                    @keyup.enter="handleCreateNewGroup"
                    v-model="groupName"
                    id="name"
                    :placeholder="t('group.dialog.createGroupNamePlaceholder')"
                    :class="[
                        'col-span-3 focus-visible:ring-offset-0',
                        isCreateGroupNameInputEmpty ? 'focus-visible:ring-red-600' : null
                    ]"
                />
                <p
                    class="text-red-500 mt-2 text-sm font-semibold"
                    v-if="isCreateGroupNameInputEmpty"
                >
                    {{ t('group.dialog.createGroupNameEmpty') }}
                </p>
            </div>
            <DialogFooter class="flex">
                <Button
                    @click="isDialogOpen = false"
                    type="button"
                    variant="outline"
                    class="w-fit rounded-full"
                >
                    {{ t('group.button.cancel') }}
                </Button>
                <Button
                    :disabled="v$.groupName.$invalid || loading || isSubmitting"
                    type="button"
                    variant="secondary"
                    class="w-fit rounded-full bg-black text-white hover:bg-gray-800"
                    @click="handleCreateNewGroup"
                >
                    <Loader
                        v-if="loading"
                        class="w-5 h-5 mr-3 animate-spin"
                    />
                    {{ t('group.dialog.createGroupButtonLabel') }}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>

<style scoped lang="scss"></style>
