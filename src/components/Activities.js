
import React from 'react';
import { Box, Button, Typography, Grid, Stack } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';

const activitiesList = [
    {
        content: "Lesslie Alexander updater  her Account Type",
        type: "Account Type",
        date: "5 Octomber 11:46 AM"
    }, {
        content: "Lesslie Alexander updater  her Account Type",
        type: "Family Member",
        date: "5 Octomber 11:46 AM"
    },
    {
        content: "Lesslie Alexander updater  her Account Type",
        type: "Account Type",
        date: "5 Octomber 11:46 AM"
    },
    {
        content: "Lesslie Alexander updater  her Account Type",
        type: "Family Member",
        date: "5 Octomber 11:46 AM"
    },
    {
        content: "Lesslie Alexander updater  her Account Type",
        type: "Account Type",
        date: "5 Octomber 11:46 AM"
    },
    {
        content: "Lesslie Alexander updater  her Account Type",
        type: "Family Member",
        date: "5 Octomber 11:46 AM"
    },
    {
        content: "Lesslie Alexander updater  her Account Type",
        type: "Account Type",
        date: "5 Octomber 11:46 AM"
    },
    {
        content: "Lesslie Alexander updater  her Account Type",
        type: "Family Member",
        date: "5 Octomber 11:46 AM"
    }
]

const Activities = () => {
    return (
        <Box  backgroundColor="#F5F6F8" borderRadius="6px" py={2} px={2} overflowY="scroll">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box><Typography variant="h6">Activities</Typography></Box>
                <Box>
                    <Stack direction="row" alignItems="center" gap={2}>
                        <Button variant="contained" sx={{ background: "green", textTransform: "capitalize" }} >View All</Button>
                    </Stack>
                </Box>
            </Box>
            {activitiesList.map((item) => {
                return (
                    <Box mt = {2}>
                        <Stack direction="row" gap={2} >
                            <EngineeringIcon />
                            <Stack direction="column" >
                                <Typography variant="p" fontWeight="600" fontSize="12px">{item.content} <span style={{ color: "#F28C28", fontWeight: "600" }}>{item.type}</span></Typography>
                                <Typography variant="body" component="span" fontSize="10px" color="gray">{item.date}</Typography>
                            </Stack>
                        </Stack>

                    </Box>
                )
            })}

        </Box>
    )
}

export { Activities };