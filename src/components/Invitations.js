import { Box, Typography, Button, Stack, Switch, Avatar } from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';


const Invitation = [
    {
        name: "John Smith",
        content: "have invited you to become his family memeber",
        trueContent: "You have inviated johnsmith@gmail.com to become family member"
    },
    {
        name: "John Smith",
        content: "have invited you to become his family memeber",
        trueContent: "You have inviated johnsmith@gmail.com to become family member"
    },
    {
        name: "John Smith",
        content: "have invited you to become his family memeber",
        trueContent: "You have inviated johnsmith@gmail.com to become family member"
    },
    , {
        name: "John Smith",
        content: "have invited you to become his family memeber",
        trueContent: "You have inviated johnsmith@gmail.com to become family member"
    },
    {
        name: "John Smith",
        content: "have invited you to become his family memeber",
        trueContent: "You have inviated johnsmith@gmail.com to become family member"
    }
]

const Invitations = () => {
    const [state, setState] = React.useState(false)
    const handleChange = () => {
        setState(!state)
    }
    return (
        <Box  backgroundColor="#F5F6F8" borderRadius="6px" py={2} px={2} overflowY="scroll">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box><Typography variant="h6">Inviation</Typography></Box>
                <Box>
                    <Stack direction="row" alignItems="center" gap={2}>
                        <Switch
                            checked={state}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Stack>
                </Box>
            </Box>
            {Invitation.map((item) => {
                return (
                    <Box display="flex" mt={1} borderRadius="10px"  justifyContent="space-between" alignItems="center">
                        {state ? 
                        <Box backgroundColor = "#87CEEB" display = "flex" px = {1} py = {1} justifyContent="space-between" alignItems="center" borderRadius="10px">
                            <Stack direction="column" alignItems="center" gap={2}>
                                <Typography variant="span" fontWeight="600" fontSize = "14px">{item.trueContent}</Typography>
                            </Stack>
                        </Box>
                        :
                            <Box backgroundColor = "#87CEEB" display = "flex" px = {1} py = {1} justifyContent="space-between" alignItems="center" borderRadius="10px">
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <Typography variant="span" fontWeight="600" fontSize = "14px"><span style={{ color: "#F28C28", fontWeight: "600" }}>{item.name}</span> {item.content}</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <CheckIcon sx={{ backgroundColor: "green", padding: "1px", color: "white", borderRadius: "5px" }} />
                                    <ClearIcon sx={{ backgroundColor: "#DC143C", padding: "1px", color: "white", borderRadius: "5px" }} />
                                </Stack>
                            </Box>
                        }
                    </Box>
                )
            })}
        </Box>
    )
}

export { Invitations }