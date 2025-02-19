<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useGroupStore } from '@/stores/groupStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import AlertDialogDescription from '../../alert-dialog/AlertDialogDescription.vue';

const { t } = useI18n();
const route = useRoute();
const groupStore = useGroupStore();
const { changeGroupMemberRole, removeMemberFromGroup, getGroupDataTableMember } = groupStore;
const { currentDataTableOffset } = storeToRefs(groupStore);
const { member } = defineProps<{
    member: { id: string; name: string; email: string; role: string };
}>();

const loading = ref<boolean>(false);
const isRemoveMemberDialogOpen = ref<boolean>(false);
const openRemoveMemberDialog = () => {
    isRemoveMemberDialogOpen.value = true;
};

const handleChangeGroupMemberRole = async (
    groupId: string,
    selectedMemberId: string,
    newRole: 'ADMIN' | 'MEMBER'
) => {
    if (loading.value) return;
    loading.value = true;
    try {
        await changeGroupMemberRole(groupId, selectedMemberId, newRole);
    } catch (error) {
        console.error('Error changing member role:', error);
    } finally {
        await getGroupDataTableMember({
            groupId: groupId,
            offset: currentDataTableOffset.value,
            limit: 20
        });
        loading.value = false;
    }
};

const isDropdownOpen = ref<boolean>(false);

const handleRemoveMember = async (memberId: string, role: string) => {
    loading.value = true;
    if (role === 'ADMIN' || role === 'MEMBER') {
        const groupId = route.params.id as string;
        try {
            await removeMemberFromGroup(groupId, memberId, role as 'ADMIN' | 'MEMBER');
        } catch (error) {
            console.error('Failed to remove member:', error);
        } finally {
            loading.value = false;
        }
        isDropdownOpen.value = false;
        isRemoveMemberDialogOpen.value = false;
    } else {
        console.error('Invalid role type');
    }
};
const openDropdown = () => {
    isDropdownOpen.value = true;
};
</script>

<template>
    <DropdownMenu v-model:open="isDropdownOpen">
        <DropdownMenuTrigger as-child>
            <Button
                variant="ghost"
                class="w-8 h-8 p-0"
                @click="openDropdown"
            >
                <i
                    v-if="!loading"
                    class="bi bi-three-dots"
                ></i>
                <Loader
                    class="w-4 h-4 animate-spin"
                    v-if="loading"
                />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger class="cursor-pointer">
                        <div variant="ghost">
                            <i class="bi bi-arrow-down-up mr-2"></i>
                            {{ t('group.membersTab.tableOption.changeMemberRoleLabel') }}
                        </div>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem
                            class="cursor-pointer"
                            @click.stop="
                                handleChangeGroupMemberRole(
                                    route.params.id as string,
                                    member.id,
                                    'ADMIN'
                                )
                            "
                        >
                            <div>ADMIN</div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            class="cursor-pointer"
                            @click.stop="
                                handleChangeGroupMemberRole(
                                    route.params.id as string,
                                    member.id,
                                    'MEMBER'
                                )
                            "
                        >
                            <div>MEMBER</div>
                        </DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem>
                    <AlertDialog v-model:open="isRemoveMemberDialogOpen">
                        <AlertDialogTrigger class="cursor-pointer">
                            <div
                                variant="ghost"
                                @click.stop="openRemoveMemberDialog"
                                class="text-red-500"
                            >
                                <i class="bi bi-eraser mr-2"></i>
                                {{
                                    t('group.membersTab.tableOption.removeMemberLabel', {
                                        memberName: member.name
                                    })
                                }}
                            </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent class="sm:max-w-[425px]">
                            <AlertDialogHeader>
                                <AlertDialogTitle>{{
                                    t('group.membersTab.dialog.removeMemberDialogHeader')
                                }}</AlertDialogTitle>
                            </AlertDialogHeader>

                            <AlertDialogDescription>
                                {{
                                    t('group.membersTab.dialog.removeMemberDialogDescription', {
                                        memberName: member.name
                                    })
                                }}
                            </AlertDialogDescription>

                            <AlertDialogFooter class="flex">
                                <AlertDialogCancel as-child>
                                    <Button
                                        type="button"
                                        variant="outline"
                                    >
                                        {{ t('group.button.cancel') }}
                                    </Button>
                                </AlertDialogCancel>
                                <Button
                                    :disabled="loading"
                                    @click.stop="handleRemoveMember(member.id, member.role)"
                                    type="button"
                                    class="bg-red-600 text-white hover:bg-red-500"
                                >
                                    <Loader
                                        v-if="loading"
                                        class="w-5 h-5 mr-3 animate-spin"
                                    />
                                    {{ t('group.membersTab.dialog.removeMemberButtonLabel') }}
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
