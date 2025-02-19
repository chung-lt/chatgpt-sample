export default {
    login: {
        button: {
            signIn: 'Continuar con Azure AD'
        },
        label: {
            signIn: 'Iniciar sesión',
            description: 'Al hacer clic en continuar, aceptas nuestros',
            and: 'y',
            terms: 'Términos del Servicio',
            policy: 'Política de Privacidad',
            title: 'Acceso denegado',
            descriptionDenied:
                'No tienes permiso para acceder a este recurso. Por favor solicita permiso al administrador.',
            logOut: 'Cerrar sesión',
            goBack: 'Volver a la página anterior'
        },
        toast: {
            fail: {
                authentication: 'Error de autenticación',
                authenticationDescription:
                    'Por favor contacta al servicio al cliente para agregar tu cuenta'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'Nuevo chat',
                searchAgent: 'Buscar agentes',
                logOut: 'Cerrar sesión',
                openSidebar: 'Abrir barra lateral',
                closeSidebar: 'Cerrar barra lateral'
            },
            button: {
                cancel: 'Cancelar',
                logOut: 'Cerrar sesión'
            },
            dialogue: {
                logOut: {
                    title: '¿Estás seguro de que deseas cerrar sesión?',
                    description:
                        'Esta acción te llevará a la pantalla de inicio de sesión, y podrás iniciar sesión nuevamente en cualquier momento.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'Nuevo chat'
            },
            button: {
                unpinAgent: 'Ocultar de la barra lateral',
                searchAgent: 'Buscar agentes',
                renameConversation: 'Renombrar',
                deleteConversation: 'Eliminar',
                cancel: 'Cancelar'
            },
            label: {
                loadingConversation: 'Cargando conversaciones',
                createdTime: {
                    today: 'Hoy',
                    yesterday: 'Ayer',
                    thisWeek: 'Últimos 7 días',
                    thisMonth: 'Últimos 30 días'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: '¿Estás seguro de que deseas eliminar esta conversación?',
                    description:
                        '¿Estás seguro de que deseas eliminar esta conversación? Esto eliminará los datos de forma permanente.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'Mis agentes',
                createAgent: 'Crear agente',
                seeMore: 'Ver más',
                newChat: 'Iniciar chat',
                pinAgent: 'Fijar en la barra lateral',
                unpinAgent: 'Ocultar de la barra lateral',
                copyLink: 'Copiar enlace'
            },
            label: {
                title: 'Agente',
                description:
                    'Busca y crea versiones personalizadas de agentes que combinen instrucciones, conocimientos adicionales y múltiples habilidades.',
                searchAgent: 'Buscar agentes',
                createdAgents: 'Creado por mí',
                sharedAgents: 'Compartido conmigo',
                noAgent: 'No hay agentes disponibles',
                hasCreated: 'Creado por {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'Borrador',
                published: 'Publicado'
            },
            button: {
                createAgent: 'Crear agente',
                seeMore: 'Ver más',
                cancel: 'Cancelar',
                deleteAgent: 'Eliminar'
            },
            label: {
                title: 'Mis Agentes',
                createdByMe: 'Creado por mí',
                sharedWithMe: 'Compartido conmigo',
                createAgent: 'Personaliza versiones de agentes para propósitos específicos',
                onlyMe: 'Solo yo',
                shared: 'Compartido con grupos e individuos con derechos de acceso',
                noCreatedAgents: 'Aún no se han creado agentes',
                noSharedAgents: 'Aún no se han compartido agentes contigo',
                hasCreated: 'Creado por {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: '¿Estás seguro de que deseas eliminar este agente?',
                    description:
                        'Esta acción no se puede deshacer. Los datos del agente se eliminarán de forma permanente.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'Nuevo chat',
                editAgent: 'Editar agente',
                pinAgent: 'Fijar en la barra lateral',
                unpinAgent: 'Ocultar de la barra lateral',
                copyLink: 'Copiar enlace'
            },
            tooltip: {
                uploadFile: 'Adjuntar archivo',
                uploadImage: 'Adjuntar imagen'
            },
            button: {
                rcm1: '¿Dónde está Japón ubicado en Asia?',
                rcm2: 'Cuenta números primos del 0 al 100',
                rcm3: 'Texto para invitar a un amigo a una boda',
                downloadFile: 'Descargar'
            },
            label: {
                greeting: 'Hola, ¿cómo puedo ayudarte hoy?',
                chatPlaceholder: 'Escribe un mensaje',
                agentChatPlaceholder: ' está esperando tu mensaje',
                copyCode: 'Copiar código',
                copyCodeDone: '¡Copiado!',
                hasCreated: 'Creado por {person}'
            }
        },
        userSettings: {
            groupManage: 'Gestionar grupos',
            agentManage: 'Gestionar agentes',
            settings: {
                title: 'Configuración',
                general: 'General',
                language: 'Idioma'
            },
            logOut: 'Cerrar sesión'
        },
        toast: {
            success: {
                pinAgent: 'El agente se ha fijado en la barra lateral',
                unpinAgent: 'El agente se ha eliminado de la barra lateral',
                linkCopy: 'El enlace se ha copiado al portapapeles',
                updateAgentAcl:
                    'El agente se ha compartido con las personas y grupos seleccionados',
                deleteConversation: 'Eliminado con éxito',
                deleteConversationDescription: 'La conversación se ha eliminado'
            },
            fail: {
                generalErrorTitle: 'Error',
                fileExtensionInvalid: 'Extensión no válida',
                imageSizeInvalid: 'El tamaño de la imagen supera los 20MB.',
                generalError: 'Algo salió mal. Por favor, inténtalo de nuevo.',
                uploadFileFailSingle:
                    '{fileName} no se pudo cargar. Por favor, inténtalo de nuevo.',
                uploadFileFailPlural:
                    'Los siguientes archivos: {fileName} no se pudieron cargar. Por favor, inténtalo de nuevo.',
                pinAgent: 'No se pudo fijar el agente en la barra lateral'
            }
        }
    },
    group: {
        sidebar: {
            groupLabel: 'Grupos'
        },
        dialog: {
            createGroupDialogHeader: 'Crear un nuevo grupo',
            createGroupNamePlaceholder: 'Nombre del grupo',
            createGroupButtonLabel: 'Crear',
            createGroupNameEmpty: 'El nombre del grupo es obligatorio'
        },
        myAgentsTab: {
            tabLabel: 'Mis Agentes',
            searchAgentPlaceholder: 'Buscar agentes',
            tabTitle: 'Mejores opciones',
            searchQueryDialog: {
                pinButtonTitle: 'Fijar en la barra lateral',
                copyButtonTitle: 'Copiar enlace',
                startChattingButtonTitle: 'Iniciar chat',
                creatorLabel: 'creado'
            },
            myAgentDialog: {
                pinButtonTitle: 'Fijar en la barra lateral',
                copyButtonTitle: 'Copiar enlace',
                startChattingButtonTitle: 'Iniciar chat'
            },
            groupAgentFavoriteTitle: 'Favoritos del grupo {groupName}',
            groupAgentFavoriteSubTitle: 'Los agentes más populares del grupo {groupName}'
        },
        membersTab: {
            tabLabel: 'Miembros',
            groupMembersLabel: 'Miembros del grupo',
            memberSingularLabel: 'miembro',
            memberPluralLabel: 'miembros',
            allMemberTab: 'Todos los miembros',
            searchMemberPlaceHolder: 'Buscar miembro por correo electrónico',
            tableNameLabel: 'Nombre',
            tableEmailLabel: 'Correo electrónico',
            tableRoleLabel: 'Rol',
            currentUserLabel: 'Yo',
            tableOption: {
                changeMemberRoleLabel: 'Cambiar rol del miembro',
                removeMemberLabel: 'Eliminar a {memberName} del grupo'
            },
            dialog: {
                addMemberDialogHeader: 'Agregar más miembros al grupo {groupName}',
                addMemberDialogDescription:
                    'Este grupo es privado. Solo ciertos miembros y roles pueden usar este grupo.',
                searchMemberPlaceHolder: 'Buscar miembros por correo electrónico',
                addMemberButtonLabel: 'Confirmar',
                leaveGroupDialogHeader: '¿Estás seguro de que deseas salir de este grupo?',
                leaveGroupButtonLabel: 'Salir del grupo',
                needOneLeaderWarningText: 'El grupo necesita al menos un ADMINISTRADOR',
                removeMemberDialogHeader: 'Eliminar miembro',
                removeMemberDialogDescription:
                    '¿Estás seguro de que deseas eliminar a {memberName} de este grupo?',
                removeMemberButtonLabel: 'Eliminar',

                importCSV: 'Importar archivo CSV',
                importCSVDes:
                    "El archivo debe incluir un correo electrónico y un rol en cada línea. El rol debe ser 'member'",
                showExampleButtonLabel: 'Mostrar ejemplo',
                hideExampleButtonLabel: 'Ocultar ejemplo',
                uploadCSVButtonLabel: 'Subir CSV',
                emailRoleText: 'Correo electrónico, Rol'
            }
        },
        settingsTab: {
            tabLabel: 'Configuración',
            updateGroupLabel: 'Actualizar grupo',
            updateGroupSubLabel: 'Puedes cambiar el nombre de tu grupo',
            deleteGroupLabel: 'Eliminar grupo',
            deleteGroupSubLabel:
                'Puedes eliminar tu grupo, pero ten en cuenta que esta acción no se puede deshacer.',
            dialog: {
                editDialog: {
                    dialogHeader: 'Cambiar el nombre del grupo',
                    currentGroupNameLabel: 'Nombre del grupo actual',
                    newGroupNameLabel: 'Nuevo nombre del grupo',
                    newGroupNamePlaceholder: 'Ingresa el nuevo nombre del grupo',
                    updateButtonLabel: 'Actualizar'
                },
                deleteDialog: {
                    dialogHeader: '¿Estás seguro de que deseas eliminar este grupo?',
                    dialogDescription: 'Esta acción eliminará el grupo {groupName}.',
                    deleteButtonLabel: 'Eliminar'
                },
                validError: {
                    newGroupNameEmpty: 'El nombre del nuevo grupo no puede estar vacío'
                }
            }
        },
        button: {
            backToChat: 'Volver al chat',
            inviteMember: 'Invitar miembros',
            seeMore: 'VER MÁS',
            cancel: 'Cancelar'
        },
        tooltip: {
            createNewGroup: 'Crear un nuevo grupo'
        },
        unavailableMessage: {
            noGroupMessage: 'No hay grupos disponibles',
            noAgentMessage: 'No hay agentes disponibles',
            noSettingAccessMessage:
                'Debes ser un ADMINISTRADOR para acceder a la configuración de este grupo.',
            noMemberAvailable: 'No hay miembros disponibles'
        },
        toast: {
            success: {
                deleteGroup: 'El grupo se ha eliminado correctamente'
            },
            fail: {
                generalErrorTitle: 'Error',
                somethingWentWrong: 'Algo salió mal, por favor inténtalo de nuevo.',
                createGroupFail: 'No se pudo crear el grupo',
                editGroupFail: 'No se pudo actualizar el grupo',
                deleteGroupFail: 'No se pudo eliminar el grupo',
                leaveGroupFail: 'No se pudo salir del grupo'
            }
        }
    },
    editAgent: {
        topBar: {
            newAgentTitle: 'Nuevo Agente',
            activeStatusLive: 'Publicado',
            activeStatusDraft: 'Borrador',
            activeStatusPublishOnlyMe: 'Solo yo',
            activeStatusPublishAnyoneWithPermission: 'Cualquier persona o grupo con permiso',
            activeStatusPublishEveryone: 'Todos'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'Fijar en la barra lateral',
                unpinAgentButtonLabel: 'Desfijar',
                deleteAgentButtonLabel: 'Eliminar Agente'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'Eliminar Agente',
                deleteAgentDialogDescription:
                    '¿Estás seguro de que deseas eliminar este agente? Esta acción no se puede deshacer.'
            },
            share: {
                shareAgentDialogHeader: 'Compartir mi agente',
                shareAgentToPeopleButtonLabel: 'Compartir con personas',
                shareAgentGeneralAccess: 'Acceso general',
                shareStatusRestrictedLabel: 'Restringido',
                shareStatusRestrictedSubLabel:
                    'Solo personas y grupos con acceso pueden abrir el enlace.',
                shareStatusAnyoneLabel: 'Cualquier persona',
                shareStatusAnyoneSubLabel:
                    'Cualquier persona en la empresa con el enlace puede ver.',
                peopleTab: {
                    addPeoplePlaceholder: 'Agregar personas',
                    peopleListLabel: 'Lista de personas',
                    option: {
                        canChatLabel: 'Puede chatear',
                        canChatSubLabel: 'El usuario puede chatear con este agente',
                        canEditLabel: 'Puede editar el contenido del agente',
                        canEditSubLabel: 'Muestra el contenido del agente, duplica agentes, chatea',
                        removeGroupLabel: 'Eliminar grupo'
                    }
                },
                shareAgentToGroupsButtonLabel: 'Compartir con grupos',
                groupsTab: {
                    addGroupPlaceholder: 'Agregar grupos',
                    groupListLabel: 'Lista de grupos',
                    option: {
                        canChatLabel: 'Puede chatear',
                        canChatSubLabel: 'El usuario puede chatear con este agente',
                        canEditLabel: 'Puede editar el contenido del agente',
                        canEditSubLabel: 'Muestra el contenido del agente, duplica agentes, chatea',
                        removeGroupLabel: 'Eliminar grupo'
                    }
                }
            },
            update: {
                updateDialogHeader: 'El agente se ha actualizado',
                agentCreator: ' ha sido creado por',
                accessLabel: 'Acceso',
                updateStatusOnlyMe: 'Solo yo',
                updateStatusAnyoneWithPermission: 'Cualquier persona o grupo con permiso',
                updateStatusEveryone: 'Todos',
                pinButtonLabel: 'Fijar en la barra lateral',
                startConversationLabel: 'Iniciar Conversación'
            }
        },
        nameLabel: 'Nombre',
        namePlaceholder: 'Dale un nombre a tu agente',
        descriptionLabel: 'Descripción',
        descriptionPlaceholder: 'Agrega una breve descripción sobre lo que hace este agente',
        instructionLabel: 'Instrucciones',
        instructionPlaceholder: '¿Qué hace este agente? ¿Cómo se comporta? ¿Qué debería evitar?',
        knowledgeLabel: 'Conocimientos',
        knowledgeSubLabel:
            'Si subes archivos en Conocimientos, las conversaciones con tu agente pueden incluir contenido de los archivos. Los archivos se pueden descargar.',
        savingDraftLabel: 'Guardando borrador',

        validError: {
            nameTooLong: 'El nombre del Agent debe tener 50 caracteres o menos.',
            desTooLong: 'La descripción del Agent debe tener 300 caracteres o menos.',
            insTooLong: 'Las instrucciones del Agent deben tener 8000 caracteres o menos.'
        },

        button: {
            shareButtonLabel: 'Compartir',
            updateButtonLabel: 'Actualizar',
            publishButtonLabel: 'Publicar',
            copyLinkButtonLabel: 'Copiar enlace',
            saveButtonLabel: 'Guardar',
            uploadFileButtonLabel: 'Subir archivos',
            cancelButtonLabel: 'Cancelar',
            deleteButtonLabel: 'Eliminar'
        },
        toast: {
            success: {
                createAgent: 'El agente se ha creado correctamente',
                updateAgent: 'El agente se ha actualizado correctamente',
                deleteAgent: 'El agente se ha eliminado correctamente'
            },
            fail: {
                publishAgent:
                    'Error inesperado: No se puede publicar este agente en borrador. Por favor, inténtalo de nuevo.',
                retrieveAgent:
                    'Error inesperado: No se pueden recuperar los datos del agente. Por favor, inténtalo de nuevo.',
                createAgent:
                    'Error inesperado: No se puede inicializar este agente. Por favor, inténtalo de nuevo.',
                updateAgent:
                    'Error inesperado: No se puede actualizar el agente. Por favor, inténtalo de nuevo.'
            }
        }
    }
};
