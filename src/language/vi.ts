export default {
    login: {
        button: {
            signIn: 'Tiếp tục với Azure AD'
        },
        label: {
            signIn: 'Đăng nhập',
            description: 'Bằng cách nhấp vào tiếp tục, bạn đồng ý với',
            and: 'và',
            terms: 'Điều khoản Dịch vụ',
            policy: 'Chính sách Quyền riêng tư',
            title: 'Truy cập bị từ chối',
            descriptionDenied:
                ' Bạn không có quyền truy cập vào trang này. Vui lòng yêu cầu quyền từ quản trị viên.',
            logOut: 'Đăng xuất',
            goBack: 'Quay lại trang trước'
        },
        toast: {
            fail: {
                authentication: 'Xác thực thất bại',
                authenticationDescription:
                    'Vui lòng liên hệ với dịch vụ khách hàng để thêm tài khoản của bạn'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'Cuộc trò chuyện mới',
                searchAgent: 'Tìm kiếm Agent của tôi',
                logOut: 'Đăng xuất',
                openSidebar: 'Mở thanh bên',
                closeSidebar: 'Đóng thanh bên'
            },
            button: {
                cancel: 'Hủy bỏ',
                logOut: 'Đăng xuất'
            },
            dialogue: {
                logOut: {
                    title: 'Bạn có chắc chắn muốn đăng xuất không ?',
                    description:
                        'Hành động này sẽ đưa bạn trở lại màn hình đăng nhập, và bạn có thể đăng nhập lại bất kỳ lúc nào.'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'Cuộc trò chuyện mới'
            },
            button: {
                unpinAgent: 'Bỏ ghim',
                searchAgent: 'Tìm kiếm Agents',
                renameConversation: 'Đổi tên',
                deleteConversation: 'Xóa',
                cancel: 'Hủy bỏ'
            },
            label: {
                loadingConversation: 'Tải lịch sử trò chuyện',
                createdTime: {
                    today: 'Hôm nay',
                    yesterday: 'Hôm qua',
                    thisWeek: '7 ngày qua',
                    thisMonth: '30 ngày qua'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'Bạn có chắc chắn muốn xóa cuộc trò chuyện này không ?',
                    description:
                        'Bạn có chắc chắn muốn xóa cuộc trò chuyện này không ? Điều này sẽ xóa vĩnh viễn dữ liệu cuộc trò chuyện.'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'Agent của tôi',
                createAgent: 'Tạo agent',
                seeMore: 'Xem thêm',
                newChat: 'Bắt đầu trò chuyện',
                pinAgent: 'Ghim vào thanh bên',
                unpinAgent: 'Bỏ ghim',
                copyLink: 'Sao chép liên kết'
            },
            label: {
                title: 'Agents',
                description:
                    'Tìm kiếm và tạo các phiên bản tùy chỉnh của agent kết hợp câu lệnh hướng dẫn, kiến thức bổ sung và các kỹ năng khác.',
                searchAgent: 'Tìm kiếm Agent',
                createdAgents: 'Tạo bởi tôi',
                sharedAgents: 'Được chia sẻ với tôi',
                noAgent: 'Không tìm thấy Agent nào',
                hasCreated: 'Được tạo bởi {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'Bản nháp',
                published: 'Đang hoạt động'
            },
            button: {
                createAgent: 'Tạo Agent',
                seeMore: 'Xem thêm',
                cancel: 'Hủy bỏ',
                deleteAgent: 'Xóa'
            },
            label: {
                title: 'Agent của tôi',
                createdByMe: 'Tạo bởi tôi',
                sharedWithMe: 'Được chia sẻ với tôi',
                createAgent: 'Tùy chỉnh phiên bản Agent cho các mục đích cụ thể',
                onlyMe: 'Chỉ mình tôi',
                shared: 'Các nhóm và cá nhân có quyền truy cập',
                noCreatedAgents: 'Chưa có Agent nào được tạo',
                noSharedAgents: 'Chưa có Agent nào được chia sẻ với bạn',
                hasCreated: 'Được tạo bởi {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'Bạn có chắc là muốn xóa Agent này không ?',
                    description:
                        'Hành động này không thể hoàn tác. Dữ liệu của Agent sẽ bị xóa vĩnh viễn.'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'Trò chuyện mới',
                editAgent: 'Chỉnh sửa Agent',
                pinAgent: 'Ghim vào thanh bên',
                unpinAgent: 'Bỏ ghim',
                copyLink: 'Sao chép liên kết'
            },
            tooltip: {
                uploadFile: 'Đính kèm tệp',
                uploadImage: 'Đính kèm hình ảnh'
            },
            button: {
                rcm1: 'Nhật Bản nằm ở đâu trong châu Á ?',
                rcm2: 'Đếm số nguyên tố từ 0 đến 100',
                rcm3: 'Văn bản mời bạn bè đến dự đám cưới',
                downloadFile: 'Tải xuống'
            },
            label: {
                greeting: 'Xin chào, tôi có thể giúp gì cho bạn hôm nay ?',
                chatPlaceholder: 'Nhập tin nhắn',
                agentChatPlaceholder: ' đang chờ tin nhắn của bạn',
                copyCode: 'Sao chép code',
                copyCodeDone: 'Đã sao chép!',
                hasCreated: 'Được tạo bởi {person}'
            }
        },
        userSettings: {
            groupManage: 'Quản lý nhóm',
            agentManage: 'Quản lý Agents',
            settings: {
                title: 'Cài đặt',
                general: 'Chung',
                language: 'Ngôn ngữ'
            },
            logOut: 'Đăng xuất'
        },
        toast: {
            success: {
                pinAgent: 'Đã ghim Agent vào thanh bên',
                unpinAgent: 'Đã bỏ ghim Agent khỏi thanh bên',
                linkCopy: 'Liên kết đã được sao chép vào bảng tạm',
                updateAgentAcl: 'Agent đã được chia sẻ với những người và nhóm được chọn',
                deleteConversation: 'Xóa thành công',
                deleteConversationDescription: 'Cuộc trò chuyện đã được xóa'
            },
            fail: {
                generalErrorTitle: 'Lỗi',
                fileExtensionInvalid: 'Phần mở rộng không hợp lệ',
                imageSizeInvalid: 'Kích thước ảnh vượt quá 20MB.',
                generalError: 'Đã xảy ra lỗi. Vui lòng thử lại.',
                uploadFileFailSingle: '{fileName} không thể tải lên. Vui lòng thử lại.',
                uploadFileFailPlural:
                    'Các tệp sau: {fileName} không thể tải lên. Vui lòng thử lại.',
                pinAgent: 'Không thể ghim Agent vào thanh bên'
            }
        }
    },

    group: {
        sidebar: {
            groupLabel: 'Nhóm'
        },
        dialog: {
            createGroupDialogHeader: 'Tạo nhóm mới',
            createGroupNamePlaceholder: 'Tên nhóm',
            createGroupButtonLabel: 'Tạo nhóm',
            createGroupNameEmpty: 'Tên nhóm không được để trống'
        },
        // my agent tab in group
        myAgentsTab: {
            tabLabel: 'Agent của tôi',
            searchAgentPlaceholder: 'Tìm kiếm agent',
            tabTitle: 'Lựa chọn hàng đầu',
            searchQueryDialog: {
                pinButtonTitle: 'Ghim vào thanh bên',
                copyButtonTitle: 'Sao chép liên kết',
                startChattingButtonTitle: 'Bắt đầu chat',
                creatorLabel: 'đã tạo'
            },
            myAgentDialog: {
                pinButtonTitle: 'Ghim vào thanh bên',
                copyButtonTitle: 'Sao chép liên kết',
                startChattingButtonTitle: 'Bắt đầu chat'
            },
            groupAgentFavoriteTitle: 'Được yêu thích trong nhóm {groupName}',
            groupAgentFavoriteSubTitle: 'Những Agent phổ biến nhất của nhóm {groupName}'
        },
        // members tab in group
        membersTab: {
            tabLabel: 'Thành viên',
            groupMembersLabel: 'Thành viên trong nhóm',
            memberSingularLabel: 'Thành viên',
            memberPluralLabel: 'Thành viên',
            allMemberTab: 'Toàn bộ thành viên',
            searchMemberPlaceHolder: 'Tìm kiếm thành viên',
            tableNameLabel: 'Tên',
            tableEmailLabel: 'Email',
            tableRoleLabel: 'Vai trò',
            currentUserLabel: 'Tôi',
            tableOption: {
                changeMemberRoleLabel: 'Thay đổi vai trò của thành viên trong nhóm',
                removeMemberLabel: 'Xóa {memberName} khỏi nhóm'
            },
            dialog: {
                addMemberDialogHeader: 'Mời thêm thành viên vào nhóm {groupName}',
                addMemberDialogDescription:
                    'Nhóm này là riêng tư. Chỉ một số thành viên và vai trò nhất định có thể sử dụng nhóm này',
                searchMemberPlaceHolder: 'Tìm kiếm thành viên bằng email',
                addMemberButtonLabel: 'Xác nhận',
                leaveGroupDialogHeader: 'Bạn có chắc chắn muốn thoát nhóm này không ?',
                leaveGroupButtonLabel: 'Thoát nhóm',
                needOneLeaderWarningText: 'Nhóm cần ít nhất một ADMIN',
                removeMemberDialogHeader: 'Xóa thành viên',
                removeMemberDialogDescription:
                    'Bạn có chắc chắn muốn xóa {memberName} ra khỏi nhóm này ?',
                removeMemberButtonLabel: 'Xác nhận',

                importCSV: 'Nhập tệp CSV',
                importCSVDes:
                    "Tệp phải bao gồm email và vai trò trên mỗi dòng. Vai trò nên là 'member'",
                showExampleButtonLabel: 'Hiển thị ví dụ',
                hideExampleButtonLabel: 'Ẩn ví dụ',
                uploadCSVButtonLabel: 'Tải lên CSV',
                emailRoleText: 'Email, Vai trò'
            }
        },
        // settings tab in group
        settingsTab: {
            tabLabel: 'Cài đặt',
            updateGroupLabel: 'Cập nhật nhóm',
            updateGroupSubLabel: 'Bạn có thể thay đổi tên nhóm ở đây',
            deleteGroupLabel: 'Xóa nhóm',
            deleteGroupSubLabel:
                'Bạn có thể xóa nhóm này, nhưng hãy lưu ý rằng hành động này không thể hoàn tác',
            dialog: {
                editDialog: {
                    dialogHeader: 'Thay đổi tên nhóm',
                    currentGroupNameLabel: 'Tên nhóm hiện tại',
                    newGroupNameLabel: 'Tên nhóm mới',
                    newGroupNamePlaceholder: 'Hãy nhập tên nhóm mới',
                    updateButtonLabel: 'Cập nhật'
                },
                deleteDialog: {
                    dialogHeader: 'Bạn có chắc chắn muốn xóa nhóm này không ?',
                    dialogDescription: 'Hành động này sẽ xóa nhóm {groupName}',
                    deleteButtonLabel: 'Xóa'
                },
                validError: {
                    newGroupNameEmpty: 'Tên nhóm mới không được để trống'
                }
            }
        },
        button: {
            backToChat: 'Quay lại chat',
            inviteMember: 'Mời thêm thành viên',
            seeMore: 'XEM THÊM',
            leaveGroup: 'Rời khỏi nhóm',
            cancel: 'Hủy'
        },
        tooltip: {
            createNewGroup: 'Tạo nhóm mới'
        },
        unavailableMessage: {
            noGroupMessage: 'Không có nhóm nào khả dụng',
            noAgentMessage: 'Không có agent nào khả dụng',
            noSettingAccessMessage: 'Bạn cần phải là ADMIN để truy cập vào cài đặt của nhóm này',
            noMemberAvailable: 'Không có thành viên nào khả dụng'
        },
        toast: {
            success: {
                deleteGroup: 'Xóa nhóm thành công'
            },
            fail: {
                generalErrorTitle: 'Lỗi',
                somethingWentWrong: 'Có lỗi xảy ra, vui lòng thử lại',
                createGroupFail: 'Tạo nhóm không thành công',
                editGroupFail: 'Chỉnh sửa nhóm không thành công',
                deleteGroupFail: 'Xóa nhóm không thành công',
                leaveGroupFail: 'Rời nhóm không thành công'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'Agent mới',
            activeStatusLive: 'Trực tiếp',
            activeStatusDraft: 'Bản nháp',
            activeStatusPublishOnlyMe: 'Chỉ mình tôi',
            activeStatusPublishAnyoneWithPermission: 'Cá nhân hoặc nhóm có quyền',
            activeStatusPublishEveryone: 'Mọi người'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'Ghim vào thanh bên',
                unpinAgentButtonLabel: 'Bỏ ghim',
                deleteAgentButtonLabel: 'Xóa Agent'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'Xóa Agent',
                deleteAgentDialogDescription:
                    'Bạn có chắc chắn muốn xóa Agent này không ? Hành động này không thể hoàn tác.'
            },
            share: {
                shareAgentDialogHeader: 'Chia sẻ Agent của tôi',
                shareAgentToPeopleButtonLabel: 'Chia sẻ với mọi người',
                shareAgentGeneralAccess: 'Quyền truy cập chung',
                shareStatusRestrictedLabel: 'Bị hạn chế',
                shareStatusRestrictedSubLabel:
                    'Chỉ những người và nhóm có quyền truy cập mới có thể mở bằng liên kết',
                shareStatusAnyoneLabel: 'Bất kỳ ai',
                shareStatusAnyoneSubLabel: 'Bất kỳ ai trong công ty có liên kết đều có thể xem',
                peopleTab: {
                    addPeoplePlaceholder: 'Thêm người',
                    peopleListLabel: 'Danh sách người',
                    option: {
                        canChatLabel: 'Có thể trò chuyện',
                        canChatSubLabel: 'Người dùng có thể trò chuyện với Agent này',
                        canEditLabel: 'Có thể chỉnh sửa nội dung Agent',
                        canEditSubLabel: 'Xem nội dung Agent, sao chép Agent, trò chuyện',
                        removeGroupLabel: 'Xóa nhóm'
                    }
                },
                shareAgentToGroupsButtonLabel: 'Chia sẻ với nhóm',
                groupsTab: {
                    addGroupPlaceholder: 'Thêm nhóm',
                    groupListLabel: 'Danh sách nhóm',
                    option: {
                        canChatLabel: 'Có thể trò chuyện',
                        canChatSubLabel: 'Người dùng có thể trò chuyện với Agent này',
                        canEditLabel: 'Có thể chỉnh sửa nội dung Agent',
                        canEditSubLabel: 'Xem nội dung Agent, sao chép Agent, trò chuyện',
                        removeGroupLabel: 'Xóa nhóm'
                    }
                }
            },
            update: {
                updateDialogHeader: 'Agent đã được cập nhật',
                agentCreator: ' đã tạo',
                accessLabel: 'Quyền truy cập',
                updateStatusOnlyMe: 'Chỉ mình tôi',
                updateStatusAnyoneWithPermission: 'Bất kỳ ai hoặc nhóm có quyền',
                updateStatusEveryone: 'Mọi người',
                pinButtonLabel: 'Ghim vào thanh bên',
                startConversationLabel: 'Bắt đầu cuộc trò chuyện'
            }
        },

        nameLabel: 'Tên',
        namePlaceholder: 'Đặt tên cho Agent của bạn',
        descriptionLabel: 'Mô tả',
        descriptionPlaceholder: 'Thêm một mô tả ngắn về những gì Agent này làm',
        instructionLabel: 'Hướng dẫn',
        instructionPlaceholder:
            'Agent này làm gì ? Nó hoạt động như thế nào ? Nó nên tránh điều gì ?',
        knowledgeLabel: 'Kiến thức',
        knowledgeSubLabel:
            'Nếu bạn tải tệp lên phần Kiến thức, các cuộc trò chuyện với Agent của bạn có thể bao gồm nội dung tệp. Các tệp có thể được tải xuống',
        savingDraftLabel: 'Đang lưu bản nháp',

        validError: {
            nameTooLong: 'Tên của Agent phải có ít hơn hoặc bằng 50 ký tự.',
            desTooLong: 'Mô tả của Agent phải có ít hơn hoặc bằng 300 ký tự.',
            insTooLong: 'Hướng dẫn của Agent phải có ít hơn hoặc bằng 8000 ký tự.'
        },

        button: {
            shareButtonLabel: 'Chia sẻ',
            updateButtonLabel: 'Cập nhật',
            publishButtonLabel: 'Công khai',
            copyLinkButtonLabel: 'Sao chép liên kết',
            saveButtonLabel: 'Lưu',
            uploadFileButtonLabel: 'Tải lên tệp',
            cancelButtonLabel: 'Hủy',
            deleteButtonLabel: 'Xóa'
        },
        toast: {
            success: {
                createAgent: 'Agent đã được tạo thành công',
                updateAgent: 'Agent đã được cập nhật thành công',
                deleteAgent: 'Agent đã được xóa thành công'
            },
            fail: {
                publishAgent:
                    'Lỗi không mong muốn: Không thể xuất bản agent nháp này. Vui lòng thử lại.',
                retrieveAgent:
                    'Lỗi không mong muốn: Không thể lấy dữ liệu agent. Vui lòng thử lại.',
                createAgent: 'Lỗi không mong muốn: Không thể khởi tạo agent này. Vui lòng thử lại.',
                updateAgent: 'Lỗi không mong muốn: Không thể cập nhật agent. Vui lòng thử lại.'
            }
        }
    }
};
