/* eslint-disable import/no-anonymous-default-export */
import * as yup from 'yup';
import FormModel from './FormModels';

const {
    personalDetails: {
        firstName, middleName, lastName, email, mobileNumber, dateOfBirth, presentAddress, permanentAddress
    },
    bankDetails: {
        bankName, accName, bankAccNumber, ifscCode, aadhaarCardNumber, panCardNumber
    },
    professionalDetails: {
        designation, department, years, months, currLocation, skills
    },
    educationDetails: {
        degreeName, universityName, result, yearOfPassing
    },
    experienceDetails: {
        comName, position, totalYear, lastCTC
    },
    organizationDetails: {
        joiningDate, nextAppraisalDate, currCTC
    } } = FormModel

const FormValidationSchems = {
    'Personal Details Schema': yup.object().shape({
        [firstName.name]: yup.string()
            .max(20)
            .required(`${firstName.requiredErrorMsg}`),
        [middleName.name]: yup.string()
            .max(20)
            .required(`${middleName.requiredErrorMsg}`),
        [lastName.name]: yup.string()
            .max(20)
            .required(`${lastName.requiredErrorMsg}`),
        [email.name]: yup.string()
            .email()
            .required(`${email.requiredErrorMsg}`),
        [mobileNumber.name]: yup.string()
            .matches('^[0-9]+$', `${mobileNumber.invalidErrorMsg}`)
            .length(10, `${mobileNumber.invalidErrorMsg}`)
            .required(`${mobileNumber.requiredErrorMsg}`),
        [dateOfBirth.name]: yup.string()
            .required(`${dateOfBirth.requiredErrorMsg}`),
        [presentAddress.name]: yup.string()
            .max(80)
            .required(`${presentAddress.requiredErrorMsg}`),
        [permanentAddress.name]: yup.string()
            .max(80)
            .nullable()
    }),

    'Bank Details Schema': yup.object().shape({
        [bankName.name]: yup.string()
            .max(30)
            .required(`${bankName.requiredErrorMsg}`),
        [accName.name]: yup.string()
            .max(30)
            .required(`${accName.requiredErrorMsg}`),
        [bankAccNumber.name]: yup.string()
            .max(20)
            .required(`${bankAccNumber.requiredErrorMsg}`),
        [ifscCode.name]: yup.string()
            .max(15)
            .required(`${ifscCode.requiredErrorMsg}`),
        [aadhaarCardNumber.name]: yup.string()
            .length(12, `${aadhaarCardNumber.invalidErrorMsg}`)
            .required(`${aadhaarCardNumber.requiredErrorMsg}`),
        [panCardNumber.name]: yup.string()
            .length(10)
            .required(`${panCardNumber.requiredErrorMsg}`)
    }),

    'Professional Details Schema': yup.object().shape({
        [designation.name]: yup.string()
            .max(30)
            .required(`${designation.requiredErrorMsg}`),
        [department.name]: yup.string()
            .max(30)
            .required(`${department.requiredErrorMsg}`),
        [years.name]: yup.number()
            .min(0).max(40)
            .required(`${years.requiredErrorMsg}`),
        [months.name]: yup.number()
            .min(0).max(11)
            .required(`${months.requiredErrorMsg}`),
        [currLocation.name]: yup.string()
            .max(40)
            .required(`${currLocation.requiredErrorMsg}`),
        [skills.name]: yup.array()
            .min(1)
            .required(`${skills.requiredErrorMsg}`)
    }),

    'Education Details Schema': yup.object().shape({
        educationDetails: yup.array().of(
            yup.object().shape({
                [degreeName.name]: yup.string()
                    .max(30, `${degreeName.invalidErrorMsg}`)
                    .required(`${degreeName.requiredErrorMsg}`),
                [universityName.name]: yup.string()
                    .max(30, `${universityName.invalidErrorMsg}`)
                    .required(`${universityName.requiredErrorMsg}`),
                [result.name]: yup.number()
                    .positive('Value must be positive')
                    .lessThan(10.01, `${result.invalidErrorMsg}`)
                    .required(`${result.requiredErrorMsg}`),
                [yearOfPassing.name]: yup.number()
                    .positive('Value must be positive')
                    .lessThan(new Date().getFullYear() + 1, `${yearOfPassing.invalidErrorMsg}`)
                    .required(`${yearOfPassing.requiredErrorMsg}`),
            }))
            .min(1, 'Minimum 1 education detail required')
    }),

    'Experience Details Schema': yup.object().shape({
        experienceDetails: yup.array().of(
            yup.object().shape({
                [comName.name]: yup.string()
                    .max(20)
                    .required(`${comName.requiredErrorMsg}`),
                [position.name]: yup.string()
                    .max(20)
                    .required(`${position.requiredErrorMsg}`),
                [totalYear.name]: yup.string()
                    .max(3)
                    .required(`${totalYear.requiredErrorMsg}`),
                [lastCTC.name]: yup.string()
                    .max(8)
                    .required(`${lastCTC.requiredErrorMsg}`)
            }))
            .min(1, 'Minimum 1 experience detail required')
    }),

    'Organization Details Schema': yup.object().shape({
        [joiningDate.name]: yup.string()
            .required(`${joiningDate.requiredErrorMsg}`),
        [nextAppraisalDate.name]: yup.string()
            .nullable()
            .required(`${nextAppraisalDate.requiredErrorMsg}`),
        [currCTC.name]: yup.number()
            .positive('Value must be positive')
            .lessThan(100000000, `${currCTC.invalidErrorMsg}`)
            .required(`${currCTC.requiredErrorMsg}`)
    }),
}

export default FormValidationSchems;