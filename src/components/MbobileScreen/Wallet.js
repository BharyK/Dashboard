
import React from 'react';
import masterCard from '../../Assets/img/master_logo.svg';
import { Box, Button, Typography, Grid, Stack } from '@mui/material';

const Wallet = () => {
    return (
        <Box mt={2} backgroundColor="white" borderRadius="6px">
            <Box mt={2} display="flex" justifyContent="flex-start" flexDirection="column">
                <Box backgroundColor="#F5F6F8" borderRadius="7px">
                    <Stack direction="row" gap={1} mr={1} >
                        <img src={masterCard} alt="" style={{ marginLeft: "10px" }} />
                        <Stack direction="column" mt={1}>
                            <Typography variant="p" fontWeight="600" fontSize="12px">**** **** **** 5987</Typography>
                            <Typography variant="body" component="span" fontSize="10px" color="gray">Expires 09/27</Typography>
                        </Stack>
                        <Box display="flex" justifyContent="end">
                            <Button sx={{ background: "green", color: "white", height: "30px", marginTop: "10px", marginLeft: "60px" }}>Edit</Button>
                        </Box>
                    </Stack>
                </Box>

                <Box backgroundColor="#F5F6F8" borderRadius="7px" mt = {2}>
                    <Stack direction="row" gap={1} mr={1} >
                        <img src={masterCard} alt="" style={{ marginLeft: "10px" }} />
                        <Stack direction="column" mt={1}>
                            <Typography variant="p" fontWeight="600" fontSize="12px">**** **** **** 5987</Typography>
                            <Typography variant="body" component="span" fontSize="10px" color="gray">Expires 09/27</Typography>
                        </Stack>
                        <Box display="flex" justifyContent="end">
                            <Button sx={{ background: "green", color: "white", height: "30px", marginTop: "10px", marginLeft: "60px" }}>Edit</Button>
                        </Box>
                    </Stack>
                </Box>

                <Box backgroundColor="#F5F6F8" borderRadius="7px" mt = {2}>
                    <Stack direction="row" gap={1} mr={1} >
                        <img src={masterCard} alt="" style={{ marginLeft: "10px" }} />
                        <Stack direction="column" mt={1}>
                            <Typography variant="p" fontWeight="600" fontSize="12px">**** **** **** 5987</Typography>
                            <Typography variant="body" component="span" fontSize="10px" color="gray">Expires 09/27</Typography>
                        </Stack>
                        <Box display="flex" justifyContent="end">
                            <Button sx={{ background: "green", color: "white", height: "30px", marginTop: "10px", marginLeft: "60px" }}>Edit</Button>
                        </Box>
                    </Stack>
                </Box>

                <Box backgroundColor="#F5F6F8" borderRadius="7px" mt = {2}>
                    <Stack direction="row" gap={1} mr={1} >
                        <img src={masterCard} alt="" style={{ marginLeft: "10px" }} />
                        <Stack direction="column" mt={1}>
                            <Typography variant="p" fontWeight="600" fontSize="12px">**** **** **** 5987</Typography>
                            <Typography variant="body" component="span" fontSize="10px" color="gray">Expires 09/27</Typography>
                        </Stack>
                        <Box display="flex" justifyContent="end">
                            <Button sx={{ background: "green", color: "white", height: "30px", marginTop: "10px", marginLeft: "60px" }}>Edit</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export { Wallet }