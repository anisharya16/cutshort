import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PersonIcon from '@mui/icons-material/Person';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { CardActionArea } from '@mui/material';
import { blue } from '@mui/material/colors';

export default function PageThird() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography component="div">
                <Box sx={{ fontWeight: 'bold', my: 1, fontSize: '30px' }}>How are you planning to use Eden?</Box>
                <Box sx={{ fontWeight: 'light', my: 1 }}>We'll streamline your setup experience accordingly</Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ maxWidth: 200, m: 2 }}>
                        <CardActionArea>
                            <PersonIcon sx={{ color: blue[500], fontSize: 40, p: 2 }} />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">For Myself</Typography>
                                <Typography variant="body2" color="text.secondary">Write Better. Think more clearly. Stay Organized.</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 200, m: 2 }}>
                        <CardActionArea>
                            <PeopleOutlineIcon sx={{ color: blue[500], fontSize: 40, p: 2 }} />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">With my team</Typography>
                                <Typography variant="body2" color="text.secondary">Wikis, docs, tasks & projects, all in one place.</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Typography>
        </Box>
    );
}