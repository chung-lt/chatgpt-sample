export default {
    login: {
        button: {
            signIn: 'Magpatuloy gamit ang Azure AD'
        },
        label: {
            signIn: 'Mag-sign in',
            description: 'Sa pamamagitan ng pag-click sa magpatuloy, sumasang-ayon ka sa aming',
            and: 'at',
            terms: 'Mga Tuntunin ng Serbisyo',
            policy: 'Patakaran sa Privacy',
            title: 'Access tinanggihan',
            descriptionDenied:
                'Wala kang pahintulot na ma-access ang resource na ito. Mangyaring humiling ng pahintulot mula sa administrator.',
            logOut: 'Mag-sign out',
            goBack: 'Bumalik sa nakaraang pahina'
        },
        toast: {
            fail: {
                authentication: 'Nabigong pag-authenticate',
                authenticationDescription:
                    'Mangyaring makipag-ugnayan sa customer service para idagdag ang iyong account'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'Bagong chat',
                searchAgent: 'Maghanap ng mga agent',
                logOut: 'Mag-sign out',
                openSidebar: 'Buksan ang sidebar',
                closeSidebar: 'Isara ang sidebar'
            },
            button: {
                cancel: 'Kanselahin',
                logOut: 'Mag-sign out'
            },
            dialogue: {
                logOut: {
                    title: 'Sigurado ka bang nais mong mag-sign out?',
                    description:
                        'Ang aksyong ito ay ibabalik ka sa login screen, at maaari kang mag-sign in muli anumang oras.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'Bagong chat'
            },
            button: {
                unpinAgent: 'Itago mula sa sidebar',
                searchAgent: 'Maghanap ng mga agent',
                renameConversation: 'Palitan ng pangalan',
                deleteConversation: 'Tanggalin',
                cancel: 'Kanselahin'
            },
            label: {
                loadingConversation: 'Naglo-load ng mga pag-uusap',
                createdTime: {
                    today: 'Ngayon',
                    yesterday: 'Kahapon',
                    thisWeek: 'Huling 7 Araw',
                    thisMonth: 'Huling 30 Araw'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'Sigurado ka bang nais mong tanggalin ang pag-uusap na ito?',
                    description:
                        'Sigurado ka bang nais mong tanggalin ang pag-uusap na ito? Permanenteng matatanggal ang data.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'Aking mga agent',
                createAgent: 'Lumikha ng agent',
                seeMore: 'Tingnan pa',
                newChat: 'Simulan ang chat',
                pinAgent: 'I-pin sa sidebar',
                unpinAgent: 'Itago mula sa sidebar',
                copyLink: 'Kopyahin ang link'
            },
            label: {
                title: 'Agent',
                description:
                    'Maghanap at lumikha ng mga bersyon ng agent na pinagsasama ang mga tagubilin, karagdagang kaalaman, at maraming kakayahan.',
                searchAgent: 'Maghanap ng mga agent',
                createdAgents: 'Nilikha ko',
                sharedAgents: 'Ibinahagi sa akin',
                noAgent: 'Walang available na mga agent',
                hasCreated: 'Nilikha ni {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'Draft',
                published: 'Live'
            },
            button: {
                createAgent: 'Lumikha ng agent',
                seeMore: 'Tingnan pa',
                cancel: 'Kanselahin',
                deleteAgent: 'Tanggalin'
            },
            label: {
                title: 'Aking mga Agent',
                createdByMe: 'Nilikha ko',
                sharedWithMe: 'Ibinahagi sa akin',
                createAgent: 'I-customize ang mga bersyon ng agent para sa partikular na layunin',
                onlyMe: 'Ako lang',
                shared: 'Ibinahagi sa mga grupo at indibidwal na may access rights',
                noCreatedAgents: 'Wala pang nalilikhang mga agent',
                noSharedAgents: 'Wala pang naibabahaging mga agent sa iyo',
                hasCreated: 'Nilikha ni {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'Sigurado ka bang nais mong tanggalin ang agent na ito?',
                    description:
                        'Hindi na maibabalik ang aksyong ito. Permanenteng matatanggal ang data ng agent.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'Bagong chat',
                editAgent: 'I-edit ang agent',
                pinAgent: 'I-pin sa sidebar',
                unpinAgent: 'Itago mula sa sidebar',
                copyLink: 'Kopyahin ang link'
            },
            tooltip: {
                uploadFile: 'Mag-attach ng file',
                uploadImage: 'Mag-attach ng imahe'
            },
            button: {
                rcm1: 'Nasaan matatagpuan ang Japan sa Asya?',
                rcm2: 'Bilangin ang mga prime number mula 0 hanggang 100',
                rcm3: 'Teksto para imbitahan ang kaibigan sa kasal',
                downloadFile: 'I-download'
            },
            label: {
                greeting: 'Kumusta, paano kita matutulungan ngayon?',
                chatPlaceholder: 'Mag-type ng mensahe',
                agentChatPlaceholder: ' ay naghihintay para sa iyong mensahe',
                copyCode: 'Kopyahin ang code',
                copyCodeDone: 'Nakopya!',
                hasCreated: 'Nilikha ni {person}'
            }
        },
        userSettings: {
            groupManage: 'Pamahalaan ang mga grupo',
            agentManage: 'Pamahalaan ang mga agent',
            settings: {
                title: 'Mga Setting',
                general: 'Pangkalahatan',
                language: 'Wika'
            },
            logOut: 'Mag-sign out'
        },
        toast: {
            success: {
                pinAgent: 'Na-pin na ang agent sa sidebar',
                unpinAgent: 'Tinanggal ang agent mula sa sidebar',
                linkCopy: 'Nakopya ang link sa clipboard',
                updateAgentAcl: 'Naibahagi ang agent sa mga napiling tao at grupo',
                deleteConversation: 'Matagumpay na natanggal',
                deleteConversationDescription: 'Natanggal ang pag-uusap'
            },
            fail: {
                generalErrorTitle: 'Error',
                fileExtensionInvalid: 'Di-wastong extension',
                imageSizeInvalid: 'Lumampas ang laki ng larawan sa 20MB.',
                generalError: 'May nangyaring mali. Subukang muli.',
                uploadFileFailSingle: 'Hindi ma-upload ang {fileName}. Subukang muli.',
                uploadFileFailPlural:
                    'Ang mga sumusunod na file: {fileName} ay hindi ma-upload. Subukang muli.',
                pinAgent: 'Hindi ma-pin ang agent sa sidebar'
            }
        }
    },
    group: {
        sidebar: {
            groupLabel: 'Mga Grupo'
        },
        dialog: {
            createGroupDialogHeader: 'Lumikha ng bagong grupo',
            createGroupNamePlaceholder: 'Pangalan ng grupo',
            createGroupButtonLabel: 'Lumikha',
            createGroupNameEmpty: 'Kinakailangan ang pangalan ng grupo'
        },
        myAgentsTab: {
            tabLabel: 'Aking mga Agent',
            searchAgentPlaceholder: 'Maghanap ng mga agent',
            tabTitle: 'Mga Nangungunang Opsyon',
            searchQueryDialog: {
                pinButtonTitle: 'I-pin sa sidebar',
                copyButtonTitle: 'Kopyahin ang link',
                startChattingButtonTitle: 'Simulan ang Pakikipag-chat',
                creatorLabel: 'nilikha'
            },
            myAgentDialog: {
                pinButtonTitle: 'I-pin sa sidebar',
                copyButtonTitle: 'Kopyahin ang link',
                startChattingButtonTitle: 'Simulan ang Pakikipag-chat'
            },
            groupAgentFavoriteTitle: 'Mga Paborito ng Grupo {groupName}',
            groupAgentFavoriteSubTitle: 'Pinakapopular na mga agent ng Grupo {groupName}'
        },
        membersTab: {
            tabLabel: 'Mga Miyembro',
            groupMembersLabel: 'Mga miyembro ng grupo',
            memberSingularLabel: 'miyembro',
            memberPluralLabel: 'mga miyembro',
            allMemberTab: 'Lahat ng miyembro',
            searchMemberPlaceHolder: 'Maghanap ng miyembro gamit ang email',
            tableNameLabel: 'Pangalan',
            tableEmailLabel: 'Email',
            tableRoleLabel: 'Tungkulin',
            currentUserLabel: 'Ako',
            tableOption: {
                changeMemberRoleLabel: 'Baguhin ang tungkulin ng miyembro',
                removeMemberLabel: 'Tanggalin si {memberName} mula sa grupo'
            },
            dialog: {
                addMemberDialogHeader: 'Magdagdag ng miyembro sa grupo {groupName}',
                addMemberDialogDescription:
                    'Pribado ang grupong ito. Tanging ilang miyembro at tungkulin ang maaaring gumamit ng grupong ito.',
                searchMemberPlaceHolder: 'Maghanap ng miyembro gamit ang email',
                addMemberButtonLabel: 'Kumpirmahin',
                leaveGroupDialogHeader: 'Sigurado ka bang nais mong iwan ang grupong ito?',
                leaveGroupButtonLabel: 'Iwan ang grupo',
                needOneLeaderWarningText: 'Kailangan ng grupo ng kahit isang ADMIN',
                removeMemberDialogHeader: 'Tanggalin ang miyembro',
                removeMemberDialogDescription:
                    'Sigurado ka bang nais mong tanggalin si {memberName} mula sa grupong ito?',
                removeMemberButtonLabel: 'Tanggalin',

                importCSV: 'Mag-import ng CSV file',
                importCSVDes:
                    "Ang file ay dapat may kasamang email at isang role sa bawat linya. Ang role ay dapat na 'member'",
                showExampleButtonLabel: 'Ipakita ang halimbawa',
                hideExampleButtonLabel: 'Itago ang halimbawa',
                uploadCSVButtonLabel: 'I-upload ang CSV',
                emailRoleText: 'Email, Role'
            }
        },
        settingsTab: {
            tabLabel: 'Mga Setting',
            updateGroupLabel: 'I-update ang grupo',
            updateGroupSubLabel: 'Maaari mong baguhin ang pangalan ng iyong grupo',
            deleteGroupLabel: 'Tanggalin ang grupo',
            deleteGroupSubLabel:
                'Maaari mong tanggalin ang iyong grupo, ngunit tandaan na hindi na ito maibabalik.',
            dialog: {
                editDialog: {
                    dialogHeader: 'Baguhin ang pangalan ng grupo',
                    currentGroupNameLabel: 'Kasalukuyang pangalan ng grupo',
                    newGroupNameLabel: 'Bagong pangalan ng grupo',
                    newGroupNamePlaceholder: 'Ilagay ang bagong pangalan ng grupo',
                    updateButtonLabel: 'I-update'
                },
                deleteDialog: {
                    dialogHeader: 'Sigurado ka bang nais mong tanggalin ang grupong ito?',
                    dialogDescription: 'Ang aksyong ito ay magtatanggal sa grupo {groupName}.',
                    deleteButtonLabel: 'Tanggalin'
                },
                validError: {
                    newGroupNameEmpty: 'Ang bagong pangalan ng grupo ay hindi maaaring walang laman'
                }
            }
        },
        button: {
            backToChat: 'Bumalik sa chat',
            inviteMember: 'Mag-imbita ng mga miyembro',
            seeMore: 'TINGNAN PA',
            cancel: 'Kanselahin'
        },
        tooltip: {
            createNewGroup: 'Lumikha ng bagong grupo'
        },
        unavailableMessage: {
            noGroupMessage: 'Walang available na grupo',
            noAgentMessage: 'Walang available na agent',
            noSettingAccessMessage:
                'Kailangan mong maging ADMIN para ma-access ang mga setting ng grupong ito.',
            noMemberAvailable: 'Walang miyembro na magagamit'
        },
        toast: {
            success: {
                deleteGroup: 'Matagumpay na natanggal ang grupo'
            },
            fail: {
                generalErrorTitle: 'Error',
                somethingWentWrong: 'May nangyaring mali, subukang muli.',
                createGroupFail: 'Hindi matagumpay ang paglikha ng grupo',
                editGroupFail: 'Hindi matagumpay ang pag-edit ng grupo',
                deleteGroupFail: 'Hindi matagumpay ang pag-delete ng grupo',
                leaveGroupFail: 'Hindi matagumpay ang pag-iwan sa grupo'
            }
        }
    },
    editAgent: {
        topBar: {
            newAgentTitle: 'Bagong Agent',
            activeStatusLive: 'Live',
            activeStatusDraft: 'Draft',
            activeStatusPublishOnlyMe: 'Ako lang',
            activeStatusPublishAnyoneWithPermission: 'Kahit sino o grupong may pahintulot',
            activeStatusPublishEveryone: 'Lahat'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'I-pin sa sidebar',
                unpinAgentButtonLabel: 'Tanggalin ang pagkaka-pin',
                deleteAgentButtonLabel: 'Tanggalin ang Agent'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'Tanggalin ang Agent',
                deleteAgentDialogDescription:
                    'Sigurado ka bang nais mong tanggalin ang agent na ito? Ang aksyong ito ay hindi na maibabalik.'
            },
            share: {
                shareAgentDialogHeader: 'Ibahagi ang aking agent',
                shareAgentToPeopleButtonLabel: 'Ibahagi sa mga tao',
                shareAgentGeneralAccess: 'Pangkalahatang Access',
                shareStatusRestrictedLabel: 'Pinaghigpitan',
                shareStatusRestrictedSubLabel:
                    'Tanging mga tao at grupong may access ang maaaring magbukas gamit ang link.',
                shareStatusAnyoneLabel: 'Kahit sino',
                shareStatusAnyoneSubLabel:
                    'Kahit sino sa kumpanya na may link ay maaaring mag-view.',
                peopleTab: {
                    addPeoplePlaceholder: 'Magdagdag ng mga tao',
                    peopleListLabel: 'Listahan ng mga tao',
                    option: {
                        canChatLabel: 'Maaaring mag-chat',
                        canChatSubLabel: 'Maaaring makipag-chat ang user sa agent na ito',
                        canEditLabel: 'Maaaring i-edit ang nilalaman ng agent',
                        canEditSubLabel:
                            'Ipakita ang nilalaman ng agent, i-duplicate ang agent, mag-chat',
                        removeGroupLabel: 'Tanggalin ang grupo'
                    }
                },
                shareAgentToGroupsButtonLabel: 'Ibahagi sa mga grupo',
                groupsTab: {
                    addGroupPlaceholder: 'Magdagdag ng mga grupo',
                    groupListLabel: 'Listahan ng mga grupo',
                    option: {
                        canChatLabel: 'Maaaring mag-chat',
                        canChatSubLabel: 'Maaaring makipag-chat ang user sa agent na ito',
                        canEditLabel: 'Maaaring i-edit ang nilalaman ng agent',
                        canEditSubLabel:
                            'Ipakita ang nilalaman ng agent, i-duplicate ang agent, mag-chat',
                        removeGroupLabel: 'Tanggalin ang grupo'
                    }
                }
            },
            update: {
                updateDialogHeader: 'Na-update na ang Agent',
                agentCreator: ' nilikha ni',
                accessLabel: 'Access',
                updateStatusOnlyMe: 'Ako lang',
                updateStatusAnyoneWithPermission: 'Kahit sino o grupong may pahintulot',
                updateStatusEveryone: 'Lahat',
                pinButtonLabel: 'I-pin sa sidebar',
                startConversationLabel: 'Simulan ang Pakikipag-usap'
            }
        },
        nameLabel: 'Pangalan',
        namePlaceholder: 'Pangalanan ang iyong agent',
        descriptionLabel: 'Deskripsyon',
        descriptionPlaceholder:
            'Magdagdag ng maikling deskripsyon tungkol sa ginagawa ng agent na ito',
        instructionLabel: 'Mga Tagubilin',
        instructionPlaceholder:
            'Ano ang ginagawa ng agent na ito? Paano ito kumikilos? Ano ang dapat iwasan?',
        knowledgeLabel: 'Kaalaman',
        knowledgeSubLabel:
            'Kung mag-upload ka ng mga file sa ilalim ng Kaalaman, maaaring isama ang nilalaman ng file sa mga pag-uusap ng iyong Agent. Maaaring ma-download ang mga file.',
        savingDraftLabel: 'Nagsasave ng Draft',

        validError: {
            nameTooLong: 'Ang pangalan ng Agent ay dapat may 50 karakter o mas kaunti.',
            desTooLong: 'Ang paglalarawan ng Agent ay dapat may 300 karakter o mas kaunti.',
            insTooLong: 'Ang mga tagubilin ng Agent ay dapat may 8000 karakter o mas kaunti.'
        },

        button: {
            shareButtonLabel: 'Ibahagi',
            updateButtonLabel: 'I-update',
            publishButtonLabel: 'I-publish',
            copyLinkButtonLabel: 'Kopyahin ang link',
            saveButtonLabel: 'I-save',
            uploadFileButtonLabel: 'Mag-upload ng mga file',
            cancelButtonLabel: 'Kanselahin',
            deleteButtonLabel: 'Tanggalin'
        },
        toast: {
            success: {
                createAgent: 'Matagumpay na nalikha ang agent',
                updateAgent: 'Matagumpay na na-update ang agent',
                deleteAgent: 'Matagumpay na natanggal ang agent'
            },
            fail: {
                publishAgent:
                    'Hindi inaasahang error: Hindi ma-publish ang draft agent na ito. Subukang muli.',
                retrieveAgent:
                    'Hindi inaasahang error: Hindi makuha ang data ng agent. Subukang muli.',
                createAgent:
                    'Hindi inaasahang error: Hindi ma-initialize ang agent na ito. Subukang muli.',
                updateAgent: 'Hindi inaasahang error: Hindi ma-update ang agent. Subukang muli.'
            }
        }
    }
};
