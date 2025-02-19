<script setup>
import { storeToRefs } from 'pinia';
import GroupSidebar from '@/layout/GroupSidebar.vue';
import GroupViewMain from './view-component/Group/GroupViewMain.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const store = useGroupStore();
const { groups } = storeToRefs(store); // Use global loading state
</script>

<template>
    <div class="flex h-full overflow-hidden">
        <GroupSidebar />
        <div class="w-full h-screen flex flex-col justify-center">
            <!-- <Loader
                v-if="loading"
                class="w-5 h-5 mx-auto animate-spin"
            /> -->
            <p
                v-if="!groups.length"
                class="text-3xl font-semibold opacity-20 text-center"
            >
                {{ t('group.unavailableMessage.noGroupMessage') }}
            </p>
            <GroupViewMain v-else />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
