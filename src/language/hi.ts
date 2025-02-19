export default {
    login: {
        button: {
            signIn: 'Azure AD के साथ जारी रखें'
        },
        label: {
            signIn: 'साइन इन करें',
            description: 'जारी रखने पर क्लिक करके, आप हमारी',
            and: 'और',
            terms: 'सेवा की शर्तें',
            policy: 'गोपनीयता नीति',
            title: 'पहुँच अस्वीकृत',
            descriptionDenied:
                'आपको इस संसाधन तक पहुँचने की अनुमति नहीं है। कृपया व्यवस्थापक से अनुमति का अनुरोध करें।',
            logOut: 'लॉग आउट',
            goBack: 'पिछले पृष्ठ पर जाएं'
        },
        toast: {
            fail: {
                authentication: 'प्रमाणीकरण विफल',
                authenticationDescription:
                    'कृपया अपने खाते को जोड़ने के लिए ग्राहक सेवा से संपर्क करें।'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'नई चैट',
                searchAgent: 'एजेंट खोजें',
                logOut: 'लॉग आउट',
                openSidebar: 'साइडबार खोलें',
                closeSidebar: 'साइडबार बंद करें'
            },
            button: {
                cancel: 'रद्द करें',
                logOut: 'लॉग आउट'
            },
            dialogue: {
                logOut: {
                    title: 'क्या आप वाकई लॉग आउट करना चाहते हैं?',
                    description:
                        'यह क्रिया आपको लॉगिन स्क्रीन पर ले जाएगी, और आप कभी भी फिर से साइन इन कर सकते हैं।'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'नई चैट'
            },
            button: {
                unpinAgent: 'साइडबार से हटाएं',
                searchAgent: 'एजेंट खोजें',
                renameConversation: 'नाम बदलें',
                deleteConversation: 'हटाएं',
                cancel: 'रद्द करें'
            },
            label: {
                loadingConversation: 'वार्तालाप लोड हो रहा है',
                createdTime: {
                    today: 'आज',
                    yesterday: 'कल',
                    thisWeek: 'पिछले 7 दिन',
                    thisMonth: 'पिछले 30 दिन'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'क्या आप इस वार्तालाप को हटाना चाहते हैं?',
                    description:
                        'क्या आप वाकई इस वार्तालाप को हटाना चाहते हैं? यह डेटा स्थायी रूप से हटा दिया जाएगा।'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'मेरे एजेंट्स',
                createAgent: 'एजेंट बनाएं',
                seeMore: 'और देखें',
                newChat: 'चैट शुरू करें',
                pinAgent: 'साइडबार पर पिन करें',
                unpinAgent: 'साइडबार से हटाएं',
                copyLink: 'लिंक कॉपी करें'
            },
            label: {
                title: 'एजेंट',
                description:
                    'निर्देश, अतिरिक्त ज्ञान, और कई कौशलों को जोड़ने वाले कस्टम एजेंट संस्करण खोजें और बनाएं।',
                searchAgent: 'एजेंट खोजें',
                createdAgents: 'मेरे द्वारा बनाया गया',
                sharedAgents: 'मेरे साथ साझा किया गया',
                noAgent: 'कोई एजेंट उपलब्ध नहीं है',
                hasCreated: '{person} द्वारा बनाया गया'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'ड्राफ्ट',
                published: 'प्रकाशित'
            },
            button: {
                createAgent: 'एजेंट बनाएं',
                seeMore: 'और देखें',
                cancel: 'रद्द करें',
                deleteAgent: 'हटाएं'
            },
            label: {
                title: 'मेरे एजेंट्स',
                createdByMe: 'मेरे द्वारा बनाया गया',
                sharedWithMe: 'मेरे साथ साझा किया गया',
                createAgent: 'विशिष्ट उद्देश्यों के लिए एजेंट संस्करणों को अनुकूलित करें',
                onlyMe: 'सिर्फ मैं',
                shared: 'समूह और व्यक्तियों के साथ साझा किया गया जिनके पास पहुंच अधिकार हैं',
                noCreatedAgents: 'अभी तक कोई एजेंट नहीं बनाया गया है',
                noSharedAgents: 'अभी तक आपके साथ कोई एजेंट साझा नहीं किया गया है',
                hasCreated: '{person} द्वारा बनाया गया'
            },
            dialogue: {
                deleteAgent: {
                    title: 'क्या आप इस एजेंट को हटाना चाहते हैं?',
                    description:
                        'यह क्रिया पूर्ववत नहीं की जा सकती। एजेंट डेटा स्थायी रूप से हटा दिया जाएगा।'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'नई चैट',
                editAgent: 'एजेंट संपादित करें',
                pinAgent: 'साइडबार पर पिन करें',
                unpinAgent: 'साइडबार से हटाएं',
                copyLink: 'लिंक कॉपी करें'
            },
            tooltip: {
                uploadFile: 'फाइल अटैच करें',
                uploadImage: 'छवि अटैच करें'
            },
            button: {
                rcm1: 'जापान एशिया में कहाँ स्थित है?',
                rcm2: '0 से 100 तक के प्राइम नंबर गिनें',
                rcm3: 'शादी के लिए दोस्त को आमंत्रित करने के लिए टेक्स्ट',
                downloadFile: 'डाउनलोड करें'
            },
            label: {
                greeting: 'नमस्ते, मैं आज आपकी कैसे मदद कर सकता हूं?',
                chatPlaceholder: 'संदेश टाइप करें',
                agentChatPlaceholder: ' आपके संदेश की प्रतीक्षा कर रहा है',
                copyCode: 'कोड कॉपी करें',
                copyCodeDone: 'कॉपी हो गया!',
                hasCreated: '{person} द्वारा बनाया गया'
            }
        },
        userSettings: {
            groupManage: 'समूह प्रबंधन करें',
            agentManage: 'एजेंट प्रबंधन करें',
            settings: {
                title: 'सेटिंग्स',
                general: 'सामान्य',
                language: 'भाषा'
            },
            logOut: 'लॉग आउट'
        },
        toast: {
            success: {
                pinAgent: 'एजेंट को साइडबार पर पिन किया गया है',
                unpinAgent: 'एजेंट को साइडबार से हटाया गया है',
                linkCopy: 'लिंक क्लिपबोर्ड पर कॉपी किया गया है',
                updateAgentAcl: 'एजेंट को चयनित लोगों और समूहों के साथ साझा किया गया है',
                deleteConversation: 'सफलतापूर्वक हटा दिया गया',
                deleteConversationDescription: 'वार्तालाप हटा दिया गया है'
            },
            fail: {
                generalErrorTitle: 'त्रुटि',
                fileExtensionInvalid: 'अवैध एक्सटेंशन',
                imageSizeInvalid: 'चित्र का आकार 20MB से अधिक है।',
                generalError: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।',
                uploadFileFailSingle: '{fileName} अपलोड नहीं हो सका। कृपया पुनः प्रयास करें।',
                uploadFileFailPlural:
                    'निम्नलिखित फाइलें: {fileName} अपलोड नहीं हो सकीं। कृपया पुनः प्रयास करें।',
                pinAgent: 'एजेंट को साइडबार पर पिन नहीं किया जा सका'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: 'समूह'
        },
        dialog: {
            createGroupDialogHeader: 'नया समूह बनाएँ',
            createGroupNamePlaceholder: 'समूह का नाम',
            createGroupButtonLabel: 'बनाएँ',
            createGroupNameEmpty: 'समूह का नाम आवश्यक है'
        },
        // मेरे एजेंट टैब में समूह
        myAgentsTab: {
            tabLabel: 'मेरे एजेंट',
            searchAgentPlaceholder: 'एजेंट खोजें',
            tabTitle: 'शीर्ष विकल्प',
            searchQueryDialog: {
                pinButtonTitle: 'साइडबार में पिन करें',
                copyButtonTitle: 'लिंक कॉपी करें',
                startChattingButtonTitle: 'चैट शुरू करें',
                creatorLabel: 'बनाया गया'
            },
            myAgentDialog: {
                pinButtonTitle: 'साइडबार में पिन करें',
                copyButtonTitle: 'लिंक कॉपी करें',
                startChattingButtonTitle: 'चैट शुरू करें'
            },
            groupAgentFavoriteTitle: 'समूह {groupName} के पसंदीदा',
            groupAgentFavoriteSubTitle: 'समूह {groupName} के सबसे लोकप्रिय एजेंट'
        },
        // समूह में सदस्यों का टैब
        membersTab: {
            tabLabel: 'सदस्य',
            groupMembersLabel: 'समूह के सदस्य',
            memberSingularLabel: 'सदस्य',
            memberPluralLabel: 'सदस्य',
            allMemberTab: 'सभी सदस्य',
            searchMemberPlaceHolder: 'ई-मेल द्वारा सदस्य खोजें',
            tableNameLabel: 'नाम',
            tableEmailLabel: 'ई-मेल',
            tableRoleLabel: 'भूमिका',
            currentUserLabel: 'मैं',
            tableOption: {
                changeMemberRoleLabel: 'सदस्य की भूमिका बदलें',
                removeMemberLabel: '{memberName} को समूह से हटाएँ'
            },
            dialog: {
                addMemberDialogHeader: 'समूह {groupName} में और सदस्य जोड़ें',
                addMemberDialogDescription:
                    'यह समूह निजी है। केवल कुछ सदस्य और भूमिकाएँ इस समूह का उपयोग कर सकती हैं',
                searchMemberPlaceHolder: 'ई-मेल द्वारा सदस्यों की खोज करें',
                addMemberButtonLabel: 'पुष्टि करें',
                leaveGroupDialogHeader: 'क्या आप निश्चित रूप से इस समूह को छोड़ना चाहते हैं?',
                leaveGroupButtonLabel: 'समूह छोड़ें',
                needOneLeaderWarningText: 'समूह को कम से कम एक ADMIN की आवश्यकता है',
                removeMemberDialogHeader: 'सदस्य हटाएँ',
                removeMemberDialogDescription:
                    'क्या आप निश्चित रूप से {memberName} को इस समूह से हटाना चाहते हैं?',
                removeMemberButtonLabel: 'हटाएँ',

                importCSV: 'CSV फ़ाइल आयात करें',
                importCSVDes:
                    "फ़ाइल में प्रत्येक पंक्ति में एक ईमेल और एक भूमिका होनी चाहिए। भूमिका 'member' होनी चाहिए",
                showExampleButtonLabel: 'उदाहरण दिखाएं',
                hideExampleButtonLabel: 'उदाहरण छुपाएं',
                uploadCSVButtonLabel: 'CSV अपलोड करें',
                emailRoleText: 'ईमेल, भूमिका'
            }
        },
        // समूह में सेटिंग्स का टैब
        settingsTab: {
            tabLabel: 'सेटिंग्स',
            updateGroupLabel: 'समूह अपडेट करें',
            updateGroupSubLabel: 'आप अपने समूह का नाम बदल सकते हैं',
            deleteGroupLabel: 'समूह हटाएँ',
            deleteGroupSubLabel:
                'आप अपने समूह को हटा सकते हैं, लेकिन कृपया ध्यान दें कि यह क्रिया वापस नहीं ली जा सकती',
            dialog: {
                editDialog: {
                    dialogHeader: 'समूह का नाम बदलें',
                    currentGroupNameLabel: 'वर्तमान समूह का नाम',
                    newGroupNameLabel: 'नए समूह का नाम',
                    newGroupNamePlaceholder: 'नए समूह का नाम दर्ज करें',
                    updateButtonLabel: 'अपडेट करें'
                },
                deleteDialog: {
                    dialogHeader: 'क्या आप निश्चित रूप से इस समूह को हटाना चाहते हैं?',
                    dialogDescription: 'यह क्रिया समूह {groupName} को हटाएगी',
                    deleteButtonLabel: 'हटाएँ'
                },
                validError: {
                    newGroupNameEmpty: 'नए समूह का नाम खाली नहीं हो सकता'
                }
            }
        },
        button: {
            backToChat: 'चैट में वापस जाएँ',
            inviteMember: 'सदस्यों को आमंत्रित करें',
            seeMore: 'अधिक देखें',
            cancel: 'रद्द करें'
        },
        tooltip: {
            createNewGroup: 'नया समूह बनाएँ'
        },
        unavailableMessage: {
            noGroupMessage: 'कोई समूह उपलब्ध नहीं है',
            noAgentMessage: 'कोई एजेंट उपलब्ध नहीं है',
            noSettingAccessMessage:
                'आपको इस समूह की सेटिंग्स तक पहुँचने के लिए ADMIN होना आवश्यक है',
            noMemberAvailable: 'कोई सदस्य उपलब्ध नहीं है'
        },
        toast: {
            success: {
                deleteGroup: 'समूह सफलतापूर्वक हटाया गया'
            },
            fail: {
                generalErrorTitle: 'त्रुटि',
                somethingWentWrong: 'कुछ गलत हुआ, कृपया पुनः प्रयास करें',
                createGroupFail: 'समूह बनाने में असफल',
                editGroupFail: 'समूह संपादित करने में असफल',
                deleteGroupFail: 'समूह हटाने में असफल',
                leaveGroupFail: 'समूह छोड़ने में असफल'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'नया एजेंट',
            activeStatusLive: 'सजीव',
            activeStatusDraft: 'ड्राफ्ट',
            activeStatusPublishOnlyMe: 'केवल मैं',
            activeStatusPublishAnyoneWithPermission: 'कोई भी या समूह जिनके पास अनुमति है',
            activeStatusPublishEveryone: 'सभी'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'साइडबार में पिन करें',
                unpinAgentButtonLabel: 'पिन हटाएँ',
                deleteAgentButtonLabel: 'एजेंट हटाएँ'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'एजेंट हटाएँ',
                deleteAgentDialogDescription:
                    'क्या आप निश्चित रूप से इस एजेंट को हटाना चाहते हैं? यह क्रिया वापस नहीं ली जा सकती'
            },
            share: {
                shareAgentDialogHeader: 'मेरे एजेंट को साझा करें',
                shareAgentToPeopleButtonLabel: 'लोगों के साथ साझा करें',
                shareAgentGeneralAccess: 'सामान्य पहुँच',
                shareStatusRestrictedLabel: 'सीमित',
                shareStatusRestrictedSubLabel:
                    'केवल वे लोग और समूह जिनके पास पहुँच है, लिंक खोल सकते हैं',
                shareStatusAnyoneLabel: 'कोई भी',
                shareStatusAnyoneSubLabel: 'कंपनी में कोई भी जो लिंक के साथ है, देख सकता है',
                peopleTab: {
                    addPeoplePlaceholder: 'लोग जोड़ें',
                    peopleListLabel: 'लोगों की सूची',
                    option: {
                        canChatLabel: 'चैट कर सकता है',
                        canChatSubLabel: 'उपयोगकर्ता इस एजेंट के साथ चैट कर सकता है',
                        canEditLabel: 'एजेंट की सामग्री संपादित कर सकता है',
                        canEditSubLabel: 'एजेंट की सामग्री दिखाएँ, एजेंट की कॉपी करें, चैट करें',
                        removeGroupLabel: 'समूह हटाएँ'
                    }
                },
                shareAgentToGroupsButtonLabel: 'समूहों के साथ साझा करें',
                groupsTab: {
                    addGroupPlaceholder: 'समूह जोड़ें',
                    groupListLabel: 'समूहों की सूची',
                    option: {
                        canChatLabel: 'चैट कर सकता है',
                        canChatSubLabel: 'उपयोगकर्ता इस एजेंट के साथ चैट कर सकता है',
                        canEditLabel: 'एजेंट की सामग्री संपादित कर सकता है',
                        canEditSubLabel: 'एजेंट की सामग्री दिखाएँ, एजेंट की कॉपी करें, चैट करें',
                        removeGroupLabel: 'समूह हटाएँ'
                    }
                }
            },
            update: {
                updateDialogHeader: 'एजेंट को अपडेट किया गया है',
                agentCreator: 'ने बनाया है',
                accessLabel: 'पहुँच',
                updateStatusOnlyMe: 'केवल मैं',
                updateStatusAnyoneWithPermission: 'कोई भी या समूह जिनके पास अनुमति है',
                updateStatusEveryone: 'सभी',
                pinButtonLabel: 'साइडबार में पिन करें',
                startConversationLabel: 'संवाद शुरू करें'
            }
        },

        nameLabel: 'नाम',
        namePlaceholder: 'अपने एजेंट का नाम रखें',
        descriptionLabel: 'विवरण',
        descriptionPlaceholder: 'इस एजेंट के काम के बारे में एक संक्षिप्त विवरण जोड़ें',
        instructionLabel: 'निर्देश',
        instructionPlaceholder:
            'यह एजेंट क्या करता है? यह कैसे व्यवहार करता है? इसे क्या करने से बचना चाहिए?',
        knowledgeLabel: 'ज्ञान',
        knowledgeSubLabel:
            'यदि आप ज्ञान के अंतर्गत फ़ाइलें अपलोड करते हैं, तो आपके एजेंट के साथ बातचीत में फ़ाइल की सामग्री शामिल हो सकती है। फ़ाइलें डाउनलोड की जा सकती हैं',
        savingDraftLabel: 'ड्राफ्ट सहेजना',

        validError: {
            nameTooLong: 'Agent का नाम 50 अक्षरों या उससे कम का होना चाहिए।',
            desTooLong: 'Agent का विवरण 300 अक्षरों या उससे कम का होना चाहिए।',
            insTooLong: 'Agent के निर्देश 8000 अक्षरों या उससे कम के होने चाहिए।'
        },

        button: {
            shareButtonLabel: 'साझा करें',
            updateButtonLabel: 'अपडेट करें',
            publishButtonLabel: 'प्रकाशित करें',
            copyLinkButtonLabel: 'लिंक कॉपी करें',
            saveButtonLabel: 'सहेजें',
            uploadFileButtonLabel: 'फाइलें अपलोड करें',
            cancelButtonLabel: 'रद्द करें',
            deleteButtonLabel: 'हटाएँ'
        },
        toast: {
            success: {
                createAgent: 'एजेंट सफलतापूर्वक बनाया गया',
                updateAgent: 'एजेंट सफलतापूर्वक अपडेट किया गया',
                deleteAgent: 'एजेंट सफलतापूर्वक हटाया गया'
            },
            fail: {
                publishAgent:
                    'अनपेक्षित त्रुटि: इस ड्राफ्ट एजेंट को प्रकाशित नहीं किया जा सकता। कृपया फिर से प्रयास करें',
                retrieveAgent:
                    'अनपेक्षित त्रुटि: एजेंट डेटा प्राप्त नहीं किया जा सकता। कृपया फिर से प्रयास करें।',
                createAgent:
                    'अनपेक्षित त्रुटि: इस एजेंट को आरंभ नहीं किया जा सकता। कृपया फिर से प्रयास करें।',
                updateAgent:
                    'अनपेक्षित त्रुटि: एजेंट को अपडेट नहीं किया जा सकता। कृपया फिर से प्रयास करें।'
            }
        }
    }
};
