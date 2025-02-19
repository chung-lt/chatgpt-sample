export default {
    login: {
        button: {
            signIn: 'Teruskan dengan Azure AD'
        },
        label: {
            signIn: 'Log masuk',
            description: 'Dengan menekan teruskan, anda bersetuju dengan',
            and: 'dan',
            terms: 'Syarat Perkhidmatan',
            policy: 'Dasar Privasi',
            title: 'Akses Ditolak',
            descriptionDenied:
                'Anda tidak mempunyai kebenaran untuk mengakses sumber ini. Sila minta kebenaran daripada pentadbir.',
            logOut: 'Log keluar',
            goBack: 'Kembali ke halaman sebelumnya'
        },
        toast: {
            fail: {
                authentication: 'Pengesahan gagal',
                authenticationDescription:
                    'Sila hubungi perkhidmatan pelanggan untuk menambah akaun anda'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'Sembang baharu',
                searchAgent: 'Cari ejen',
                logOut: 'Log keluar',
                openSidebar: 'Buka bar sisi',
                closeSidebar: 'Tutup bar sisi'
            },
            button: {
                cancel: 'Batal',
                logOut: 'Log keluar'
            },
            dialogue: {
                logOut: {
                    title: 'Adakah anda pasti ingin log keluar?',
                    description:
                        'Tindakan ini akan membawa anda ke skrin log masuk, dan anda boleh log masuk semula pada bila-bila masa.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'Sembang baharu'
            },
            button: {
                unpinAgent: 'Sembunyikan dari bar sisi',
                searchAgent: 'Cari ejen',
                renameConversation: 'Tukar nama',
                deleteConversation: 'Padam',
                cancel: 'Batal'
            },
            label: {
                loadingConversation: 'Memuatkan perbualan',
                createdTime: {
                    today: 'Hari ini',
                    yesterday: 'Semalam',
                    thisWeek: '7 Hari Terakhir',
                    thisMonth: '30 Hari Terakhir'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'Adakah anda pasti ingin memadamkan perbualan ini?',
                    description:
                        'Adakah anda pasti ingin memadamkan perbualan ini? Data akan dipadamkan secara kekal.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'Ejen saya',
                createAgent: 'Cipta ejen',
                seeMore: 'Lihat lagi',
                newChat: 'Mulakan sembang',
                pinAgent: 'Pin ke bar sisi',
                unpinAgent: 'Sembunyikan dari bar sisi',
                copyLink: 'Salin pautan'
            },
            label: {
                title: 'Ejen',
                description:
                    'Cari dan cipta versi ejen khusus yang menggabungkan arahan, pengetahuan tambahan, dan pelbagai kemahiran.',
                searchAgent: 'Cari ejen',
                createdAgents: 'Dicipta oleh saya',
                sharedAgents: 'Dikongsi dengan saya',
                noAgent: 'Tiada ejen tersedia',
                hasCreated: 'Dicipta oleh {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'Draf',
                published: 'Diterbitkan'
            },
            button: {
                createAgent: 'Cipta ejen',
                seeMore: 'Lihat lagi',
                cancel: 'Batal',
                deleteAgent: 'Padam'
            },
            label: {
                title: 'Ejen Saya',
                createdByMe: 'Dicipta oleh saya',
                sharedWithMe: 'Dikongsi dengan saya',
                createAgent: 'Sesuaikan versi ejen untuk tujuan tertentu',
                onlyMe: 'Hanya saya',
                shared: 'Dikongsi dengan kumpulan dan individu dengan hak akses',
                noCreatedAgents: 'Tiada ejen yang telah dicipta lagi',
                noSharedAgents: 'Tiada ejen yang telah dikongsi dengan anda lagi',
                hasCreated: 'Dicipta oleh {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'Adakah anda pasti ingin memadamkan ejen ini?',
                    description:
                        'Tindakan ini tidak boleh dipulihkan. Data ejen akan dipadamkan secara kekal.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'Sembang baharu',
                editAgent: 'Edit ejen',
                pinAgent: 'Pin ke bar sisi',
                unpinAgent: 'Sembunyikan dari bar sisi',
                copyLink: 'Salin pautan'
            },
            tooltip: {
                uploadFile: 'Lampirkan fail',
                uploadImage: 'Lampirkan imej'
            },
            button: {
                rcm1: 'Di manakah Jepun terletak di Asia?',
                rcm2: 'Kira nombor perdana dari 0 hingga 100',
                rcm3: 'Teks untuk menjemput rakan ke majlis perkahwinan',
                downloadFile: 'Muat turun'
            },
            label: {
                greeting: 'Hai, bagaimana saya boleh membantu anda hari ini?',
                chatPlaceholder: 'Taipkan mesej',
                agentChatPlaceholder: ' sedang menunggu mesej anda',
                copyCode: 'Salin kod',
                copyCodeDone: 'Disalin!',
                hasCreated: 'Dicipta oleh {person}'
            }
        },
        userSettings: {
            groupManage: 'Urus kumpulan',
            agentManage: 'Urus ejen',
            settings: {
                title: 'Tetapan',
                general: 'Am',
                language: 'Bahasa'
            },
            logOut: 'Log keluar'
        },
        toast: {
            success: {
                pinAgent: 'Ejen telah dipin ke bar sisi',
                unpinAgent: 'Ejen telah dikeluarkan dari bar sisi',
                linkCopy: 'Pautan disalin ke papan keratan',
                updateAgentAcl: 'Ejen telah dikongsi dengan orang dan kumpulan yang dipilih',
                deleteConversation: 'Berjaya dipadamkan',
                deleteConversationDescription: 'Perbualan telah dipadamkan'
            },
            fail: {
                generalErrorTitle: 'Ralat',
                fileExtensionInvalid: 'Sambungan tidak sah',
                imageSizeInvalid: 'Saiz imej melebihi 20MB.',
                generalError: 'Sesuatu telah berlaku. Sila cuba lagi.',
                uploadFileFailSingle: '{fileName} tidak dapat dimuat naik. Sila cuba lagi.',
                uploadFileFailPlural:
                    'Fail berikut: {fileName} tidak dapat dimuat naik. Sila cuba lagi.',
                pinAgent: 'Ejen tidak dapat dipin ke bar sisi'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: 'Kumpulan'
        },
        dialog: {
            createGroupDialogHeader: 'Cipta kumpulan baharu',
            createGroupNamePlaceholder: 'Nama kumpulan',
            createGroupButtonLabel: 'Cipta',
            createGroupNameEmpty: 'Nama kumpulan diperlukan'
        },
        // my agent tab in group
        myAgentsTab: {
            tabLabel: 'Ejen Saya',
            searchAgentPlaceholder: 'Cari ejen',
            tabTitle: 'Pilihan Terbaik',
            searchQueryDialog: {
                pinButtonTitle: 'Pin ke bar sisi',
                copyButtonTitle: 'Salin Pautan',
                startChattingButtonTitle: 'Mula Berbual',
                creatorLabel: 'dicipta'
            },
            myAgentDialog: {
                pinButtonTitle: 'Pin ke bar sisi',
                copyButtonTitle: 'Salin Pautan',
                startChattingButtonTitle: 'Mula Berbual'
            },
            groupAgentFavoriteTitle: 'Kegemaran Kumpulan {groupName}',
            groupAgentFavoriteSubTitle: 'Ejen paling popular dalam Kumpulan {groupName}'
        },
        // members tab in group
        membersTab: {
            tabLabel: 'Ahli',
            groupMembersLabel: 'Ahli kumpulan',
            memberSingularLabel: 'ahli',
            memberPluralLabel: 'ahli',
            allMemberTab: 'Semua ahli',
            searchMemberPlaceHolder: 'Cari ahli melalui emel',
            tableNameLabel: 'Nama',
            tableEmailLabel: 'Emel',
            tableRoleLabel: 'Peranan',
            currentUserLabel: 'Saya',
            tableOption: {
                changeMemberRoleLabel: 'Tukar peranan ahli',
                removeMemberLabel: 'Keluarkan {memberName} dari kumpulan'
            },
            dialog: {
                addMemberDialogHeader: 'Tambah ahli ke kumpulan {groupName}',
                addMemberDialogDescription:
                    'Kumpulan ini adalah peribadi. Hanya ahli tertentu dan peranan tertentu yang boleh menggunakan kumpulan ini.',
                searchMemberPlaceHolder: 'Cari ahli melalui emel',
                addMemberButtonLabel: 'Sahkan',
                leaveGroupDialogHeader: 'Adakah anda pasti mahu keluar dari kumpulan ini?',
                leaveGroupButtonLabel: 'Keluar dari kumpulan',
                needOneLeaderWarningText: 'Kumpulan memerlukan sekurang-kurangnya satu ADMIN',
                removeMemberDialogHeader: 'Keluarkan ahli',
                removeMemberDialogDescription:
                    'Adakah anda pasti mahu mengeluarkan {memberName} dari kumpulan ini?',
                removeMemberButtonLabel: 'Keluarkan',

                importCSV: 'Import fail CSV',
                importCSVDes:
                    "Fail mesti mengandungi e-mel dan peranan pada setiap baris. Peranan haruslah 'member'",
                showExampleButtonLabel: 'Tunjukkan contoh',
                hideExampleButtonLabel: 'Sembunyikan contoh',
                uploadCSVButtonLabel: 'Muat naik CSV',
                emailRoleText: 'E-mel, Peranan'
            }
        },
        // settings tab in group
        settingsTab: {
            tabLabel: 'Tetapan',
            updateGroupLabel: 'Kemas kini kumpulan',
            updateGroupSubLabel: 'Anda boleh menukar nama kumpulan anda',
            deleteGroupLabel: 'Padam kumpulan',
            deleteGroupSubLabel:
                'Anda boleh memadamkan kumpulan anda, tetapi tindakan ini tidak boleh dibuat asal.',
            dialog: {
                editDialog: {
                    dialogHeader: 'Tukar nama kumpulan',
                    currentGroupNameLabel: 'Nama kumpulan semasa',
                    newGroupNameLabel: 'Nama kumpulan baharu',
                    newGroupNamePlaceholder: 'Masukkan nama kumpulan baharu',
                    updateButtonLabel: 'Kemas Kini'
                },
                deleteDialog: {
                    dialogHeader: 'Adakah anda pasti mahu memadam kumpulan ini?',
                    dialogDescription: 'Tindakan ini akan memadam kumpulan {groupName}.',
                    deleteButtonLabel: 'Padam'
                },
                validError: {
                    newGroupNameEmpty: 'Nama kumpulan baru tidak boleh kosong'
                }
            }
        },
        button: {
            backToChat: 'Kembali ke sembang',
            inviteMember: 'Jemput ahli',
            seeMore: 'LIHAT LEBIH LANJUT',
            cancel: 'Batal'
        },
        tooltip: {
            createNewGroup: 'Cipta kumpulan baharu'
        },
        unavailableMessage: {
            noGroupMessage: 'Tiada kumpulan tersedia',
            noAgentMessage: 'Tiada ejen tersedia',
            noSettingAccessMessage:
                'Anda perlu menjadi ADMIN untuk mengakses tetapan kumpulan ini.',
            noMemberAvailable: 'Tiada ahli yang tersedia'
        },
        toast: {
            success: {
                deleteGroup: 'Kumpulan berjaya dipadam'
            },
            fail: {
                generalErrorTitle: 'Ralat',
                somethingWentWrong: 'Sesuatu telah berlaku. Sila cuba lagi.',
                createGroupFail: 'Gagal mencipta kumpulan',
                editGroupFail: 'Gagal mengedit kumpulan',
                deleteGroupFail: 'Gagal memadam kumpulan',
                leaveGroupFail: 'Gagal keluar dari kumpulan'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'Agen Baru',
            activeStatusLive: 'Hidup',
            activeStatusDraft: 'Draf',
            activeStatusPublishOnlyMe: 'Hanya saya',
            activeStatusPublishAnyoneWithPermission: 'Sesiapa atau kumpulan dengan kebenaran',
            activeStatusPublishEveryone: 'Semua orang'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'Pin ke bar sisi',
                unpinAgentButtonLabel: 'Nyahpin',
                deleteAgentButtonLabel: 'Padam Agen'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'Padam Agen',
                deleteAgentDialogDescription:
                    'Adakah anda pasti mahu memadamkan Agen ini? Tindakan ini tidak boleh dipulihkan'
            },
            share: {
                shareAgentDialogHeader: 'Kongsi agen saya',
                shareAgentToPeopleButtonLabel: 'Kongsi kepada orang',
                shareAgentGeneralAccess: 'Akses am',
                shareStatusRestrictedLabel: 'Terhad',
                shareStatusRestrictedSubLabel:
                    'Hanya orang dan kumpulan dengan akses boleh membuka dengan pautan',
                shareStatusAnyoneLabel: 'Sesiapa sahaja',
                shareStatusAnyoneSubLabel: 'Sesiapa dalam syarikat dengan pautan boleh melihat',
                peopleTab: {
                    addPeoplePlaceholder: 'Tambah orang',
                    peopleListLabel: 'Senarai orang',
                    option: {
                        canChatLabel: 'Boleh bersembang',
                        canChatSubLabel: 'Pengguna boleh bersembang dengan agen ini',
                        canEditLabel: 'Boleh menyunting kandungan agen',
                        canEditSubLabel: 'Lihat kandungan agen, gandakan agen, bersembang',
                        removeGroupLabel: 'Alih keluar kumpulan'
                    }
                },
                shareAgentToGroupsButtonLabel: 'Kongsi kepada kumpulan',
                groupsTab: {
                    addGroupPlaceholder: 'Tambah kumpulan',
                    groupListLabel: 'Senarai kumpulan',
                    option: {
                        canChatLabel: 'Boleh bersembang',
                        canChatSubLabel: 'Pengguna boleh bersembang dengan agen ini',
                        canEditLabel: 'Boleh menyunting kandungan agen',
                        canEditSubLabel: 'Lihat kandungan agen, gandakan agen, bersembang',
                        removeGroupLabel: 'Alih keluar kumpulan'
                    }
                }
            },
            update: {
                updateDialogHeader: 'Agen telah dikemas kini',
                agentCreator: ' telah dicipta',
                accessLabel: 'Akses',
                updateStatusOnlyMe: 'Hanya saya',
                updateStatusAnyoneWithPermission: 'Sesiapa atau kumpulan dengan kebenaran',
                updateStatusEveryone: 'Semua orang',
                pinButtonLabel: 'Pin ke bar sisi',
                startConversationLabel: 'Mulakan Perbualan'
            }
        },

        nameLabel: 'Nama',
        namePlaceholder: 'Namakan agen anda',
        descriptionLabel: 'Penerangan',
        descriptionPlaceholder:
            'Tambah penerangan ringkas tentang apa yang dilakukan oleh Agen ini',
        instructionLabel: 'Arahan',
        instructionPlaceholder:
            'Apa yang dilakukan oleh Agen ini? Bagaimana ia berkelakuan? Apa yang harus dielakkan?',
        knowledgeLabel: 'Pengetahuan',
        knowledgeSubLabel:
            'Jika anda memuat naik fail di bawah Pengetahuan, perbualan dengan Agen anda mungkin termasuk kandungan fail. Fail boleh dimuat turun',
        savingDraftLabel: 'Menyimpan Draf',

        validError: {
            nameTooLong: 'Nama Agent mesti mengandungi 50 aksara atau kurang.',
            desTooLong: 'Penerangan Agent mesti mengandungi 300 aksara atau kurang.',
            insTooLong: 'Arahan Agent mesti mengandungi 8000 aksara atau kurang.'
        },

        button: {
            shareButtonLabel: 'Kongsi',
            updateButtonLabel: 'Kemas kini',
            publishButtonLabel: 'Terbitkan',
            copyLinkButtonLabel: 'Salin pautan',
            saveButtonLabel: 'Simpan',
            uploadFileButtonLabel: 'Muat naik fail',
            cancelButtonLabel: 'Batal',
            deleteButtonLabel: 'Padam'
        },
        toast: {
            success: {
                createAgent: 'Agen telah berjaya dicipta',
                updateAgent: 'Agen telah berjaya dikemas kini',
                deleteAgent: 'Agen telah berjaya dipadamkan'
            },
            fail: {
                publishAgent:
                    'Ralat tidak dijangka: Tidak dapat menerbitkan agen draf ini. Sila cuba lagi',
                retrieveAgent:
                    'Ralat tidak dijangka: Tidak dapat mengambil data agen. Sila cuba lagi.',
                createAgent:
                    'Ralat tidak dijangka: Tidak dapat memulakan agen ini. Sila cuba lagi.',
                updateAgent: 'Ralat tidak dijangka: Tidak dapat mengemas kini agen. Sila cuba lagi.'
            }
        }
    }
};
