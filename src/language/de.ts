export default {
    login: {
        button: {
            signIn: 'Mit Azure AD fortfahren'
        },
        label: {
            signIn: 'Anmelden',
            description: 'Indem Sie auf Fortfahren klicken, stimmen Sie unseren',
            and: 'und',
            terms: 'Nutzungsbedingungen',
            policy: 'Datenschutzrichtlinie',
            title: 'Zugriff verweigert',
            descriptionDenied:
                'Sie haben keine Berechtigung, auf diese Ressource zuzugreifen. Bitte beantragen Sie Zugriff beim Administrator.',
            logOut: 'Abmelden',
            goBack: 'Zurück zur vorherigen Seite'
        },
        toast: {
            fail: {
                authentication: 'Authentifizierungsfehler',
                authenticationDescription:
                    'Bitte wenden Sie sich an den Kundenservice, um Ihr Konto hinzuzufügen.'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'Neues Gespräch',
                searchAgent: 'Agenten suchen',
                logOut: 'Abmelden',
                openSidebar: 'Seitenleiste öffnen',
                closeSidebar: 'Seitenleiste schliessen'
            },
            button: {
                cancel: 'Abbrechen',
                logOut: 'Abmelden'
            },
            dialogue: {
                logOut: {
                    title: 'Möchten Sie sich wirklich abmelden?',
                    description:
                        'Diese Aktion bringt Sie zum Anmeldebildschirm zurück, und Sie können sich jederzeit erneut anmelden.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'Neues Gespräch'
            },
            button: {
                unpinAgent: 'Von der Seitenleiste entfernen',
                searchAgent: 'Agenten suchen',
                renameConversation: 'Umbenennen',
                deleteConversation: 'Löschen',
                cancel: 'Abbrechen'
            },
            label: {
                loadingConversation: 'Gespräche werden geladen',
                createdTime: {
                    today: 'Heute',
                    yesterday: 'Gestern',
                    thisWeek: 'Letzte 7 Tage',
                    thisMonth: 'Letzte 30 Tage'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'Möchten Sie dieses Gespräch wirklich löschen?',
                    description:
                        'Möchten Sie dieses Gespräch wirklich löschen? Diese Aktion wird die Daten dauerhaft löschen.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'Meine Agenten',
                createAgent: 'Agent erstellen',
                seeMore: 'Mehr anzeigen',
                newChat: 'Gespräch starten',
                pinAgent: 'An Seitenleiste anheften',
                unpinAgent: 'Von der Seitenleiste entfernen',
                copyLink: 'Link kopieren'
            },
            label: {
                title: 'Agent',
                description:
                    'Suchen und erstellen Sie benutzerdefinierte Versionen von Agenten, die Anweisungen, zusätzliches Wissen und mehrere Fähigkeiten kombinieren.',
                searchAgent: 'Agenten suchen',
                createdAgents: 'Von mir erstellt',
                sharedAgents: 'Mit mir geteilt',
                noAgent: 'Keine verfügbaren Agenten',
                hasCreated: 'Erstellt von {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'Entwurf',
                published: 'Veröffentlicht'
            },
            button: {
                createAgent: 'Agent erstellen',
                seeMore: 'Mehr anzeigen',
                cancel: 'Abbrechen',
                deleteAgent: 'Löschen'
            },
            label: {
                title: 'Meine Agenten',
                createdByMe: 'Von mir erstellt',
                sharedWithMe: 'Mit mir geteilt',
                createAgent: 'Passen Sie Agenten-Versionen für spezifische Zwecke an.',
                onlyMe: 'Nur ich',
                shared: 'Mit Gruppen und Personen mit Zugriffrechten geteilt',
                noCreatedAgents: 'Noch keine Agenten erstellt',
                noSharedAgents: 'Es wurden noch keine Agenten mit Ihnen geteilt',
                hasCreated: 'Erstellt von {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'Möchten Sie diesen Agenten wirklich löschen?',
                    description:
                        'Diese Aktion kann nicht rückgängig gemacht werden. Die Agenten-Daten werden dauerhaft gelöscht.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'Neues Gespräch',
                editAgent: 'Agent bearbeiten',
                pinAgent: 'An Seitenleiste anheften',
                unpinAgent: 'Von der Seitenleiste entfernen',
                copyLink: 'Link kopieren'
            },
            tooltip: {
                uploadFile: 'Datei anhängen',
                uploadImage: 'Bild anhängen'
            },
            button: {
                rcm1: 'Wo liegt Japan in Asien?',
                rcm2: 'Zählen Sie die Primzahlen von 0 bis 100',
                rcm3: 'Text, um einen Freund zu einer Hochzeit einzuladen',
                downloadFile: 'Herunterladen'
            },
            label: {
                greeting: 'Hallo, wie kann ich Ihnen heute helfen?',
                chatPlaceholder: 'Nachricht eingeben',
                agentChatPlaceholder: ' wartet auf Ihre Nachricht',
                copyCode: 'Code kopieren',
                copyCodeDone: 'Kopiert!',
                hasCreated: 'Erstellt von {person}'
            }
        },
        userSettings: {
            groupManage: 'Gruppen verwalten',
            agentManage: 'Agenten verwalten',
            settings: {
                title: 'Einstellungen',
                general: 'Allgemein',
                language: 'Sprache'
            },
            logOut: 'Abmelden'
        },
        toast: {
            success: {
                pinAgent: 'Der Agent wurde an die Seitenleiste angeheftet',
                unpinAgent: 'Der Agent wurde von der Seitenleiste entfernt',
                linkCopy: 'Der Link wurde in die Zwischenablage kopiert',
                updateAgentAcl: 'Der Agent wurde mit den ausgewählten Personen und Gruppen geteilt',
                deleteConversation: 'Erfolgreich gelöscht',
                deleteConversationDescription: 'Das Gespräch wurde gelöscht'
            },
            fail: {
                generalErrorTitle: 'Fehler',
                fileExtensionInvalid: 'Ungültige Dateiendung',
                imageSizeInvalid: 'Die Bildgröße überschreitet 20 MB.',
                generalError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
                uploadFileFailSingle:
                    '{fileName} konnte nicht hochgeladen werden. Bitte versuchen Sie es erneut.',
                uploadFileFailPlural:
                    'Die folgenden Dateien: {fileName} konnten nicht hochgeladen werden. Bitte versuchen Sie es erneut.',
                pinAgent: 'Der Agent konnte nicht an die Seitenleiste angeheftet werden'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: 'Gruppen'
        },
        dialog: {
            createGroupDialogHeader: 'Neue Gruppe erstellen',
            createGroupNamePlaceholder: 'Gruppenname',
            createGroupButtonLabel: 'Erstellen',
            createGroupNameEmpty: 'Gruppenname ist erforderlich'
        },
        // my agent tab in group
        myAgentsTab: {
            tabLabel: 'Meine Agents',
            searchAgentPlaceholder: 'Agents suchen',
            tabTitle: 'Top-Auswahl',
            searchQueryDialog: {
                pinButtonTitle: 'An Seitenleiste anheften',
                copyButtonTitle: 'Link kopieren',
                startChattingButtonTitle: 'Chat starten',
                creatorLabel: 'erstellt'
            },
            myAgentDialog: {
                pinButtonTitle: 'An Seitenleiste anheften',
                copyButtonTitle: 'Link kopieren',
                startChattingButtonTitle: 'Chat starten'
            },
            groupAgentFavoriteTitle: 'Favoriten der Gruppe {groupName}',
            groupAgentFavoriteSubTitle: 'Die beliebtesten Agents der Gruppe {groupName}'
        },
        // members tab in group
        membersTab: {
            tabLabel: 'Mitglieder',
            groupMembersLabel: 'Gruppenmitglieder',
            memberSingularLabel: 'Mitglied',
            memberPluralLabel: 'Mitglieder',
            allMemberTab: 'Alle Mitglieder',
            searchMemberPlaceHolder: 'Mitglied per E-Mail suchen',
            tableNameLabel: 'Name',
            tableEmailLabel: 'E-Mail',
            tableRoleLabel: 'Rolle',
            currentUserLabel: 'Ich',
            tableOption: {
                changeMemberRoleLabel: 'Mitgliedsrolle ändern',
                removeMemberLabel: '{memberName} aus der Gruppe entfernen'
            },
            dialog: {
                addMemberDialogHeader: 'Weitere Mitglieder zur Gruppe {groupName} hinzufügen',
                addMemberDialogDescription:
                    'Diese Gruppe ist privat. Nur bestimmte Mitglieder und Rollen können diese Gruppe nutzen.',
                searchMemberPlaceHolder: 'Mitglieder per E-Mail suchen',
                addMemberButtonLabel: 'Bestätigen',
                leaveGroupDialogHeader: 'Möchten Sie diese Gruppe wirklich verlassen?',
                leaveGroupButtonLabel: 'Gruppe verlassen',
                needOneLeaderWarningText: 'Die Gruppe benötigt mindestens einen ADMIN',
                removeMemberDialogHeader: 'Mitglied entfernen',
                removeMemberDialogDescription:
                    'Sind Sie sicher, dass Sie {memberName} aus dieser Gruppe entfernen möchten?',
                removeMemberButtonLabel: 'Entfernen',

                importCSV: 'CSV-Datei importieren',
                importCSVDes:
                    "Die Datei muss in jeder Zeile eine E-Mail und eine Rolle enthalten. Die Rolle sollte 'member' sein",
                showExampleButtonLabel: 'Beispiel anzeigen',
                hideExampleButtonLabel: 'Beispiel ausblenden',
                uploadCSVButtonLabel: 'CSV hochladen',
                emailRoleText: 'E-Mail, Rolle'
            }
        },
        // settings tab in group
        settingsTab: {
            tabLabel: 'Einstellungen',
            updateGroupLabel: 'Gruppe aktualisieren',
            updateGroupSubLabel: 'Sie können den Gruppennamen ändern',
            deleteGroupLabel: 'Gruppe löschen',
            deleteGroupSubLabel:
                'Sie können Ihre Gruppe löschen, aber beachten Sie, dass diese Aktion nicht rückgängig gemacht werden kann.',
            dialog: {
                editDialog: {
                    dialogHeader: 'Gruppennamen ändern',
                    currentGroupNameLabel: 'Aktueller Gruppenname',
                    newGroupNameLabel: 'Neuer Gruppenname',
                    newGroupNamePlaceholder: 'Neuen Gruppennamen eingeben',
                    updateButtonLabel: 'Aktualisieren'
                },
                deleteDialog: {
                    dialogHeader: 'Sind Sie sicher, dass Sie diese Gruppe löschen möchten?',
                    dialogDescription: 'Diese Aktion wird die Gruppe {groupName} löschen.',
                    deleteButtonLabel: 'Löschen'
                },
                validError: {
                    newGroupNameEmpty: 'Der neue Gruppenname darf nicht leer sein'
                }
            }
        },
        button: {
            backToChat: 'Zurück zum Chat',
            inviteMember: 'Mitglieder einladen',
            seeMore: 'MEHR ANZEIGEN',
            cancel: 'Abbrechen'
        },
        tooltip: {
            createNewGroup: 'Neue Gruppe erstellen'
        },
        unavailableMessage: {
            noGroupMessage: 'Keine Gruppen verfügbar',
            noAgentMessage: 'Keine Agents verfügbar',
            noSettingAccessMessage:
                'Sie müssen ADMIN sein, um auf die Einstellungen dieser Gruppe zuzugreifen.',
            noMemberAvailable: 'Kein Mitglied verfügbar'
        },
        toast: {
            success: {
                deleteGroup: 'Gruppe erfolgreich gelöscht'
            },
            fail: {
                generalErrorTitle: 'Fehler',
                somethingWentWrong: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
                createGroupFail: 'Gruppe konnte nicht erstellt werden',
                editGroupFail: 'Gruppe konnte nicht bearbeitet werden',
                deleteGroupFail: 'Gruppe konnte nicht gelöscht werden',
                leaveGroupFail: 'Das Verlassen der Gruppe ist fehlgeschlagen'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'Neuer Agent',
            activeStatusLive: 'Live',
            activeStatusDraft: 'Entwurf',
            activeStatusPublishOnlyMe: 'Nur ich',
            activeStatusPublishAnyoneWithPermission: 'Jeder mit Berechtigung oder Gruppen',
            activeStatusPublishEveryone: 'Jeder'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'An Seitenleiste anheften',
                unpinAgentButtonLabel: 'Von der Seitenleiste lösen',
                deleteAgentButtonLabel: 'Agent löschen'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'Agent löschen',
                deleteAgentDialogDescription:
                    'Möchten Sie diesen Agenten wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.'
            },
            share: {
                shareAgentDialogHeader: 'Meinen Agenten teilen',
                shareAgentToPeopleButtonLabel: 'Mit Personen teilen',
                shareAgentGeneralAccess: 'Allgemeiner Zugriff',
                shareStatusRestrictedLabel: 'Eingeschränkt',
                shareStatusRestrictedSubLabel:
                    'Nur Personen und Gruppen mit Zugriff können den Link öffnen',
                shareStatusAnyoneLabel: 'Jeder',
                shareStatusAnyoneSubLabel: 'Jeder in der Firma mit dem Link kann es ansehen',
                peopleTab: {
                    addPeoplePlaceholder: 'Personen hinzufügen',
                    peopleListLabel: 'Personenliste',
                    option: {
                        canChatLabel: 'Kann chatten',
                        canChatSubLabel: 'Benutzer können mit diesem Agenten chatten',
                        canEditLabel: 'Agenten-Inhalt bearbeiten',
                        canEditSubLabel: 'Inhalte des Agenten anzeigen, duplizieren, chatten',
                        removeGroupLabel: 'Gruppe entfernen'
                    }
                },
                shareAgentToGroupsButtonLabel: 'Mit Gruppen teilen',
                groupsTab: {
                    addGroupPlaceholder: 'Gruppen hinzufügen',
                    groupListLabel: 'Gruppenliste',
                    option: {
                        canChatLabel: 'Kann chatten',
                        canChatSubLabel: 'Benutzer können mit diesem Agenten chatten',
                        canEditLabel: 'Agenten-Inhalt bearbeiten',
                        canEditSubLabel: 'Inhalte des Agenten anzeigen, duplizieren, chatten',
                        removeGroupLabel: 'Gruppe entfernen'
                    }
                }
            },
            update: {
                updateDialogHeader: 'Agent wurde aktualisiert',
                agentCreator: ' hat erstellt',
                accessLabel: 'Zugriff',
                updateStatusOnlyMe: 'Nur ich',
                updateStatusAnyoneWithPermission: 'Jeder mit Berechtigung oder Gruppen',
                updateStatusEveryone: 'Jeder',
                pinButtonLabel: 'An Seitenleiste anheften',
                startConversationLabel: 'Gespräch starten'
            }
        },

        nameLabel: 'Name',
        namePlaceholder: 'Nennen Sie Ihren Agenten',
        descriptionLabel: 'Beschreibung',
        descriptionPlaceholder: 'Fügen Sie eine kurze Beschreibung hinzu, was dieser Agent macht',
        instructionLabel: 'Anweisungen',
        instructionPlaceholder:
            'Was macht dieser Agent? Wie soll er sich verhalten? Was soll er vermeiden?',
        knowledgeLabel: 'Wissen',
        knowledgeSubLabel:
            'Wenn Sie Dateien unter Wissen hochladen, können Inhalte der Dateien in Gesprächen mit Ihrem Agenten enthalten sein. Dateien können heruntergeladen werden.',
        savingDraftLabel: 'Entwurf wird gespeichert',

        validError: {
            nameTooLong: "Le nom de l'agent doit comporter 50 caractères ou moins.",
            desTooLong: "La description de l'agent doit comporter 300 caractères ou moins.",
            insTooLong: "Les instructions de l'agent doivent comporter 8000 caractères ou moins."
        },

        button: {
            shareButtonLabel: 'Teilen',
            updateButtonLabel: 'Aktualisieren',
            publishButtonLabel: 'Veröffentlichen',
            copyLinkButtonLabel: 'Link kopieren',
            saveButtonLabel: 'Speichern',
            uploadFileButtonLabel: 'Dateien hochladen',
            cancelButtonLabel: 'Abbrechen',
            deleteButtonLabel: 'Löschen'
        },
        toast: {
            success: {
                createAgent: 'Agent wurde erfolgreich erstellt',
                updateAgent: 'Agent wurde erfolgreich aktualisiert',
                deleteAgent: 'Agent wurde erfolgreich gelöscht'
            },
            fail: {
                publishAgent:
                    'Unerwarteter Fehler: Entwurfsagent kann nicht veröffentlicht werden. Bitte versuchen Sie es erneut.',
                retrieveAgent:
                    'Unerwarteter Fehler: Agent-Daten können nicht abgerufen werden. Bitte versuchen Sie es erneut.',
                createAgent:
                    'Unerwarteter Fehler: Agent kann nicht initialisiert werden. Bitte versuchen Sie es erneut.',
                updateAgent:
                    'Unerwarteter Fehler: Agent kann nicht aktualisiert werden. Bitte versuchen Sie es erneut.'
            }
        }
    }
};
