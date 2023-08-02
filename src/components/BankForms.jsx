import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import GridViewIcon from '@mui/icons-material/GridView';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const banks = [
    { name: 'Bank of America' },
    { name: 'JPMorgan Chase' },
    { name: 'Wells Fargo' },
];

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];


const BankForms = () => {
    return (
        <div>
            <form action="">
                <div className='flex gap-4'>
                    <div className='my-[1.5rem] basis-[50%]'>
                        <label className='text-left block mb-[0.7rem] text-[#5E5E5E]' htmlFor="">Gender you Sew for?</label>
                        <TextField
                            id="outlined-select-currency"
                            select
                            placeholder='please select'
                            style={{ width: '100%' }}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className='my-[1.5rem] basis-[50%]'>
                        <label className='text-left block mb-[0.7rem] text-[#5E5E5E]' htmlFor="">Styles you Sew?</label>
                        <TextField
                            id="outlined-select-currency"
                            select
                            placeholder='please select'
                            style={{ width: '100%' }}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </div>


                <div>
                    <label className='text-left block mb-[0.7rem] text-[#5E5E5E]' htmlFor="">Bank Name</label>
                    <Autocomplete
                        id="combo-box-demo"
                        options={banks}
                        getOptionLabel={(option) => option.name}
                        style={{ width: '100%' }} // Update here
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                fullWidth // Add here
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
                        fullWidth // Add here
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
                        fullWidth // Add here
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
                    <Button sx={{background:'pink'}} disabled variant="contained">Submit Application</Button>
                </div>
            </form>
        </div>
    )
}

export default BankForms
