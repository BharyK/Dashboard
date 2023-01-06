import { Box, Typography, Checkbox, FormGroup, FormControlLabel, Stack, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import React from 'react';

const BillingAddress = () => {
    return (
        <Box mt={2} backgroundColor="#F5F6F8" borderRadius="6px" py={2} px={2} overflowY="scroll">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box><Typography variant="h6">Billing Address</Typography></Box>
            </Box>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked style={{
                    color: "#F28C28",
                }} />} label="Same as Home Address" />
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
                    <Stack direction="column" ml = {1}>
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
                <Box display="flex" justifyContent="space-between" mt={2} >
                    <Stack direction="column" >
                        <Typography variant='body' component="span" fontSize="12px" fontWeight="600">Addres Line 1:</Typography>
                        <TextField
                            required
                            size="small"
                            name="Addres Line 1: "
                            value="123 california street"
                            fullWidth
                            sx={{ background: "white", borderRadius: "7px" }}
                        /></Stack>
                    <Stack direction="column" ml = {1} >
                        <Typography variant='body' component="span" fontSize="12px" fontWeight="600">Addres Line 2:</Typography>
                        <TextField
                            required
                            size="small"
                            name="Addres Line 2: "
                            value=""
                            fullWidth
                            sx={{ background: "white", borderRadius: "7px" }}
                        /></Stack>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2} >
                    <Stack direction="column" >
                        <Typography variant='body' component="span" fontSize="12px" fontWeight="600">Country</Typography>
                        <TextField
                            required
                            size="small"
                            name="Addres Line 1: "
                            value="US"
                            fullWidth
                            disabled
                            sx={{ background: "#dddddd", borderRadius: "7px" }}
                        /></Stack>
                    <Stack direction="column" ml={2} width="200px">
                        <Typography variant='body' component="span" fontSize="12px" fontWeight="600">State Region:</Typography>
                        <FormControl sx={{ minWidth: 120 }}>
                            <Select
                                value=""

                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{ height: "40px", background: "white" }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                        </FormControl>
                    </Stack>
                    <Stack direction="column" ml={2}>
                        <Typography variant='body' component="span" fontSize="12px" fontWeight="600">City</Typography>
                        <TextField
                            required
                            size="small"
                            name="Addres Line 1: "
                            value=""
                            fullWidth
                            placeholder=''
                            sx={{ background: "white", borderRadius: "7px" }}
                        /></Stack>
                    <Stack direction="column" ml={2} >
                        <Typography variant='body' component="span" fontSize="12px" fontWeight="600">Zip Code</Typography>
                        <TextField
                            required
                            size="small"
                            name="Addres Line 1: "
                            value=""
                            fullWidth
                            placeholder=''
                            sx={{ background: "white", borderRadius: "7px" }}
                        /></Stack>
                </Box>
            </FormGroup>
            <Box display="flex" justifyContent="end" mt={2}>
                <Button variant="contained" sx={{ background: "black", textTransform: "capitalize" }}>Edit Enable</Button>
            </Box>
        </Box>
    )
}

export { BillingAddress }