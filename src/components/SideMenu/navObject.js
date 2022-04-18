
//icons
import { ReactComponent as Patients } from '../../assets/img/icons/SideMenu/user.svg'
import { ReactComponent as Diary } from '../../assets/img/icons/SideMenu/open-book.svg'
import { ReactComponent as Contacts } from '../../assets/img/icons/SideMenu/group.svg'
import { ReactComponent as Telehealth } from '../../assets/img/icons/SideMenu/support.svg'
import { ReactComponent as Accounts } from '../../assets/img/icons/SideMenu/statistics.svg'
import { ReactComponent as Reports } from '../../assets/img/icons/SideMenu/statistics-2.svg'
import { ReactComponent as Tools } from '../../assets/img/icons/SideMenu/settings.svg'
import { ReactComponent as FileSharing } from '../../assets/img/icons/SideMenu/folder.svg'
import { ReactComponent as FCPInfo } from '../../assets/img/icons/SideMenu/bank.svg'
import { ReactComponent as Intranet } from '../../assets/img/icons/SideMenu/luggage.svg'
import { ReactComponent as Training } from '../../assets/img/icons/SideMenu/shopping-list.svg'
import { ReactComponent as PhysiopediaPlus } from '../../assets/img/icons/SideMenu/add.svg'
import { ReactComponent as Onboarding } from '../../assets/img/icons/SideMenu/book.svg'
import { ReactComponent as StaffInfo } from '../../assets/img/icons/SideMenu/info.svg'
import { ReactComponent as Directory } from '../../assets/img/icons/SideMenu/instructor.svg'

/* 

NOTE: Все ссылки построены по принципу:
        тайтлСсылки
*/

export const nav = [
    {
        title: 'Patients',
        icon: Patients,
        isCollapse: true,
        collapsedMenu: [
            {
                title: 'Add New',
                link: '/patients/addNew'
            },
            {
                title: 'List All',
                link: '/patients/listAll'
            },
            {
                title: 'Patient Day List',
                link: '/patients/patientDayList'
            },
            {
                title: 'View Log',
                link: '/patients/viewLog'
            },

        ]
    },
    {
        title: 'Diary',
        icon: Diary,
        isCollapse: true,
        collapsedMenu: [
            {
                title: 'Diary View',
                link: '/diary'
            },
            {
                title: 'View Log',
                link: '/diary/viewLog'
            }
        ]
    },
    {
        title: 'Contacts',
        icon: Contacts,
        isCollapse: true,
        collapsedMenu: [
            {
                title: 'Add New',
                link: '/contacts/addNew'
            },
            {
                title: 'List All',
                link: '/contacts/listAll'
            }
        ]
    },
    {
        title: 'Telehealth',
        icon: Telehealth,
        isCollapse: true,
        collapsedMenu: [
            {
                title: 'New Chat',
                link: '/telehealth/newChat'
            },
            {
                title: 'Re-enter chat',
                link: '/telehealth/re-enterChat'
            }
        ]
    },
    {
        title: 'Accounts',
        icon: Accounts,
        isCollapse: true,
        collapsedMenu: [
            {
                title: 'Charges List',
                link: '/accounts/chargesList'
            },
            {
                title: 'Invoices/Receipts List',
                link: '/accounts/invoices-receipts-list'
            },
            {
                title: 'Payments List',
                link: '/accounts/paymentList'
            }
        ]
    },
    {
        title: 'Reports',
        icon: Reports,
        isCollapse: true,
        collapsedMenu: [
            {
                title: 'Create New',
                link: '/reports/createNew'
            },
            {
                title: 'Statistics',
                link: '/reports/statistics'
            }
        ]
    },
    {
        title: 'Tools',
        icon: Tools,
        isCollapse: true,
        collapsedMenu: [
            {
                title: 'Users List',
                link: '/tools/usersList'
            },
            {
                title: 'Add New User',
                link: '/tools/addNewUser'
            },
            {
                title: 'Set Up Diary',
                link: '/tools/setUpDiary'
            },
            {
                title: 'Input Fields',
                link: '/tools/inputFields'
            },
            {
                title: 'Templates',
                link: '/tools/templates'
            },
            {
                title: 'Checklists',
                link: '/tools/checklists'
            },
            {
                title: 'Misc Files',
                link: '/tools/miscFiles'
            },
            {
                title: 'Additional Settings',
                link: '/tools/additionalSettings'
            },
            {
                title: 'Group SMS',
                link: '/tools/groupSMS'
            },
            {
                title: 'Group Email',
                link: '/tools/groupEmail'
            },
            {
                title: 'Edit Consent',
                link: '/tools/editConsent'
            }
        ]
    },
    {
        title: 'File Sharing',
        icon: FileSharing,
        isCollapse: false,
        link: '/fileSharing'
    },
    {
        title: 'FCP Info',
        icon: FCPInfo,
        isCollapse: false,
        link: '/fcpInfo'
    },
    {
        title: 'Intranet',
        icon: Intranet,
        isCollapse: false,
        link: '/intranet',
    },
    {
        title: 'Training',
        icon: Training,
        isCollapse: true,
        collapsedMenu: [
            {
                //Будет загружаться?
                title: 'Main',
                link: '/training'
            }
        ]
    },
    {
        title: 'Physiopedia Plus',
        icon: PhysiopediaPlus,
        isCollapse: false,
        link: '/physiopediaPlus'
    },
    {
        title: 'Onboarding',
        icon: Onboarding,
        isCollapse: false,
        link: '/onboarding'
    },
    {
        title: 'Staff Info',
        icon: StaffInfo,
        isCollapse: false,
        link: '/staffInfo'
    },
    {
        title: 'Directory',
        icon: Directory,
        isCollapse: false,
        link: '/directory'
    }
]