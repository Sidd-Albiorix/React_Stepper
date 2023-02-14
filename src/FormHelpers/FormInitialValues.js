import FormModel from "./FormModels";

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

const FormInitialValues = {
    'Personal Details': {
        [firstName.name]: "",
        [middleName.name]: "",
        [lastName.name]: "",
        [email.name]: "",
        [mobileNumber.name]: "",
        [dateOfBirth.name]: "",
        [presentAddress.name]: "",
        [permanentAddress.name]: "",
    },
    'Bank Details': {
        [bankName.name]: "",
        [accName.name]: "",
        [bankAccNumber.name]: "",
        [ifscCode.name]: "",
        [aadhaarCardNumber.name]: "",
        [panCardNumber.name]: "",
    },
    'Professional Details': {
        [designation.name]: "",
        [department.name]: "",
        [years.name]: "",
        [months.name]: "",
        [currLocation.name]: "",
        [skills.name]: ""
    },
    'Education Details': {
        educationDetails: [
            {
                [degreeName.name]: "",
                [universityName.name]: "",
                [result.name]: "",
                [yearOfPassing.name]: ""
            }
        ]
    },
    'Experience Details': {
        experienceDetails: [
            {
                [comName.name]: "",
                [position.name]: "",
                [totalYear.name]: "",
                [lastCTC.name]: ""
            }]
    },
    'Organization Details': {
        [joiningDate.name]: "",
        [nextAppraisalDate.name]: "",
        [currCTC.name]: ""
    }
}

export default FormInitialValues;