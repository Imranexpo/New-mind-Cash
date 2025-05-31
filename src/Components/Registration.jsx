import React, { useEffect, useState } from 'react'
import '../style/RegisterForm.css'
import { FormControl, TextField, InputAdornment, Select, MenuItem, Box, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import { ValidateRegistration } from '../mainFunction/CommanValidation';

function Registration() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [countryCode, setCountryCode] = useState('+91');
  const [countryList, setCountryList] = useState([]);
  const [dob, setDob] = useState('');

  const handleCodeChange = (event) => {
    const selectedCode = event.target.value;
    setCountryCode(selectedCode);
    setFormData(prev => ({ ...prev, countryCode: selectedCode }));
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDob(selectedDate);
    setFormData(prev => ({ ...prev, dob: selectedDate }));
  };

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        const codes = data.filter(c => c.idd?.root)
          .map(c => ({
            name: c.name.common,
            code: `${c.idd.root}${c.idd.suffixes?.[0] || ''}`,
          })).filter(item => item.code !== '').sort((a, b) => a.name.localeCompare(b.name));
        setCountryList(codes)
      })
  })

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormData(prev => ({ ...prev, countryCode: countryCode }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const RegistrationError = ValidateRegistration(formData);
    if (Object.keys(RegistrationError).length > 0) {
      setErrors(RegistrationError);
      return;
    }
    setErrors({});
  }
  return (
    <div className='main-container'>
      <div className='main-card'>
        <div className='main-title'>Create account</div>
        <div className='cancel-icon'><Link to='/'><CancelIcon className='icon-in' /></Link></div>
        <div className='main-content'>
          <form onSubmit={handleSubmit}>
            <div className='user-details'>
              <div className='input-box'>
                <span className='label-details'>First Name</span>
                <FormControl fullWidth>
                  <TextField
                    id='firstName'
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    type='text'
                    placeholder='Enter First Name here'
                    variant='standard'
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ marginRight: '2px' }}>
                          <PersonIcon className='input-icon' />
                        </InputAdornment>),
                    }}
                  />
                </FormControl>
              </div>
              <div className='input-box'>
                <span className='label-details'>Last Name</span>
                <FormControl fullWidth>
                  <TextField
                    id='lastName'
                    type='text'
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    placeholder='Enter Last Name here'
                    variant='standard'
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ marginRight: '2px' }}>
                          <PersonIcon className='input-icon' />
                        </InputAdornment>),
                    }}
                  />
                </FormControl>
              </div>
              <div className='input-box'>
                <span className='label-details'>Email</span>
                <FormControl fullWidth>
                  <TextField
                    id='email'
                    type='email'
                    error={!!errors.email}
                    helperText={errors.email}
                    placeholder='Enter Email ID here'
                    variant='standard'
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ marginRight: '2px' }}>
                          <EmailIcon className='input-icon' />
                        </InputAdornment>),
                    }}
                  />
                </FormControl>
              </div>
              <div className='input-box'>
                <span className='label-details'>Contact No</span>
                <FormControl fullWidth>
                  <TextField
                    id="contact"
                    type="tel"
                    error={!!errors.contact}
                    helperText={errors.contact}
                    onChange={handleChange}
                    placeholder="Enter Contact No here"
                    variant="standard"
                    inputProps={{
                      maxLength: 10,
                      inputMode: 'numeric',
                      pattern: '[0-9]*',
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ marginRight: '1px' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Select
                              value={countryList.length > 0 ? countryCode : ''}
                              name="countryCode"
                              onChange={handleCodeChange}
                              variant="standard"
                              sx={{
                                minWidth: '70px',
                                fontSize: '1rem',
                                padding: '0 2px',
                                '& .MuiSelect-select': {
                                  display: 'flex',
                                  alignItems: 'center',
                                },
                              }}
                            >
                              {countryList.length > 0 ? (
                                countryList.map((item) => (
                                  <MenuItem key={`${item.code}-${item.name}`} value={item.code}>
                                    {item.code}
                                  </MenuItem>
                                ))
                              ) : (
                                <MenuItem value="">Loading...</MenuItem>
                              )}
                            </Select>
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </div>
              <div className='input-box'>
                <span className='label-details'>Date of Birth</span>
                <FormControl fullWidth>
                  <TextField
                    id="dob"
                    type="date"
                    value={dob}
                    error={!!errors.dob}
                    helperText={errors.dob}
                    onChange={handleDateChange}
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon className='input-icon' />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </div>
              <div className='input-box'>
                <span className='label-details'>Gender</span>
                <div className='gender-options'>
                  <label><input type="radio" name="gender" value="male" id="gender" checked={formData.gender === 'male'} onChange={handleChange} />Male</label>
                  <label><input type="radio" name="gender" value="female" id="gender" checked={formData.gender === 'female'} onChange={handleChange} />Female</label>
                  <label><input type="radio" name="gender" value="other" id="gender" checked={formData.gender === 'other'} onChange={handleChange} />Others</label>
                </div>
                {errors.gender && <p style={{ color: '#d32f2f', fontSize: '0.75rem', fontWeight: '400', marginTop: '3px' }}>{errors.gender}</p>}
              </div>
              <div className='input-box mb-3'>
                <span className='label-details'>Password</span>
                <FormControl fullWidth>
                  <TextField id='Password' type='password' error={!!errors.Password} helperText={errors.Password} onChange={handleChange} placeholder='Enter Password here' variant='standard' InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ marginRight: '2px' }}>
                        <LockIcon className='input-icon' />
                      </InputAdornment>),
                  }}
                  />
                </FormControl>
              </div>
              <div className='input-box mb-3'>
                <span className='label-details'>Confirm Password</span>
                <FormControl fullWidth>
                  <TextField id='Confirm_Password' type='password' error={!!errors.Confirm_Password} helperText={errors.Confirm_Password} onChange={handleChange} placeholder='Enter Confirm Password here' variant='standard' InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ marginRight: '2px' }}>
                        <LockIcon className='input-icon' />
                      </InputAdornment>),
                  }}
                  />
                </FormControl>
              </div>
            </div>
            <div className='mb-2'>
              <Button variant='contained' type='submit' fullWidth sx={{ textTransform: 'none' }}>Create</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration;
