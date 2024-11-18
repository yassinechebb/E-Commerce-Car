import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './Edituser.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../JS/userSlice/userSlice';
function Edituser({el, ping, setping}) {
  const [show, setshow] = useState(false)
   
    const dispatch = useDispatch();
    const [edited, setedited] = useState({
      name:el?.name,
      lastname:el?.lastname,
      email:el?.email,
      password:el?.password,
      category:"user"
    })
   
  return (
<>
<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mx-1" onClick={()=>setshow(!show)}>edit</button>
{show?<div className='modall'>
    <h3>choose user category</h3>
    <Form.Select aria-label="Default select example" onChange={(e)=>setedited({...edited, category:e.target.value})} style={{width:"50%"}}>
      <option>Open this select menu</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
     
    </Form.Select>
    <div className='btnn'>
    <button style={{color:"black"}} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mx-1" onClick={()=>{dispatch(updateUser({id:el?._id, edited}));setping(!ping)}}>edit</button>
    <button onClick={()=>setshow(false)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mx-1">close</button>
    </div>
</div>:null}
</>

/* <>
  <div className="wrapperr">
    <a href="#demo-modall">Edit</a>
  </div>
  <div id="demo-modall" className="modall">
    <div className="modall__content">
      <h1>CSS Only Modal</h1>
      <Form.Select aria-label="Default select example" onChange={(e)=>setedited({...edited, category:e.target.value})}>
      <option>Open this select menu</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
     
    </Form.Select>
    <button style={{color:"black"}} onClick={()=>{dispatch(updateUser({id:el?._id, edited}));setping(!ping)}}>edit</button>
      <a href="#" className="modall__close">
        ×
      </a>
    </div>
  </div>
</> */















//     <>
//     <Button variant="primary" onClick={handleShow}>
//       Launch demo modal
//     </Button>

//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal heading</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//             <Form.Label>Category User</Form.Label>
//             <Dropdown.Menu show>
      
//       <Dropdown.Item eventKey="2">Admin</Dropdown.Item>
//       <Dropdown.Item eventKey="3">User</Dropdown.Item>
//     </Dropdown.Menu>
//           </Form.Group>
         
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleClose}>
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   </>
  )
}

export default Edituser