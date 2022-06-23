import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './experience.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const companies = ["Capgemini", "Endurance", "TCS iON"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id='exp-section'>
        <div id='article-heading'>
            <h1 className='heading'><span className='heading-number'>02.</span> Experience</h1>
            <hr />
        </div>
        <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider', overflow: 'inherit' }}
        >
            <Tab label="Capgemini" {...a11yProps(0)} />
            <Tab label="Endurance" {...a11yProps(1)} />
            <Tab label="TCS iON" {...a11yProps(2)} />
            
        </Tabs>
        <TabPanel value={value} index={0}>
            Working as a Full Stack developer on technologies like React JS, Spring framework, and MySQL.
            Developed REST API for ticketing system, and restructured the existing APIs to increase the efficiency by 20%.
            Performed regular peer code reviews.
            Tech Stack - React JS, Java, Spring, Postman, REST API.
        </TabPanel>
        <TabPanel value={value} index={1}>
            Responsible for resolving high-priority tickets of web-hosting and email hosting products.
            Server administration & health checkups.
        </TabPanel>
        <TabPanel value={value} index={2}>
            Responsible for building an Android freelancer mobile application tool.
            Designed wireframes and was also responsible for creating the entire process flow of the application.
            Organized meet-ups to exchange our ideas.
        </TabPanel>
        </Box>
    </div>
  );
}
