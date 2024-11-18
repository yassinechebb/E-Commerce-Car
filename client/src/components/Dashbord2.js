import React, { useEffect, useState } from 'react'
import "./dashbord2.css"
import Table from 'react-bootstrap/esm/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser, getusers, userCurrent } from '../JS/userSlice/userSlice';
import Edituser from './Edituser';
import { deleteproduct, getproduct } from '../JS/productslice';
import { deletedemande, getdemande } from '../JS/demandeSlice';
import Addproduct from './Addproduct';
import EditProduct from './EditProduct';

function Dashbord2({ping, setping}) {
  useEffect(() => {
 
    dispatch(getproduct());
    dispatch(getdemande());
    dispatch(getusers())
  }, []);
  const [view, setView] = useState('users');
  const dispatch = useDispatch();
  
  const users = useSelector((state) => state.user.userlist);
  const products = useSelector((state) => state.product.productlist);
  const demandes = useSelector((state) => state.demande.demandelist);
  const handleDeleteUser  = (_id) => {
    dispatch(deleteuser(_id));
    setping(!ping)
  };
  const handleDeleteDemande  = (_id) => {
    dispatch(deletedemande(_id));
    setping(!ping)
  };
  const handleDeleteProduct  = (_id) => {
    dispatch(deleteproduct (_id));
    setping(!ping)
  };
  return (
    <div className='dashbord'>
    <div className="dash">
    <h1>Dashboard </h1>
    
    <img  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F5%2FUser-Avatar-PNG-Transparent-Image.png&f=1&nofb=1&ipt=d55a7abe7673281189149a2a35201961e270d360dbbfdac7643a6331cee3afbc&ipo=images"/>
    <h2>Admin</h2>
    <div className='buttonn'>
    <button  onClick={() => setView('users')}>
          Users
        </button>
    <button className='mt-10' onClick={() => setView('services')}>Services</button>
    <button className='mt-10' onClick={() => setView('requests')}>Requests</button>
    
    </div>
  </div>
  <div className="bord">
{/* ********** users****************** */}

 {  view==="users"? 
 <div className='users'>
    <h1>Users List </h1>
    <Table responsive="lg" style={{    "width": "900PX",
    fontSize: "12PX"}}>
    <thead>
                <tr>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users?.map((el) => (
                  <tr >
                    <td>{el.name}</td>
                    <td>{el.lastname}</td>
                    <td>{el.email}</td>
                    <td>{el.category}</td>
                    <td>
                      <Edituser  el={el} ping={ping} setping={setping}/>
                    </td>
                    <td><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mx-1" onClick={()=>{dispatch((handleDeleteUser(el?._id)))}}>X</button></td>
                  </tr>
                ))}
              </tbody>
      </Table>
 
    </div>: 
    view==="services"?

    <div className='services'>
    <h1>Services List</h1>
    <div style={{ maxHeight: "500px", overflowY: "auto", border: "1px solid #ccc" }}>
      <Table responsive="lg" style={{ width: "900px", fontSize: "12px" }} className='tabl'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.description}</td>
              <td>{el.price}</td>
              <td>{el.category}</td>
              <td>yy</td>
              <td>
                <EditProduct el={el} ping={ping} setping={setping}/>
              </td>
              <td>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mx-1"
                  onClick={() => {
                    dispatch(handleDeleteProduct(el?._id));
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
  :
   
    <div className='demandes'>
    <h1>Requests List </h1>
    <Table responsive="lg" style={{    "width": "900PX",
    fontSize: "12PX"}}>
    <thead>
                <tr>
                <th>Image Product</th>
                <th>Name User</th>
                <th>Email User</th>
                <th>Name Product</th>
                <th>Price</th>
                <th>Date</th>
                  
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {demandes?.map((el) => (
                  <tr key={el.id}>
                    <td><img src={el?.img_product} style={{width:"100px"}}/></td>
                    <td>{el?.name_user}</td>
                    <td>{el?.email_user}</td>
                    <td>{el?.name_product}</td>
                    <td>{el?.prix}</td>
                    <td>{el?.date}</td>
                    
                    <td><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mx-1" onClick={()=>{dispatch((handleDeleteDemande(el?._id)))}}>X</button></td>
                  </tr>
                ))}
              </tbody>
      </Table>
    </div>
}

   
       



     {/* **************************** */}




  </div>
  </div>
    
  )
}

export default Dashbord2