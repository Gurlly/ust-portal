import {Dropdown} from 'react-bootstrap';

const DropdownLinks = ({dropdownLink }) => {
    return (
      <Dropdown>
        <Dropdown.Toggle 
        className="ps-0 py-0 mb-3 mb-xl-0 border-0 fw-medium tw-bg-transparent tw-text-zinc-50 hover:tw-text-zinc-300" 
        id="dropdown-basic">
          {dropdownLink.name}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          {
            dropdownLink.sublinks.map((link) => 
              <Dropdown.Item key={link.toLowerCase()} href={`#${link.toLowerCase()}`} className='fw-medium' >{link}</Dropdown.Item>
            )
          }
        </Dropdown.Menu>
      </Dropdown>
    );
  }

export default DropdownLinks