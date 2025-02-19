export default {
    login: {
        button: {
            signIn: '使用 Azure AD 继续'
        },
        label: {
            signIn: '登录',
            description: '点击继续即表示您同意我们的',
            and: '和',
            terms: '服务条款',
            policy: '隐私政策',
            title: '访问被拒绝',
            descriptionDenied: '您无权访问此资源。请向管理员申请权限。',
            logOut: '退出登录',
            goBack: '返回上一页'
        },
        toast: {
            fail: {
                authentication: '认证失败',
                authenticationDescription: '请联系客户服务以添加您的账户'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: '新聊天',
                searchAgent: '搜索代理',
                logOut: '退出登录',
                openSidebar: '打开侧边栏',
                closeSidebar: '关闭侧边栏'
            },
            button: {
                cancel: '取消',
                logOut: '退出登录'
            },
            dialogue: {
                logOut: {
                    title: '您确定要退出登录吗？',
                    description: '此操作将返回登录界面，您可以随时重新登录。'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: '新聊天'
            },
            button: {
                unpinAgent: '从侧边栏隐藏',
                searchAgent: '搜索代理',
                renameConversation: '重命名',
                deleteConversation: '删除',
                cancel: '取消'
            },
            label: {
                loadingConversation: '正在加载对话',
                createdTime: {
                    today: '今天',
                    yesterday: '昨天',
                    thisWeek: '最近7天',
                    thisMonth: '最近30天'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: '您确定要删除此对话吗？',
                    description: '此操作将永久删除数据，您确定要继续吗？'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: '我的代理',
                createAgent: '创建代理',
                seeMore: '查看更多',
                newChat: '开始聊天',
                pinAgent: '固定到侧边栏',
                unpinAgent: '从侧边栏隐藏',
                copyLink: '复制链接'
            },
            label: {
                title: '代理',
                description: '搜索并创建自定义版本的代理，这些代理结合了指令、附加知识和多种技能。',
                searchAgent: '搜索代理',
                createdAgents: '我创建的',
                sharedAgents: '与我共享的',
                noAgent: '没有可用的代理',
                hasCreated: '{person} 创建的'
            }
        },
        myAgent: {
            tooltip: {
                draft: '草稿',
                published: '已发布'
            },
            button: {
                createAgent: '创建代理',
                seeMore: '查看更多',
                cancel: '取消',
                deleteAgent: '删除'
            },
            label: {
                title: '我的代理',
                createdByMe: '我创建的',
                sharedWithMe: '与我共享的',
                createAgent: '为特定目的定制代理版本',
                onlyMe: '仅限我',
                shared: '与具有访问权限的组和个人共享',
                noCreatedAgents: '尚未创建任何代理',
                noSharedAgents: '尚未与您共享任何代理',
                hasCreated: '{person} 创建的'
            },
            dialogue: {
                deleteAgent: {
                    title: '您确定要删除此代理吗？',
                    description: '此操作无法撤销。代理数据将被永久删除。'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: '新聊天',
                editAgent: '编辑代理',
                pinAgent: '固定到侧边栏',
                unpinAgent: '从侧边栏隐藏',
                copyLink: '复制链接'
            },
            tooltip: {
                uploadFile: '附加文件',
                uploadImage: '附加图片'
            },
            button: {
                rcm1: '日本位于亚洲的什么位置？',
                rcm2: '计算0到100之间的素数',
                rcm3: '邀请朋友参加婚礼的文字',
                downloadFile: '下载'
            },
            label: {
                greeting: '您好，今天我能为您提供什么帮助？',
                chatPlaceholder: '输入消息',
                agentChatPlaceholder: ' 正在等待您的消息',
                copyCode: '复制代码',
                copyCodeDone: '已复制！',
                hasCreated: '{person} 创建的'
            }
        },
        userSettings: {
            groupManage: '管理组',
            agentManage: '管理代理',
            settings: {
                title: '设置',
                general: '常规',
                language: '语言'
            },
            logOut: '退出登录'
        },
        toast: {
            success: {
                pinAgent: '代理已固定到侧边栏',
                unpinAgent: '代理已从侧边栏移除',
                linkCopy: '链接已复制到剪贴板',
                updateAgentAcl: '代理已与选定的人和组共享',
                deleteConversation: '成功删除',
                deleteConversationDescription: '对话已被删除'
            },
            fail: {
                generalErrorTitle: '错误',
                fileExtensionInvalid: '无效的扩展名',
                imageSizeInvalid: '图片大小超过20MB。',
                generalError: '发生了一些错误。请再试一次。',
                uploadFileFailSingle: '{fileName} 无法上传。请再试一次。',
                uploadFileFailPlural: '以下文件：{fileName} 无法上传。请再试一次。',
                pinAgent: '代理无法固定到侧边栏'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: '群组'
        },
        dialog: {
            createGroupDialogHeader: '创建新群组',
            createGroupNamePlaceholder: '群组名称',
            createGroupButtonLabel: '创建',
            createGroupNameEmpty: '群组名称是必填项'
        },
        // my agent tab in group
        myAgentsTab: {
            tabLabel: '我的Agent',
            searchAgentPlaceholder: '搜索Agent',
            tabTitle: '热门推荐',
            searchQueryDialog: {
                pinButtonTitle: '固定到侧边栏',
                copyButtonTitle: '复制链接',
                startChattingButtonTitle: '开始聊天',
                creatorLabel: '创建者'
            },
            myAgentDialog: {
                pinButtonTitle: '固定到侧边栏',
                copyButtonTitle: '复制链接',
                startChattingButtonTitle: '开始聊天'
            },
            groupAgentFavoriteTitle: '群组{groupName}的收藏',
            groupAgentFavoriteSubTitle: '群组{groupName}中最受欢迎的Agent'
        },
        // members tab in group
        membersTab: {
            tabLabel: '成员',
            groupMembersLabel: '群组成员',
            memberSingularLabel: '成员',
            memberPluralLabel: '成员',
            allMemberTab: '所有成员',
            searchMemberPlaceHolder: '通过电子邮件搜索成员',
            tableNameLabel: '姓名',
            tableEmailLabel: '电子邮件',
            tableRoleLabel: '角色',
            currentUserLabel: '我',
            tableOption: {
                changeMemberRoleLabel: '更改成员角色',
                removeMemberLabel: '从群组中移除{memberName}'
            },
            dialog: {
                addMemberDialogHeader: '添加更多成员到群组{groupName}',
                addMemberDialogDescription: '此群组是私密的。只有某些成员和角色可以使用此群组',
                searchMemberPlaceHolder: '通过电子邮件搜索成员',
                addMemberButtonLabel: '确认',
                leaveGroupDialogHeader: '您确定要离开此群组吗？',
                leaveGroupButtonLabel: '离开群组',
                needOneLeaderWarningText: '群组至少需要一个管理员',
                removeMemberDialogHeader: '移除成员',
                removeMemberDialogDescription: '您确定要将{memberName}从此群组中移除吗？',
                removeMemberButtonLabel: '移除',

                importCSV: '导入 CSV 文件',
                importCSVDes: "文件必须在每行包含电子邮件和角色。角色应为 'member'",
                showExampleButtonLabel: '显示示例',
                hideExampleButtonLabel: '隐藏示例',
                uploadCSVButtonLabel: '上传 CSV',
                emailRoleText: '电子邮件, 角色'
            }
        },
        // settings tab in group
        settingsTab: {
            tabLabel: '设置',
            updateGroupLabel: '更新群组',
            updateGroupSubLabel: '您可以更改群组名称',
            deleteGroupLabel: '删除群组',
            deleteGroupSubLabel: '您可以删除您的群组，但请注意此操作无法撤销',
            dialog: {
                editDialog: {
                    dialogHeader: '更改群组名称',
                    currentGroupNameLabel: '当前群组名称',
                    newGroupNameLabel: '新群组名称',
                    newGroupNamePlaceholder: '输入新群组名称',
                    updateButtonLabel: '更新'
                },
                deleteDialog: {
                    dialogHeader: '您确定要删除此群组吗？',
                    dialogDescription: '此操作将删除群组{groupName}',
                    deleteButtonLabel: '删除'
                },
                validError: {
                    newGroupNameEmpty: '新组名称不能为空'
                }
            }
        },
        button: {
            backToChat: '返回聊天',
            inviteMember: '邀请成员',
            seeMore: '查看更多',
            cancel: '取消'
        },
        tooltip: {
            createNewGroup: '创建新群组'
        },
        unavailableMessage: {
            noGroupMessage: '没有可用的群组',
            noAgentMessage: '没有可用的Agent',
            noSettingAccessMessage: '您需要是管理员才能访问此群组的设置',
            noMemberAvailable: '没有可用的成员'
        },
        toast: {
            success: {
                deleteGroup: '群组删除成功'
            },
            fail: {
                generalErrorTitle: '错误',
                somethingWentWrong: '发生错误，请重试',
                createGroupFail: '创建群组失败',
                editGroupFail: '编辑群组失败',
                deleteGroupFail: '群组删除失败',
                leaveGroupFail: '离开群组失败'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: '新建Agent',
            activeStatusLive: '在线',
            activeStatusDraft: '草稿',
            activeStatusPublishOnlyMe: '仅限我',
            activeStatusPublishAnyoneWithPermission: '有权限的任何人或群组',
            activeStatusPublishEveryone: '所有人'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: '固定到侧边栏',
                unpinAgentButtonLabel: '取消固定',
                deleteAgentButtonLabel: '删除Agent'
            },
            deleteAgent: {
                deleteAgentDialogHeader: '删除Agent',
                deleteAgentDialogDescription: '您确定要删除此Agent吗？此操作无法撤销'
            },
            share: {
                shareAgentDialogHeader: '分享我的Agent',
                shareAgentToPeopleButtonLabel: '分享给个人',
                shareAgentGeneralAccess: '通用访问权限',
                shareStatusRestrictedLabel: '受限',
                shareStatusRestrictedSubLabel: '只有具有访问权限的个人和群组可以通过链接打开',
                shareStatusAnyoneLabel: '任何人',
                shareStatusAnyoneSubLabel: '公司内任何人拥有链接都可以查看',
                peopleTab: {
                    addPeoplePlaceholder: '添加个人',
                    peopleListLabel: '人员列表',
                    option: {
                        canChatLabel: '可以聊天',
                        canChatSubLabel: '用户可以与此Agent聊天',
                        canEditLabel: '可以编辑Agent内容',
                        canEditSubLabel: '查看Agent内容、复制Agent、聊天',
                        removeGroupLabel: '移除群组'
                    }
                },
                shareAgentToGroupsButtonLabel: '分享给群组',
                groupsTab: {
                    addGroupPlaceholder: '添加群组',
                    groupListLabel: '群组列表',
                    option: {
                        canChatLabel: '可以聊天',
                        canChatSubLabel: '用户可以与此Agent聊天',
                        canEditLabel: '可以编辑Agent内容',
                        canEditSubLabel: '查看Agent内容、复制Agent、聊天',
                        removeGroupLabel: '移除群组'
                    }
                }
            },
            update: {
                updateDialogHeader: 'Agent已更新',
                agentCreator: '已创建',
                accessLabel: '访问权限',
                updateStatusOnlyMe: '仅限我',
                updateStatusAnyoneWithPermission: '有权限的任何人或群组',
                updateStatusEveryone: '所有人',
                pinButtonLabel: '固定到侧边栏',
                startConversationLabel: '开始对话'
            }
        },

        nameLabel: '名称',
        namePlaceholder: '为您的Agent命名',
        descriptionLabel: '描述',
        descriptionPlaceholder: '添加一个关于此Agent功能的简短描述',
        instructionLabel: '指令',
        instructionPlaceholder: '此Agent的功能是什么？它的行为如何？它应该避免做什么？',
        knowledgeLabel: '知识',
        knowledgeSubLabel:
            '如果您在“知识”中上传文件，与您的Agent的对话可能会包含文件内容。文件可以被下载',
        savingDraftLabel: '正在保存草稿',

        validError: {
            nameTooLong: 'Agent的名称必须少于或等于50个字符。',
            desTooLong: 'Agent的描述必须少于或等于300个字符。',
            insTooLong: 'Agent的指令必须少于或等于8000个字符。'
        },

        button: {
            shareButtonLabel: '分享',
            updateButtonLabel: '更新',
            publishButtonLabel: '发布',
            copyLinkButtonLabel: '复制链接',
            saveButtonLabel: '保存',
            uploadFileButtonLabel: '上传文件',
            cancelButtonLabel: '取消',
            deleteButtonLabel: '删除'
        },
        toast: {
            success: {
                createAgent: 'Agent已成功创建',
                updateAgent: 'Agent已成功更新',
                deleteAgent: 'Agent已成功删除'
            },
            fail: {
                publishAgent: '意外错误：无法发布此草稿Agent。请重试',
                retrieveAgent: '意外错误：无法检索Agent数据。请重试。',
                createAgent: '意外错误：无法初始化此Agent。请重试。',
                updateAgent: '意外错误：无法更新Agent。请重试。'
            }
        }
    }
};
