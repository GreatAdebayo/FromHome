import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
border-radius: 40px;
background: #5fcf80;
white-space: nowrap;
padding: 10px 25px;
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
 transition: all 0.2s ease-in-out;
 background : #9ae1af;
 text-decoration: none;
 color: #fff
}
`

