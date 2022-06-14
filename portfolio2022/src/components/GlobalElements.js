import styled from "styled-components";
import Paper from '@mui/material/Paper';
import { styled as styledMUI } from '@mui/material/styles';

export const SectionTitle = styled.h1`

    font-size: 60px;
    color: #F8EFDB;
    top:0;
    padding-left: 2rem;
    margin-bottom: 2rem;
    padding-top: 5rem;

    &::after {
        content: "○";
        font-size: 24px;
        padding: 10px;
   
    }

    @media screen and (max-width: 768px) {
        font-size: 50px;

        &::after {
        font-size: 18.75px;
        padding: 7.8px;
        }
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
        &::after {
        font-size: 15px;
        padding: 6.25px;
        }
    }

`
export const Item = styledMUI(Paper)(({ theme }) => ({
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