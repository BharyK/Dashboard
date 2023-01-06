
import React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';
import masterCard from '../Assets/img/master_logo.svg';

const cardInfo = [
    {
        cardNumber: "**** **** **** 5678",
        expiry: "Expires 09/27"
    },
    {
        cardNumber: "**** **** **** 5678",
        expiry: "Expires 09/27"
    }

]

const CardDetails = () => {
    return (
        <Box mb={2} backgroundColor="#F5F6F8" borderRadius="6px" py={2} px={2} overflowY="scroll">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box><Typography variant="h6">Bank Account</Typography></Box>
            </Box>
            <Box mt={2} display="flex" justifyContent="flex-start" flexDirection="row">

                <Box backgroundColor="white"  borderRadius="7px">
                    <Stack direction="row" gap={1} mr={1} >
                       <img src = {masterCard} alt = "" style = {{marginLeft : "10px"}} />
                        <Stack direction="column" mt = {1}>
                            <Typography variant="p" fontWeight="600" fontSize="12px">**** **** **** 5987</Typography>
                            <Typography variant="body" component="span" fontSize="10px" color="gray">Expires 09/27</Typography>
                        </Stack>
                    </Stack>

                </Box>

                <Box backgroundColor="white" ml={3}  borderRadius="7px">
                    <Stack direction="row" gap={1} mr={1}>
                    <img src = {masterCard} alt = "" style = {{marginLeft : "10px"}}/>
                        <Stack direction="column" mt = {1} >
                            <Typography variant="p" fontWeight="600" fontSize="12px">**** **** **** 5987</Typography>
                            <Typography variant="body" component="span" fontSize="10px" color="gray">Expires 09/27</Typography>
                        </Stack>
                    </Stack>

                </Box>

            </Box>
        </Box>
    )
}

export { CardDetails }