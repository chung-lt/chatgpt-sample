export default {
    login: {
        button: {
            signIn: 'Continuer avec Azure AD'
        },
        label: {
            signIn: 'Se connecter',
            description: 'En cliquant sur continuer, vous acceptez nos',
            and: 'et',
            terms: 'Conditions d’utilisation',
            policy: 'Politique de confidentialité',
            title: 'Accès refusé',
            descriptionDenied:
                'Vous n’avez pas l’autorisation d’accéder à cette ressource. Veuillez demander l’autorisation à l’administrateur.',
            logOut: 'Se déconnecter',
            goBack: 'Retourner à la page précédente'
        },
        toast: {
            fail: {
                authentication: 'Échec de l’authentification',
                authenticationDescription:
                    'Veuillez contacter le service client pour ajouter votre compte.'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'Nouveau chat',
                searchAgent: 'Rechercher des agents',
                logOut: 'Se déconnecter',
                openSidebar: 'Ouvrir la barre latérale',
                closeSidebar: 'Fermer la barre latérale'
            },
            button: {
                cancel: 'Annuler',
                logOut: 'Se déconnecter'
            },
            dialogue: {
                logOut: {
                    title: 'Êtes-vous sûr de vouloir vous déconnecter ?',
                    description:
                        'Cette action vous ramènera à l’écran de connexion, et vous pourrez vous reconnecter à tout moment.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'Nouveau chat'
            },
            button: {
                unpinAgent: 'Retirer de la barre latérale',
                searchAgent: 'Rechercher des agents',
                renameConversation: 'Renommer',
                deleteConversation: 'Supprimer',
                cancel: 'Annuler'
            },
            label: {
                loadingConversation: 'Chargement des conversations',
                createdTime: {
                    today: 'Aujourd’hui',
                    yesterday: 'Hier',
                    thisWeek: '7 derniers jours',
                    thisMonth: '30 derniers jours'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'Êtes-vous sûr de vouloir supprimer cette conversation ?',
                    description:
                        'Êtes-vous sûr de vouloir supprimer cette conversation ? Cela supprimera définitivement les données.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'Mes agents',
                createAgent: 'Créer un agent',
                seeMore: 'Voir plus',
                newChat: 'Démarrer une conversation',
                pinAgent: 'Épingler à la barre latérale',
                unpinAgent: 'Retirer de la barre latérale',
                copyLink: 'Copier le lien'
            },
            label: {
                title: 'Agent',
                description:
                    'Recherchez et créez des versions personnalisées d’agents qui combinent des instructions, des connaissances supplémentaires et plusieurs compétences.',
                searchAgent: 'Rechercher des agents',
                createdAgents: 'Créé par moi',
                sharedAgents: 'Partagé avec moi',
                noAgent: 'Aucun agent disponible',
                hasCreated: 'Créé par {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'Brouillon',
                published: 'Publié'
            },
            button: {
                createAgent: 'Créer un agent',
                seeMore: 'Voir plus',
                cancel: 'Annuler',
                deleteAgent: 'Supprimer'
            },
            label: {
                title: 'Mes Agents',
                createdByMe: 'Créé par moi',
                sharedWithMe: 'Partagé avec moi',
                createAgent: 'Personnalisez les versions des agents pour des besoins spécifiques',
                onlyMe: 'Moi seul',
                shared: 'Partagé avec des groupes et des personnes ayant des droits d’accès',
                noCreatedAgents: 'Aucun agent n’a encore été créé',
                noSharedAgents: 'Aucun agent ne vous a encore été partagé',
                hasCreated: 'Créé par {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'Êtes-vous sûr de vouloir supprimer cet agent ?',
                    description:
                        'Cette action est irréversible. Les données de l’agent seront définitivement supprimées.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'Nouveau chat',
                editAgent: 'Modifier l’agent',
                pinAgent: 'Épingler à la barre latérale',
                unpinAgent: 'Retirer de la barre latérale',
                copyLink: 'Copier le lien'
            },
            tooltip: {
                uploadFile: 'Joindre un fichier',
                uploadImage: 'Joindre une image'
            },
            button: {
                rcm1: 'Où se trouve le Japon en Asie ?',
                rcm2: 'Comptez les nombres premiers de 0 à 100',
                rcm3: 'Texte pour inviter un ami à un mariage',
                downloadFile: 'Télécharger'
            },
            label: {
                greeting: 'Bonjour, comment puis-je vous aider aujourd’hui ?',
                chatPlaceholder: 'Tapez un message',
                agentChatPlaceholder: ' attend votre message',
                copyCode: 'Copier le code',
                copyCodeDone: 'Copié !',
                hasCreated: 'Créé par {person}'
            }
        },
        userSettings: {
            groupManage: 'Gérer les groupes',
            agentManage: 'Gérer les agents',
            settings: {
                title: 'Paramètres',
                general: 'Général',
                language: 'Langue'
            },
            logOut: 'Se déconnecter'
        },
        toast: {
            success: {
                pinAgent: 'L’agent a été épinglé à la barre latérale',
                unpinAgent: 'L’agent a été retiré de la barre latérale',
                linkCopy: 'Le lien a été copié dans le presse-papiers',
                updateAgentAcl: 'L’agent a été partagé avec les personnes et groupes sélectionnés',
                deleteConversation: 'Supprimé avec succès',
                deleteConversationDescription: 'La conversation a été supprimée'
            },
            fail: {
                generalErrorTitle: 'Erreur',
                fileExtensionInvalid: 'Extension invalide',
                imageSizeInvalid: 'La taille de l’image dépasse 20 Mo.',
                generalError: 'Une erreur s’est produite. Veuillez réessayer.',
                uploadFileFailSingle: '{fileName} n’a pas pu être téléchargé. Veuillez réessayer.',
                uploadFileFailPlural:
                    'Les fichiers suivants : {fileName} n’ont pas pu être téléchargés. Veuillez réessayer.',
                pinAgent: 'L’agent n’a pas pu être épinglé à la barre latérale'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: 'Groupes'
        },
        dialog: {
            createGroupDialogHeader: 'Créer un nouveau groupe',
            createGroupNamePlaceholder: 'Nom du groupe',
            createGroupButtonLabel: 'Créer',
            createGroupNameEmpty: 'Le nom du groupe est requis'
        },
        // my agent tab in group
        myAgentsTab: {
            tabLabel: 'Mes Agents',
            searchAgentPlaceholder: 'Rechercher des agents',
            tabTitle: 'Meilleurs choix',
            searchQueryDialog: {
                pinButtonTitle: 'Épingler à la barre latérale',
                copyButtonTitle: 'Copier le lien',
                startChattingButtonTitle: 'Commencer à discuter',
                creatorLabel: 'créé'
            },
            myAgentDialog: {
                pinButtonTitle: 'Épingler à la barre latérale',
                copyButtonTitle: 'Copier le lien',
                startChattingButtonTitle: 'Commencer à discuter'
            },
            groupAgentFavoriteTitle: 'Favoris du groupe {groupName}',
            groupAgentFavoriteSubTitle: 'Les agents les plus populaires du groupe {groupName}'
        },
        // members tab in group
        membersTab: {
            tabLabel: 'Membres',
            groupMembersLabel: 'Membres du groupe',
            memberSingularLabel: 'membre',
            memberPluralLabel: 'membres',
            allMemberTab: 'Tous les membres',
            searchMemberPlaceHolder: 'Rechercher un membre par e-mail',
            tableNameLabel: 'Nom',
            tableEmailLabel: 'E-mail',
            tableRoleLabel: 'Rôle',
            currentUserLabel: 'Moi',
            tableOption: {
                changeMemberRoleLabel: 'Changer le rôle du membre',
                removeMemberLabel: 'Retirer {memberName} du groupe'
            },
            dialog: {
                addMemberDialogHeader: 'Ajouter plus de membres au groupe {groupName}',
                addMemberDialogDescription:
                    'Ce groupe est privé. Seuls certains membres et rôles peuvent utiliser ce groupe',
                searchMemberPlaceHolder: 'Rechercher des membres par e-mail',
                addMemberButtonLabel: 'Confirmer',
                leaveGroupDialogHeader: 'Êtes-vous sûr de vouloir quitter ce groupe ?',
                leaveGroupButtonLabel: 'Quitter le groupe',
                needOneLeaderWarningText: 'Le groupe a besoin d’au moins un ADMIN',
                removeMemberDialogHeader: 'Retirer un membre',
                removeMemberDialogDescription:
                    'Êtes-vous sûr de vouloir retirer {memberName} de ce groupe ?',
                removeMemberButtonLabel: 'Retirer',

                importCSV: 'Importer un fichier CSV',
                importCSVDes:
                    "Le fichier doit inclure une adresse e-mail et un rôle sur chaque ligne. Le rôle doit être 'member'",
                showExampleButtonLabel: 'Afficher un exemple',
                hideExampleButtonLabel: 'Masquer un exemple',
                uploadCSVButtonLabel: 'Téléverser le CSV',
                emailRoleText: 'E-mail, Rôle'
            }
        },
        // settings tab in group
        settingsTab: {
            tabLabel: 'Paramètres',
            updateGroupLabel: 'Mettre à jour le groupe',
            updateGroupSubLabel: 'Vous pouvez modifier le nom de votre groupe',
            deleteGroupLabel: 'Supprimer le groupe',
            deleteGroupSubLabel:
                'Vous pouvez supprimer votre groupe, mais sachez que cette action est irréversible',
            dialog: {
                editDialog: {
                    dialogHeader: 'Modifier le nom du groupe',
                    currentGroupNameLabel: 'Nom actuel du groupe',
                    newGroupNameLabel: 'Nouveau nom du groupe',
                    newGroupNamePlaceholder: 'Entrer un nouveau nom de groupe',
                    updateButtonLabel: 'Mettre à jour'
                },
                deleteDialog: {
                    dialogHeader: 'Êtes-vous sûr de vouloir supprimer ce groupe ?',
                    dialogDescription: 'Cette action supprimera le groupe {groupName}',
                    deleteButtonLabel: 'Supprimer'
                },
                validError: {
                    newGroupNameEmpty: 'Le nom du nouveau groupe ne peut pas être vide'
                }
            }
        },
        button: {
            backToChat: 'Retour au chat',
            inviteMember: 'Inviter des membres',
            seeMore: 'VOIR PLUS',
            cancel: 'Annuler'
        },
        tooltip: {
            createNewGroup: 'Créer un nouveau groupe'
        },
        unavailableMessage: {
            noGroupMessage: 'Aucun groupe disponible',
            noAgentMessage: 'Aucun agent disponible',
            noSettingAccessMessage:
                'Vous devez être ADMIN pour accéder aux paramètres de ce groupe',
            noMemberAvailable: 'Aucun membre disponible'
        },
        toast: {
            success: {
                deleteGroup: 'Groupe supprimé avec succès'
            },
            fail: {
                generalErrorTitle: 'Erreur',
                somethingWentWrong: 'Une erreur s’est produite, veuillez réessayer',
                createGroupFail: 'Échec de la création du groupe',
                editGroupFail: 'Échec de la modification du groupe',
                deleteGroupFail: 'Échec de la suppression du groupe',
                leaveGroupFail: 'Échec de la sortie du groupe'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'Nouvel Agent',
            activeStatusLive: 'En ligne',
            activeStatusDraft: 'Brouillon',
            activeStatusPublishOnlyMe: 'Seulement moi',
            activeStatusPublishAnyoneWithPermission: 'Toute personne ou groupe avec autorisation',
            activeStatusPublishEveryone: 'Tout le monde'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'Épingler à la barre latérale',
                unpinAgentButtonLabel: 'Désépingler',
                deleteAgentButtonLabel: 'Supprimer l’Agent'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'Supprimer l’Agent',
                deleteAgentDialogDescription:
                    'Êtes-vous sûr de vouloir supprimer cet Agent ? Cette action est irréversible'
            },
            share: {
                shareAgentDialogHeader: 'Partager mon agent',
                shareAgentToPeopleButtonLabel: 'Partager avec des personnes',
                shareAgentGeneralAccess: 'Accès général',
                shareStatusRestrictedLabel: 'Restreint',
                shareStatusRestrictedSubLabel:
                    'Seules les personnes et les groupes ayant un accès peuvent ouvrir avec le lien',
                shareStatusAnyoneLabel: 'Tout le monde',
                shareStatusAnyoneSubLabel:
                    'Toute personne dans l’entreprise avec le lien peut consulter',
                peopleTab: {
                    addPeoplePlaceholder: 'Ajouter des personnes',
                    peopleListLabel: 'Liste des personnes',
                    option: {
                        canChatLabel: 'Peut discuter',
                        canChatSubLabel: 'L’utilisateur peut discuter avec cet agent',
                        canEditLabel: 'Peut modifier le contenu de l’agent',
                        canEditSubLabel: 'Voir le contenu de l’agent, dupliquer l’agent, discuter',
                        removeGroupLabel: 'Supprimer le groupe'
                    }
                },
                shareAgentToGroupsButtonLabel: 'Partager avec des groupes',
                groupsTab: {
                    addGroupPlaceholder: 'Ajouter des groupes',
                    groupListLabel: 'Liste des groupes',
                    option: {
                        canChatLabel: 'Peut discuter',
                        canChatSubLabel: 'L’utilisateur peut discuter avec cet agent',
                        canEditLabel: 'Peut modifier le contenu de l’agent',
                        canEditSubLabel: 'Voir le contenu de l’agent, dupliquer l’agent, discuter',
                        removeGroupLabel: 'Supprimer le groupe'
                    }
                }
            },
            update: {
                updateDialogHeader: 'L’agent a été mis à jour',
                agentCreator: ' a créé',
                accessLabel: 'Accès',
                updateStatusOnlyMe: 'Seulement moi',
                updateStatusAnyoneWithPermission: 'Toute personne ou groupe avec autorisation',
                updateStatusEveryone: 'Tout le monde',
                pinButtonLabel: 'Épingler à la barre latérale',
                startConversationLabel: 'Commencer une conversation'
            }
        },

        nameLabel: 'Nom',
        namePlaceholder: 'Nommez votre agent',
        descriptionLabel: 'Description',
        descriptionPlaceholder: 'Ajoutez une courte description de ce que fait cet Agent',
        instructionLabel: 'Instructions',
        instructionPlaceholder:
            'Que fait cet Agent ? Comment se comporte-t-il ? Que doit-il éviter de faire ?',
        knowledgeLabel: 'Connaissances',
        knowledgeSubLabel:
            'Si vous téléchargez des fichiers sous Connaissances, les conversations avec votre Agent peuvent inclure le contenu des fichiers. Les fichiers peuvent être téléchargés',
        savingDraftLabel: 'Enregistrement du brouillon',

        validError: {
            nameTooLong: "Le nom de l'Agent doit comporter 50 caractères ou moins.",
            desTooLong: "La description de l'Agent doit comporter 300 caractères ou moins.",
            insTooLong: "Les instructions de l'Agent doivent comporter 8000 caractères ou moins."
        },

        button: {
            shareButtonLabel: 'Partager',
            updateButtonLabel: 'Mettre à jour',
            publishButtonLabel: 'Publier',
            copyLinkButtonLabel: 'Copier le lien',
            saveButtonLabel: 'Enregistrer',
            uploadFileButtonLabel: 'Télécharger des fichiers',
            cancelButtonLabel: 'Annuler',
            deleteButtonLabel: 'Supprimer'
        },
        toast: {
            success: {
                createAgent: 'Agent créé avec succès',
                updateAgent: 'Agent mis à jour avec succès',
                deleteAgent: 'Agent supprimé avec succès'
            },
            fail: {
                publishAgent:
                    'Erreur inattendue : Impossible de publier cet agent brouillon. Veuillez réessayer',
                retrieveAgent:
                    'Erreur inattendue : Impossible de récupérer les données de l’agent. Veuillez réessayer.',
                createAgent:
                    'Erreur inattendue : Impossible d’initialiser cet agent. Veuillez réessayer.',
                updateAgent:
                    'Erreur inattendue : Impossible de mettre à jour l’agent. Veuillez réessayer.'
            }
        }
    }
};
