import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import { logout } from "store/actions/authAction";

const AdminNavbar = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="lg" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-md-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                Admin
               
              </DropdownToggle>

              <DropdownMenu className="dropdown-menu-arrow" right>
              
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(logout());
                  }}
                >
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
