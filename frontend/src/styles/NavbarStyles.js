import styled from "styled-components";

const NavbarStyles = styled.div`
  width: 100%;
  height: 60px;
  top: 0;
  z-index: 5;

.links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.link {
  cursor: pointer;
  text-decoration: none;
  flex-direction: column;
  padding: 1rem;

  a {
      color: var(--white);
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;
      transition: all 0.3s ease-in-out;
    };
    
    a:hover {
      color: black;
    }
}
`;

export default NavbarStyles;