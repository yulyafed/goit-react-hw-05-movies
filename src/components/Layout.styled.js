import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Head = styled.header`
  max-width: 100%;
  padding-left: 5px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #2a363b;
  box - shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`; 
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  font-size: 23px;

  margin-left:30px;
  
  color: black;

  &.active {
    color: red;
    text-decoration: underline;
    }
   `;

 