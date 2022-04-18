export const group = [
    { title: 'Private Patients', value: '?' }
]

export const sex = ['M', 'F']

export const title = [
    'Mr',
    'Mrs',
    'Miss',
    'Ms',
    'Dr',
    'Sir',
    'Lord',
    'Prof.',
    'Lady',
    'Father',
    'Other',
    'Master',
    'Reverend'
]

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const range = (start, stop, step = 1) => Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)

export const introduction = ['Select']
export const occupation = ['Select']
export const bodyPart = ['Select']
export const dischargeOutcome = ['Select']
export const nhsCCG = ['Select']
export const priorityType = ['Select']
export const startBackTool = ['Select']
export const doctorName = ['Select']
export const doctorSurgery = ['Select']
export const consultant = ['Select']
export const insuranceCompany = ['Select']
export const authorisedTreatmentSessions = ['Select']
export const paymentMethod = ['Card Payment', 'Cache', 'Cheque', 'Contactless', 'FOC', 'Other', 'Voucher']