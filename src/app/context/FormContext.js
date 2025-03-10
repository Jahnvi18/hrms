"use client"
import { createContext, useState, useContext } from "react";

// Create Form Context
const FormContext = createContext();

// Custom Hook to Use Form Context
export const useFormContext = () => useContext(FormContext);

// Form Provider Component
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        dob: "",
        maritalStatus: "",
        gender: "",
        nationality: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        employeeId: "",
        userName: "",
        employeeType: "",
        email: "",
        department: "",
        designation: "",
        workingDays: "",
        joiningDate: "",
        officeLocation: "",
        appointmentLetter: null,
        salarySlips: null,
        relievingLetter: null,
        experienceLetter: null,
        pofessionalEmail: "",
        skype: "",
        slack: "",
        github: "",
    });

    // Function to update form data
    const updateFormData = (newData) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};