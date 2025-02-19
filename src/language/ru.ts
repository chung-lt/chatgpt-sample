export default {
    login: {
        button: {
            signIn: 'Продолжить с Azure AD'
        },
        label: {
            signIn: 'Войти',
            description: 'Нажимая "Продолжить", вы соглашаетесь с нашими',
            and: 'и',
            terms: 'Условиями использования',
            policy: 'Политикой конфиденциальности',
            title: 'Доступ запрещён',
            descriptionDenied:
                'У вас нет разрешения на доступ к этому ресурсу. Пожалуйста, запросите разрешение у администратора.',
            logOut: 'Выйти',
            goBack: 'Вернуться на предыдущую страницу'
        },
        toast: {
            fail: {
                authentication: 'Ошибка аутентификации',
                authenticationDescription:
                    'Пожалуйста, свяжитесь с клиентской службой, чтобы добавить ваш аккаунт.'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'Новый чат',
                searchAgent: 'Найти агента',
                logOut: 'Выйти',
                openSidebar: 'Открыть боковую панель',
                closeSidebar: 'Закрыть боковую панель'
            },
            button: {
                cancel: 'Отменить',
                logOut: 'Выйти'
            },
            dialogue: {
                logOut: {
                    title: 'Вы уверены, что хотите выйти?',
                    description:
                        'Это действие вернёт вас на экран входа. Вы сможете войти снова в любое время.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'Новый чат'
            },
            button: {
                unpinAgent: 'Убрать из боковой панели',
                searchAgent: 'Найти агента',
                renameConversation: 'Переименовать',
                deleteConversation: 'Удалить',
                cancel: 'Отменить'
            },
            label: {
                loadingConversation: 'Загрузка бесед',
                createdTime: {
                    today: 'Сегодня',
                    yesterday: 'Вчера',
                    thisWeek: 'Последние 7 дней',
                    thisMonth: 'Последние 30 дней'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'Вы уверены, что хотите удалить эту беседу?',
                    description:
                        'Вы уверены, что хотите удалить эту беседу? Это действие навсегда удалит данные.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'Мои агенты',
                createAgent: 'Создать агента',
                seeMore: 'Показать больше',
                newChat: 'Начать беседу',
                pinAgent: 'Закрепить на боковой панели',
                unpinAgent: 'Убрать из боковой панели',
                copyLink: 'Копировать ссылку'
            },
            label: {
                title: 'Агент',
                description:
                    'Ищите и создавайте настраиваемые версии агентов, которые объединяют инструкции, дополнительные знания и разнообразные навыки.',
                searchAgent: 'Найти агента',
                createdAgents: 'Создано мной',
                sharedAgents: 'Поделено со мной',
                noAgent: 'Нет доступных агентов',
                hasCreated: 'Создано {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'Черновик',
                published: 'Опубликовано'
            },
            button: {
                createAgent: 'Создать агента',
                seeMore: 'Показать больше',
                cancel: 'Отменить',
                deleteAgent: 'Удалить'
            },
            label: {
                title: 'Мои агенты',
                createdByMe: 'Создано мной',
                sharedWithMe: 'Поделено со мной',
                createAgent: 'Настройте версии агентов для определённых задач',
                onlyMe: 'Только я',
                shared: 'Поделено с группами и лицами, имеющими права доступа',
                noCreatedAgents: 'Ещё не создано агентов',
                noSharedAgents: 'С вами ещё не поделились агентами',
                hasCreated: 'Создано {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'Вы уверены, что хотите удалить этого агента?',
                    description: 'Это действие необратимо. Данные агента будут удалены навсегда.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'Новый чат',
                editAgent: 'Редактировать агента',
                pinAgent: 'Закрепить на боковой панели',
                unpinAgent: 'Убрать из боковой панели',
                copyLink: 'Копировать ссылку'
            },
            tooltip: {
                uploadFile: 'Прикрепить файл',
                uploadImage: 'Прикрепить изображение'
            },
            button: {
                rcm1: 'Где находится Япония в Азии?',
                rcm2: 'Посчитать простые числа от 0 до 100',
                rcm3: 'Текст для приглашения друга на свадьбу',
                downloadFile: 'Скачать'
            },
            label: {
                greeting: 'Здравствуйте, чем я могу вам помочь сегодня?',
                chatPlaceholder: 'Введите сообщение',
                agentChatPlaceholder: ' ждёт вашего сообщения',
                copyCode: 'Копировать код',
                copyCodeDone: 'Скопировано!',
                hasCreated: 'Создано {person}'
            }
        },
        userSettings: {
            groupManage: 'Управление группами',
            agentManage: 'Управление агентами',
            settings: {
                title: 'Настройки',
                general: 'Общие',
                language: 'Язык'
            },
            logOut: 'Выйти'
        },
        toast: {
            success: {
                pinAgent: 'Агент закреплён на боковой панели',
                unpinAgent: 'Агент удалён с боковой панели',
                linkCopy: 'Ссылка скопирована в буфер обмена',
                updateAgentAcl: 'Агент поделён с выбранными людьми и группами',
                deleteConversation: 'Успешно удалено',
                deleteConversationDescription: 'Беседа удалена'
            },
            fail: {
                generalErrorTitle: 'Ошибка',
                fileExtensionInvalid: 'Недопустимое расширение',
                imageSizeInvalid: 'Размер изображения превышает 20MB.',
                generalError: 'Произошла ошибка. Пожалуйста, попробуйте ещё раз.',
                uploadFileFailSingle:
                    '{fileName} не удалось загрузить. Пожалуйста, попробуйте ещё раз.',
                uploadFileFailPlural:
                    'Следующие файлы: {fileName} не удалось загрузить. Пожалуйста, попробуйте ещё раз.',
                pinAgent: 'Не удалось закрепить агента на боковой панели'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: 'Группы'
        },
        dialog: {
            createGroupDialogHeader: 'Создать новую группу',
            createGroupNamePlaceholder: 'Название группы',
            createGroupButtonLabel: 'Создать',
            createGroupNameEmpty: 'Название группы обязательно'
        },
        // моя вкладка агента в группе
        myAgentsTab: {
            tabLabel: 'Мои агенты',
            searchAgentPlaceholder: 'Поиск агентов',
            tabTitle: 'Лучшие варианты',
            searchQueryDialog: {
                pinButtonTitle: 'Закрепить в боковой панели',
                copyButtonTitle: 'Копировать ссылку',
                startChattingButtonTitle: 'Начать чат',
                creatorLabel: 'создано'
            },
            myAgentDialog: {
                pinButtonTitle: 'Закрепить в боковой панели',
                copyButtonTitle: 'Копировать ссылку',
                startChattingButtonTitle: 'Начать чат'
            },
            groupAgentFavoriteTitle: 'Избранное группы {groupName}',
            groupAgentFavoriteSubTitle: 'Самые популярные агенты группы {groupName}'
        },
        // вкладка участников в группе
        membersTab: {
            tabLabel: 'Участники',
            groupMembersLabel: 'Участники группы',
            memberSingularLabel: 'участник',
            memberPluralLabel: 'участники',
            allMemberTab: 'Все участники',
            searchMemberPlaceHolder: 'Поиск участника по электронной почте',
            tableNameLabel: 'Имя',
            tableEmailLabel: 'Электронная почта',
            tableRoleLabel: 'Роль',
            currentUserLabel: 'Я',
            tableOption: {
                changeMemberRoleLabel: 'Изменить роль участника',
                removeMemberLabel: 'Удалить {memberName} из группы'
            },
            dialog: {
                addMemberDialogHeader: 'Добавить больше участников в группу {groupName}',
                addMemberDialogDescription:
                    'Эта группа частная. Только определенные участники и роли могут использовать эту группу',
                searchMemberPlaceHolder: 'Поиск участников по электронной почте',
                addMemberButtonLabel: 'Подтвердить',
                leaveGroupDialogHeader: 'Вы уверены, что хотите покинуть эту группу?',
                leaveGroupButtonLabel: 'Покинуть группу',
                needOneLeaderWarningText: 'Группе нужен хотя бы один АДМИН',
                removeMemberDialogHeader: 'Удалить участника',
                removeMemberDialogDescription:
                    'Вы уверены, что хотите удалить {memberName} из этой группы?',
                removeMemberButtonLabel: 'Удалить',

                importCSV: 'Импортировать CSV файл',
                importCSVDes:
                    "Файл должен содержать email и роль в каждой строке. Роль должна быть 'member'",
                showExampleButtonLabel: 'Показать пример',
                hideExampleButtonLabel: 'Скрыть пример',
                uploadCSVButtonLabel: 'Загрузить CSV',
                emailRoleText: 'Электронная почта, Роль'
            }
        },
        // вкладка настроек в группе
        settingsTab: {
            tabLabel: 'Настройки',
            updateGroupLabel: 'Обновить группу',
            updateGroupSubLabel: 'Вы можете изменить название своей группы',
            deleteGroupLabel: 'Удалить группу',
            deleteGroupSubLabel:
                'Вы можете удалить свою группу, но имейте в виду, что это действие нельзя отменить',
            dialog: {
                editDialog: {
                    dialogHeader: 'Изменить название группы',
                    currentGroupNameLabel: 'Текущее название группы',
                    newGroupNameLabel: 'Новое название группы',
                    newGroupNamePlaceholder: 'Введите новое название группы',
                    updateButtonLabel: 'Обновить'
                },
                deleteDialog: {
                    dialogHeader: 'Вы уверены, что хотите удалить эту группу?',
                    dialogDescription: 'Это действие удалит группу {groupName}',
                    deleteButtonLabel: 'Удалить'
                },
                validError: {
                    newGroupNameEmpty: 'Новое название группы не может быть пустым'
                }
            }
        },
        button: {
            backToChat: 'Назад к чату',
            inviteMember: 'Пригласить участников',
            seeMore: 'ПОСМОТРЕТЬ БОЛЬШЕ',
            cancel: 'Отмена'
        },
        tooltip: {
            createNewGroup: 'Создать новую группу'
        },
        unavailableMessage: {
            noGroupMessage: 'Нет доступных групп',
            noAgentMessage: 'Нет доступных агентов',
            noSettingAccessMessage:
                'Вам нужно быть АДМИНОМ, чтобы получить доступ к настройкам этой группы',
            noMemberAvailable: 'Нет доступных участников'
        },
        toast: {
            success: {
                deleteGroup: 'Группа успешно удалена'
            },
            fail: {
                generalErrorTitle: 'Ошибка',
                somethingWentWrong: 'Что-то пошло не так, пожалуйста, попробуйте снова',
                createGroupFail: 'Создание группы не удалось',
                editGroupFail: 'Редактирование группы не удалось',
                deleteGroupFail: 'Удаление группы не удалось',
                leaveGroupFail: 'Не удалось покинуть группу'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'Новый агент',
            activeStatusLive: 'В эфире',
            activeStatusDraft: 'Черновик',
            activeStatusPublishOnlyMe: 'Только для меня',
            activeStatusPublishAnyoneWithPermission: 'Любой или группы с разрешением',
            activeStatusPublishEveryone: 'Все'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'Закрепить в боковой панели',
                unpinAgentButtonLabel: 'Убрать закрепление',
                deleteAgentButtonLabel: 'Удалить агента'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'Удалить агента',
                deleteAgentDialogDescription:
                    'Вы уверены, что хотите удалить этого агента? Это действие нельзя отменить'
            },
            share: {
                shareAgentDialogHeader: 'Поделиться моим агентом',
                shareAgentToPeopleButtonLabel: 'Поделиться с людьми',
                shareAgentGeneralAccess: 'Общий доступ',
                shareStatusRestrictedLabel: 'Ограниченный',
                shareStatusRestrictedSubLabel:
                    'Только люди и группы с доступом могут открыть по ссылке',
                shareStatusAnyoneLabel: 'Любой',
                shareStatusAnyoneSubLabel: 'Любой в компании с ссылкой может просмотреть',
                peopleTab: {
                    addPeoplePlaceholder: 'Добавить людей',
                    peopleListLabel: 'Список людей',
                    option: {
                        canChatLabel: 'Может чатиться',
                        canChatSubLabel: 'Пользователь может чатиться с этим агентом',
                        canEditLabel: 'Может редактировать содержимое агента',
                        canEditSubLabel: 'Показать содержимое агента, дублировать агента, чатиться',
                        removeGroupLabel: 'Удалить группу'
                    }
                },
                shareAgentToGroupsButtonLabel: 'Поделиться с группами',
                groupsTab: {
                    addGroupPlaceholder: 'Добавить группы',
                    groupListLabel: 'Список групп',
                    option: {
                        canChatLabel: 'Может чатиться',
                        canChatSubLabel: 'Пользователь может чатиться с этим агентом',
                        canEditLabel: 'Может редактировать содержимое агента',
                        canEditSubLabel: 'Показать содержимое агента, дублировать агента, чатиться',
                        removeGroupLabel: 'Удалить группу'
                    }
                }
            },
            update: {
                updateDialogHeader: 'Агент был обновлен',
                agentCreator: ' создал',
                accessLabel: 'Доступ',
                updateStatusOnlyMe: 'Только для меня',
                updateStatusAnyoneWithPermission: 'Любой или группы с разрешением',
                updateStatusEveryone: 'Все',
                pinButtonLabel: 'Закрепить в боковой панели',
                startConversationLabel: 'Начать разговор'
            }
        },

        nameLabel: 'Имя',
        namePlaceholder: 'Назовите своего агента',
        descriptionLabel: 'Описание',
        descriptionPlaceholder: 'Добавьте короткое описание того, что делает этот агент',
        instructionLabel: 'Инструкции',
        instructionPlaceholder:
            'Что делает этот агент? Как он себя ведет? Чего ему следует избегать?',
        knowledgeLabel: 'Знания',
        knowledgeSubLabel:
            'Если вы загружаете файлы в разделе Знания, разговоры с вашим агентом могут включать содержимое файлов. Файлы могут быть загружены',
        savingDraftLabel: 'Сохранение черновика',

        validError: {
            nameTooLong: 'Имя Agent должно содержать не более 50 символов.',
            desTooLong: 'Описание Agent должно содержать не более 300 символов.',
            insTooLong: 'Инструкции для Agent должны содержать не более 8000 символов.'
        },

        button: {
            shareButtonLabel: 'Поделиться',
            updateButtonLabel: 'Обновить',
            publishButtonLabel: 'Опубликовать',
            copyLinkButtonLabel: 'Скопировать ссылку',
            saveButtonLabel: 'Сохранить',
            uploadFileButtonLabel: 'Загрузить файлы',
            cancelButtonLabel: 'Отмена',
            deleteButtonLabel: 'Удалить'
        },
        toast: {
            success: {
                createAgent: 'Агент успешно создан',
                updateAgent: 'Агент успешно обновлен',
                deleteAgent: 'Агент успешно удален'
            },
            fail: {
                publishAgent:
                    'Неожиданная ошибка: Не удается опубликовать этот черновик агента. Пожалуйста, попробуйте снова',
                retrieveAgent:
                    'Неожиданная ошибка: Не удается получить данные агента. Пожалуйста, попробуйте снова.',
                createAgent:
                    'Неожиданная ошибка: Не удается инициализировать этого агента. Пожалуйста, попробуйте снова.',
                updateAgent:
                    'Неожиданная ошибка: Не удается обновить агента. Пожалуйста, попробуйте снова.'
            }
        }
    }
};
