export default {
    login: {
        button: {
            signIn: '繼續使用 Azure AD 登入'
        },
        label: {
            signIn: '登入',
            description: '點擊繼續，即表示您同意我們的',
            and: '與',
            terms: '服務條款',
            policy: '隱私政策',
            title: '存取被拒',
            descriptionDenied: '您無權存取此資源。請向管理員申請權限。',
            logOut: '登出',
            goBack: '返回上一頁'
        },
        toast: {
            fail: {
                authentication: '驗證失敗',
                authenticationDescription: '請聯絡客服以添加您的帳戶'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: '新聊天',
                searchAgent: '搜尋代理',
                logOut: '登出',
                openSidebar: '打開側邊欄',
                closeSidebar: '關閉側邊欄'
            },
            button: {
                cancel: '取消',
                logOut: '登出'
            },
            dialogue: {
                logOut: {
                    title: '您確定要登出嗎？',
                    description: '此操作將使您返回登入畫面，您可以隨時重新登入。'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: '新聊天'
            },
            button: {
                unpinAgent: '從側邊欄隱藏',
                searchAgent: '搜尋代理',
                renameConversation: '重新命名',
                deleteConversation: '刪除',
                cancel: '取消'
            },
            label: {
                loadingConversation: '正在加載對話',
                createdTime: {
                    today: '今天',
                    yesterday: '昨天',
                    thisWeek: '最近7天',
                    thisMonth: '最近30天'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: '您確定要刪除此對話嗎？',
                    description: '您確定要刪除此對話嗎？此操作將永久刪除數據。'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: '我的代理',
                createAgent: '創建代理',
                seeMore: '查看更多',
                newChat: '開始聊天',
                pinAgent: '固定到側邊欄',
                unpinAgent: '從側邊欄隱藏',
                copyLink: '複製連結'
            },
            label: {
                title: '代理',
                description: '搜尋並創建結合指令、額外知識和多種技能的自訂代理版本。',
                searchAgent: '搜尋代理',
                createdAgents: '我創建的',
                sharedAgents: '與我共享的',
                noAgent: '無可用代理',
                hasCreated: '由 {person} 創建'
            }
        },
        myAgent: {
            tooltip: {
                draft: '草稿',
                published: '在線'
            },
            button: {
                createAgent: '創建代理',
                seeMore: '查看更多',
                cancel: '取消',
                deleteAgent: '刪除'
            },
            label: {
                title: '我的代理',
                createdByMe: '我創建的',
                sharedWithMe: '與我共享的',
                createAgent: '為特定目的自定義代理版本',
                onlyMe: '僅限我',
                shared: '與具有存取權的群組和個人共享',
                noCreatedAgents: '尚未創建任何代理',
                noSharedAgents: '尚未與您共享任何代理',
                hasCreated: '由 {person} 創建'
            },
            dialogue: {
                deleteAgent: {
                    title: '您確定要刪除此代理嗎？',
                    description: '此操作無法撤銷。這將永久刪除代理數據。'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: '新聊天',
                editAgent: '編輯代理',
                pinAgent: '固定到側邊欄',
                unpinAgent: '從側邊欄隱藏',
                copyLink: '複製連結'
            },
            tooltip: {
                uploadFile: '附加文件',
                uploadImage: '附加圖片'
            },
            button: {
                rcm1: '日本位於亞洲的哪裡？',
                rcm2: '計算0到100之間的質數數量',
                rcm3: '邀請朋友參加婚禮的文本',
                downloadFile: '下載'
            },
            label: {
                greeting: '您好，我今天能如何協助您？',
                chatPlaceholder: '輸入訊息',
                agentChatPlaceholder: '正在等待您的訊息',
                copyCode: '複製代碼',
                copyCodeDone: '已複製！',
                hasCreated: '由 {person} 創建'
            }
        },
        userSettings: {
            groupManage: '管理群組',
            agentManage: '管理代理',
            settings: {
                title: '設定',
                general: '一般',
                language: '語言'
            },
            logOut: '登出'
        },
        toast: {
            success: {
                pinAgent: '代理已固定到側邊欄',
                unpinAgent: '代理已從側邊欄隱藏',
                linkCopy: '連結已複製到剪貼簿',
                updateAgentAcl: '代理已共享給選定的群組和個人',
                deleteConversation: '刪除成功',
                deleteConversationDescription: '對話已刪除'
            },
            fail: {
                generalErrorTitle: '錯誤',
                fileExtensionInvalid: '無效的擴展名',
                imageSizeInvalid: '图片大小超过20MB。',
                generalError: '出現問題。請再試一次。',
                uploadFileFailSingle: '{fileName} 無法上傳。請再試一次。',
                uploadFileFailPlural: '以下文件：{fileName} 無法上傳。請再試一次。',
                pinAgent: '代理無法固定到側邊欄'
            }
        }
    },
    group: {
        sidebar: {
            groupLabel: '群組'
        },
        dialog: {
            createGroupDialogHeader: '創建新群組',
            createGroupNamePlaceholder: '群組名稱',
            createGroupButtonLabel: '創建',
            createGroupNameEmpty: '群組名稱為必填項'
        },
        myAgentsTab: {
            tabLabel: '我的代理',
            searchAgentPlaceholder: '搜尋代理',
            tabTitle: '精選',
            searchQueryDialog: {
                pinButtonTitle: '固定到側邊欄',
                copyButtonTitle: '複製連結',
                startChattingButtonTitle: '開始聊天',
                creatorLabel: '創建'
            },
            myAgentDialog: {
                pinButtonTitle: '固定到側邊欄',
                copyButtonTitle: '複製連結',
                startChattingButtonTitle: '開始聊天'
            },
            groupAgentFavoriteTitle: '群組 {groupName} 的最愛',
            groupAgentFavoriteSubTitle: '群組 {groupName} 最受歡迎的代理'
        },
        membersTab: {
            tabLabel: '成員',
            groupMembersLabel: '群組成員',
            memberSingularLabel: '成員',
            memberPluralLabel: '成員',
            allMemberTab: '所有成員',
            searchMemberPlaceHolder: '通過電子郵件搜尋成員',
            tableNameLabel: '名稱',
            tableEmailLabel: '電子郵件',
            tableRoleLabel: '角色',
            currentUserLabel: '我',
            tableOption: {
                changeMemberRoleLabel: '更改成員角色',
                removeMemberLabel: '將 {memberName} 移出群組'
            },
            dialog: {
                addMemberDialogHeader: '添加更多成員到群組 {groupName}',
                addMemberDialogDescription: '此群組為私有。只有某些成員和角色可以使用此群組',
                searchMemberPlaceHolder: '通過電子郵件搜尋成員',
                addMemberButtonLabel: '確認',
                leaveGroupDialogHeader: '您確定要離開此群組嗎？',
                leaveGroupButtonLabel: '離開群組',
                needOneLeaderWarningText: '群組需要至少一位管理員',
                removeMemberDialogHeader: '移除成員',
                removeMemberDialogDescription: '您確定要將 {memberName} 從此群組移除嗎？',
                removeMemberButtonLabel: '移除',

                importCSV: '匯入 CSV 檔案',
                importCSVDes: "檔案每行必須包含電子郵件和角色。角色應為 'member'",
                showExampleButtonLabel: '顯示範例',
                hideExampleButtonLabel: '隱藏範例',
                uploadCSVButtonLabel: '上傳 CSV',
                emailRoleText: '電子郵件, 角色'
            }
        },
        settingsTab: {
            tabLabel: '設定',
            updateGroupLabel: '更新群組',
            updateGroupSubLabel: '您可以更改群組名稱',
            deleteGroupLabel: '刪除群組',
            deleteGroupSubLabel: '您可以刪除群組，但請注意此操作無法撤銷',
            dialog: {
                editDialog: {
                    dialogHeader: '更改群組名稱',
                    currentGroupNameLabel: '當前群組名稱',
                    newGroupNameLabel: '新群組名稱',
                    newGroupNamePlaceholder: '輸入新群組名稱',
                    updateButtonLabel: '更新'
                },
                deleteDialog: {
                    dialogHeader: '您確定要刪除此群組嗎？',
                    dialogDescription: '此操作將刪除群組 {groupName}',
                    deleteButtonLabel: '刪除'
                },
                validError: {
                    newGroupNameEmpty: '新群組名稱不能為空'
                }
            }
        },
        button: {
            backToChat: '返回聊天',
            inviteMember: '邀請成員',
            seeMore: '查看更多',
            cancel: '取消'
        },
        tooltip: {
            createNewGroup: '創建新群組'
        },
        unavailableMessage: {
            noGroupMessage: '無可用群組',
            noAgentMessage: '無可用代理',
            noSettingAccessMessage: '您需要是管理員才能訪問此群組的設定',
            noMemberAvailable: '沒有可用的成員'
        },
        toast: {
            success: {
                deleteGroup: '群組刪除成功'
            },
            fail: {
                generalErrorTitle: '錯誤',
                somethingWentWrong: '出現問題，請重試',
                createGroupFail: '創建群組失敗',
                editGroupFail: '編輯群組失敗',
                deleteGroupFail: '群組刪除失敗',
                leaveGroupFail: '離開群組失敗'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: '新代理',
            activeStatusLive: '在線',
            activeStatusDraft: '草稿',
            activeStatusPublishOnlyMe: '僅限我',
            activeStatusPublishAnyoneWithPermission: '具有權限的任何人或群組',
            activeStatusPublishEveryone: '所有人'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: '固定到側邊欄',
                unpinAgentButtonLabel: '取消固定',
                deleteAgentButtonLabel: '刪除代理'
            },
            deleteAgent: {
                deleteAgentDialogHeader: '刪除代理',
                deleteAgentDialogDescription: '您確定要刪除此代理嗎？此操作無法撤銷'
            },
            share: {
                shareAgentDialogHeader: '共享我的代理',
                shareAgentToPeopleButtonLabel: '共享給個人',
                shareAgentGeneralAccess: '一般存取',
                shareStatusRestrictedLabel: '受限',
                shareStatusRestrictedSubLabel: '只有具有存取權的人和群組可以通過連結打開',
                shareStatusAnyoneLabel: '任何人',
                shareStatusAnyoneSubLabel: '公司內具有連結的任何人都可以查看',
                peopleTab: {
                    addPeoplePlaceholder: '添加人員',
                    peopleListLabel: '人員清單',
                    option: {
                        canChatLabel: '可以聊天',
                        canChatSubLabel: '用戶可以與此代理聊天',
                        canEditLabel: '可以編輯代理內容',
                        canEditSubLabel: '顯示代理內容、複製代理、聊天',
                        removeGroupLabel: '移除群組'
                    }
                },
                shareAgentToGroupsButtonLabel: '共享給群組',
                groupsTab: {
                    addGroupPlaceholder: '添加群組',
                    groupListLabel: '群組清單',
                    option: {
                        canChatLabel: '可以聊天',
                        canChatSubLabel: '用戶可以與此代理聊天',
                        canEditLabel: '可以編輯代理內容',
                        canEditSubLabel: '顯示代理內容、複製代理、聊天',
                        removeGroupLabel: '移除群組'
                    }
                }
            },
            update: {
                updateDialogHeader: '代理已更新',
                agentCreator: '已創建',
                accessLabel: '存取',
                updateStatusOnlyMe: '僅限我',
                updateStatusAnyoneWithPermission: '具有權限的任何人或群組',
                updateStatusEveryone: '所有人',
                pinButtonLabel: '固定到側邊欄',
                startConversationLabel: '開始對話'
            }
        },

        nameLabel: '名稱',
        namePlaceholder: '命名您的代理',
        descriptionLabel: '描述',
        descriptionPlaceholder: '添加關於此代理功能的簡短描述',
        instructionLabel: '指令',
        instructionPlaceholder: '此代理的功能是什麼？行為如何？應避免做什麼？',
        knowledgeLabel: '知識',
        knowledgeSubLabel: '如果您在知識下上傳文件，與代理的對話可能會包含文件內容。文件可以下載',
        savingDraftLabel: '保存草稿',

        validError: {
            nameTooLong: 'Agent的名稱必須少於或等於50個字符。',
            desTooLong: 'Agent的描述必須少於或等於300個字符。',
            insTooLong: 'Agent的指令必須少於或等於8000個字符。'
        },

        button: {
            shareButtonLabel: '共享',
            updateButtonLabel: '更新',
            publishButtonLabel: '發布',
            copyLinkButtonLabel: '複製連結',
            saveButtonLabel: '保存',
            uploadFileButtonLabel: '上傳文件',
            cancelButtonLabel: '取消',
            deleteButtonLabel: '刪除'
        },
        toast: {
            success: {
                createAgent: '代理已成功創建',
                updateAgent: '代理已成功更新',
                deleteAgent: '代理已成功刪除'
            },
            fail: {
                publishAgent: '意外錯誤：無法發布此草稿代理。請再試一次',
                retrieveAgent: '意外錯誤：無法檢索代理數據。請再試一次。',
                createAgent: '意外錯誤：無法初始化此代理。請再試一次。',
                updateAgent: '意外錯誤：無法更新代理。請再試一次。'
            }
        }
    }
};
