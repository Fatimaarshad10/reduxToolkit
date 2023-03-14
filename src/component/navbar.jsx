import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
function Layouts() {
 
  const Nav = styled.nav`
display: flex;
justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.firstBg.backgroundColor};
  padding: 3rem;

    ul {
  display: flex;
  flex-direction: row;
  gap: 3.4rem;
  
}
a{
  text-decoration: none;
  color: ${({theme}) => theme.color.color};
  font-weight: 500
}
a:hover{
  color: ${({theme}) => theme.secondBg.backgroundColor};

}
`;
  return (
    <>
      <header>
        <Nav >
          <a class="navbar-brand" href="#">
            Navbar
          </a>

          <ul class="navbar-nav ">
            <li >
              <NavLink to="/" className='link'>Home</NavLink>
            </li>
            <li >
              <NavLink to="/list" className='link'>List</NavLink>
            </li>
            <li >
              <NavLink to="/main" className='link'>Main</NavLink>
            </li>
          </ul>
        </Nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layouts;
