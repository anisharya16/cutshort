import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function PageSecond() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography component="div">
                <Box sx={{ fontWeight: 'bold', my: 1, fontSize: '30px' }}>Lets set up a home for all your work</Box>
                <Box sx={{ fontWeight: 'light', my: 1 }}>You can always create another workspace later.</Box>
                <Box component="form" sx={{ '& > :not(style)': { mt: 3, width: '55ch' } }} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Workspace Name" variant="outlined" placeholder='Eden' />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { mt: 3 } }} noValidate autoComplete="off">
                    <TextField sx={{ width: '20ch' }} label="Workspace URL (Optional)" defaultValue="www.eden.com/" InputProps={{readOnly: true}} variant="filled"/>
                    <TextField sx={{ width: '35ch' }} label="Example" variant="outlined" placeholder='xyz-workspace' />
                </Box>
            </Typography>
        </Box>
    );
}