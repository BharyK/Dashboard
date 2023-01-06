import { Box, Button, Typography, Avatar, Stack } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';

const familyMember = [
    {
        image: "",
        name: "John Smith",
        buttonName: "Admin",
        active: true
    },
    {
        image: "",
        name: "John Smith",
        buttonName: "Member",
        active: false
    },
    {
        image: "",
        name: "John Smith",
        buttonName: "Member",
        active: false
    },
    {
        image: "",
        name: "John Smith",
        buttonName: "Member",
        active: false
    },
    {
        image: "",
        name: "John Smith",
        buttonName: "Member",
        active: false
    }
]

const Family = () => {
    return (
        <Box mb ={2} backgroundColor="#F5F6F8" borderRadius="6px" py={2} px={2} overflowY="scroll">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box><Typography variant="h6">Family</Typography></Box>
                <Box>
                    <Stack direction="row" alignItems="center" gap={2}>
                        <SearchIcon /><Button variant="contained" sx={{ background: "green", textTransform: "capitalize" }} >Add New</Button>
                    </Stack>
                </Box>
            </Box>

            {familyMember.map((familyName) => {
                return (
                    <Box display="flex" mt={1} backgroundColor={familyName.active ? "#F28C28" : "#87CEEB"} borderRadius="10px" py={1} px={1} justifyContent="space-between" alignItems="center">

                        <Stack direction="row" alignItems="center" gap={2}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Typography variant="span" fontWeight="600">{familyName.name}</Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" gap={2}>
                            {familyName.active ? <><Button variant="contained" sx={{ background: "gray" }} >{familyName.buttonName}</Button><GroupIcon /></> :
                                <Button variant="contained" sx={{ background: "gray" }}>{familyName.buttonName}</Button>
                            }
                        </Stack>
                    </Box>
                )
            })}
        </Box>
    )
}

export { Family }