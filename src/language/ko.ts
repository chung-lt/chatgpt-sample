export default {
    login: {
        button: {
            signIn: 'Azure AD로 계속하기'
        },
        label: {
            signIn: '로그인',
            description: '계속 진행하면 귀하는 당사의',
            and: '및',
            terms: '이용 약관',
            policy: '개인정보 보호정책',
            title: '접근 거부됨',
            descriptionDenied:
                '이 리소스에 접근할 권한이 없습니다. 관리자로부터 권한을 요청하십시오.',
            logOut: '로그아웃',
            goBack: '이전 페이지로 돌아가기'
        },
        toast: {
            fail: {
                authentication: '인증 실패',
                authenticationDescription: '계정을 추가하려면 고객 서비스에 문의하십시오.'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: '새 채팅',
                searchAgent: '에이전트 검색',
                logOut: '로그아웃',
                openSidebar: '사이드바 열기',
                closeSidebar: '사이드바 닫기'
            },
            button: {
                cancel: '취소',
                logOut: '로그아웃'
            },
            dialogue: {
                logOut: {
                    title: '로그아웃하시겠습니까?',
                    description:
                        '이 작업을 수행하면 로그인 화면으로 돌아가며, 언제든지 다시 로그인할 수 있습니다.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: '새 채팅'
            },
            button: {
                unpinAgent: '사이드바에서 숨기기',
                searchAgent: '에이전트 검색',
                renameConversation: '이름 변경',
                deleteConversation: '삭제',
                cancel: '취소'
            },
            label: {
                loadingConversation: '대화 로드 중',
                createdTime: {
                    today: '오늘',
                    yesterday: '어제',
                    thisWeek: '지난 7일',
                    thisMonth: '지난 30일'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: '이 대화를 삭제하시겠습니까?',
                    description:
                        '이 대화를 삭제하시겠습니까? 이 작업은 데이터를 영구적으로 삭제합니다.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: '내 에이전트',
                createAgent: '에이전트 생성',
                seeMore: '더 보기',
                newChat: '채팅 시작',
                pinAgent: '사이드바에 고정',
                unpinAgent: '사이드바에서 숨기기',
                copyLink: '링크 복사'
            },
            label: {
                title: '에이전트',
                description:
                    '지침, 추가 지식, 여러 기술을 결합하여 사용자 정의된 에이전트 버전을 검색하고 생성합니다.',
                searchAgent: '에이전트 검색',
                createdAgents: '내가 생성한',
                sharedAgents: '공유된',
                noAgent: '사용 가능한 에이전트 없음',
                hasCreated: '{person}이(가) 생성'
            }
        },
        myAgent: {
            tooltip: {
                draft: '초안',
                published: '라이브'
            },
            button: {
                createAgent: '에이전트 생성',
                seeMore: '더 보기',
                cancel: '취소',
                deleteAgent: '삭제'
            },
            label: {
                title: '내 에이전트',
                createdByMe: '내가 생성한',
                sharedWithMe: '공유된',
                createAgent: '특정 목적을 위해 에이전트 버전 사용자 정의',
                onlyMe: '나만',
                shared: '권한이 있는 그룹 및 개인과 공유됨',
                noCreatedAgents: '생성된 에이전트가 없습니다.',
                noSharedAgents: '공유된 에이전트가 없습니다.',
                hasCreated: '{person}이(가) 생성'
            },
            dialogue: {
                deleteAgent: {
                    title: '이 에이전트를 삭제하시겠습니까?',
                    description:
                        '이 작업은 되돌릴 수 없습니다. 에이전트 데이터를 영구적으로 삭제합니다.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: '새 채팅',
                editAgent: '에이전트 수정',
                pinAgent: '사이드바에 고정',
                unpinAgent: '사이드바에서 숨기기',
                copyLink: '링크 복사'
            },
            tooltip: {
                uploadFile: '파일 첨부',
                uploadImage: '이미지 첨부'
            },
            button: {
                rcm1: '일본은 아시아에서 어디에 있습니까?',
                rcm2: '0에서 100까지 소수를 세기',
                rcm3: '결혼식에 친구를 초대하는 초대장 작성',
                downloadFile: '다운로드'
            },
            label: {
                greeting: '안녕하세요, 오늘 어떤 도움을 드릴까요?',
                chatPlaceholder: '메시지를 입력하세요',
                agentChatPlaceholder: '이(가) 메시지를 기다리고 있습니다.',
                copyCode: '코드 복사',
                copyCodeDone: '복사 완료!',
                hasCreated: '{person}이(가) 생성'
            }
        },
        userSettings: {
            groupManage: '그룹 관리',
            agentManage: '에이전트 관리',
            settings: {
                title: '설정',
                general: '일반',
                language: '언어'
            },
            logOut: '로그아웃'
        },
        toast: {
            success: {
                pinAgent: '에이전트가 사이드바에 고정되었습니다.',
                unpinAgent: '에이전트가 사이드바에서 숨겨졌습니다.',
                linkCopy: '링크가 클립보드에 복사되었습니다.',
                updateAgentAcl: '에이전트가 선택된 사람 및 그룹과 공유되었습니다.',
                deleteConversation: '삭제 성공',
                deleteConversationDescription: '대화가 삭제되었습니다.'
            },
            fail: {
                generalErrorTitle: '오류',
                fileExtensionInvalid: '잘못된 확장자',
                imageSizeInvalid: '이미지 크기가 20MB를 초과합니다.',
                generalError: '문제가 발생했습니다. 다시 시도해주세요.',
                uploadFileFailSingle: '{fileName}을(를) 업로드할 수 없습니다. 다시 시도해주세요.',
                uploadFileFailPlural:
                    '다음 파일: {fileName}을(를) 업로드할 수 없습니다. 다시 시도해주세요.',
                pinAgent: '에이전트를 사이드바에 고정할 수 없습니다.'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: '그룹'
        },
        dialog: {
            createGroupDialogHeader: '새 그룹 생성',
            createGroupNamePlaceholder: '그룹 이름',
            createGroupButtonLabel: '생성',
            createGroupNameEmpty: '그룹 이름은 필수입니다.'
        },
        // my agent tab in group
        myAgentsTab: {
            tabLabel: '내 에이전트',
            searchAgentPlaceholder: '에이전트 검색',
            tabTitle: '최고 추천',
            searchQueryDialog: {
                pinButtonTitle: '사이드바에 고정',
                copyButtonTitle: '링크 복사',
                startChattingButtonTitle: '채팅 시작',
                creatorLabel: '생성됨'
            },
            myAgentDialog: {
                pinButtonTitle: '사이드바에 고정',
                copyButtonTitle: '링크 복사',
                startChattingButtonTitle: '채팅 시작'
            },
            groupAgentFavoriteTitle: '그룹 {groupName}의 즐겨찾기',
            groupAgentFavoriteSubTitle: '그룹 {groupName}의 가장 인기 있는 에이전트'
        },
        // members tab in group
        membersTab: {
            tabLabel: '멤버',
            groupMembersLabel: '그룹 멤버',
            memberSingularLabel: '멤버',
            memberPluralLabel: '멤버들',
            allMemberTab: '모든 멤버',
            searchMemberPlaceHolder: '이메일로 멤버 검색',
            tableNameLabel: '이름',
            tableEmailLabel: '이메일',
            tableRoleLabel: '역할',
            currentUserLabel: '나',
            tableOption: {
                changeMemberRoleLabel: '멤버의 역할 변경',
                removeMemberLabel: '{memberName}을(를) 그룹에서 제거'
            },
            dialog: {
                addMemberDialogHeader: '그룹 {groupName}에 멤버 추가',
                addMemberDialogDescription:
                    '이 그룹은 비공개입니다. 특정 멤버와 역할만 이 그룹을 사용할 수 있습니다.',
                searchMemberPlaceHolder: '이메일로 멤버 검색',
                addMemberButtonLabel: '확인',
                leaveGroupDialogHeader: '이 그룹을 떠나시겠습니까?',
                leaveGroupButtonLabel: '그룹 나가기',
                needOneLeaderWarningText: '그룹에는 최소한 한 명의 관리자(ADMIN)가 필요합니다.',
                removeMemberDialogHeader: '멤버 제거',
                removeMemberDialogDescription: '{memberName}을(를) 이 그룹에서 제거하시겠습니까?',
                removeMemberButtonLabel: '제거',

                importCSV: 'CSV 파일 가져오기',
                importCSVDes:
                    "파일에는 각 줄에 이메일과 역할이 포함되어야 합니다. 역할은 'member'이어야 합니다",
                showExampleButtonLabel: '예제 보기',
                hideExampleButtonLabel: '예제 숨기기',
                uploadCSVButtonLabel: 'CSV 업로드',
                emailRoleText: '이메일, 역할'
            }
        },
        // settings tab in group
        settingsTab: {
            tabLabel: '설정',
            updateGroupLabel: '그룹 업데이트',
            updateGroupSubLabel: '그룹 이름을 변경할 수 있습니다.',
            deleteGroupLabel: '그룹 삭제',
            deleteGroupSubLabel: '그룹을 삭제할 수 있지만, 이 작업은 되돌릴 수 없습니다.',
            dialog: {
                editDialog: {
                    dialogHeader: '그룹 이름 변경',
                    currentGroupNameLabel: '현재 그룹 이름',
                    newGroupNameLabel: '새 그룹 이름',
                    newGroupNamePlaceholder: '새 그룹 이름 입력',
                    updateButtonLabel: '업데이트'
                },
                deleteDialog: {
                    dialogHeader: '이 그룹을 삭제하시겠습니까?',
                    dialogDescription: '이 작업은 그룹 {groupName}을(를) 삭제합니다.',
                    deleteButtonLabel: '삭제'
                },
                validError: {
                    newGroupNameEmpty: '새 그룹 이름을 비워 둘 수 없습니다'
                }
            }
        },
        button: {
            backToChat: '채팅으로 돌아가기',
            inviteMember: '멤버 초대',
            seeMore: '더 보기',
            cancel: '취소'
        },
        tooltip: {
            createNewGroup: '새 그룹 생성'
        },
        unavailableMessage: {
            noGroupMessage: '사용 가능한 그룹이 없습니다.',
            noAgentMessage: '사용 가능한 에이전트가 없습니다.',
            noSettingAccessMessage: '이 그룹의 설정에 접근하려면 관리자가 되어야 합니다.',
            noMemberAvailable: '사용 가능한 멤버가 없습니다'
        },
        toast: {
            success: {
                deleteGroup: '그룹이 성공적으로 삭제되었습니다.'
            },
            fail: {
                generalErrorTitle: '오류',
                somethingWentWrong: '문제가 발생했습니다. 다시 시도해주세요.',
                createGroupFail: '그룹 생성에 실패했습니다.',
                editGroupFail: '그룹 편집에 실패했습니다.',
                deleteGroupFail: '그룹 삭제에 실패했습니다.',
                leaveGroupFail: '그룹 나가기에 실패했습니다.'
            }
        }
    },
    editAgent: {
        topBar: {
            newAgentTitle: '새 에이전트',
            activeStatusLive: '라이브',
            activeStatusDraft: '초안',
            activeStatusPublishOnlyMe: '나만',
            activeStatusPublishAnyoneWithPermission: '권한이 있는 모든 사람 또는 그룹',
            activeStatusPublishEveryone: '모두'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: '사이드바에 고정',
                unpinAgentButtonLabel: '고정 해제',
                deleteAgentButtonLabel: '에이전트 삭제'
            },
            deleteAgent: {
                deleteAgentDialogHeader: '에이전트 삭제',
                deleteAgentDialogDescription:
                    '이 에이전트를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.'
            },
            share: {
                shareAgentDialogHeader: '내 에이전트 공유',
                shareAgentToPeopleButtonLabel: '사람들과 공유',
                shareAgentGeneralAccess: '일반 접근',
                shareStatusRestrictedLabel: '제한됨',
                shareStatusRestrictedSubLabel:
                    '액세스 권한이 있는 사람과 그룹만 링크를 열 수 있습니다.',
                shareStatusAnyoneLabel: '누구나',
                shareStatusAnyoneSubLabel: '회사의 누구나 링크를 통해 볼 수 있습니다.',
                peopleTab: {
                    addPeoplePlaceholder: '사람 추가',
                    peopleListLabel: '사람 목록',
                    option: {
                        canChatLabel: '채팅 가능',
                        canChatSubLabel: '사용자가 이 에이전트와 채팅할 수 있습니다.',
                        canEditLabel: '에이전트 콘텐츠 편집 가능',
                        canEditSubLabel: '에이전트 콘텐츠 표시, 에이전트 복제, 채팅 가능',
                        removeGroupLabel: '그룹 제거'
                    }
                },
                shareAgentToGroupsButtonLabel: '그룹에 공유',
                groupsTab: {
                    addGroupPlaceholder: '그룹 추가',
                    groupListLabel: '그룹 목록',
                    option: {
                        canChatLabel: '채팅 가능',
                        canChatSubLabel: '사용자가 이 에이전트와 채팅할 수 있습니다.',
                        canEditLabel: '에이전트 콘텐츠 편집 가능',
                        canEditSubLabel: '에이전트 콘텐츠 표시, 에이전트 복제, 채팅 가능',
                        removeGroupLabel: '그룹 제거'
                    }
                }
            },
            update: {
                updateDialogHeader: '에이전트가 업데이트되었습니다.',
                agentCreator: '이(가) 생성',
                accessLabel: '접근',
                updateStatusOnlyMe: '나만',
                updateStatusAnyoneWithPermission: '권한이 있는 모든 사람 또는 그룹',
                updateStatusEveryone: '모두',
                pinButtonLabel: '사이드바에 고정',
                startConversationLabel: '대화 시작'
            }
        },

        nameLabel: '이름',
        namePlaceholder: '에이전트 이름 입력',
        descriptionLabel: '설명',
        descriptionPlaceholder: '이 에이전트가 하는 일에 대한 간단한 설명 추가',
        instructionLabel: '지침',
        instructionPlaceholder:
            '이 에이전트는 무엇을 하나요? 어떻게 행동하나요? 무엇을 피해야 하나요?',
        knowledgeLabel: '지식',
        knowledgeSubLabel:
            '지식 아래 파일을 업로드하면, 에이전트와의 대화에 파일 내용이 포함될 수 있습니다. 파일은 다운로드할 수 있습니다.',
        savingDraftLabel: '초안 저장 중',

        validError: {
            nameTooLong: 'Agent의 이름은 50자 이하여야 합니다.',
            desTooLong: 'Agent의 설명은 300자 이하여야 합니다.',
            insTooLong: 'Agent의 지침은 8000자 이하여야 합니다.'
        },

        button: {
            shareButtonLabel: '공유',
            updateButtonLabel: '업데이트',
            publishButtonLabel: '게시',
            copyLinkButtonLabel: '링크 복사',
            saveButtonLabel: '저장',
            uploadFileButtonLabel: '파일 업로드',
            cancelButtonLabel: '취소',
            deleteButtonLabel: '삭제'
        },
        toast: {
            success: {
                createAgent: '에이전트가 성공적으로 생성되었습니다.',
                updateAgent: '에이전트가 성공적으로 업데이트되었습니다.',
                deleteAgent: '에이전트가 성공적으로 삭제되었습니다.'
            },
            fail: {
                publishAgent:
                    '예기치 않은 오류: 이 초안 에이전트를 게시할 수 없습니다. 다시 시도하세요.',
                retrieveAgent:
                    '예기치 않은 오류: 에이전트 데이터를 가져올 수 없습니다. 다시 시도하세요.',
                createAgent:
                    '예기치 않은 오류: 이 에이전트를 초기화할 수 없습니다. 다시 시도하세요.',
                updateAgent: '예기치 않은 오류: 에이전트를 업데이트할 수 없습니다. 다시 시도하세요.'
            }
        }
    }
};
