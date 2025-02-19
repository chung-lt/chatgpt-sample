export default {
    login: {
        button: {
            signIn: 'Continue with Azure AD'
        },
        label: {
            signIn: 'Sign in',
            description: 'By clicking continue, you agree to our',
            and: '&',
            terms: 'Terms of Service',
            policy: 'Privacy Policy',
            title: 'Access denied',
            descriptionDenied:
                ' You do not have permission to access this resource. Please request permission from the administrator.',
            logOut: 'Log out',
            goBack: 'Go back to previous page'
        },
        toast: {
            fail: {
                authentication: 'Authentication failure',
                authenticationDescription: 'Please contact customer service to add your account'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'New chat',
                searchAgent: 'Search agents',
                logOut: 'Log out',
                openSidebar: 'Open sidebar',
                closeSidebar: 'Close sidebar'
            },
            button: {
                cancel: 'Cancel',
                logOut: 'Log Out'
            },
            dialogue: {
                logOut: {
                    title: 'Are you sure you want to log out ?',
                    description:
                        'This action will return you to the login screen, and you can log back in at any time.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'New chat'
            },
            button: {
                unpinAgent: 'Hide from sidebar',
                searchAgent: 'Search agents',
                renameConversation: 'Rename',
                deleteConversation: 'Delete',
                cancel: 'Cancel'
            },
            label: {
                loadingConversation: 'Loading conversations',
                createdTime: {
                    today: 'Today',
                    yesterday: 'Yesterday',
                    thisWeek: 'Last 7 Days',
                    thisMonth: 'Last 30 Days'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'Are you sure you want to delete this conversation ?',
                    description:
                        'Are you sure you want to delete this conversation ? This will permanently delete the data.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'My agents',
                createAgent: 'Create agent',
                seeMore: 'See more',
                newChat: 'Start chatting',
                pinAgent: 'Pin to sidebar',
                unpinAgent: 'Hide from sidebar',
                copyLink: 'Copy link'
            },
            label: {
                title: 'Agent',
                description:
                    'Search and create custom versions of agents that combine instructions, additional knowledge, and multiple skills.',
                searchAgent: 'Search agents',
                createdAgents: 'Created by me',
                sharedAgents: 'Shared with me',
                noAgent: 'No agents available',
                hasCreated: 'Created by {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'Draft',
                published: 'Live'
            },
            button: {
                createAgent: 'Create agent',
                seeMore: 'See more',
                cancel: 'Cancel',
                deleteAgent: 'Delete'
            },
            label: {
                title: 'My Agents',
                createdByMe: 'Created by me',
                sharedWithMe: 'Shared with me',
                createAgent: 'Customize agent versions for specific purposes',
                onlyMe: 'Only me',
                shared: 'Shared with groups and individuals with access rights',
                noCreatedAgents: 'No agents have been created yet',
                noSharedAgents: 'No agents have been shared with you yet',
                hasCreated: 'Created by {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'Are you sure to delete this agent ?',
                    description:
                        'This action cannot be undone. This will permanently delete the agent data.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'New chat',
                editAgent: 'Edit agent',
                pinAgent: 'Pin to sidebar',
                unpinAgent: 'Hide from sidebar',
                copyLink: 'Copy link'
            },
            tooltip: {
                uploadFile: 'Attach file',
                uploadImage: 'Attach image'
            },
            button: {
                rcm1: 'Where is Japan located in Asia ?',
                rcm2: 'Count prime numbers from 0 to 100',
                rcm3: 'Text to invite a friend to a wedding',
                downloadFile: 'Download'
            },
            label: {
                greeting: 'Hello, How can I assist you today ?',
                chatPlaceholder: 'Type a message',
                agentChatPlaceholder: ' is waiting for your message',
                copyCode: 'Copy code',
                copyCodeDone: 'Copied!',
                hasCreated: 'Created by {person}'
            }
        },
        userSettings: {
            groupManage: 'Manage groups',
            agentManage: 'Manage agents',
            settings: {
                title: 'Settings',
                general: 'General',
                language: 'Language'
            },
            logOut: 'Log Out'
        },
        toast: {
            success: {
                pinAgent: 'Agent has been pinned to sidebar',
                unpinAgent: 'Agent has been unpinned from sidebar',
                linkCopy: 'Link copied to clipboard',
                updateAgentAcl: 'Agent has been shared to selected people and groups',
                deleteConversation: 'Delete successfully',
                deleteConversationDescription: 'Conversation has been deleted'
            },
            fail: {
                generalErrorTitle: 'Error',
                fileExtensionInvalid: 'Invalid extension',
                imageSizeInvalid: 'The image size exceeds 20MB.',
                generalError: 'Something went wrong. Please try again.',
                uploadFileFailSingle: '{fileName} can not be upload. Please try again.',
                uploadFileFailPlural:
                    'The following files: {fileName} can not be upload. Please try again.',
                pinAgent: 'Agent could not be pinned to sidebar'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: 'Groups'
        },
        dialog: {
            createGroupDialogHeader: 'Create a new group',
            createGroupNamePlaceholder: 'Group name',
            createGroupButtonLabel: 'Create',
            createGroupNameEmpty: 'Group name is required'
        },
        // my agent tab in group
        myAgentsTab: {
            tabLabel: 'My Agents',
            searchAgentPlaceholder: 'Search agents',
            tabTitle: 'Top picks',
            searchQueryDialog: {
                pinButtonTitle: 'Pin to sidebar',
                copyButtonTitle: 'Copy Link',
                startChattingButtonTitle: 'Start Chatting',
                creatorLabel: 'created'
            },
            myAgentDialog: {
                pinButtonTitle: 'Pin to sidebar',
                copyButtonTitle: 'Copy Link',
                startChattingButtonTitle: 'Start Chatting'
            },
            groupAgentFavoriteTitle: "Group {groupName}'s favorites",
            groupAgentFavoriteSubTitle: "Group {groupName}'s most popular agents"
        },
        // members tab in group
        membersTab: {
            tabLabel: 'Members',
            groupMembersLabel: 'Group members',
            memberSingularLabel: 'member',
            memberPluralLabel: 'members',
            allMemberTab: 'All members',
            searchMemberPlaceHolder: 'Search member by email',
            tableNameLabel: 'Name',
            tableEmailLabel: 'Email',
            tableRoleLabel: 'Role',
            currentUserLabel: 'Me',
            tableOption: {
                changeMemberRoleLabel: "Change member's role",
                removeMemberLabel: 'Remove {memberName} from group'
            },
            dialog: {
                addMemberDialogHeader: 'Add more members to the group {groupName}',
                addMemberDialogDescription:
                    'This group is private. Only certain members and roles can use this group',
                searchMemberPlaceHolder: 'Search members by email',
                addMemberButtonLabel: 'Confirm',
                leaveGroupDialogHeader: 'Are you sure you want to leave this group ?',
                leaveGroupButtonLabel: 'Leave group',
                needOneLeaderWarningText: 'Group needs at least one ADMIN',
                removeMemberDialogHeader: 'Remove member',
                removeMemberDialogDescription:
                    'Are you sure you want to remove {memberName} from this group ?',
                removeMemberButtonLabel: 'Remove',

                importCSV: 'Import CSV file',
                importCSVDes:
                    "The file must include email and a role on each line. Role should be 'member'",
                showExampleButtonLabel: 'Show example',
                hideExampleButtonLabel: 'Hide example',
                uploadCSVButtonLabel: 'Upload CSV',
                emailRoleText: 'Email, Role'
            }
        },
        // settings tab in group
        settingsTab: {
            tabLabel: 'Settings',
            updateGroupLabel: 'Update group',
            updateGroupSubLabel: 'You can change your group name',
            deleteGroupLabel: 'Delete group',
            deleteGroupSubLabel:
                'You can delete your group, but be aware that this action cannot be undone',
            dialog: {
                editDialog: {
                    dialogHeader: 'Change group name',
                    currentGroupNameLabel: 'Current group name',
                    newGroupNameLabel: 'New group name',
                    newGroupNamePlaceholder: 'Input new group name',
                    updateButtonLabel: 'Update'
                },
                deleteDialog: {
                    dialogHeader: 'Are you sure you want to delete this group ?',
                    dialogDescription: 'This action will delete the group {groupName}',
                    deleteButtonLabel: 'Delete'
                },
                validError: {
                    newGroupNameEmpty: "New group name can't be empty"
                }
            }
        },
        button: {
            backToChat: 'Back to chat',
            inviteMember: 'Invite members',
            seeMore: 'SEE MORE',
            cancel: 'Cancel'
        },
        tooltip: {
            createNewGroup: 'Create new group'
        },
        unavailableMessage: {
            noGroupMessage: 'No group available',
            noAgentMessage: 'No agent available',
            noSettingAccessMessage: "You need to be an ADMIN to access this group's settings",
            noMemberAvailable: 'No member available'
        },
        toast: {
            success: {
                deleteGroup: 'Group delete successfully'
            },
            fail: {
                generalErrorTitle: 'Error',
                somethingWentWrong: 'Something went wrong, please try again',
                createGroupFail: 'Create group unsuccessfully',
                editGroupFail: 'Edit group unsuccessfully',
                deleteGroupFail: 'Group delete unsucessfully',
                leaveGroupFail: 'Failed to leave the group'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'New Agent',
            activeStatusLive: 'Live',
            activeStatusDraft: 'Draft',
            activeStatusPublishOnlyMe: 'Only me',
            activeStatusPublishAnyoneWithPermission: 'Anyone or groups with permission',
            activeStatusPublishEveryone: 'Everyone'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'Pin to sidebar',
                unpinAgentButtonLabel: 'Unpin',
                deleteAgentButtonLabel: 'Delete Agent'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'Delete Agent',
                deleteAgentDialogDescription:
                    'Are you sure you want to delete this Agent ? This action cannot be undone'
            },
            share: {
                shareAgentDialogHeader: 'Share my agent',
                shareAgentToPeopleButtonLabel: 'Share to people',
                shareAgentGeneralAccess: 'General access',
                shareStatusRestrictedLabel: 'Restricted',
                shareStatusRestrictedSubLabel:
                    'Only people and groups with access can open with the link',
                shareStatusAnyoneLabel: 'Anyone',
                shareStatusAnyoneSubLabel: 'Anyone in the company with the link can view',
                peopleTab: {
                    addPeoplePlaceholder: 'Add people',
                    peopleListLabel: 'People list',
                    option: {
                        canChatLabel: 'Can chat',
                        canChatSubLabel: 'User can chat with this agent',
                        canEditLabel: "Can edit agent's content",
                        canEditSubLabel: "Show agent's content, duplicate agent, chat",
                        removeGroupLabel: 'Remove group'
                    }
                },
                shareAgentToGroupsButtonLabel: 'Share to groups',
                groupsTab: {
                    addGroupPlaceholder: 'Add groups',
                    groupListLabel: 'Groups list',
                    option: {
                        canChatLabel: 'Can chat',
                        canChatSubLabel: 'User can chat with this agent',
                        canEditLabel: "Can edit agent's content",
                        canEditSubLabel: "Show agent's content, duplicate agent, chat",
                        removeGroupLabel: 'Remove group'
                    }
                }
            },
            update: {
                updateDialogHeader: 'Agent has been updated',
                agentCreator: ' has created',
                accessLabel: 'Access',
                updateStatusOnlyMe: 'Only me',
                updateStatusAnyoneWithPermission: 'Anyone or groups with permission',
                updateStatusEveryone: 'Everyone',
                pinButtonLabel: 'Pin to sidebar',
                startConversationLabel: 'Start Conversation'
            }
        },

        nameLabel: 'Name',
        namePlaceholder: 'Name your agent',
        descriptionLabel: 'Description',
        descriptionPlaceholder: 'Add a short description about what this Agent does',
        instructionLabel: 'Instructions',
        instructionPlaceholder:
            'What does this Agent do ? How does it behave ? What should it avoid doing ?',
        knowledgeLabel: 'Knowledge',
        knowledgeSubLabel:
            'If you upload files under Knowledge, conversations with your Agent may include file contents. Files can be downloaded',
        savingDraftLabel: 'Saving Draft',

        validError: {
            nameTooLong: "The agent's name must be 50 characters or fewer.",
            desTooLong: "The agent's description must be 300 characters or fewer.",
            insTooLong: "The agent's instructions must be 8000 characters or fewer."
        },

        button: {
            shareButtonLabel: 'Share',
            updateButtonLabel: 'Update',
            publishButtonLabel: 'Publish',
            copyLinkButtonLabel: 'Copy the link',
            saveButtonLabel: 'Save',
            uploadFileButtonLabel: 'Upload files',
            cancelButtonLabel: 'Cancel',
            deleteButtonLabel: 'Delete'
        },
        toast: {
            success: {
                createAgent: 'Agent has been successfully created',
                updateAgent: 'Agent has been successfully updated',
                deleteAgent: 'Agent has been successfully deleted'
            },
            fail: {
                publishAgent:
                    'Unexpected error: Can not publish this draft agent. Please try again',
                retrieveAgent: 'Unexpected error: Can not retrieve agent data. Please try again.',
                createAgent: 'Unexpected error: Can not intialize this agent. Please try again.',
                updateAgent: 'Unexpected error: Can not update agent. Please try again.'
            }
        }
    }
};
