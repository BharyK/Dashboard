import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Invitations } from '../../components/Invitations';
import { Activities } from '../../components/Activities';
import { Wallet } from '../../components/MbobileScreen/Wallet';
import { Family } from '../../components/Family';
import { UserProfileMobile } from '../../components/MbobileScreen/UserProfileMobile';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabsContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} sx = {{textTransform : "capitalize"}}/>
          <Tab label="Item Two" {...a11yProps(1)} sx = {{textTransform : "capitalize"}} />
          <Tab label="Activities" {...a11yProps(2)}  sx = {{textTransform : "capitalize"}}/>
          <Tab label="Invitations" {...a11yProps(3)} sx = {{textTransform : "capitalize"}} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Family/>
        <UserProfileMobile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Wallet/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Activities/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Invitations/>
      </TabPanel>
    </Box>
  );
}

export {TabsContent}