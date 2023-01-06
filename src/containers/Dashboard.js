import { Box, Button, Grid, Stack, Typography, Alert } from '@mui/material';
import React from 'react';
import { Activities } from '../components/Activities';
import { BillingAddress } from '../components/BillingAddress';
import { CardDetails } from '../components/CardDetails';
import { Family } from '../components/Family';
import { Invitations } from '../components/Invitations';
import { Profile } from '../components/Profile';
import { TabsContent } from './MobileScreen/Tabs';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const DashBoard = () => {
    return (
        <Box py={2} px={1}>
            <Box display="flex" mb = {2} justifyContent="space-between" alignContent="center" alignItems="center" alignSelf="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Typography variant='h6'>My Account</Typography>
                <Alert icon={false} severity="success">Success Message here</Alert>
                <Button sx={{ background: "black", textTransform: "capitalize", color: "white"}}>View</Button>
            </Box>

            <Box display="flex" px = {2} justifyContent="space-between" alignContent="center" alignItems="center" alignSelf="center" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <Typography variant='h6'>My Account</Typography>
                <MoreHorizIcon sx = {{fontSize: "46px"}}/>
            </Box>

            <Grid container spacing={2}  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                <Grid item xs={8} >
                    <Profile />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <CardDetails />
                            <BillingAddress />
                        </Grid>
                        <Grid item xs={6}>
                            <Activities />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Stack direction="column" gap={0}>
                        <Family />
                        <Invitations />
                    </Stack>
                </Grid>
            </Grid>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <TabsContent />
            </Box>
             
        </Box>
    )
}

export { DashBoard }