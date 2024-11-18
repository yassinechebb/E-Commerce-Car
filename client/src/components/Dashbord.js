import React, { useState } from 'react';
import './Dashbord.css';
import Table from 'react-bootstrap/Table'; // Correction de l'importation
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser , editUser, updateUser  } from '../JS/userSlice/userSlice'; // Assurez-vous d'importer les actions correctes
import { deleteuser } from '../JS/userSlice/userSlice';
import { deleteproduct } from '../JS/productslice';

const Dashbord = ({ping, setping}) => {
  const [view, setView] = useState('users');
  const dispatch = useDispatch();
  
  const users = useSelector((state) => state.user.userlist);
  const products = useSelector((state) => state.product.productlist);
  console.log(users);
  console.log(products);

  const handleDeleteProduct  = (_id) => {
    dispatch(deleteproduct (_id));
  };

  const handleDeleteUser  = (_id) => {
    dispatch(deleteuser (_id)); // Utilisez dispatch pour supprimer l'utilisateur
  };
  const handleEditUser  = (_id) => {
    const newcatergory = prompt('Entrez le nouveau nom :');
    if (newcatergory) {
      dispatch(updateUser ({ catergory: newcatergory })); // Utilisez dispatch pour éditer l'utilisateur
    }
  };

  return (
    <div className="container mx-auto mt-10 mb-10 bg-white rounded-lg shadow-lg flex flex-col items-center p-10 py-20 ">


<div className="grid grid-cols-12 grid-rows-12 gap-4 ">
  
    <div className="col-span-3 row-span-12 gap-28 mr-52">
    <nav className="flex justify-center mb-6 space-x-4 flex flex-col items-center justify-center h-screen gap-10 ">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md hover:shadow-lg mb-2" onClick={() => setView('users')}>
          Afficher Utilisateurs
        </button>
       <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md hover:shadow-lg mb-2" onClick={() => setView('services')}>
          Afficher Services
        </button>
      
       <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md hover:shadow-lg mb-2" onClick={() => setView('requests')}>
          Afficher Demandes
        </button>
      </nav></div>
    <div className="col-span-9 row-span-2 col-start-4"><h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">Tableau de Bord</h1></div>
    <div className="col-span-9 row-span-10 col-start-4 row-start-3 gap-28"><div className="w-full">
        {view === 'users' && (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Utilisateurs</h2>
            <Table responsive="lg">
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
                  <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.lastname}</td>
                    <td>{el.email}</td>
                    <td>{el.category}</td>
                    <td>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mx-1" onClick={() => handleEditUser (el.category)}>Éditer</button>
                    </td>
                    <td><button onClick={()=>{dispatch((handleDeleteUser(el?._id)))}}>X</button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}

        {view === 'services' && (
          <div >
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Services</h2>
            <div >
            <table responsive="lg" className=''>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th></th>
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
                    <td>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mx-1" onClick={() => handleEditUser (el.category)}>Éditer</button>
                    </td>
                    <td><button onClick={()=>{dispatch((handleDeleteProduct(el?._id)));setping(!ping);}}>X</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        )}

        {view === 'requests' && (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Demandes</h2>
            <ul className="list-none space-y-4">
              {/* Ajoutez ici votre code pour afficher les demandes */}
            </ul>
          </div>
        )}
      </div></div>
</div>

      
      

      
    </div>
  );
};

export default Dashbord;