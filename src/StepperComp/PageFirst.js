import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function PageFirst() {
    return(
        <Box sx={{ display: 'flex',justifyContent: 'center' }}>
            <Typography component="div">
            <Box sx={{ fontWeight: 'bold', m: 1, fontSize: '30px' }}>Welcome! First things first...</Box>
            <Box sx={{ fontWeight: 'light', m: 1 }}>You can always change them later.</Box>
            <Box component="form" sx={{'& > :not(style)': { mt: 3, width: '55ch' } }} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Full Name" variant="outlined" placeholder='Steve Jobs' />
            </Box>
            <Box component="form" sx={{'& > :not(style)': { mt: 3, width: '55ch' } }} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Display Name" variant="outlined" placeholder='Steve' />
            </Box>
            </Typography>
        </Box>
    );
}