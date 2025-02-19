export default {
    login: {
        button: {
            signIn: 'Azure AD দিয়ে চালিয়ে যান'
        },
        label: {
            signIn: 'প্রবেশ করুন',
            description: 'চালিয়ে যাওয়ার জন্য ক্লিক করে, আপনি আমাদের',
            and: 'এবং',
            terms: 'সেবার শর্তাবলী',
            policy: 'গোপনীয়তার নীতি',
            title: 'অ্যাক্সেস নিষিদ্ধ',
            descriptionDenied:
                'এই সম্পদে প্রবেশের আপনার অনুমতি নেই। অনুগ্রহ করে প্রশাসকের কাছ থেকে অনুমতি চেয়ে নিন।',
            logOut: 'প্রস্থান করুন',
            goBack: 'পূর্ববর্তী পৃষ্ঠায় ফিরে যান'
        },
        toast: {
            fail: {
                authentication: 'প্রমাণীকরণ ব্যর্থ',
                authenticationDescription:
                    'আপনার অ্যাকাউন্ট যোগ করতে গ্রাহক পরিষেবার সাথে যোগাযোগ করুন।'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'নতুন চ্যাট',
                searchAgent: 'এজেন্ট অনুসন্ধান করুন',
                logOut: 'প্রস্থান করুন',
                openSidebar: 'সাইডবার খুলুন',
                closeSidebar: 'সাইডবার বন্ধ করুন'
            },
            button: {
                cancel: 'বাতিল করুন',
                logOut: 'প্রস্থান করুন'
            },
            dialogue: {
                logOut: {
                    title: 'আপনি কি নিশ্চিত যে আপনি প্রস্থান করতে চান?',
                    description:
                        'এই পদক্ষেপটি আপনাকে লগইন স্ক্রিনে ফিরিয়ে দেবে এবং আপনি যেকোনো সময় পুনরায় লগইন করতে পারবেন।'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'নতুন চ্যাট'
            },
            button: {
                unpinAgent: 'সাইডবার থেকে সরান',
                searchAgent: 'এজেন্ট অনুসন্ধান করুন',
                renameConversation: 'নাম পরিবর্তন করুন',
                deleteConversation: 'মুছে ফেলুন',
                cancel: 'বাতিল করুন'
            },
            label: {
                loadingConversation: 'কথোপকথন লোড করা হচ্ছে',
                createdTime: {
                    today: 'আজ',
                    yesterday: 'গতকাল',
                    thisWeek: 'গত ৭ দিন',
                    thisMonth: 'গত ৩০ দিন'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'আপনি কি এই কথোপকথন মুছে ফেলতে চান?',
                    description:
                        'আপনি কি নিশ্চিত যে আপনি এই কথোপকথন মুছে ফেলতে চান? এটি স্থায়ীভাবে ডেটা মুছে ফেলবে।'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'আমার এজেন্ট',
                createAgent: 'এজেন্ট তৈরি করুন',
                seeMore: 'আরও দেখুন',
                newChat: 'কথোপকথন শুরু করুন',
                pinAgent: 'সাইডবারে পিন করুন',
                unpinAgent: 'সাইডবার থেকে সরান',
                copyLink: 'লিংক কপি করুন'
            },
            label: {
                title: 'এজেন্ট',
                description:
                    'নির্দেশাবলী, অতিরিক্ত জ্ঞান এবং একাধিক দক্ষতা একত্রিত করে কাস্টমাইজড এজেন্ট তৈরি ও অনুসন্ধান করুন।',
                searchAgent: 'এজেন্ট অনুসন্ধান করুন',
                createdAgents: 'আমার তৈরি',
                sharedAgents: 'আমার সাথে শেয়ার করা',
                noAgent: 'কোনও এজেন্ট উপলভ্য নেই',
                hasCreated: '{person} দ্বারা তৈরি'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'খসড়া',
                published: 'প্রকাশিত'
            },
            button: {
                createAgent: 'এজেন্ট তৈরি করুন',
                seeMore: 'আরও দেখুন',
                cancel: 'বাতিল করুন',
                deleteAgent: 'মুছে ফেলুন'
            },
            label: {
                title: 'আমার এজেন্ট',
                createdByMe: 'আমার দ্বারা তৈরি',
                sharedWithMe: 'আমার সাথে শেয়ার করা হয়েছে',
                createAgent: 'নির্দিষ্ট উদ্দেশ্যের জন্য এজেন্ট সংস্করণগুলি কাস্টমাইজ করুন।',
                onlyMe: 'শুধু আমি',
                shared: 'অ্যাক্সেস অনুমতি সহ গোষ্ঠী এবং ব্যক্তিদের সাথে শেয়ার করা',
                noCreatedAgents: 'এখনও কোনও এজেন্ট তৈরি করা হয়নি',
                noSharedAgents: 'এখনও আপনার সাথে কোনও এজেন্ট শেয়ার করা হয়নি',
                hasCreated: '{person} দ্বারা তৈরি'
            },
            dialogue: {
                deleteAgent: {
                    title: 'আপনি কি নিশ্চিত যে আপনি এই এজেন্টটি মুছে ফেলতে চান?',
                    description:
                        'এই পদক্ষেপটি পূর্বাবস্থায় ফিরিয়ে নেওয়া যাবে না। এজেন্টের ডেটা স্থায়ীভাবে মুছে ফেলা হবে।'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'নতুন চ্যাট',
                editAgent: 'এজেন্ট সম্পাদনা করুন',
                pinAgent: 'সাইডবারে পিন করুন',
                unpinAgent: 'সাইডবার থেকে সরান',
                copyLink: 'লিংক কপি করুন'
            },
            tooltip: {
                uploadFile: 'ফাইল সংযুক্ত করুন',
                uploadImage: 'ছবি সংযুক্ত করুন'
            },
            button: {
                rcm1: 'জাপান এশিয়ার কোন স্থানে অবস্থিত?',
                rcm2: '০ থেকে ১০০ পর্যন্ত মৌলিক সংখ্যা গণনা করুন',
                rcm3: 'বিয়েতে বন্ধু আমন্ত্রণ জানানোর জন্য একটি টেক্সট লিখুন',
                downloadFile: 'ডাউনলোড করুন'
            },
            label: {
                greeting: 'স্বাগতম, আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?',
                chatPlaceholder: 'মেসেজ টাইপ করুন',
                agentChatPlaceholder: ' আপনার মেসেজের জন্য অপেক্ষা করছে',
                copyCode: 'কোড কপি করুন',
                copyCodeDone: 'কপি সম্পন্ন!',
                hasCreated: '{person} দ্বারা তৈরি'
            }
        },
        userSettings: {
            groupManage: 'গ্রুপ পরিচালনা করুন',
            agentManage: 'এজেন্ট পরিচালনা করুন',
            settings: {
                title: 'সেটিংস',
                general: 'সাধারণ',
                language: 'ভাষা'
            },
            logOut: 'প্রস্থান করুন'
        },
        toast: {
            success: {
                pinAgent: 'এজেন্ট সাইডবারে পিন করা হয়েছে',
                unpinAgent: 'এজেন্ট সাইডবার থেকে সরানো হয়েছে',
                linkCopy: 'লিংক ক্লিপবোর্ডে কপি করা হয়েছে',
                updateAgentAcl: 'নির্বাচিত ব্যক্তি ও গোষ্ঠীগুলির সাথে এজেন্ট শেয়ার করা হয়েছে',
                deleteConversation: 'সফলভাবে মুছে ফেলা হয়েছে',
                deleteConversationDescription: 'কথোপকথন মুছে ফেলা হয়েছে'
            },
            fail: {
                generalErrorTitle: 'ত্রুটি',
                fileExtensionInvalid: 'অবৈধ এক্সটেনশন',
                imageSizeInvalid: 'ছবির আকার 20MB-এর বেশি।',
                generalError: 'কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
                uploadFileFailSingle:
                    '{fileName} আপলোড করা সম্ভব হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।',
                uploadFileFailPlural:
                    'নিম্নলিখিত ফাইলগুলি: {fileName} আপলোড করা সম্ভব হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।',
                pinAgent: 'এজেন্ট সাইডবারে পিন করা সম্ভব হয়নি।'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: 'গ্রুপ'
        },
        dialog: {
            createGroupDialogHeader: 'একটি নতুন গ্রুপ তৈরি করুন',
            createGroupNamePlaceholder: 'গ্রুপের নাম',
            createGroupButtonLabel: 'তৈরি করুন',
            createGroupNameEmpty: 'গ্রুপের নাম প্রয়োজন'
        },
        // আমার এজেন্ট ট্যাব গ্রুপে
        myAgentsTab: {
            tabLabel: 'আমার এজেন্ট',
            searchAgentPlaceholder: 'এজেন্ট খুঁজুন',
            tabTitle: 'শীর্ষ পছন্দ',
            searchQueryDialog: {
                pinButtonTitle: 'সাইডবারে পিন করুন',
                copyButtonTitle: 'লিঙ্ক কপি করুন',
                startChattingButtonTitle: 'চ্যাট শুরু করুন',
                creatorLabel: 'তৈরি করেছেন'
            },
            myAgentDialog: {
                pinButtonTitle: 'সাইডবারে পিন করুন',
                copyButtonTitle: 'লিঙ্ক কপি করুন',
                startChattingButtonTitle: 'চ্যাট শুরু করুন'
            },
            groupAgentFavoriteTitle: 'গ্রুপ {groupName}-এর প্রিয়',
            groupAgentFavoriteSubTitle: 'গ্রুপ {groupName}-এর সবচেয়ে জনপ্রিয় এজেন্ট'
        },
        // সদস্য ট্যাব গ্রুপে
        membersTab: {
            tabLabel: 'সদস্য',
            groupMembersLabel: 'গ্রুপ সদস্য',
            memberSingularLabel: 'সদস্য',
            memberPluralLabel: 'সদস্যরা',
            allMemberTab: 'সকল সদস্য',
            searchMemberPlaceHolder: 'ই-মেইল দ্বারা সদস্য খুঁজুন',
            tableNameLabel: 'নাম',
            tableEmailLabel: 'ই-মেইল',
            tableRoleLabel: 'ভূমিকা',
            currentUserLabel: 'আমি',
            tableOption: {
                changeMemberRoleLabel: 'সদস্যের ভূমিকা পরিবর্তন করুন',
                removeMemberLabel: 'গ্রুপ থেকে {memberName} সরান'
            },
            dialog: {
                addMemberDialogHeader: 'গ্রুপ {groupName}-এ আরও সদস্য যোগ করুন',
                addMemberDialogDescription:
                    'এই গ্রুপটি ব্যক্তিগত। শুধুমাত্র নির্দিষ্ট সদস্য এবং ভূমিকা এই গ্রুপটি ব্যবহার করতে পারে',
                searchMemberPlaceHolder: 'ই-মেইল দ্বারা সদস্য খুঁজুন',
                addMemberButtonLabel: 'নিশ্চিত করুন',
                leaveGroupDialogHeader: 'আপনি কি নিশ্চিত যে আপনি এই গ্রুপটি ছাড়তে চান?',
                leaveGroupButtonLabel: 'গ্রুপ ছাড়া',
                needOneLeaderWarningText: 'গ্রুপে অন্তত একটি প্রশাসক প্রয়োজন',
                removeMemberDialogHeader: 'সদস্য সরান',
                removeMemberDialogDescription:
                    'আপনি কি নিশ্চিত যে আপনি {memberName} কে এই গ্রুপ থেকে সরাতে চান?',
                removeMemberButtonLabel: 'সরান',

                importCSV: 'CSV ফাইল আমদানি করুন',
                importCSVDes:
                    "ফাইলের প্রতিটি লাইনে ইমেইল এবং একটি ভূমিকা থাকতে হবে। ভূমিকা হওয়া উচিত 'member'",
                showExampleButtonLabel: 'উদাহরণ দেখান',
                hideExampleButtonLabel: 'উদাহরণ লুকান',
                uploadCSVButtonLabel: 'CSV আপলোড করুন',
                emailRoleText: 'ইমেইল, ভূমিকা'
            }
        },
        // সেটিংস ট্যাব গ্রুপে
        settingsTab: {
            tabLabel: 'সেটিংস',
            updateGroupLabel: 'গ্রুপ আপডেট করুন',
            updateGroupSubLabel: 'আপনি আপনার গ্রুপের নাম পরিবর্তন করতে পারেন',
            deleteGroupLabel: 'গ্রুপ মুছুন',
            deleteGroupSubLabel:
                'আপনি আপনার গ্রুপ মুছতে পারেন, কিন্তু জানবেন যে এই কাজটি অব্যাহত রাখা যাবে না',
            dialog: {
                editDialog: {
                    dialogHeader: 'গ্রুপের নাম পরিবর্তন করুন',
                    currentGroupNameLabel: 'বর্তমান গ্রুপের নাম',
                    newGroupNameLabel: 'নতুন গ্রুপের নাম',
                    newGroupNamePlaceholder: 'নতুন গ্রুপের নাম প্রবেশ করুন',
                    updateButtonLabel: 'আপডেট করুন'
                },
                deleteDialog: {
                    dialogHeader: 'আপনি কি নিশ্চিত যে আপনি এই গ্রুপটি মুছতে চান?',
                    dialogDescription: 'এই কাজটি গ্রুপ {groupName} মুছবে',
                    deleteButtonLabel: 'মুছুন'
                },
                validError: {
                    newGroupNameEmpty: 'নতুন গ্রুপের নাম খালি হতে পারে না'
                }
            }
        },
        button: {
            backToChat: 'চ্যাটে ফিরে যান',
            inviteMember: 'সদস্যদের আমন্ত্রণ দিন',
            seeMore: 'আরও দেখুন',
            cancel: 'বাতিল করুন'
        },
        tooltip: {
            createNewGroup: 'নতুন গ্রুপ তৈরি করুন'
        },
        unavailableMessage: {
            noGroupMessage: 'কোন গ্রুপ উপলব্ধ নেই',
            noAgentMessage: 'কোন এজেন্ট উপলব্ধ নেই',
            noSettingAccessMessage: 'আপনাকে এই গ্রুপের সেটিংস অ্যাক্সেস করতে প্রশাসক হতে হবে',
            noMemberAvailable: 'কোন সদস্য পাওয়া যায়নি'
        },
        toast: {
            success: {
                deleteGroup: 'গ্রুপ সফল ভাবে মুছা হয়েছে'
            },
            fail: {
                generalErrorTitle: 'ত্রুটি',
                somethingWentWrong: 'কিছু ভুল হয়েছে, দয়া করে আবার চেষ্টা করুন',
                createGroupFail: 'গ্রুপ তৈরি করা যায়নি',
                editGroupFail: 'গ্রুপ সম্পাদনা করা যায়নি',
                deleteGroupFail: 'গ্রুপ মুছতে ব্যর্থ হয়েছে',
                leaveGroupFail: 'গ্রুপ ছাড়তে ব্যর্থ হয়েছে'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'নতুন এজেন্ট',
            activeStatusLive: 'লাইভ',
            activeStatusDraft: 'ড্রাফট',
            activeStatusPublishOnlyMe: 'শুধু আমার জন্য',
            activeStatusPublishAnyoneWithPermission: 'যে কেউ বা অনুমতি প্রাপ্ত গ্রুপ',
            activeStatusPublishEveryone: 'সবাই'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'সাইডবারে পিন করুন',
                unpinAgentButtonLabel: 'আনপিন করুন',
                deleteAgentButtonLabel: 'এজেন্ট মুছুন'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'এজেন্ট মুছুন',
                deleteAgentDialogDescription:
                    'আপনি কি নিশ্চিত যে আপনি এই এজেন্টটি মুছতে চান? এই কাজটি অব্যাহত রাখা যাবে না'
            },
            share: {
                shareAgentDialogHeader: 'আমার এজেন্ট শেয়ার করুন',
                shareAgentToPeopleButtonLabel: 'মানুষের কাছে শেয়ার করুন',
                shareAgentGeneralAccess: 'সাধারণ অ্যাক্সেস',
                shareStatusRestrictedLabel: 'সীমাবদ্ধ',
                shareStatusRestrictedSubLabel:
                    'শুধুমাত্র যারা অনুমতি পেয়েছে তারা লিঙ্ক দিয়ে খুলতে পারবে',
                shareStatusAnyoneLabel: 'যে কেউ',
                shareStatusAnyoneSubLabel: 'যে কেউ কোম্পানিতে লিঙ্কের মাধ্যমে দেখতে পারবে',
                peopleTab: {
                    addPeoplePlaceholder: 'মানুষ যোগ করুন',
                    peopleListLabel: 'মানুষের তালিকা',
                    option: {
                        canChatLabel: 'চ্যাট করতে পারবে',
                        canChatSubLabel: 'ব্যবহারকারী এই এজেন্টের সাথে চ্যাট করতে পারবে',
                        canEditLabel: 'এজেন্টের বিষয়বস্তু সম্পাদনা করতে পারবে',
                        canEditSubLabel:
                            'এজেন্টের বিষয়বস্তু দেখান, এজেন্ট ডুপ্লিকেট করুন, চ্যাট করুন',
                        removeGroupLabel: 'গ্রুপ মুছুন'
                    }
                },
                shareAgentToGroupsButtonLabel: 'গ্রুপে শেয়ার করুন',
                groupsTab: {
                    addGroupPlaceholder: 'গ্রুপ যোগ করুন',
                    groupListLabel: 'গ্রুপের তালিকা',
                    option: {
                        canChatLabel: 'চ্যাট করতে পারবে',
                        canChatSubLabel: 'ব্যবহারকারী এই এজেন্টের সাথে চ্যাট করতে পারবে',
                        canEditLabel: 'এজেন্টের বিষয়বস্তু সম্পাদনা করতে পারবে',
                        canEditSubLabel:
                            'এজেন্টের বিষয়বস্তু দেখান, এজেন্ট ডুপ্লিকেট করুন, চ্যাট করুন',
                        removeGroupLabel: 'গ্রুপ মুছুন'
                    }
                }
            },
            update: {
                updateDialogHeader: 'এজেন্ট আপডেট হয়েছে',
                agentCreator: ' তৈরি করেছে',
                accessLabel: 'অ্যাক্সেস',
                updateStatusOnlyMe: 'শুধু আমার জন্য',
                updateStatusAnyoneWithPermission: 'যে কেউ বা অনুমতি প্রাপ্ত গ্রুপ',
                updateStatusEveryone: 'সবাই',
                pinButtonLabel: 'সাইডবারে পিন করুন',
                startConversationLabel: 'কথোপকথন শুরু করুন'
            }
        },

        nameLabel: 'নাম',
        namePlaceholder: 'আপনার এজেন্টের নাম দিন',
        descriptionLabel: 'বর্ণনা',
        descriptionPlaceholder: 'এই এজেন্ট কী করে তার একটি সংক্ষিপ্ত বর্ণনা যোগ করুন',
        instructionLabel: 'নির্দেশনা',
        instructionPlaceholder: 'এই এজেন্ট কী করে? এটি কিভাবে আচরণ করে? এটি কী এড়ানো উচিত?',
        knowledgeLabel: 'জ্ঞান',
        knowledgeSubLabel:
            'যদি আপনি জ্ঞান বিভাগে ফাইল আপলোড করেন, তবে আপনার এজেন্টের সাথে কথোপকথনে ফাইলের বিষয়বস্তু অন্তর্ভুক্ত থাকতে পারে। ফাইলগুলি ডাউনলোড করা যাবে',
        savingDraftLabel: 'ড্রাফট সংরক্ষণ করা হচ্ছে',

        validError: {
            nameTooLong: 'Agent-এর নাম ৫০ অক্ষরের বেশি হওয়া উচিত নয়।',
            desTooLong: 'Agent-এর বিবরণ ৩০০ অক্ষরের বেশি হওয়া উচিত নয়।',
            insTooLong: 'Agent-এর নির্দেশাবলী ৮০০০ অক্ষরের বেশি হওয়া উচিত নয়।'
        },

        button: {
            shareButtonLabel: 'শেয়ার করুন',
            updateButtonLabel: 'আপডেট করুন',
            publishButtonLabel: 'প্রকাশ করুন',
            copyLinkButtonLabel: 'লিঙ্ক কপি করুন',
            saveButtonLabel: 'সংরক্ষণ করুন',
            uploadFileButtonLabel: 'ফাইল আপলোড করুন',
            cancelButtonLabel: 'বাতিল করুন',
            deleteButtonLabel: 'মুছুন'
        },
        toast: {
            success: {
                createAgent: 'এজেন্ট সফলভাবে তৈরি হয়েছে',
                updateAgent: 'এজেন্ট সফলভাবে আপডেট হয়েছে',
                deleteAgent: 'এজেন্ট সফলভাবে মুছা হয়েছে'
            },
            fail: {
                publishAgent:
                    'অপ্রত্যাশিত ত্রুটি: এই ড্রাফট এজেন্ট প্রকাশ করা যাচ্ছে না। দয়া করে আবার চেষ্টা করুন',
                retrieveAgent:
                    'অপ্রত্যাশিত ত্রুটি: এজেন্টের তথ্য পুনরুদ্ধার করা যাচ্ছে না। দয়া করে আবার চেষ্টা করুন।',
                createAgent:
                    'অপ্রত্যাশিত ত্রুটি: এই এজেন্ট তৈরি করা যাবে না। দয়া করে আবার চেষ্টা করুন।',
                updateAgent:
                    'অপ্রত্যাশিত ত্রুটি: এজেন্ট আপডেট করা যাচ্ছে না। দয়া করে আবার চেষ্টা করুন।'
            }
        }
    }
};
