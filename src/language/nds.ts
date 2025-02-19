export default {
    login: {
        button: {
            signIn: 'Weiter mit Azure AD'
        },
        label: {
            signIn: 'Anmelden',
            description: 'Indem Sie auf „Weiter“ klicken, stimmen Sie unseren',
            and: 'und',
            terms: 'Nutzungsbedingungen',
            policy: 'Datenschutzrichtlinien',
            title: 'Zugriff verweigert',
            descriptionDenied:
                'Sie haben keine Berechtigung, auf diese Ressource zuzugreifen. Bitte wenden Sie sich an den Administrator, um Zugriff zu beantragen.',
            logOut: 'Abmelden',
            goBack: 'Zurück zur vorherigen Seite'
        },
        toast: {
            fail: {
                authentication: 'Authentifizierungsfehler',
                authenticationDescription:
                    'Bitte wenden Sie sich an den Kundendienst, um Ihr Konto hinzuzufügen'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'Neuer Chat',
                searchAgent: 'Agenten suchen',
                logOut: 'Abmelden',
                openSidebar: 'Seitenleiste öffnen',
                closeSidebar: 'Seitenleiste schließen'
            },
            button: {
                cancel: 'Abbrechen',
                logOut: 'Abmelden'
            },
            dialogue: {
                logOut: {
                    title: 'Sind Sie sicher, dass Sie sich abmelden möchten?',
                    description:
                        'Diese Aktion führt Sie zurück zum Anmeldebildschirm, und Sie können sich jederzeit wieder anmelden.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'Neuer Chat'
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
                    title: 'Sind Sie sicher, dass Sie dieses Gespräch löschen möchten?',
                    description:
                        'Sind Sie sicher, dass Sie dieses Gespräch löschen möchten? Diese Aktion wird die Daten dauerhaft löschen.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'Meine Agenten',
                createAgent: 'Agent erstellen',
                seeMore: 'Mehr anzeigen',
                newChat: 'Chat starten',
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
                noAgent: 'Keine Agenten verfügbar',
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
                createAgent: 'Passen Sie Agentenversionen für bestimmte Zwecke an',
                onlyMe: 'Nur ich',
                shared: 'Mit Gruppen und Einzelpersonen mit Zugriffsrechten geteilt',
                noCreatedAgents: 'Es wurden noch keine Agenten erstellt',
                noSharedAgents: 'Es wurden noch keine Agenten mit Ihnen geteilt',
                hasCreated: 'Erstellt von {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'Sind Sie sicher, dass Sie diesen Agenten löschen möchten?',
                    description:
                        'Diese Aktion kann nicht rückgängig gemacht werden. Die Agentendaten werden dauerhaft gelöscht.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'Neuer Chat',
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
                rcm2: 'Primzahlen von 0 bis 100 zählen',
                rcm3: 'Text, um einen Freund zur Hochzeit einzuladen',
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
                pinAgent: 'Agent wurde an der Seitenleiste angeheftet',
                unpinAgent: 'Agent wurde von der Seitenleiste entfernt',
                linkCopy: 'Link wurde in die Zwischenablage kopiert',
                updateAgentAcl: 'Agent wurde für ausgewählte Personen und Gruppen freigegeben',
                deleteConversation: 'Erfolgreich gelöscht',
                deleteConversationDescription: 'Das Gespräch wurde gelöscht'
            },
            fail: {
                generalErrorTitle: 'Fehler',
                fileExtensionInvalid: 'Ungültige Erweiterung',
                imageSizeInvalid: 'Die Bildgröße überschreitet 20 MB.',
                generalError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
                uploadFileFailSingle:
                    '{fileName} konnte nicht hochgeladen werden. Bitte versuchen Sie es erneut.',
                uploadFileFailPlural:
                    'Die folgenden Dateien: {fileName} konnten nicht hochgeladen werden. Bitte versuchen Sie es erneut.',
                pinAgent: 'Agent konnte nicht an der Seitenleiste angeheftet werden'
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
        myAgentsTab: {
            tabLabel: 'Meine Agenten',
            searchAgentPlaceholder: 'Agenten suchen',
            tabTitle: 'Top-Empfehlungen',
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
            groupAgentFavoriteSubTitle: 'Die beliebtesten Agenten der Gruppe {groupName}'
        },
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
                changeMemberRoleLabel: 'Rolle des Mitglieds ändern',
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
                    'Möchten Sie {memberName} wirklich aus dieser Gruppe entfernen?',
                removeMemberButtonLabel: 'Entfernen',

                importCSV: 'CSV-Datei importeren',
                importCSVDes:
                    "De Datei mutt in elke Reeg en E-Mail un en Rull hebben. De Rull schull 'member' sien",
                showExampleButtonLabel: 'Bispill wiesen',
                hideExampleButtonLabel: 'Bispill versteken',
                uploadCSVButtonLabel: 'CSV hoochladen',
                emailRoleText: 'E-Mail, Rull'
            }
        },
        settingsTab: {
            tabLabel: 'Einstellungen',
            updateGroupLabel: 'Gruppe aktualisieren',
            updateGroupSubLabel: 'Sie können den Gruppennamen ändern',
            deleteGroupLabel: 'Gruppe löschen',
            deleteGroupSubLabel:
                'Sie können Ihre Gruppe löschen. Beachten Sie jedoch, dass diese Aktion nicht rückgängig gemacht werden kann.',
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
                    newGroupNameEmpty: 'De niege Gruppennaam mag nich leddig wesen'
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
            noGroupMessage: 'Keine Gruppe verfügbar',
            noAgentMessage: 'Kein Agent verfügbar',
            noSettingAccessMessage:
                'Sie müssen ein ADMIN sein, um auf die Einstellungen dieser Gruppe zuzugreifen.',
            noMemberAvailable: 'No member available'
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
            activeStatusLive: 'Veröffentlicht',
            activeStatusDraft: 'Entwurf',
            activeStatusPublishOnlyMe: 'Nur ich',
            activeStatusPublishAnyoneWithPermission: 'Jeder oder Gruppen mit Berechtigung',
            activeStatusPublishEveryone: 'Jeder'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'An Seitenleiste anheften',
                unpinAgentButtonLabel: 'Von der Seitenleiste entfernen',
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
                    'Nur Personen und Gruppen mit Zugriff können mit dem Link öffnen.',
                shareStatusAnyoneLabel: 'Jeder',
                shareStatusAnyoneSubLabel: 'Jeder im Unternehmen mit dem Link kann anzeigen.',
                peopleTab: {
                    addPeoplePlaceholder: 'Personen hinzufügen',
                    peopleListLabel: 'Personenliste',
                    option: {
                        canChatLabel: 'Kann chatten',
                        canChatSubLabel: 'Benutzer kann mit diesem Agenten chatten',
                        canEditLabel: 'Inhalte des Agenten bearbeiten',
                        canEditSubLabel:
                            'Zeigt die Inhalte des Agenten an, dupliziert Agenten, chattet',
                        removeGroupLabel: 'Gruppe entfernen'
                    }
                },
                shareAgentToGroupsButtonLabel: 'Mit Gruppen teilen',
                groupsTab: {
                    addGroupPlaceholder: 'Gruppen hinzufügen',
                    groupListLabel: 'Gruppenliste',
                    option: {
                        canChatLabel: 'Kann chatten',
                        canChatSubLabel: 'Benutzer kann mit diesem Agenten chatten',
                        canEditLabel: 'Inhalte des Agenten bearbeiten',
                        canEditSubLabel:
                            'Zeigt die Inhalte des Agenten an, dupliziert Agenten, chattet',
                        removeGroupLabel: 'Gruppe entfernen'
                    }
                }
            },
            update: {
                updateDialogHeader: 'Agent wurde aktualisiert',
                agentCreator: ' wurde erstellt von',
                accessLabel: 'Zugriff',
                updateStatusOnlyMe: 'Nur ich',
                updateStatusAnyoneWithPermission: 'Jeder oder Gruppen mit Berechtigung',
                updateStatusEveryone: 'Jeder',
                pinButtonLabel: 'An Seitenleiste anheften',
                startConversationLabel: 'Gespräch starten'
            }
        },
        nameLabel: 'Name',
        namePlaceholder: 'Geben Sie Ihrem Agenten einen Namen',
        descriptionLabel: 'Beschreibung',
        descriptionPlaceholder: 'Fügen Sie eine kurze Beschreibung hinzu, was dieser Agent tut',
        instructionLabel: 'Anweisungen',
        instructionPlaceholder:
            'Was tut dieser Agent? Wie verhält er sich? Was sollte er vermeiden?',
        knowledgeLabel: 'Wissen',
        knowledgeSubLabel:
            'Wenn Sie Dateien unter Wissen hochladen, können Gespräche mit Ihrem Agenten Dateiinhalte enthalten. Dateien können heruntergeladen werden.',
        savingDraftLabel: 'Entwurf wird gespeichert',

        validError: {
            nameTooLong: 'Der Name des Agent darf höchstens 50 Zeichen lang sein.',
            desTooLong: 'Die Beschreibung des Agent darf höchstens 300 Zeichen lang sein.',
            insTooLong: 'Die Anweisungen des Agent dürfen höchstens 8000 Zeichen lang sein.'
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
                    'Unerwarteter Fehler: Der Entwurfs-Agent kann nicht veröffentlicht werden. Bitte versuchen Sie es erneut.',
                retrieveAgent:
                    'Unerwarteter Fehler: Agentendaten können nicht abgerufen werden. Bitte versuchen Sie es erneut.',
                createAgent:
                    'Unerwarteter Fehler: Der Agent kann nicht initialisiert werden. Bitte versuchen Sie es erneut.',
                updateAgent:
                    'Unerwarteter Fehler: Der Agent kann nicht aktualisiert werden. Bitte versuchen Sie es erneut.'
            }
        }
    }
};
