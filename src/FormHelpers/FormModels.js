const FormModel = {
    personalDetails: {
        firstName: {
            name: "firstName",
            label: "First Name",
            requiredErrorMsg: "First Name is required"
        },
        middleName: {
            name: "middleName",
            label: "Middle Name",
            requiredErrorMsg: "Middle Name is required"
        },
        lastName: {
            name: "lastName",
            label: "Last Name",
            requiredErrorMsg: "Last Name is required"
        },
        email: {
            name: "email",
            label: "Email",
            requiredErrorMsg: "Email is required"
        },
        mobileNumber: {
            name: "mobileNumber",
            label: "Mobile Number",
            requiredErrorMsg: "Mobile Number is required",
            invalidErrorMsg: 'Invalid value'
        },
        dateOfBirth: {
            name: "dateOfBirth",
            label: "Date Of Birth",
            requiredErrorMsg: "Date Of Birth is required"
        },
        presentAddress: {
            name: "presentAddress",
            label: "Present Address",
            requiredErrorMsg: "Present Address is required"
        },
        permanentAddress: {
            name: "permanentAddress",
            label: "Permanent Address",
            requiredErrorMsg: "Permanent Address is required"
        }
    },
    bankDetails: {
        bankName: {
            name: "bankName",
            label: "Bank Name",
            requiredErrorMsg: "Bank Name is required"
        },
        accName: {
            name: "accName",
            label: "Account Name",
            requiredErrorMsg: "Account Name is required"
        },
        bankAccNumber: {
            name: "bankAccNumber",
            label: "Bank Account Number",
            requiredErrorMsg: "Bank Name is required"
        },
        ifscCode: {
            name: "ifscCode",
            label: "IFSC Code",
            requiredErrorMsg: "IFSC Code is required"
        },
        aadhaarCardNumber: {
            name: "aadhaarCardNumber",
            label: "Aadhaar Card Number",
            requiredErrorMsg: "Aadhaar Card Number is required",
            invalidErrorMsg: "Aadhaar Card Number must be 12 digits"
        },
        panCardNumber: {
            name: "panCardNumber",
            label: "Pan Card Number",
            requiredErrorMsg: "Pan Card Number is required"
        }
    },
    professionalDetails: {
        designation: {
            name: "designation",
            label: "Designation",
            requiredErrorMsg: "Designation is required"
        },
        department: {
            name: "department",
            label: "Department",
            requiredErrorMsg: "Department is required"
        },
        years: {
            name: "years",
            label: "Years",
            requiredErrorMsg: "Years is required",
        },
        months: {
            name: "months",
            label: "Months",
            requiredErrorMsg: "Months is required",
        },
        currLocation: {
            name: "currLocation",
            label: "Current Location",
            requiredErrorMsg: "Current Location is required"
        },
        skills: {
            name: "skills",
            label: "Skills",
            requiredErrorMsg: "Skills is required"
        }
    },
    educationDetails: {
        degreeName: {
            name: "degreeName",
            label: "Degree Name",
            requiredErrorMsg: "Degree Name is required",
            invalidErrorMsg: "Maximum 30 chars allowed"
        },
        universityName: {
            name: "universityName",
            label: "University Name",
            requiredErrorMsg: "University Name is required",
            invalidErrorMsg: "Maximum 30 chars allowed"
        },
        result: {
            name: "result",
            label: "Result",
            requiredErrorMsg: "result is required",
            invalidErrorMsg: "Value must be <=10.00"
        },
        yearOfPassing: {
            name: "yearOfPassing",
            label: "Year Of Passing",
            requiredErrorMsg: "Year Of Passing is required",
            invalidErrorMsg: "Value must be <= current year"
        }
    },
    experienceDetails: {
        comName: {
            name: "comName",
            label: "Company Name",
            requiredErrorMsg: "Company Name is required"
        },
        position: {
            name: "position",
            label: "Position",
            requiredErrorMsg: "Position is required"
        },
        totalYear: {
            name: "totalYear",
            label: "Total Year",
            requiredErrorMsg: "Total Year is required",
            invalidErrorMsg: "Invalid value"
        },
        lastCTC: {
            name: "lastCTC",
            label: "Last CTC",
            requiredErrorMsg: "Last CTC is required",
            invalidErrorMsg: "Invalid value"
        }
    },
    organizationDetails: {
        joiningDate: {
            name: "joiningDate",
            label: "Joining Date",
            requiredErrorMsg: "Joining Date is required"
        },
        nextAppraisalDate: {
            name: "nextAppraisalDate",
            label: "Next Appraisal Date",
            requiredErrorMsg: "Next Appraisal Date is required"
        },
        currCTC: {
            name: "currCTC",
            label: "Current CTC",
            requiredErrorMsg: "Current CTC is required",
            invalidErrorMsg: "Invalid value"
        }
    }
}

export default FormModel;