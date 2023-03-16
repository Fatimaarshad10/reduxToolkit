import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
function Layouts() {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.firstBg.backgroundColor};
    padding: 3rem;
    h2 {
      font-weight: 800;
    }
    @media (max-width: 700px) {
      justify-content: flex-start;
      h2 {
        margin-right: 3rem;
        font-weight: 800;
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      gap: 3rem;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.color};
      font-weight: 800;
    }
    a:hover {
      color: ${({ theme }) => theme.secondBg.backgroundColor};
    }
  `;
  return (
    <>
      <header>
        <Nav>
          <h2> SULTAN</h2>

          <ul class="navbar-nav ">
            <li>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" className="link">
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink to="/emails" className="link">
                Emails
              </NavLink>
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
