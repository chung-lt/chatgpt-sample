export default {
    login: {
        button: {
            signIn: 'Azure ADで続行'
        },
        label: {
            signIn: 'サインイン',
            description: '続行をクリックすることで、以下に同意したことになります。',
            and: 'と',
            terms: '利用規約',
            policy: 'プライバシーポリシー',
            title: 'アクセス拒否',
            descriptionDenied:
                ' このリソースにアクセスする権限がありません。管理者に許可を求めてください。',
            logOut: 'ログアウト',
            goBack: '前のページに戻る'
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
                newChat: '新しいチャット',
                searchAgent: 'マイエージェントを探す',
                logOut: 'ログアウト',
                openSidebar: 'サイドバーを開く',
                closeSidebar: 'サイドバーを閉じる'
            },
            button: {
                cancel: 'キャンセル',
                logOut: 'ログアウト'
            },
            dialogue: {
                logOut: {
                    title: 'ログアウトしてもよろしいですか？',
                    description:
                        'この操作によりログイン画面に戻り、いつでも再度ログインして使用することができます。'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: '新しいチャット'
            },
            button: {
                unpinAgent: 'サイドバーに非表示',
                searchAgent: 'マイエージェントを探す',
                renameConversation: ' 名前を変更',
                deleteConversation: '削除',
                cancel: 'キャンセル'
            },
            label: {
                loadingConversation: '会話を読み込んでいます',
                createdTime: {
                    today: '今日',
                    yesterday: '昨日',
                    thisWeek: '過去7日間',
                    thisMonth: '過去30日間'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'このチャットを削除してもよろしいですか？',
                    description:
                        'このチャットを削除してもよろしいですか？ これにより、データが永久に削除されます。'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'マイエージェント',
                createAgent: 'エージェントを作成する',
                seeMore: 'もっと見る',
                newChat: 'チャットを開始する',
                pinAgent: 'サイドバーに表示',
                unpinAgent: 'サイドバーに非表示',
                copyLink: 'リンクをコピーする'
            },
            label: {
                title: 'エージェント',
                description:
                    '指示、追加の知識、複数のスキルを組み合わせたエージェントのカスタムバージョンの検索・作成を行います。',
                searchAgent: 'エージェントを検索する',
                createdAgents: '自分が作成',
                sharedAgents: '自分と共有',
                noAgent: 'エージェントがございません',
                hasCreated: '{person}が作成'
            }
        },
        myAgent: {
            tooltip: {
                draft: '下書き',
                published: 'ライブ'
            },
            button: {
                createAgent: 'エージェントを作成する',
                seeMore: 'もっと見る',
                cancel: 'キャンセル',
                deleteAgent: '実行する'
            },
            label: {
                title: 'マイエージェント',
                createdByMe: '自分が作成',
                sharedWithMe: '自分と共有',
                createAgent: '目的に応じてエージェントのバージョンをカスタマイズする',
                onlyMe: '自分だけ',
                shared: 'アクセス権を受け取った人とグループ',
                noCreatedAgents: 'あなたが作成されているエージェントはまだありません',
                noSharedAgents: 'あなたと共有されているエージェントはまだありません',
                hasCreated: '{person}が作成'
            },
            dialogue: {
                deleteAgent: {
                    title: '間違いありませんか？',
                    description:
                        'この操作は取り消すことができません。これにより、エージェントのデータが永久に削除されます。'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: '新しいチャット',
                editAgent: 'エージェントを編集',
                pinAgent: 'サイドバーに表示',
                unpinAgent: 'サイドバーに非表示',
                copyLink: 'リンクをコピーする'
            },
            tooltip: {
                uploadFile: 'ファイルを添付する',
                uploadImage: '画像を添付する'
            },
            button: {
                rcm1: 'アジアの中に日本の位置は？',
                rcm2: '0から100までの素数を数えて',
                rcm3: '友人を結婚式に招待するテキスト',
                downloadFile: 'ダウンロード'
            },
            label: {
                greeting: 'こんにちは、本日も役に立てればと思います',
                chatPlaceholder: 'メッセージを送信する',
                agentChatPlaceholder: 'にメッセージを送信する',
                copyCode: 'コードをコピー',
                copyCodeDone: 'コピーしました!',
                hasCreated: '{person}が作成'
            }
        },
        userSettings: {
            groupManage: 'グループを管理する',
            agentManage: 'エージェントを管理する',
            settings: {
                title: '設定',
                general: '一般',
                language: '言語'
            },
            logOut: 'ログアウト'
        },
        toast: {
            success: {
                pinAgent: 'エージェントがサイドバーに固定されました',
                unpinAgent: 'エージェントがサイドバーから固定解除されました',
                linkCopy: 'リンクがクリップボードにコピーされました',
                updateAgentAcl: 'エージェントが選択した人やグループと共有されました',
                deleteConversation: '削除に成功しました',
                deleteConversationDescription: '会話が削除されました'
            },
            fail: {
                generalErrorTitle: 'エラー',
                fileExtensionInvalid: '無効な拡張子',
                imageSizeInvalid: '写真のサイズが20MBを超えています。',
                generalError: '問題が発生しました。もう一度お試しください。',
                uploadFileFailSingle:
                    '{fileName} をアップロードできませんでした。もう一度お試しください。',
                uploadFileFailPlural:
                    '次のファイル: {fileName} をアップロードできませんでした。もう一度お試しください。',
                pinAgent: 'エージェントをサイドバーに固定できませんでした'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: 'グループ'
        },
        dialog: {
            createGroupDialogHeader: '新しいグループを作成する',
            createGroupNamePlaceholder: 'グループ名',
            createGroupButtonLabel: '実行する',
            createGroupNameEmpty: 'グループ名は必須です'
        },
        // my agent tab in group
        myAgentsTab: {
            tabLabel: 'マイエージェント',
            searchAgentPlaceholder: 'エージェントを検索する',
            tabTitle: '厳選',
            searchQueryDialog: {
                pinButtonTitle: 'サイドバーに非表示',
                copyButtonTitle: 'リンクをコピーする',
                startChattingButtonTitle: ' チャットを開始する',
                creatorLabel: 'が作りました'
            },
            myAgentDialog: {
                pinButtonTitle: 'サイドバーに非表示',
                copyButtonTitle: 'リンクをコピーする',
                startChattingButtonTitle: ' チャットを開始する'
            },
            groupAgentFavoriteTitle: 'グループ{groupName}で人気',
            groupAgentFavoriteSubTitle: 'グループ{groupName}で最も人気のGPT'
        },
        // members tab in group
        membersTab: {
            tabLabel: 'メンバー',
            groupMembersLabel: 'チームメンバー',
            memberSingularLabel: 'メンバー',
            memberPluralLabel: 'メンバー',
            allMemberTab: '全てのメンバー',
            searchMemberPlaceHolder: 'メール検索する',
            tableNameLabel: '名前',
            tableEmailLabel: 'メール',
            tableRoleLabel: 'ロール',
            currentUserLabel: '自分',
            tableOption: {
                changeMemberRoleLabel: 'グループ内のメンバーのロールを変更する',
                removeMemberLabel: '{memberName}をグループから削除します'
            },
            dialog: {
                addMemberDialogHeader: 'グループ{groupName}に招待する',
                addMemberDialogDescription:
                    'このグループは非公開です。特定のメンバーとロールだけがこのグループを使用できます',
                searchMemberPlaceHolder: 'ユーザーのメールを検索する',
                addMemberButtonLabel: '実行する',
                leaveGroupDialogHeader: 'グループを退出してもよろしいですか ?',
                leaveGroupButtonLabel: 'グループを退出する',
                needOneLeaderWarningText: 'グループには少なくとも 1 人の管理者が必要です',
                removeMemberDialogHeader: 'メンバーを削除',
                removeMemberDialogDescription:
                    'このグループから {memberName} を削除してもよろしいですか?',
                removeMemberButtonLabel: '実行する',

                importCSV: 'CSVファイルをインポート',
                importCSVDes:
                    "ファイルには各行にメールアドレスと役割を含める必要があります。役割は 'member' である必要があります",
                showExampleButtonLabel: 'サンプルを表示',
                hideExampleButtonLabel: 'サンプルを非表示',
                uploadCSVButtonLabel: 'CSVをアップロード',
                emailRoleText: 'メール, ロール'
            }
        },
        // settings tab in group
        settingsTab: {
            tabLabel: '設定',
            updateGroupLabel: 'グループをアップデート',
            updateGroupSubLabel: 'グループ名を変更することができます',
            deleteGroupLabel: 'グループの削除',
            deleteGroupSubLabel:
                'グループを削除することができますが、この操作は元に戻せないことにご注意ください',
            dialog: {
                editDialog: {
                    dialogHeader: 'グループ名を変更する',
                    currentGroupNameLabel: '現在のグループ名',
                    newGroupNameLabel: '新しいグループ名',
                    newGroupNamePlaceholder: '新しいグループ名を入力してください',
                    updateButtonLabel: '更新する'
                },
                deleteDialog: {
                    dialogHeader: 'このグループを削除してもよろしいですか ?',
                    dialogDescription: 'この操作によりグループ{groupName}が削除されます',
                    deleteButtonLabel: '削除する'
                },
                validError: {
                    newGroupNameEmpty: '新しいグループ名を空にすることはできません'
                }
            }
        },
        button: {
            backToChat: 'チャットに戻る',
            inviteMember: 'メンバーを招待する',
            seeMore: 'もっと見る',
            leaveGroup: 'グループを退出する',
            cancel: 'キャンセル'
        },
        tooltip: {
            createNewGroup: '新しいグループを作成'
        },
        unavailableMessage: {
            noGroupMessage: '作成されたグループがございません',
            noAgentMessage: 'エージェントがございません',
            noSettingAccessMessage:
                'このグループの設定にアクセスするには、ADMINである必要があります。',
            noMemberAvailable: '利用可能なメンバーがいません'
        },
        toast: {
            success: {
                deleteGroup: 'グループが正常に削除されました'
            },
            fail: {
                generalErrorTitle: 'エーラー',
                somethingWentWrong: '問題が発生しました。もう一度お試しください',
                createGroupFail: 'グループの作成に失敗する',
                editGroupFail: 'グループの編集が失敗する',
                deleteGroupFail: 'グループの削除に失敗しました',
                leaveGroupFail: 'グループからの脱退に失敗しました'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: '新しいエージェント',
            activeStatusLive: 'ライブ',
            activeStatusDraft: '下書き',
            activeStatusPublishOnlyMe: '自分のみ',
            activeStatusPublishAnyoneWithPermission: '権限を持つ個人またはグループ',
            activeStatusPublishEveryone: '全員'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'サイドバーにピンする',
                unpinAgentButtonLabel: 'ピン留め解除',
                deleteAgentButtonLabel: 'エージェントを削除'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'エージェントを削除',
                deleteAgentDialogDescription:
                    'このエージェントを削除してもよろしいですか？この操作は元に戻せません'
            },
            share: {
                shareAgentDialogHeader: 'エージェントを共有する',
                shareAgentToPeopleButtonLabel: '人に共有',
                shareAgentGeneralAccess: '一般的なアクセス',
                shareStatusRestrictedLabel: '制限付き',
                shareStatusRestrictedSubLabel: 'アクセス権のある人とグループのみがリンクで開けます',
                shareStatusAnyoneLabel: '全員',
                shareStatusAnyoneSubLabel: 'リンクを持つ会社内の全員が閲覧可能です',
                peopleTab: {
                    addPeoplePlaceholder: '人を追加',
                    peopleListLabel: '人のリスト',
                    option: {
                        canChatLabel: 'チャット可能',
                        canChatSubLabel: 'ユーザーはこのエージェントとチャットできます',
                        canEditLabel: 'エージェントの内容を編集可能',
                        canEditSubLabel: 'エージェントの内容を表示、複製、チャット可能',
                        removeGroupLabel: 'グループを削除'
                    }
                },
                shareAgentToGroupsButtonLabel: 'グループに共有',
                groupsTab: {
                    addGroupPlaceholder: 'グループを追加',
                    groupListLabel: 'グループのリスト',
                    option: {
                        canChatLabel: 'チャット可能',
                        canChatSubLabel: 'ユーザーはこのエージェントとチャットできます',
                        canEditLabel: 'エージェントの内容を編集可能',
                        canEditSubLabel: 'エージェントの内容を表示、複製、チャット可能',
                        removeGroupLabel: 'グループを削除'
                    }
                }
            },
            update: {
                updateDialogHeader: 'エージェントが更新されました',
                agentCreator: 'が作成しました',
                accessLabel: 'アクセス',
                updateStatusOnlyMe: '自分のみ',
                updateStatusAnyoneWithPermission: 'アクセス権を受け取った人とグループ',
                updateStatusEveryone: '誰でも',
                pinButtonLabel: 'サイドバーにピン留め',
                startConversationLabel: '会話を開始'
            }
        },

        nameLabel: '名前',
        namePlaceholder: 'エージェントに名前を付ける',
        descriptionLabel: '説明',
        descriptionPlaceholder: 'このエージェントが何をするかについて短い説明を追加',
        instructionLabel: '指示',
        instructionPlaceholder:
            'このエージェントは何をしますか？どのように振る舞いますか？避けるべきことは？',
        knowledgeLabel: '知識',
        knowledgeSubLabel:
            '知識セクションにファイルをアップロードすると、エージェントとの会話にファイル内容が含まれることがあります。ファイルはダウンロード可能です',
        savingDraftLabel: '下書きを保存しています',

        validError: {
            nameTooLong: 'エージェントの名前は50文字以下である必要があります。',
            desTooLong: 'エージェントの説明は300文字以下である必要があります。',
            insTooLong: 'エージェントの指示は8000文字以下である必要があります。'
        },

        button: {
            shareButtonLabel: '共有',
            updateButtonLabel: '更新',
            publishButtonLabel: '公開',
            copyLinkButtonLabel: 'リンクをコピー',
            saveButtonLabel: '保存',
            uploadFileButtonLabel: 'ファイルをアップロード',
            cancelButtonLabel: 'キャンセル',
            deleteButtonLabel: '削除'
        },
        toast: {
            success: {
                createAgent: 'エージェントが正常に作成されました',
                updateAgent: 'エージェントが正常に更新されました',
                deleteAgent: 'エージェントが正常に削除されました'
            },
            fail: {
                publishAgent:
                    '予期しないエラー: このドラフトエージェントを公開できません。もう一度お試しください。',
                retrieveAgent:
                    '予期しないエラー: エージェントデータを取得できません。もう一度お試しください。',
                createAgent:
                    '予期しないエラー: このエージェントを初期化できません。もう一度お試しください。',
                updateAgent:
                    '予期しないエラー: エージェントを更新できません。もう一度お試しください。'
            }
        }
    }
};
