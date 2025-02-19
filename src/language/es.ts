export default {
    login: {
        button: {
            signIn: 'Continuar con Azure AD'
        },
        label: {
            signIn: 'Iniciar sesión',
            description: 'Al hacer clic en continuar, aceptas nuestros',
            and: 'y',
            terms: 'Términos del servicio',
            policy: 'Política de privacidad',
            title: 'Acceso denegado',
            descriptionDenied:
                'No tienes permiso para acceder a este recurso. Por favor, solicita acceso al administrador.',
            logOut: 'Cerrar sesión',
            goBack: 'Volver a la página anterior'
        },
        toast: {
            fail: {
                authentication: 'Error de autenticación',
                authenticationDescription:
                    'Por favor, contacta al servicio al cliente para agregar tu cuenta.'
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
                        'Esta acción te llevará a la pantalla de inicio de sesión, y podrás volver a ingresar en cualquier momento.'
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
                title: 'Mis agentes',
                createdByMe: 'Creado por mí',
                sharedWithMe: 'Compartido conmigo',
                createAgent: 'Personaliza versiones de agentes para propósitos específicos.',
                onlyMe: 'Solo yo',
                shared: 'Compartido con grupos y personas con permisos de acceso',
                noCreatedAgents: 'No se han creado agentes todavía',
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
                rcm1: '¿Dónde se encuentra Japón en Asia?',
                rcm2: 'Contar números primos del 0 al 100',
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
            createGroupNameEmpty: 'Se requiere el nombre del grupo'
        },
        // mi pestaña de agente en el grupo
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
            groupAgentFavoriteSubTitle: 'Agentes más populares del grupo {groupName}'
        },
        // pestaña de miembros en el grupo
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
                    'Este grupo es privado. Solo ciertos miembros y roles pueden usar este grupo',
                searchMemberPlaceHolder: 'Buscar miembros por correo electrónico',
                addMemberButtonLabel: 'Confirmar',
                leaveGroupDialogHeader: '¿Estás seguro de que quieres salir de este grupo?',
                leaveGroupButtonLabel: 'Salir del grupo',
                needOneLeaderWarningText: 'El grupo necesita al menos un ADMIN',
                removeMemberDialogHeader: 'Eliminar miembro',
                removeMemberDialogDescription:
                    '¿Estás seguro de que quieres eliminar a {memberName} de este grupo?',
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
        // pestaña de configuraciones en el grupo
        settingsTab: {
            tabLabel: 'Configuraciones',
            updateGroupLabel: 'Actualizar grupo',
            updateGroupSubLabel: 'Puedes cambiar el nombre de tu grupo',
            deleteGroupLabel: 'Eliminar grupo',
            deleteGroupSubLabel:
                'Puedes eliminar tu grupo, pero ten en cuenta que esta acción no se puede deshacer',
            dialog: {
                editDialog: {
                    dialogHeader: 'Cambiar el nombre del grupo',
                    currentGroupNameLabel: 'Nombre actual del grupo',
                    newGroupNameLabel: 'Nuevo nombre del grupo',
                    newGroupNamePlaceholder: 'Ingresa el nuevo nombre del grupo',
                    updateButtonLabel: 'Actualizar'
                },
                deleteDialog: {
                    dialogHeader: '¿Estás seguro de que quieres eliminar este grupo?',
                    dialogDescription: 'Esta acción eliminará el grupo {groupName}',
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
            createNewGroup: 'Crear nuevo grupo'
        },
        unavailableMessage: {
            noGroupMessage: 'No hay grupo disponible',
            noAgentMessage: 'No hay agente disponible',
            noSettingAccessMessage:
                'Necesitas ser un ADMIN para acceder a las configuraciones de este grupo',
            noMemberAvailable: 'No hay ningún miembro disponible'
        },
        toast: {
            success: {
                deleteGroup: 'Grupo eliminado con éxito'
            },
            fail: {
                generalErrorTitle: 'Error',
                somethingWentWrong: 'Algo salió mal, por favor intenta de nuevo',
                createGroupFail: 'Error al crear el grupo',
                editGroupFail: 'Error al editar el grupo',
                deleteGroupFail: 'Error al eliminar el grupo',
                leaveGroupFail: 'Error al salir del grupo'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'Nuevo Agente',
            activeStatusLive: 'En vivo',
            activeStatusDraft: 'Borrador',
            activeStatusPublishOnlyMe: 'Solo para mí',
            activeStatusPublishAnyoneWithPermission: 'Cualquiera o grupos con permiso',
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
                    '¿Estás seguro de que deseas eliminar este Agente? Esta acción no se puede deshacer'
            },
            share: {
                shareAgentDialogHeader: 'Compartir mi agente',
                shareAgentToPeopleButtonLabel: 'Compartir con personas',
                shareAgentGeneralAccess: 'Acceso general',
                shareStatusRestrictedLabel: 'Restringido',
                shareStatusRestrictedSubLabel:
                    'Solo las personas y grupos con acceso pueden abrir con el enlace',
                shareStatusAnyoneLabel: 'Cualquiera',
                shareStatusAnyoneSubLabel: 'Cualquiera en la empresa con el enlace puede ver',
                peopleTab: {
                    addPeoplePlaceholder: 'Agregar personas',
                    peopleListLabel: 'Lista de personas',
                    option: {
                        canChatLabel: 'Puede chatear',
                        canChatSubLabel: 'El usuario puede chatear con este agente',
                        canEditLabel: 'Puede editar el contenido del agente',
                        canEditSubLabel: 'Mostrar contenido del agente, duplicar agente, chatear',
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
                        canEditSubLabel: 'Mostrar contenido del agente, duplicar agente, chatear',
                        removeGroupLabel: 'Eliminar grupo'
                    }
                }
            },
            update: {
                updateDialogHeader: 'El agente ha sido actualizado',
                agentCreator: ' ha creado',
                accessLabel: 'Acceso',
                updateStatusOnlyMe: 'Solo para mí',
                updateStatusAnyoneWithPermission: 'Cualquiera o grupos con permiso',
                updateStatusEveryone: 'Todos',
                pinButtonLabel: 'Fijar en la barra lateral',
                startConversationLabel: 'Iniciar Conversación'
            }
        },

        nameLabel: 'Nombre',
        namePlaceholder: 'Nombra tu agente',
        descriptionLabel: 'Descripción',
        descriptionPlaceholder: 'Agrega una breve descripción sobre lo que hace este Agente',
        instructionLabel: 'Instrucciones',
        instructionPlaceholder:
            '¿Qué hace este Agente? ¿Cómo se comporta? ¿Qué debería evitar hacer?',
        knowledgeLabel: 'Conocimiento',
        knowledgeSubLabel:
            'Si subes archivos en la sección Conocimiento, las conversaciones con tu Agente pueden incluir el contenido de los archivos. Los archivos pueden ser descargados',
        savingDraftLabel: 'Guardando Borrador',

        validError: {
            nameTooLong: 'El nombre del agente debe tener 50 caracteres o menos.',
            desTooLong: 'La descripción del agente debe tener 300 caracteres o menos.',
            insTooLong: 'Las instrucciones del agente deben tener 8000 caracteres o menos.'
        },

        button: {
            shareButtonLabel: 'Compartir',
            updateButtonLabel: 'Actualizar',
            publishButtonLabel: 'Publicar',
            copyLinkButtonLabel: 'Copiar el enlace',
            saveButtonLabel: 'Guardar',
            uploadFileButtonLabel: 'Subir archivos',
            cancelButtonLabel: 'Cancelar',
            deleteButtonLabel: 'Eliminar'
        },
        toast: {
            success: {
                createAgent: 'Agente creado con éxito',
                updateAgent: 'Agente actualizado con éxito',
                deleteAgent: 'Agente eliminado con éxito'
            },
            fail: {
                publishAgent:
                    'Error inesperado: No se puede publicar este agente borrador. Por favor, intenta de nuevo',
                retrieveAgent:
                    'Error inesperado: No se puede recuperar los datos del agente. Por favor, intenta de nuevo.',
                createAgent:
                    'Error inesperado: No se puede inicializar este agente. Por favor, intenta de nuevo.',
                updateAgent:
                    'Error inesperado: No se puede actualizar el agente. Por favor, intenta de nuevo.'
            }
        }
    }
};
