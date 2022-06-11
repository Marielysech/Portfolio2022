import React from 'react'
import LeftFastAccess from './LeftFastAccess'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const drawerWidth = 100

const leftStyles = {
  
  width: drawerWidth,
  backgroundColor: '#457383',
  border: '1px solid black',
  
}


const GridLayout = (props) => {

  
  return (
    <Box sx={{ display: 'flex' }}>

      {/* main */}
      {props.section}

      {/* right Drawer */}
      {/* <Drawer
        variant='permanent'
        anchor='right'
        style={leftStyles}
      >
        <div>
          <LeftFastAccess />
        </div>
      </Drawer> */}


    </Box>
        
  )
}

export default GridLayout