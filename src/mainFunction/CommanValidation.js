const ValidateRegistration = (formData) => {
    const errors = {};
     console.log(formData)
    if (!formData.firstName?.trim()) {
        errors.firstName = 'First name is required';
    }
    if (!formData.lastName?.trim()) {
        errors.lastName = 'Last name is required';
    }
    if (!formData.email?.trim()) {
        errors.email = 'Email is required';
    } 
    if (!formData.contact) {
        errors.contact = 'Contact number is required';
    } 
    if (!formData.dob) {
        errors.dob = 'Date of birth is required';
    }
    if (!formData.gender) {
        errors.gender = 'Gender is required';
    }
    if (!formData.Password) {
        errors.Password = 'Password is required';
    }
    if (!formData.Confirm_Password) {
        errors.Confirm_Password = 'Confirm password is required'
    }

    return errors;
};


export{ValidateRegistration};