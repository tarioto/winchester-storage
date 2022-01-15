import { Container, Navbar } from 'react-bootstrap';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse } from '@fortawesome/pro-duotone-svg-icons'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
              {/* <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              />{' '} */}
              <FontAwesomeIcon icon={faWarehouse} />
              <span>Winchester RV and Boat Storage</span>
          </Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default Header;
