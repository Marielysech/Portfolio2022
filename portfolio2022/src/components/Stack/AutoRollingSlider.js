import * as React from 'react';
import Divider from '@mui/material/Divider';
import './Stack.css';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {RiHtml5Line} from 'react-icons/ri'
import { SiJusteat } from 'react-icons/si';
import { stackObject } from './stackData';
import Marquee from 'react-fast-marquee';
import { padding } from '@mui/system';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display: 'flex',
  color: '#457383',
  alignItems: 'center',
  backgroundColor: '#F8EFDB',
  width: '50%',
  margin: '0 auto',
  // color: theme.palette.text.secondary,
}));

const titleStack = {
  paddingLeft: '0.5rem'
}



const itemStyle = {
  margin: '1.5rem',
  
  hover: {
    background: "black"
  },
}

export default function AutoRollingSlider() {
  return (
    <div className='stackContainer' >
      <Marquee  pauseOnHover direction='rigth' speed={30} gradient={false}>
        <Stack 
          direction='row' 
        >
          
          {stackObject.stack.map((item, index) => 
            <Item key={index} className='itemStack' style={itemStyle}>
              {item.logo} 
              <h3 style={titleStack}>{item.name}</h3>
            </Item>
          )}   
         
        </Stack>
      </Marquee>
    </div>
  );
}
