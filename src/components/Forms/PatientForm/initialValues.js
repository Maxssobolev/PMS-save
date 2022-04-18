export const initialValues = {
    group: 'Private Patients',     //select 
    title: 'Mr',     //select
    sex: 'M',       //select
    dob: '',       //datepicker
    firstName: '', //str
    middleName: '',
    lastName: '',
    knownAs: '',

    /*ADDRESS*/
    addresLine1: '',
    addresLine2: '',
    city: '',
    postcode: '',

    /*CONTACT INFO*/
    homeTel: '',
    workTel: '',
    mobileTel: '',
    otherTel: '',
    email: '',
    emailCC: '',
    isSubscribe: '', //checkbox
    introduction: '',  //select
    occupation: '', //select
    bodyPart: '', //select
    dischargeOutcome: '', //select

    /*NHS*/
    nhsNumber: '',
    nhsCCG: '', //select
    triageDate: '', //datepicker
    referralDate: '', //datepicker
    priorityType: '', //select
    startBackTool: '', //select

    /*Doctor/Surgery/Consultant*/
    doctorName: '', //select
    doctorSurgery: '', //select
    consultant: '',  //select

    /*Insurance [PHI/ML]*/
    insuranceMembershipNumber: '',
    insuranceCompany: '', //select
    insuranceClaimNumber: '',//datepicker
    referralDate2: '',

    /*Treatment Episode*/
    episodeName: '',
    authorisedTreatmentSessions: '', //select

    /*NOTE*/
    diaryNote: '',
    accountsNote: '',
    criticalNote: '',
    dischargeNote: ''
}