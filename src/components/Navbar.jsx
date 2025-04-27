import React from 'react'
import './navbar.css'
import { Button,Dropdown,ButtonGroup } from 'react-bootstrap';

const Navbar = () => {
  return (
    <div className='container-fluid'>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'flex-start' }}>
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Insert</li>
        <li>Format</li>
      </ul>

      <div className='d-flex bg-dark-subtle rounded'>
        <div className='m-2'>
          <Dropdown size="sm" >
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Arial
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='m-2'>
        <Dropdown size="sm" >
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              11
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          

        </div>
        <div className=' m-2'>
        {/* <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups"> */}
        <ButtonGroup className="me-2" aria-label="First group">
          <Button variant="light">B</Button>
          <Button variant="light fst-italic">I</Button>
          <Button variant="light text-decoration-underline">U</Button>
        </ButtonGroup>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar