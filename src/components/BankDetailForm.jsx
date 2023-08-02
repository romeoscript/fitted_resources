import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import GridViewIcon from '@mui/icons-material/GridView';
import { Button } from '@mui/material';
import useFetch from '../useFetch';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BankDetailsForm = () => {
    const { data } = useFetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/banks');
    const banks = data?.data;
  
    const [bankCode, setBankCode] = useState('');
    const [accountNo, setAccountNo] = useState('');
    const [name, setName] = useState('')
    const navigate = useNavigate()
  
    useEffect(() => {
      if (accountNo.length === 10) {
        console.log('Making a request');
        axios.post('https://fitted-portal-api.herokuapp.com/api/v1/bank/resolveAccount', {
          accountNo,
          bankCode
        })
        .then(response => {
          setName(response.data.content.data)
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      }
    }, [accountNo, bankCode]); 
    const isFormFilled = bankCode && accountNo && name?.account_name;
    const handleSubmit = (event) => {
      event.preventDefault(); // prevent form from refreshing the page

      console.log('fuck');
      // make POST request
      axios.post('https://fitted-portal-api.herokuapp.com/api/v1/bank/resolveAccount', {
        accountNo,
        bankCode,
        accountName: name?.account_name
      })
      .then(response => {
        console.log(response.data.success);
       if(response.data.success) navigate('/success')
      })
      .catch(error => {
        console.log(error);
        // handle error, maybe show an error message
      });
    };

  return (
    <div className='lg:shadow-none shadow-md lg:p-0 p-[1rem] rounded-[32px] bg-white'>
      <form onSubmit={handleSubmit}>
        <p className='text-left mb-[1rem]'>One step closer to the goal! please provide us with your Bank details with which you will be recieving payment.</p>
        <div>
          <label className='text-left block mb-[0.7rem] text-[#5E5E5E]' htmlFor="">Bank Name</label>
          <Autocomplete
            id="combo-box-demo"
            options={banks || []}
            getOptionLabel={(option) => option?.name}
            onChange={(event, newValue) => {
              if (newValue !== null) {
                setBankCode(newValue.code); 
              }
            }}
            style={{ width: '100%' }}
            renderInput={(params) =>
              <TextField
                {...params}
                fullWidth 
                variant="outlined"
                placeholder="Please select your bank"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBalanceIcon />
                    </InputAdornment>
                  ),
                }}
              />
            }
          />
        </div>
        <div className='my-[1.5rem]'>
          <label className='text-left block mb-[0.7rem] text-[#5E5E5E]' htmlFor="">Account Number</label>
          <TextField
            id="outlined-basic"
            placeholder='Please input your account number'
            fullWidth 
            onChange={(e) => setAccountNo(e.target.value)}
            value={accountNo}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GridViewIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </div>
        <div>
          <label className='text-left block mb-[0.7rem] text-[#5E5E5E]' htmlFor="">Account Name</label>
          <TextField
            id="outlined-basic"
            fullWidth
            value={name?.account_name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </div>

        <div className='mt-[1rem] text-left'>
          <Button sx={{ background: 'pink' }} type='submit' disabled={!isFormFilled} variant="contained">Submit Application</Button>
        </div>
      </form>
    </div>
  );
};

export default BankDetailsForm;
