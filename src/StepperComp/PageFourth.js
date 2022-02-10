import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blue } from '@mui/material/colors';

export default function PageFourth() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography component="div">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CheckCircleIcon sx={{ color: blue[500], fontSize: 70, p: 2 }} />
                </Box>
                <Box sx={{ fontWeight: 'bold', my: 1, fontSize: '30px' }}>Congratulations, Eren!</Box>
                <Box sx={{ fontWeight: 'light', my: 1 }}>You have completed onboarding, you can start using Eden!</Box>
            </Typography>
        </Box>
    );
}