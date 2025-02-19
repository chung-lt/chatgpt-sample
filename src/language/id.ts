export default {
    login: {
        button: {
            signIn: 'Lanjutkan dengan Azure AD'
        },
        label: {
            signIn: 'Masuk',
            description: 'Dengan mengklik lanjutkan, Anda menyetujui',
            and: 'dan',
            terms: 'Ketentuan Layanan',
            policy: 'Kebijakan Privasi',
            title: 'Akses ditolak',
            descriptionDenied:
                'Anda tidak memiliki izin untuk mengakses sumber daya ini. Silakan minta izin dari administrator.',
            logOut: 'Keluar',
            goBack: 'Kembali ke halaman sebelumnya'
        },
        toast: {
            fail: {
                authentication: 'Gagal otentikasi',
                authenticationDescription:
                    'Silakan hubungi layanan pelanggan untuk menambahkan akun Anda'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'Obrolan baru',
                searchAgent: 'Cari agen',
                logOut: 'Keluar',
                openSidebar: 'Buka bilah sisi',
                closeSidebar: 'Tutup bilah sisi'
            },
            button: {
                cancel: 'Batal',
                logOut: 'Keluar'
            },
            dialogue: {
                logOut: {
                    title: 'Apakah Anda yakin ingin keluar?',
                    description:
                        'Tindakan ini akan mengembalikan Anda ke layar masuk, dan Anda dapat masuk kembali kapan saja.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'Obrolan baru'
            },
            button: {
                unpinAgent: 'Sembunyikan dari bilah sisi',
                searchAgent: 'Cari agen',
                renameConversation: 'Ganti nama',
                deleteConversation: 'Hapus',
                cancel: 'Batal'
            },
            label: {
                loadingConversation: 'Memuat percakapan',
                createdTime: {
                    today: 'Hari ini',
                    yesterday: 'Kemarin',
                    thisWeek: '7 Hari Terakhir',
                    thisMonth: '30 Hari Terakhir'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'Apakah Anda yakin ingin menghapus percakapan ini?',
                    description:
                        'Apakah Anda yakin ingin menghapus percakapan ini? Tindakan ini akan menghapus data secara permanen.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'Agen saya',
                createAgent: 'Buat agen',
                seeMore: 'Lihat lebih banyak',
                newChat: 'Mulai obrolan',
                pinAgent: 'Sematkan ke bilah sisi',
                unpinAgent: 'Sembunyikan dari bilah sisi',
                copyLink: 'Salin tautan'
            },
            label: {
                title: 'Agen',
                description:
                    'Cari dan buat versi agen khusus yang menggabungkan instruksi, pengetahuan tambahan, dan beberapa kemampuan.',
                searchAgent: 'Cari agen',
                createdAgents: 'Dibuat oleh saya',
                sharedAgents: 'Dibagikan kepada saya',
                noAgent: 'Tidak ada agen yang tersedia',
                hasCreated: 'Dibuat oleh {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'Draf',
                published: 'Hidup'
            },
            button: {
                createAgent: 'Buat agen',
                seeMore: 'Lihat lebih banyak',
                cancel: 'Batal',
                deleteAgent: 'Hapus'
            },
            label: {
                title: 'Agen Saya',
                createdByMe: 'Dibuat oleh saya',
                sharedWithMe: 'Dibagikan dengan saya',
                createAgent: 'Sesuaikan versi agen untuk tujuan tertentu',
                onlyMe: 'Hanya saya',
                shared: 'Dibagikan dengan grup dan individu dengan hak akses',
                noCreatedAgents: 'Belum ada agen yang dibuat',
                noSharedAgents: 'Belum ada agen yang dibagikan dengan Anda',
                hasCreated: 'Dibuat oleh {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'Apakah Anda yakin ingin menghapus agen ini?',
                    description:
                        'Tindakan ini tidak dapat dibatalkan. Data agen akan dihapus secara permanen.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'Obrolan baru',
                editAgent: 'Edit agen',
                pinAgent: 'Sematkan ke bilah sisi',
                unpinAgent: 'Sembunyikan dari bilah sisi',
                copyLink: 'Salin tautan'
            },
            tooltip: {
                uploadFile: 'Lampirkan file',
                uploadImage: 'Lampirkan gambar'
            },
            button: {
                rcm1: 'Di mana letak Jepang di Asia?',
                rcm2: 'Hitung bilangan prima dari 0 hingga 100',
                rcm3: 'Teks untuk mengundang teman ke pernikahan',
                downloadFile: 'Unduh'
            },
            label: {
                greeting: 'Halo, bagaimana saya dapat membantu Anda hari ini?',
                chatPlaceholder: 'Ketik pesan',
                agentChatPlaceholder: ' menunggu pesan Anda',
                copyCode: 'Salin kode',
                copyCodeDone: 'Disalin!',
                hasCreated: 'Dibuat oleh {person}'
            }
        },
        userSettings: {
            groupManage: 'Kelola grup',
            agentManage: 'Kelola agen',
            settings: {
                title: 'Pengaturan',
                general: 'Umum',
                language: 'Bahasa'
            },
            logOut: 'Keluar'
        },
        toast: {
            success: {
                pinAgent: 'Agen telah disematkan ke bilah sisi',
                unpinAgent: 'Agen telah dihapus dari bilah sisi',
                linkCopy: 'Tautan disalin ke clipboard',
                updateAgentAcl: 'Agen telah dibagikan kepada orang dan grup yang dipilih',
                deleteConversation: 'Berhasil dihapus',
                deleteConversationDescription: 'Percakapan telah dihapus'
            },
            fail: {
                generalErrorTitle: 'Kesalahan',
                fileExtensionInvalid: 'Ekstensi tidak valid',
                imageSizeInvalid: 'Ukuran gambar melebihi 20MB.',
                generalError: 'Terjadi kesalahan. Silakan coba lagi.',
                uploadFileFailSingle: '{fileName} tidak dapat diunggah. Silakan coba lagi.',
                uploadFileFailPlural:
                    'File berikut: {fileName} tidak dapat diunggah. Silakan coba lagi.',
                pinAgent: 'Agen tidak dapat disematkan ke bilah sisi'
            }
        }
    },
    group: {
        sidebar: {
            groupLabel: 'Grup'
        },
        dialog: {
            createGroupDialogHeader: 'Buat grup baru',
            createGroupNamePlaceholder: 'Nama grup',
            createGroupButtonLabel: 'Buat',
            createGroupNameEmpty: 'Nama grup diperlukan'
        },
        myAgentsTab: {
            tabLabel: 'Agen Saya',
            searchAgentPlaceholder: 'Cari agen',
            tabTitle: 'Pilihan terbaik',
            searchQueryDialog: {
                pinButtonTitle: 'Sematkan ke bilah sisi',
                copyButtonTitle: 'Salin tautan',
                startChattingButtonTitle: 'Mulai Obrolan',
                creatorLabel: 'dibuat'
            },
            myAgentDialog: {
                pinButtonTitle: 'Sematkan ke bilah sisi',
                copyButtonTitle: 'Salin tautan',
                startChattingButtonTitle: 'Mulai Obrolan'
            },
            groupAgentFavoriteTitle: 'Favorit grup {groupName}',
            groupAgentFavoriteSubTitle: 'Agen paling populer dari grup {groupName}'
        },
        membersTab: {
            tabLabel: 'Anggota',
            groupMembersLabel: 'Anggota grup',
            memberSingularLabel: 'anggota',
            memberPluralLabel: 'anggota',
            allMemberTab: 'Semua anggota',
            searchMemberPlaceHolder: 'Cari anggota berdasarkan email',
            tableNameLabel: 'Nama',
            tableEmailLabel: 'Email',
            tableRoleLabel: 'Peran',
            currentUserLabel: 'Saya',
            tableOption: {
                changeMemberRoleLabel: 'Ubah peran anggota',
                removeMemberLabel: 'Hapus {memberName} dari grup'
            },
            dialog: {
                addMemberDialogHeader: 'Tambahkan anggota ke grup {groupName}',
                addMemberDialogDescription:
                    'Grup ini bersifat privat. Hanya anggota dan peran tertentu yang dapat menggunakan grup ini.',
                searchMemberPlaceHolder: 'Cari anggota berdasarkan email',
                addMemberButtonLabel: 'Konfirmasi',
                leaveGroupDialogHeader: 'Apakah Anda yakin ingin meninggalkan grup ini?',
                leaveGroupButtonLabel: 'Tinggalkan grup',
                needOneLeaderWarningText: 'Grup memerlukan setidaknya satu ADMIN',
                removeMemberDialogHeader: 'Hapus anggota',
                removeMemberDialogDescription:
                    'Apakah Anda yakin ingin menghapus {memberName} dari grup ini?',
                removeMemberButtonLabel: 'Hapus',

                importCSV: 'Impor file CSV',
                importCSVDes:
                    "File harus menyertakan email dan peran di setiap baris. Peran harus 'member'",
                showExampleButtonLabel: 'Tampilkan contoh',
                hideExampleButtonLabel: 'Sembunyikan contoh',
                uploadCSVButtonLabel: 'Unggah CSV',
                emailRoleText: 'Email, Peran'
            }
        },
        settingsTab: {
            tabLabel: 'Pengaturan',
            updateGroupLabel: 'Perbarui grup',
            updateGroupSubLabel: 'Anda dapat mengubah nama grup Anda',
            deleteGroupLabel: 'Hapus grup',
            deleteGroupSubLabel:
                'Anda dapat menghapus grup Anda, tetapi perlu diketahui bahwa tindakan ini tidak dapat dibatalkan.',
            dialog: {
                editDialog: {
                    dialogHeader: 'Ubah nama grup',
                    currentGroupNameLabel: 'Nama grup saat ini',
                    newGroupNameLabel: 'Nama grup baru',
                    newGroupNamePlaceholder: 'Masukkan nama grup baru',
                    updateButtonLabel: 'Perbarui'
                },
                deleteDialog: {
                    dialogHeader: 'Apakah Anda yakin ingin menghapus grup ini?',
                    dialogDescription: 'Tindakan ini akan menghapus grup {groupName}.',
                    deleteButtonLabel: 'Hapus'
                },
                validError: {
                    newGroupNameEmpty: 'Nama grup baru tidak boleh kosong'
                }
            }
        },
        button: {
            backToChat: 'Kembali ke obrolan',
            inviteMember: 'Undang anggota',
            seeMore: 'LIHAT LEBIH BANYAK',
            cancel: 'Batal'
        },
        tooltip: {
            createNewGroup: 'Buat grup baru'
        },
        unavailableMessage: {
            noGroupMessage: 'Tidak ada grup yang tersedia',
            noAgentMessage: 'Tidak ada agen yang tersedia',
            noSettingAccessMessage: 'Anda harus menjadi ADMIN untuk mengakses pengaturan grup ini.',
            noMemberAvailable: 'Tidak ada anggota yang tersedia'
        },
        toast: {
            success: {
                deleteGroup: 'Grup berhasil dihapus'
            },
            fail: {
                generalErrorTitle: 'Kesalahan',
                somethingWentWrong: 'Terjadi kesalahan, silakan coba lagi.',
                createGroupFail: 'Pembuatan grup gagal',
                editGroupFail: 'Pembaruan grup gagal',
                deleteGroupFail: 'Penghapusan grup gagal',
                leaveGroupFail: 'Gagal keluar dari grup'
            }
        }
    },
    editAgent: {
        topBar: {
            newAgentTitle: 'Agen Baru',
            activeStatusLive: 'Hidup',
            activeStatusDraft: 'Draf',
            activeStatusPublishOnlyMe: 'Hanya saya',
            activeStatusPublishAnyoneWithPermission: 'Siapa pun atau grup dengan izin',
            activeStatusPublishEveryone: 'Semua orang'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'Sematkan ke bilah sisi',
                unpinAgentButtonLabel: 'Lepas sematan',
                deleteAgentButtonLabel: 'Hapus Agen'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'Hapus Agen',
                deleteAgentDialogDescription:
                    'Apakah Anda yakin ingin menghapus agen ini? Tindakan ini tidak dapat dibatalkan.'
            },
            share: {
                shareAgentDialogHeader: 'Bagikan agen saya',
                shareAgentToPeopleButtonLabel: 'Bagikan ke orang lain',
                shareAgentGeneralAccess: 'Akses umum',
                shareStatusRestrictedLabel: 'Dibatasi',
                shareStatusRestrictedSubLabel:
                    'Hanya orang dan grup dengan akses yang dapat membuka dengan tautan.',
                shareStatusAnyoneLabel: 'Siapa saja',
                shareStatusAnyoneSubLabel: 'Siapa saja di perusahaan dengan tautan dapat melihat.',
                peopleTab: {
                    addPeoplePlaceholder: 'Tambahkan orang',
                    peopleListLabel: 'Daftar orang',
                    option: {
                        canChatLabel: 'Dapat mengobrol',
                        canChatSubLabel: 'Pengguna dapat mengobrol dengan agen ini',
                        canEditLabel: 'Dapat mengedit konten agen',
                        canEditSubLabel: 'Tampilkan konten agen, duplikat agen, obrolan',
                        removeGroupLabel: 'Hapus grup'
                    }
                },
                shareAgentToGroupsButtonLabel: 'Bagikan ke grup',
                groupsTab: {
                    addGroupPlaceholder: 'Tambahkan grup',
                    groupListLabel: 'Daftar grup',
                    option: {
                        canChatLabel: 'Dapat mengobrol',
                        canChatSubLabel: 'Pengguna dapat mengobrol dengan agen ini',
                        canEditLabel: 'Dapat mengedit konten agen',
                        canEditSubLabel: 'Tampilkan konten agen, duplikat agen, obrolan',
                        removeGroupLabel: 'Hapus grup'
                    }
                }
            },
            update: {
                updateDialogHeader: 'Agen telah diperbarui',
                agentCreator: ' dibuat oleh',
                accessLabel: 'Akses',
                updateStatusOnlyMe: 'Hanya saya',
                updateStatusAnyoneWithPermission: 'Siapa pun atau grup dengan izin',
                updateStatusEveryone: 'Semua orang',
                pinButtonLabel: 'Sematkan ke bilah sisi',
                startConversationLabel: 'Mulai Percakapan'
            }
        },
        nameLabel: 'Nama',
        namePlaceholder: 'Berikan nama untuk agen Anda',
        descriptionLabel: 'Deskripsi',
        descriptionPlaceholder: 'Tambahkan deskripsi singkat tentang apa yang dilakukan agen ini',
        instructionLabel: 'Instruksi',
        instructionPlaceholder:
            'Apa yang dilakukan agen ini? Bagaimana ia berperilaku? Apa yang harus dihindari?',
        knowledgeLabel: 'Pengetahuan',
        knowledgeSubLabel:
            'Jika Anda mengunggah file di bawah Pengetahuan, percakapan dengan agen Anda mungkin menyertakan isi file. File dapat diunduh.',
        savingDraftLabel: 'Menyimpan draf',

        validError: {
            nameTooLong: 'Nama Agent harus terdiri dari 50 karakter atau kurang.',
            desTooLong: 'Deskripsi Agent harus terdiri dari 300 karakter atau kurang.',
            insTooLong: 'Instruksi Agent harus terdiri dari 8000 karakter atau kurang.'
        },

        button: {
            shareButtonLabel: 'Bagikan',
            updateButtonLabel: 'Perbarui',
            publishButtonLabel: 'Publikasikan',
            copyLinkButtonLabel: 'Salin tautan',
            saveButtonLabel: 'Simpan',
            uploadFileButtonLabel: 'Unggah file',
            cancelButtonLabel: 'Batal',
            deleteButtonLabel: 'Hapus'
        },
        toast: {
            success: {
                createAgent: 'Agen berhasil dibuat',
                updateAgent: 'Agen berhasil diperbarui',
                deleteAgent: 'Agen berhasil dihapus'
            },
            fail: {
                publishAgent:
                    'Kesalahan tak terduga: Tidak dapat mempublikasikan agen draf ini. Silakan coba lagi.',
                retrieveAgent:
                    'Kesalahan tak terduga: Tidak dapat mengambil data agen. Silakan coba lagi.',
                createAgent:
                    'Kesalahan tak terduga: Tidak dapat menginisialisasi agen ini. Silakan coba lagi.',
                updateAgent:
                    'Kesalahan tak terduga: Tidak dapat memperbarui agen. Silakan coba lagi.'
            }
        }
    }
};
