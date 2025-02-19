export default {
    login: {
        button: {
            signIn: 'متابعة باستخدام Azure AD'
        },
        label: {
            signIn: 'تسجيل الدخول',
            description: 'بالنقر على متابعة، فإنك توافق على',
            and: 'و',
            terms: 'شروط الخدمة',
            policy: 'سياسة الخصوصية',
            title: 'تم رفض الوصول',
            descriptionDenied: 'ليس لديك إذن للوصول إلى هذا المورد. يرجى طلب الإذن من المسؤول.',
            logOut: 'تسجيل الخروج',
            goBack: 'العودة إلى الصفحة السابقة'
        },
        toast: {
            fail: {
                authentication: 'فشل المصادقة',
                authenticationDescription: 'يرجى الاتصال بخدمة العملاء لإضافة حسابك.'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'محادثة جديدة',
                searchAgent: 'البحث عن وكلاء',
                logOut: 'تسجيل الخروج',
                openSidebar: 'فتح الشريط الجانبي',
                closeSidebar: 'إغلاق الشريط الجانبي'
            },
            button: {
                cancel: 'إلغاء',
                logOut: 'تسجيل الخروج'
            },
            dialogue: {
                logOut: {
                    title: 'هل أنت متأكد أنك تريد تسجيل الخروج؟',
                    description:
                        'سيعيدك هذا الإجراء إلى شاشة تسجيل الدخول، ويمكنك تسجيل الدخول مرة أخرى في أي وقت.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'محادثة جديدة'
            },
            button: {
                unpinAgent: 'إخفاء من الشريط الجانبي',
                searchAgent: 'البحث عن وكلاء',
                renameConversation: 'إعادة التسمية',
                deleteConversation: 'حذف',
                cancel: 'إلغاء'
            },
            label: {
                loadingConversation: 'جارٍ تحميل المحادثات',
                createdTime: {
                    today: 'اليوم',
                    yesterday: 'أمس',
                    thisWeek: 'آخر 7 أيام',
                    thisMonth: 'آخر 30 يومًا'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'هل تريد بالتأكيد حذف هذه المحادثة؟',
                    description:
                        'هل تريد بالتأكيد حذف هذه المحادثة؟ سيؤدي هذا الإجراء إلى حذف البيانات نهائيًا.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'الوكلاء الخاصين بي',
                createAgent: 'إنشاء وكيل',
                seeMore: 'عرض المزيد',
                newChat: 'بدء محادثة',
                pinAgent: 'تثبيت في الشريط الجانبي',
                unpinAgent: 'إخفاء من الشريط الجانبي',
                copyLink: 'نسخ الرابط'
            },
            label: {
                title: 'الوكيل',
                description:
                    'ابحث وأنشئ نسخًا مخصصة من الوكلاء التي تجمع بين التعليمات والمعرفة الإضافية ومهارات متعددة.',
                searchAgent: 'البحث عن وكلاء',
                createdAgents: 'تم الإنشاء بواسطة',
                sharedAgents: 'تمت مشاركته معي',
                noAgent: 'لا توجد وكلاء متاحين',
                hasCreated: 'تم الإنشاء بواسطة {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'مسودة',
                published: 'منشور'
            },
            button: {
                createAgent: 'إنشاء وكيل',
                seeMore: 'عرض المزيد',
                cancel: 'إلغاء',
                deleteAgent: 'حذف'
            },
            label: {
                title: 'الوكلاء الخاصين بي',
                createdByMe: 'تم الإنشاء بواسطتي',
                sharedWithMe: 'تمت مشاركته معي',
                createAgent: 'قم بتخصيص إصدارات الوكلاء لأغراض محددة.',
                onlyMe: 'أنا فقط',
                shared: 'مشارك مع مجموعات وأفراد لديهم حقوق الوصول',
                noCreatedAgents: 'لم يتم إنشاء أي وكلاء حتى الآن',
                noSharedAgents: 'لم يتم مشاركة أي وكلاء معك حتى الآن',
                hasCreated: 'تم الإنشاء بواسطة {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'هل أنت متأكد أنك تريد حذف هذا الوكيل؟',
                    description: 'لا يمكن التراجع عن هذا الإجراء. سيتم حذف بيانات الوكيل نهائيًا.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'محادثة جديدة',
                editAgent: 'تعديل الوكيل',
                pinAgent: 'تثبيت في الشريط الجانبي',
                unpinAgent: 'إخفاء من الشريط الجانبي',
                copyLink: 'نسخ الرابط'
            },
            tooltip: {
                uploadFile: 'إرفاق ملف',
                uploadImage: 'إرفاق صورة'
            },
            button: {
                rcm1: 'أين تقع اليابان في آسيا؟',
                rcm2: 'عد الأعداد الأولية من 0 إلى 100',
                rcm3: 'نص لدعوة صديق لحفل زفاف',
                downloadFile: 'تحميل'
            },
            label: {
                greeting: 'مرحبًا، كيف يمكنني مساعدتك اليوم؟',
                chatPlaceholder: 'اكتب رسالة',
                agentChatPlaceholder: ' في انتظار رسالتك',
                copyCode: 'نسخ الكود',
                copyCodeDone: 'تم النسخ!',
                hasCreated: 'تم الإنشاء بواسطة {person}'
            }
        },
        userSettings: {
            groupManage: 'إدارة المجموعات',
            agentManage: 'إدارة الوكلاء',
            settings: {
                title: 'الإعدادات',
                general: 'عام',
                language: 'اللغة'
            },
            logOut: 'تسجيل الخروج'
        },
        toast: {
            success: {
                pinAgent: 'تم تثبيت الوكيل في الشريط الجانبي',
                unpinAgent: 'تم إزالة الوكيل من الشريط الجانبي',
                linkCopy: 'تم نسخ الرابط إلى الحافظة',
                updateAgentAcl: 'تمت مشاركة الوكيل مع الأشخاص والمجموعات المحددة',
                deleteConversation: 'تم الحذف بنجاح',
                deleteConversationDescription: 'تم حذف المحادثة'
            },
            fail: {
                generalErrorTitle: 'خطأ',
                fileExtensionInvalid: 'امتداد غير صالح',
                imageSizeInvalid: 'حجم الصورة يتجاوز 20 ميجابايت.',
                generalError: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
                uploadFileFailSingle: 'تعذر تحميل {fileName}. يرجى المحاولة مرة أخرى.',
                uploadFileFailPlural:
                    'تعذر تحميل الملفات التالية: {fileName}. يرجى المحاولة مرة أخرى.',
                pinAgent: 'تعذر تثبيت الوكيل في الشريط الجانبي'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: 'المجموعات'
        },
        dialog: {
            createGroupDialogHeader: 'إنشاء مجموعة جديدة',
            createGroupNamePlaceholder: 'اسم المجموعة',
            createGroupButtonLabel: 'إنشاء',
            createGroupNameEmpty: 'اسم المجموعة مطلوب'
        },
        // علامة تبويب وكلائي في المجموعة
        myAgentsTab: {
            tabLabel: 'وكلائي',
            searchAgentPlaceholder: 'بحث عن الوكلاء',
            tabTitle: 'أفضل الاختيارات',
            searchQueryDialog: {
                pinButtonTitle: 'تثبيت في الشريط الجانبي',
                copyButtonTitle: 'نسخ الرابط',
                startChattingButtonTitle: 'بدء الدردشة',
                creatorLabel: 'أُنشئ'
            },
            myAgentDialog: {
                pinButtonTitle: 'تثبيت في الشريط الجانبي',
                copyButtonTitle: 'نسخ الرابط',
                startChattingButtonTitle: 'بدء الدردشة'
            },
            groupAgentFavoriteTitle: 'المفضلات في مجموعة {groupName}',
            groupAgentFavoriteSubTitle: 'أكثر الوكلاء شعبية في مجموعة {groupName}'
        },
        // علامة تبويب الأعضاء في المجموعة
        membersTab: {
            tabLabel: 'الأعضاء',
            groupMembersLabel: 'أعضاء المجموعة',
            memberSingularLabel: 'عضو',
            memberPluralLabel: 'أعضاء',
            allMemberTab: 'جميع الأعضاء',
            searchMemberPlaceHolder: 'بحث عن عضو عبر البريد الإلكتروني',
            tableNameLabel: 'الاسم',
            tableEmailLabel: 'البريد الإلكتروني',
            tableRoleLabel: 'الدور',
            currentUserLabel: 'أنا',
            tableOption: {
                changeMemberRoleLabel: 'تغيير دور العضو',
                removeMemberLabel: 'إزالة {memberName} من المجموعة'
            },
            dialog: {
                addMemberDialogHeader: 'إضافة المزيد من الأعضاء إلى المجموعة {groupName}',
                addMemberDialogDescription:
                    'هذه المجموعة خاصة. يمكن لأعضاء وأدوار معينة فقط استخدام هذه المجموعة',
                searchMemberPlaceHolder: 'بحث عن الأعضاء عبر البريد الإلكتروني',
                addMemberButtonLabel: 'تأكيد',
                leaveGroupDialogHeader: 'هل أنت متأكد أنك تريد مغادرة هذه المجموعة؟',
                leaveGroupButtonLabel: 'مغادرة المجموعة',
                needOneLeaderWarningText: 'تحتاج المجموعة إلى وجود إداري واحد على الأقل',
                removeMemberDialogHeader: 'إزالة العضو',
                removeMemberDialogDescription:
                    'هل أنت متأكد أنك تريد إزالة {memberName} من هذه المجموعة؟',
                removeMemberButtonLabel: 'إزالة',

                importCSV: 'استيراد ملف CSV',
                importCSVDes:
                    "الملف يجب أن يحتوي على بريد إلكتروني ودور في كل سطر. يجب أن يكون الدور 'member'",
                showExampleButtonLabel: 'عرض المثال',
                hideExampleButtonLabel: 'إخفاء المثال',
                uploadCSVButtonLabel: 'تحميل ملف CSV',
                emailRoleText: 'البريد الإلكتروني، الدور'
            }
        },
        // علامة تبويب الإعدادات في المجموعة
        settingsTab: {
            tabLabel: 'الإعدادات',
            updateGroupLabel: 'تحديث المجموعة',
            updateGroupSubLabel: 'يمكنك تغيير اسم مجموعتك',
            deleteGroupLabel: 'حذف المجموعة',
            deleteGroupSubLabel:
                'يمكنك حذف مجموعتك، ولكن كن على علم أن هذا الإجراء لا يمكن التراجع عنه',
            dialog: {
                editDialog: {
                    dialogHeader: 'تغيير اسم المجموعة',
                    currentGroupNameLabel: 'اسم المجموعة الحالي',
                    newGroupNameLabel: 'اسم المجموعة الجديد',
                    newGroupNamePlaceholder: 'أدخل اسم المجموعة الجديد',
                    updateButtonLabel: 'تحديث'
                },
                deleteDialog: {
                    dialogHeader: 'هل أنت متأكد أنك تريد حذف هذه المجموعة؟',
                    dialogDescription: 'سيؤدي هذا الإجراء إلى حذف المجموعة {groupName}',
                    deleteButtonLabel: 'حذف'
                },
                validError: {
                    newGroupNameEmpty: 'لا يمكن أن يكون اسم المجموعة الجديدة فارغًا'
                }
            }
        },
        button: {
            backToChat: 'العودة إلى الدردشة',
            inviteMember: 'دعوة الأعضاء',
            seeMore: 'عرض المزيد',
            cancel: 'إلغاء'
        },
        tooltip: {
            createNewGroup: 'إنشاء مجموعة جديدة'
        },
        unavailableMessage: {
            noGroupMessage: 'لا توجد مجموعة متاحة',
            noAgentMessage: 'لا توجد وكيل متاح',
            noSettingAccessMessage: 'تحتاج إلى أن تكون إداريًا للوصول إلى إعدادات هذه المجموعة',
            noMemberAvailable: 'لا يوجد عضو متاح'
        },
        toast: {
            success: {
                deleteGroup: 'تم حذف المجموعة بنجاح'
            },
            fail: {
                generalErrorTitle: 'خطأ',
                somethingWentWrong: 'حدث خطأ ما، يرجى المحاولة مرة أخرى',
                createGroupFail: 'فشل إنشاء المجموعة',
                editGroupFail: 'فشل تحرير المجموعة',
                deleteGroupFail: 'فشل حذف المجموعة',
                leaveGroupFail: 'فشل مغادرة المجموعة'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'عميل جديد',
            activeStatusLive: 'مباشر',
            activeStatusDraft: 'مسودة',
            activeStatusPublishOnlyMe: 'فقط أنا',
            activeStatusPublishAnyoneWithPermission: 'أي شخص أو مجموعات لديها إذن',
            activeStatusPublishEveryone: 'الجميع'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'تثبيت في الشريط الجانبي',
                unpinAgentButtonLabel: 'إلغاء التثبيت',
                deleteAgentButtonLabel: 'حذف العميل'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'حذف العميل',
                deleteAgentDialogDescription:
                    'هل أنت متأكد أنك تريد حذف هذا العميل؟ لا يمكن التراجع عن هذا الإجراء'
            },
            share: {
                shareAgentDialogHeader: 'مشاركة عميلتي',
                shareAgentToPeopleButtonLabel: 'مشاركة مع الأشخاص',
                shareAgentGeneralAccess: 'وصول عام',
                shareStatusRestrictedLabel: 'مقيد',
                shareStatusRestrictedSubLabel:
                    'يمكن فقط للأشخاص والمجموعات الذين لديهم وصول فتح الرابط',
                shareStatusAnyoneLabel: 'أي شخص',
                shareStatusAnyoneSubLabel: 'يمكن لأي شخص في الشركة لديه الرابط العرض',
                peopleTab: {
                    addPeoplePlaceholder: 'إضافة أشخاص',
                    peopleListLabel: 'قائمة الأشخاص',
                    option: {
                        canChatLabel: 'يمكن الدردشة',
                        canChatSubLabel: 'يمكن للمستخدم الدردشة مع هذا العميل',
                        canEditLabel: 'يمكن تحرير محتوى العميل',
                        canEditSubLabel: 'عرض محتوى العميل، تكرار العميل، دردشة',
                        removeGroupLabel: 'إزالة المجموعة'
                    }
                },
                shareAgentToGroupsButtonLabel: 'مشاركة مع المجموعات',
                groupsTab: {
                    addGroupPlaceholder: 'إضافة مجموعات',
                    groupListLabel: 'قائمة المجموعات',
                    option: {
                        canChatLabel: 'يمكن الدردشة',
                        canChatSubLabel: 'يمكن للمستخدم الدردشة مع هذا العميل',
                        canEditLabel: 'يمكن تحرير محتوى العميل',
                        canEditSubLabel: 'عرض محتوى العميل، تكرار العميل، دردشة',
                        removeGroupLabel: 'إزالة المجموعة'
                    }
                }
            },
            update: {
                updateDialogHeader: 'تم تحديث العميل',
                agentCreator: ' تم إنشاؤه بواسطة',
                accessLabel: 'الوصول',
                updateStatusOnlyMe: 'فقط أنا',
                updateStatusAnyoneWithPermission: 'أي شخص أو مجموعات لديها إذن',
                updateStatusEveryone: 'الجميع',
                pinButtonLabel: 'تثبيت في الشريط الجانبي',
                startConversationLabel: 'بدء المحادثة'
            }
        },

        nameLabel: 'الاسم',
        namePlaceholder: 'قم بتسمية عميلك',
        descriptionLabel: 'الوصف',
        descriptionPlaceholder: 'أضف وصفًا قصيرًا لما يفعله هذا العميل',
        instructionLabel: 'التعليمات',
        instructionPlaceholder: 'ماذا يفعل هذا العميل؟ كيف يتصرف؟ ماذا يجب أن يتجنب القيام به؟',
        knowledgeLabel: 'المعرفة',
        knowledgeSubLabel:
            'إذا قمت بتحميل ملفات تحت المعرفة، فقد تشمل المحادثات مع عميلك محتويات الملفات. يمكن تنزيل الملفات',
        savingDraftLabel: 'جارٍ حفظ المسودة',

        validError: {
            nameTooLong: 'يجب ألا يتجاوز اسم Agent 50 حرفًا.',
            desTooLong: 'يجب ألا يتجاوز وصف Agent 300 حرفًا.',
            insTooLong: 'يجب ألا تتجاوز تعليمات Agent 8000 حرف.'
        },

        button: {
            shareButtonLabel: 'مشاركة',
            updateButtonLabel: 'تحديث',
            publishButtonLabel: 'نشر',
            copyLinkButtonLabel: 'نسخ الرابط',
            saveButtonLabel: 'حفظ',
            uploadFileButtonLabel: 'تحميل الملفات',
            cancelButtonLabel: 'إلغاء',
            deleteButtonLabel: 'حذف'
        },
        toast: {
            success: {
                createAgent: 'تم إنشاء العميل بنجاح',
                updateAgent: 'تم تحديث العميل بنجاح',
                deleteAgent: 'تم حذف العميل بنجاح'
            },
            fail: {
                publishAgent:
                    'خطأ غير متوقع: لا يمكن نشر هذه المسودة للعميل. يرجى المحاولة مرة أخرى',
                retrieveAgent:
                    'خطأ غير متوقع: لا يمكن استرجاع بيانات العميل. يرجى المحاولة مرة أخرى.',
                createAgent: 'خطأ غير متوقع: لا يمكن تهيئة هذا العميل. يرجى المحاولة مرة أخرى.',
                updateAgent: 'خطأ غير متوقع: لا يمكن تحديث العميل. يرجى المحاولة مرة أخرى.'
            }
        }
    }
};
