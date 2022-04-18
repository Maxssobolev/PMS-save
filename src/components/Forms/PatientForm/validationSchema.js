import * as Yup from 'yup';
//simple form validation
export const ValidationSchema = Yup.object().shape({
    firstName: Yup.string(),
    middleName: Yup.string(),
    lastName: Yup.string().required('Required'),

    /*ADDRESS*/

    postcode: Yup.number().positive(),

    /*CONTACT INFO*/
    homeTel: Yup.number(),
    workTel: Yup.number(),
    mobileTel: Yup.number(),
    otherTel: Yup.number(),
    email: Yup.string().email('Invalid email'),
    emailCC: Yup.string().email('Invalid emailCC'),

    /*NHS*/
    nhsNumber: Yup.number(),


    /*Insurance [PHI/ML]*/
    insuranceMembershipNumber: Yup.number(),

});