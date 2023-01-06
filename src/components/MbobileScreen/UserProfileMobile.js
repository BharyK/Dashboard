import { Box, Grid, Stack, Avatar, Typography, TextField, Button } from '@mui/material';
import React from 'react';

const UserProfileMobile = () => {
    return (
        <Box mt={2} backgroundColor="#F5F6F8" borderRadius="6px" py={2} px={2}>
            <Grid item xs={12} alignContent="center" alignItems="center" alignSelf="center">
                <Stack direction="row" gap={1} mr={1} >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
                    <Stack direction="column" mt={1}>
                        <Typography variant="p" fontWeight="600" fontSize="16px">John Smith</Typography>
                        <Typography variant="body" component="span" fontSize="10px" color="gray">Main St. Farmington, CA 123</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Box display="flex" justifyContent="space-between" mt={1} >
                <Stack direction="column" >
                    <Typography variant='body' component="span" fontSize="12px" fontWeight="600">FirstName:</Typography>
                    <TextField
                        required
                        size="small"
                        name="firstName"
                        value="John"
                        autoComplete="current-password"
                        fullWidth
                        sx={{ background: "white", borderRadius: "7px" }}
                    /></Stack>
                <Stack direction="column" ml={1}>
                    <Typography variant='body' component="span" fontSize="12px" fontWeight="600">LastName:</Typography>
                    <TextField
                        required
                        size="small"
                        name="lastName"
                        value="Smith"
                        autoComplete="current-password"
                        fullWidth
                        sx={{ background: "white", borderRadius: "7px" }}
                    /></Stack>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={1} >
                <Stack direction="column" >
                    <Typography variant='body' component="span" fontSize="12px" fontWeight="600">Phone:</Typography>
                    <TextField
                        required
                        size="small"
                        name="firstName"
                        value="+1 (324)234-2342"
                        autoComplete="current-password"
                        fullWidth
                        sx={{ background: "white", borderRadius: "7px" }}
                    /></Stack>
                <Stack direction="column" ml={1}>
                    <Typography variant='body' component="span" fontSize="12px" fontWeight="600">Graduation Year:</Typography>
                    <TextField
                        required
                        size="small"
                        name="lastName"
                        value="1998"
                        autoComplete="current-password"
                        fullWidth
                        sx={{ background: "white", borderRadius: "7px" }}
                    /></Stack>
            </Box>
            <Box display="flex" justifyContent="flex-start" mt={2}>
                <Button variant="contained" sx={{ background: "black", textTransform: "capitalize" }}>Edit Enable</Button>
            </Box>

        </Box>
    )
}

export { UserProfileMobile }