import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/ac/themeAC';


export default function Header() {
  const dispatch=useDispatch();
  const theme = useSelector(state=>state.themeIsDark);
  const navigate = useNavigate();

  return (
        <>
        <Navbar bg={theme ? 'light':'success'} variant={theme ? 'light':'dark'}>
            <Container>
            <Navbar.Brand href="#home">
                <b>Zoo</b>
            </Navbar.Brand>
            <Nav className="me-auto">
                    <Nav.Link onClick={()=>navigate('/cat')}>Кошечки</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/dog')}>Собачки</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/fox')}>Лисички</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link onClick={()=>dispatch(changeTheme())}> {theme ? 'Light':'Dark'} </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </>)
}

// <div>
{/* <Navbar color={theme ? 'light':'dark'} expand={theme ? 'light':'dark'} >
<NavbarBrand>Zoo</NavbarBrand>
<NavbarToggler onClick={function noRefCheck(){}} />
<Collapse navbar>
  <Nav className="me-auto" navbar>
      <Link to="/cat" className='nav-link active'>Кошечки</Link>
      <Link to="/dog" className='nav-link active'>Собачки</Link>
      <Link to="/fox" className='nav-link active'>Лисички</Link>
      <Nav>
            <Nav.Link onClick={()=>dispatch(changeTheme())}> {theme ? 'Light':'Dark'} </Nav.Link>
      </Nav>
   </Nav>
</Collapse>
</Navbar>
</div> */}
