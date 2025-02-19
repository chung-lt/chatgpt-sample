export default {
    login: {
        button: {
            signIn: 'ดำเนินการต่อด้วย Azure AD'
        },
        label: {
            signIn: 'เข้าสู่ระบบ',
            description: 'โดยการคลิกดำเนินการต่อ คุณยอมรับ',
            and: 'และ',
            terms: 'เงื่อนไขการให้บริการ',
            policy: 'นโยบายความเป็นส่วนตัว',
            title: 'การเข้าถึงถูกปฏิเสธ',
            descriptionDenied: 'คุณไม่มีสิทธิ์เข้าถึงทรัพยากรนี้ กรุณาขอสิทธิ์จากผู้ดูแลระบบ',
            logOut: 'ออกจากระบบ',
            goBack: 'กลับไปยังหน้าก่อนหน้า'
        },
        toast: {
            fail: {
                authentication: 'การยืนยันตัวตนล้มเหลว',
                authenticationDescription: 'กรุณาติดต่อฝ่ายบริการลูกค้าเพื่อเพิ่มบัญชีของคุณ'
            }
        }
    },
    home: {
        mainSidebar: {
            tooltip: {
                newChat: 'เริ่มการสนทนาใหม่',
                searchAgent: 'ค้นหาเอเจนต์',
                logOut: 'ออกจากระบบ',
                openSidebar: 'เปิดแถบด้านข้าง',
                closeSidebar: 'ปิดแถบด้านข้าง'
            },
            button: {
                cancel: 'ยกเลิก',
                logOut: 'ออกจากระบบ'
            },
            dialogue: {
                logOut: {
                    title: 'คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?',
                    description:
                        'การดำเนินการนี้จะนำคุณกลับไปยังหน้าจอเข้าสู่ระบบ และคุณสามารถเข้าสู่ระบบใหม่ได้ทุกเมื่อ'
                }
            }
        },
        subSidebar: {
            tooltip: {
                newChat: 'เริ่มการสนทนาใหม่'
            },
            button: {
                unpinAgent: 'ซ่อนจากแถบด้านข้าง',
                searchAgent: 'ค้นหาเอเจนต์',
                renameConversation: 'เปลี่ยนชื่อ',
                deleteConversation: 'ลบ',
                cancel: 'ยกเลิก'
            },
            label: {
                loadingConversation: 'กำลังโหลดการสนทนา',
                createdTime: {
                    today: 'วันนี้',
                    yesterday: 'เมื่อวาน',
                    thisWeek: '7 วันที่ผ่านมา',
                    thisMonth: '30 วันที่ผ่านมา'
                }
            },
            dialogue: {
                deleteConversation: {
                    title: 'คุณแน่ใจหรือไม่ว่าต้องการลบการสนทนานี้?',
                    description: 'คุณแน่ใจหรือไม่ว่าต้องการลบการสนทนานี้? ข้อมูลจะถูกลบอย่างถาวร'
                }
            }
        },
        searchAgent: {
            button: {
                myAgent: 'เอเจนต์ของฉัน',
                createAgent: 'สร้างเอเจนต์',
                seeMore: 'ดูเพิ่มเติม',
                newChat: 'เริ่มการสนทนา',
                pinAgent: 'ปักหมุดไปยังแถบด้านข้าง',
                unpinAgent: 'ซ่อนจากแถบด้านข้าง',
                copyLink: 'คัดลอกลิงก์'
            },
            label: {
                title: 'เอเจนต์',
                description:
                    'ค้นหาและสร้างเอเจนต์แบบกำหนดเองที่รวมคำแนะนำ ความรู้เพิ่มเติม และทักษะที่หลากหลาย',
                searchAgent: 'ค้นหาเอเจนต์',
                createdAgents: 'ฉันสร้าง',
                sharedAgents: 'แชร์กับฉัน',
                noAgent: 'ไม่มีเอเจนต์ที่พร้อมใช้งาน',
                hasCreated: 'สร้างโดย {person}'
            }
        },
        myAgent: {
            tooltip: {
                draft: 'ร่าง',
                published: 'เผยแพร่แล้ว'
            },
            button: {
                createAgent: 'สร้างเอเจนต์',
                seeMore: 'ดูเพิ่มเติม',
                cancel: 'ยกเลิก',
                deleteAgent: 'ลบ'
            },
            label: {
                title: 'เอเจนต์ของฉัน',
                createdByMe: 'ฉันสร้าง',
                sharedWithMe: 'แชร์กับฉัน',
                createAgent: 'ปรับแต่งเวอร์ชันของเอเจนต์สำหรับจุดประสงค์เฉพาะ',
                onlyMe: 'เฉพาะฉัน',
                shared: 'แชร์กับกลุ่มและบุคคลที่มีสิทธิ์การเข้าถึง',
                noCreatedAgents: 'ยังไม่มีการสร้างเอเจนต์',
                noSharedAgents: 'ยังไม่มีการแชร์เอเจนต์กับคุณ',
                hasCreated: 'สร้างโดย {person}'
            },
            dialogue: {
                deleteAgent: {
                    title: 'คุณแน่ใจหรือไม่ว่าต้องการลบเอเจนต์นี้?',
                    description:
                        'การดำเนินการนี้ไม่สามารถย้อนกลับได้ ข้อมูลของเอเจนต์จะถูกลบอย่างถาวร'
                }
            }
        },
        chat: {
            agentDropdown: {
                newChat: 'เริ่มการสนทนาใหม่',
                editAgent: 'แก้ไขเอเจนต์',
                pinAgent: 'ปักหมุดไปยังแถบด้านข้าง',
                unpinAgent: 'ซ่อนจากแถบด้านข้าง',
                copyLink: 'คัดลอกลิงก์'
            },
            tooltip: {
                uploadFile: 'แนบไฟล์',
                uploadImage: 'แนบรูปภาพ'
            },
            button: {
                rcm1: 'ญี่ปุ่นตั้งอยู่ในส่วนใดของเอเชีย?',
                rcm2: 'นับจำนวนเฉพาะจาก 0 ถึง 100',
                rcm3: 'ข้อความเชิญเพื่อนไปงานแต่งงาน',
                downloadFile: 'ดาวน์โหลด'
            },
            label: {
                greeting: 'สวัสดีค่ะ/ครับ วันนี้ฉันสามารถช่วยอะไรคุณได้บ้าง?',
                chatPlaceholder: 'พิมพ์ข้อความ',
                agentChatPlaceholder: ' กำลังรอข้อความของคุณ',
                copyCode: 'คัดลอกโค้ด',
                copyCodeDone: 'คัดลอกแล้ว!',
                hasCreated: 'สร้างโดย {person}'
            }
        },
        userSettings: {
            groupManage: 'จัดการกลุ่ม',
            agentManage: 'จัดการเอเจนต์',
            settings: {
                title: 'การตั้งค่า',
                general: 'ทั่วไป',
                language: 'ภาษา'
            },
            logOut: 'ออกจากระบบ'
        },
        toast: {
            success: {
                pinAgent: 'เอเจนต์ถูกปักหมุดไปยังแถบด้านข้างแล้ว',
                unpinAgent: 'เอเจนต์ถูกลบออกจากแถบด้านข้างแล้ว',
                linkCopy: 'ลิงก์ถูกคัดลอกไปยังคลิปบอร์ดแล้ว',
                updateAgentAcl: 'เอเจนต์ถูกแชร์กับบุคคลและกลุ่มที่เลือกแล้ว',
                deleteConversation: 'ลบสำเร็จ',
                deleteConversationDescription: 'การสนทนาได้ถูกลบแล้ว'
            },
            fail: {
                generalErrorTitle: 'ข้อผิดพลาด',
                fileExtensionInvalid: 'ส่วนขยายไฟล์ไม่ถูกต้อง',
                imageSizeInvalid: 'ขนาดของภาพเกิน 20MB.',
                generalError: 'มีบางอย่างผิดพลาด กรุณาลองอีกครั้ง',
                uploadFileFailSingle: '{fileName} ไม่สามารถอัปโหลดได้ กรุณาลองอีกครั้ง',
                uploadFileFailPlural:
                    'ไฟล์ต่อไปนี้: {fileName} ไม่สามารถอัปโหลดได้ กรุณาลองอีกครั้ง',
                pinAgent: 'ไม่สามารถปักหมุดเอเจนต์ไปยังแถบด้านข้างได้'
            }
        }
    },
    group: {
        sidebar: {
            groupLabel: 'กลุ่ม'
        },
        dialog: {
            createGroupDialogHeader: 'สร้างกลุ่มใหม่',
            createGroupNamePlaceholder: 'ชื่อกลุ่ม',
            createGroupButtonLabel: 'สร้าง',
            createGroupNameEmpty: 'ต้องระบุชื่อกลุ่ม'
        },
        // แท็บตัวแทนของฉันในกลุ่ม
        myAgentsTab: {
            tabLabel: 'ตัวแทนของฉัน',
            searchAgentPlaceholder: 'ค้นหาตัวแทน',
            tabTitle: 'ตัวเลือกยอดนิยม',
            searchQueryDialog: {
                pinButtonTitle: 'ปักหมุดที่แถบด้านข้าง',
                copyButtonTitle: 'คัดลอกลิงก์',
                startChattingButtonTitle: 'เริ่มแชท',
                creatorLabel: 'สร้างขึ้น'
            },
            myAgentDialog: {
                pinButtonTitle: 'ปักหมุดที่แถบด้านข้าง',
                copyButtonTitle: 'คัดลอกลิงก์',
                startChattingButtonTitle: 'เริ่มแชท'
            },
            groupAgentFavoriteTitle: 'รายการโปรดของกลุ่ม {groupName}',
            groupAgentFavoriteSubTitle: 'ตัวแทนที่ได้รับความนิยมสูงสุดของกลุ่ม {groupName}'
        },
        // แท็บสมาชิกในกลุ่ม
        membersTab: {
            tabLabel: 'สมาชิก',
            groupMembersLabel: 'สมาชิกในกลุ่ม',
            memberSingularLabel: 'สมาชิก',
            memberPluralLabel: 'สมาชิก',
            allMemberTab: 'สมาชิกทั้งหมด',
            searchMemberPlaceHolder: 'ค้นหาสมาชิกโดยอีเมล',
            tableNameLabel: 'ชื่อ',
            tableEmailLabel: 'อีเมล',
            tableRoleLabel: 'บทบาท',
            currentUserLabel: 'ฉัน',
            tableOption: {
                changeMemberRoleLabel: 'เปลี่ยนบทบาทของสมาชิก',
                removeMemberLabel: 'ลบ {memberName} ออกจากกลุ่ม'
            },
            dialog: {
                addMemberDialogHeader: 'เพิ่มสมาชิกเพิ่มเติมในกลุ่ม {groupName}',
                addMemberDialogDescription:
                    'กลุ่มนี้เป็นกลุ่มส่วนตัว สมาชิกและบทบาทบางกลุ่มเท่านั้นที่สามารถใช้กลุ่มนี้',
                searchMemberPlaceHolder: 'ค้นหาสมาชิกโดยอีเมล',
                addMemberButtonLabel: 'ยืนยัน',
                leaveGroupDialogHeader: 'คุณแน่ใจหรือไม่ว่าต้องการออกจากกลุ่มนี้?',
                leaveGroupButtonLabel: 'ออกจากกลุ่ม',
                needOneLeaderWarningText: 'กลุ่มต้องมีผู้ดูแลอย่างน้อยหนึ่งคน',
                removeMemberDialogHeader: 'ลบสมาชิก',
                removeMemberDialogDescription:
                    'คุณแน่ใจหรือไม่ว่าต้องการลบ {memberName} ออกจากกลุ่มนี้?',
                removeMemberButtonLabel: 'ลบ',

                importCSV: 'นำเข้าไฟล์ CSV',
                importCSVDes: "ไฟล์ต้องมีอีเมลและบทบาทในแต่ละบรรทัด บทบาทควรเป็น 'member'",
                showExampleButtonLabel: 'แสดงตัวอย่าง',
                hideExampleButtonLabel: 'ซ่อนตัวอย่าง',
                uploadCSVButtonLabel: 'อัปโหลด CSV',
                emailRoleText: 'อีเมล, บทบาท'
            }
        },
        // แท็บการตั้งค่าในกลุ่ม
        settingsTab: {
            tabLabel: 'การตั้งค่า',
            updateGroupLabel: 'อัปเดตกลุ่ม',
            updateGroupSubLabel: 'คุณสามารถเปลี่ยนชื่อกลุ่มของคุณได้',
            deleteGroupLabel: 'ลบกลุ่ม',
            deleteGroupSubLabel:
                'คุณสามารถลบกลุ่มของคุณได้ แต่โปรดทราบว่าการกระทำนี้ไม่สามารถย้อนกลับได้',
            dialog: {
                editDialog: {
                    dialogHeader: 'เปลี่ยนชื่อกลุ่ม',
                    currentGroupNameLabel: 'ชื่อกลุ่มปัจจุบัน',
                    newGroupNameLabel: 'ชื่อกลุ่มใหม่',
                    newGroupNamePlaceholder: 'กรอกชื่อกลุ่มใหม่',
                    updateButtonLabel: 'อัปเดต'
                },
                deleteDialog: {
                    dialogHeader: 'คุณแน่ใจหรือไม่ว่าต้องการลบกลุ่มนี้?',
                    dialogDescription: 'การกระทำนี้จะลบกลุ่ม {groupName}',
                    deleteButtonLabel: 'ลบ'
                },
                validError: {
                    newGroupNameEmpty: 'ชื่อกลุ่มใหม่ต้องไม่ว่างเปล่า'
                }
            }
        },
        button: {
            backToChat: 'กลับไปที่แชท',
            inviteMember: 'เชิญสมาชิก',
            seeMore: 'ดูเพิ่มเติม',
            cancel: 'ยกเลิก'
        },
        tooltip: {
            createNewGroup: 'สร้างกลุ่มใหม่'
        },
        unavailableMessage: {
            noGroupMessage: 'ไม่มีกลุ่มที่มีอยู่',
            noAgentMessage: 'ไม่มีตัวแทนที่มีอยู่',
            noSettingAccessMessage: 'คุณต้องเป็นผู้ดูแลเพื่อเข้าถึงการตั้งค่าของกลุ่มนี้',
            noMemberAvailable: 'ไม่มีสมาชิกที่ใช้ได้'
        },
        toast: {
            success: {
                deleteGroup: 'ลบกลุ่มสำเร็จ'
            },
            fail: {
                generalErrorTitle: 'ข้อผิดพลาด',
                somethingWentWrong: 'เกิดข้อผิดพลาดบางอย่าง โปรดลองอีกครั้ง',
                createGroupFail: 'สร้างกลุ่มไม่สำเร็จ',
                editGroupFail: 'แก้ไขกลุ่มไม่สำเร็จ',
                deleteGroupFail: 'ลบกลุ่มไม่สำเร็จ',
                leaveGroupFail: 'ออกจากกลุ่มไม่สำเร็จ'
            }
        }
    },

    editAgent: {
        topBar: {
            newAgentTitle: 'ตัวแทนใหม่',
            activeStatusLive: 'ออนไลน์',
            activeStatusDraft: 'ร่าง',
            activeStatusPublishOnlyMe: 'เฉพาะฉัน',
            activeStatusPublishAnyoneWithPermission: 'ใครก็ได้หรือกลุ่มที่มีสิทธิ์',
            activeStatusPublishEveryone: 'ทุกคน'
        },
        dialog: {
            option: {
                pinAgentButtonLabel: 'ปักหมุดที่แถบด้านข้าง',
                unpinAgentButtonLabel: 'เลิกปักหมุด',
                deleteAgentButtonLabel: 'ลบตัวแทน'
            },
            deleteAgent: {
                deleteAgentDialogHeader: 'ลบตัวแทน',
                deleteAgentDialogDescription:
                    'คุณแน่ใจหรือไม่ว่าต้องการลบตัวแทนนี้? การกระทำนี้ไม่สามารถย้อนกลับได้'
            },
            share: {
                shareAgentDialogHeader: 'แชร์ตัวแทนของฉัน',
                shareAgentToPeopleButtonLabel: 'แชร์กับคน',
                shareAgentGeneralAccess: 'การเข้าถึงทั่วไป',
                shareStatusRestrictedLabel: 'ถูกจำกัด',
                shareStatusRestrictedSubLabel:
                    'เฉพาะผู้คนและกลุ่มที่มีสิทธิ์เท่านั้นที่สามารถเปิดลิงก์ได้',
                shareStatusAnyoneLabel: 'ทุกคน',
                shareStatusAnyoneSubLabel: 'ทุกคนในบริษัทที่มีลิงก์สามารถดูได้',
                peopleTab: {
                    addPeoplePlaceholder: 'เพิ่มคน',
                    peopleListLabel: 'รายการคน',
                    option: {
                        canChatLabel: 'สามารถแชทได้',
                        canChatSubLabel: 'ผู้ใช้งานสามารถแชทกับตัวแทนนี้ได้',
                        canEditLabel: 'สามารถแก้ไขเนื้อหาของตัวแทน',
                        canEditSubLabel: 'แสดงเนื้อหาของตัวแทน, ทำซ้ำตัวแทน, แชท',
                        removeGroupLabel: 'ลบกลุ่ม'
                    }
                },
                shareAgentToGroupsButtonLabel: 'แชร์กับกลุ่ม',
                groupsTab: {
                    addGroupPlaceholder: 'เพิ่มกลุ่ม',
                    groupListLabel: 'รายการกลุ่ม',
                    option: {
                        canChatLabel: 'สามารถแชทได้',
                        canChatSubLabel: 'ผู้ใช้งานสามารถแชทกับตัวแทนนี้ได้',
                        canEditLabel: 'สามารถแก้ไขเนื้อหาของตัวแทน',
                        canEditSubLabel: 'แสดงเนื้อหาของตัวแทน, ทำซ้ำตัวแทน, แชท',
                        removeGroupLabel: 'ลบกลุ่ม'
                    }
                }
            },
            update: {
                updateDialogHeader: 'ตัวแทนได้รับการอัปเดตแล้ว',
                agentCreator: ' ได้สร้าง',
                accessLabel: 'การเข้าถึง',
                updateStatusOnlyMe: 'เฉพาะฉัน',
                updateStatusAnyoneWithPermission: 'ใครก็ได้หรือกลุ่มที่มีสิทธิ์',
                updateStatusEveryone: 'ทุกคน',
                pinButtonLabel: 'ปักหมุดที่แถบด้านข้าง',
                startConversationLabel: 'เริ่มการสนทนา'
            }
        },

        nameLabel: 'ชื่อ',
        namePlaceholder: 'ตั้งชื่อให้กับตัวแทนของคุณ',
        descriptionLabel: 'คำอธิบาย',
        descriptionPlaceholder: 'เพิ่มคำอธิบายสั้น ๆ เกี่ยวกับสิ่งที่ตัวแทนนี้ทำ',
        instructionLabel: 'คำแนะนำ',
        instructionPlaceholder: 'ตัวแทนนี้ทำอะไร? มันมีพฤติกรรมอย่างไร? ควรหลีกเลี่ยงอะไร?',
        knowledgeLabel: 'ความรู้',
        knowledgeSubLabel:
            'หากคุณอัปโหลดไฟล์ในส่วนความรู้ การสนทนากับตัวแทนของคุณอาจรวมถึงเนื้อหาของไฟล์ได้ ไฟล์สามารถดาวน์โหลดได้',
        savingDraftLabel: 'กำลังบันทึกร่าง',

        validError: {
            nameTooLong: 'ชื่อ Agent ต้องมีไม่เกิน 50 ตัวอักษร.',
            desTooLong: 'คำอธิบาย Agent ต้องมีไม่เกิน 300 ตัวอักษร.',
            insTooLong: 'คำแนะนำของ Agent ต้องมีไม่เกิน 8000 ตัวอักษร.'
        },

        button: {
            shareButtonLabel: 'แชร์',
            updateButtonLabel: 'อัปเดต',
            publishButtonLabel: 'เผยแพร่',
            copyLinkButtonLabel: 'คัดลอกลิงก์',
            saveButtonLabel: 'บันทึก',
            uploadFileButtonLabel: 'อัปโหลดไฟล์',
            cancelButtonLabel: 'ยกเลิก',
            deleteButtonLabel: 'ลบ'
        },
        toast: {
            success: {
                createAgent: 'สร้างตัวแทนสำเร็จ',
                updateAgent: 'อัปเดตตัวแทนสำเร็จ',
                deleteAgent: 'ลบตัวแทนสำเร็จ'
            },
            fail: {
                publishAgent:
                    'เกิดข้อผิดพลาดที่ไม่คาดคิด: ไม่สามารถเผยแพร่ตัวแทนร่างนี้ได้ กรุณาลองอีกครั้ง',
                retrieveAgent:
                    'เกิดข้อผิดพลาดที่ไม่คาดคิด: ไม่สามารถดึงข้อมูลตัวแทนได้ กรุณาลองอีกครั้ง',
                createAgent:
                    'เกิดข้อผิดพลาดที่ไม่คาดคิด: ไม่สามารถเริ่มต้นตัวแทนนี้ได้ กรุณาลองอีกครั้ง',
                updateAgent: 'เกิดข้อผิดพลาดที่ไม่คาดคิด: ไม่สามารถอัปเดตตัวแทนได้ กรุณาลองอีกครั้ง'
            }
        }
    }
};
