import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blue } from '@mui/material/colors';

export default function PageFinal() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography component="div">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CheckCircleIcon sx={{ color: blue[500], fontSize: 70, p: 2 }} />
                </Box>
                <Box sx={{ fontWeight: 'bold', my: 1, fontSize: '30px' }}>Wohoo Eren!</Box>
                <Box sx={{ fontWeight: 'light', my: 1 }}>Welcome to our organization.</Box>
            </Typography>
        </Box>
    );
}