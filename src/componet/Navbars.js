import React,{useState} from 'react'
import { Container,Nav, Navbar,Form, Row} from 'react-bootstrap'
import './NavBar.css'

const Navbars = ({filterbyserach}) => {

  const [searchValue, setSearchValue] = useState('')

  const onSearch = (e) => {
    e.preventDefault() 
    filterbyserach(searchValue)
      setSearchValue('ييي')
  }
  return (
    <Row>
        
        <Navbar bg="dark" expand="lg" variant='dark'>
      <Container >
        <Navbar.Brand href="#">
            <div className='barnd'>مطعم جديد</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث.."
              className="mx-2"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              
            />
            <button onClick={onSearch} className='btn-search'>بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </Row>
  )
}

export default Navbars