import React from "react";
import "styled-components";
import styled from "styled-components";


function Login() {
  return (

    
    <Container>
      <Nav>
      <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="false">
        Account <b class="caret"></b>
    </a>
    <ul class="dropdown-menu">
        <li><a tabindex="-1" href="#">My Account</a></li>
        <li class="divider"></li>
        <li><a tabindex="-1" href="#">Change Email</a></li>
        <li><a tabindex="-1" href="#">Change Password</a></li>
        <li class="divider"></li>
        <li><a tabindex="-1" href="#">Logout</a></li>
    </ul>
</li>
      </Nav>
    </Container>
  );    
}

const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.div`
    max-width: 1128px;
    /* margin: auto; */
    padding: 12px 0px 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    li{
      display: flex;
      margin-left: 40px;
    }

    ul{
      display: flex;
    }

    & > a{
        width: 135px;
        height: 34px;

        @media (max-width: 768px){
            padding: 0px 5px;
        }
    }
`;

export default Login;
