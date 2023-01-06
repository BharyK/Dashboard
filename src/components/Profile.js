import { Box, Grid, Avatar, Typography, TextField, Stack, Button, InputLabel, FormControl } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';

const Profile = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box mb = {2} backgroundColor="#F5F6F8" borderRadius="6px" py={2} px={2}>
            <Grid container spacing={1}>
                <Grid item xs={3} alignContent="center" alignItems="center" alignSelf="center" >
                    <Stack direction="row" gap={1} mr={1} >
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
                        <Stack direction="column" mt={1}>
                            <Typography variant="p" fontWeight="600" fontSize="16px">John Smith</Typography>
                            <Typography variant="body" component="span" fontSize="10px" color="gray">Main St. Farmington, CA 123</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                
                <Grid item xs={6}>
                    <Grid item xs={12} display="flex">
                        <Stack direction="row" gap={1}>
                            <Typography variant='body' width="100px" mt={1} component="span" fontSize="12px" fontWeight="600">FirstName:</Typography>
                            <TextField
                                id="outlined-password-input"
                                value="john"
                                type="email"
                                autoComplete="current-password"
                                size="small"
                                sx={{ background: "white", borderRadius: "7px" }}
                            />
                        </Stack>

                        <Stack direction="row" gap={1} ml={1}>
                            <Typography variant='body' mt={1} width="100px" component="span" fontSize="12px" fontWeight="600">Phone:</Typography>
                            <TextField
                                id="outlined-password-input"
                                value="+1 (324) 234-2342"
                                type="email"
                                autoComplete="current-password"
                                size="small"
                                sx={{ background: "white", borderRadius: "7px" }}
                            />
                        </Stack>
                    </Grid>

                    <Grid item xs={12} display="flex" mt={1}>
                        <Stack direction="row" gap={1}>
                            <Typography variant='body' width="100px" mt={1} component="span" fontSize="12px" fontWeight="600">LastName:</Typography>
                            <TextField
                                id="outlined-password-input"
                                value="Smith"
                                type="email"
                                autoComplete="current-password"
                                size="small"
                                sx={{ background: "white", borderRadius: "7px" }}
                            />
                        </Stack>

                        <Stack direction="row" gap={1} ml={1}>
                            <Typography variant='body' mt={1} width="100px" component="span" fontSize="12px" fontWeight="600">Gradution year:</Typography>
                            <TextField
                                id="outlined-password-input"
                                value="1988"
                                type="email"
                                autoComplete="current-password"
                                size="small"
                                sx={{ background: "white", borderRadius: "7px" }}
                            />
                        </Stack>
                    </Grid>

                    <Grid item xs={12} display="flex" mt={1}>
                        <Stack direction="row" gap={1}>
                            <Typography variant='body' width="100px" mt={1} component="span" fontSize="12px" fontWeight="600">Email:</Typography>
                            <TextField
                                id="outlined-password-input"
                                value="johnSmith@yahoo.com"
                                type="email"
                                autoComplete="current-password"
                                size="small"
                                sx={{ background: "#dddddd", borderRadius: "7px" }}
                                disabled
                            />
                        </Stack>

                        <Stack direction="row" gap={1} ml={1}>
                            <Typography variant='body' mt={1} width="100px" component="span" fontSize="12px" fontWeight="600"> Date of birth:</Typography>
                            <TextField
                                id="outlined-password-input"
                                value="08/07/1989"
                                type="email"
                                autoComplete="current-password"
                                size="small"
                                sx={{ background: "#dddddd", borderRadius: "7px",}}
                                placeholder="johnSmith@yahoo.com"
                                disabled
                            />
                        </Stack>
                    </Grid>
                </Grid>

                <Grid item xs={3} display="flex" justifyContent="end">
                    <Stack spacing={2}>
                        <Button variant="contained" sx={{ textTransform: "capitalize", background: "green", width: "160px" }}>Save Changes</Button>
                        <Button variant="contained" sx={{ textTransform: "capitalize", background: "black", width: "160px" }} >Change Password</Button>
                        <Button variant="contained" sx={{ textTransform: "capitalize", background: "#DC143C", width: "160px" }}>Leave family</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export { Profile }