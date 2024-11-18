import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, updateUser } from "../JS/userSlice/userSlice";
import { UserProfile } from "@clerk/clerk-react";
import UserDemande from "./UserDemande";
import Table from "react-bootstrap/esm/Table";
import { deletedemande } from "../JS/demandeSlice";
import Swal from 'sweetalert2'


function Profil({ping, setping}) {
  const user = useSelector((state) => state.user.user);
  const demandes=useSelector((state)=>state.demande.demandelist);
  console.log(demandes)
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [edited, setedited] = useState({
    name:user?.name,
    lastname:user?.lastname,
    email:user?.email,
    password:user?.password
  })
  return (

    <div className="">

      <section className="py-10 my-auto ">
  <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
    <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
      {/*  */}
      <div className="">
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-black">
          Profile {user?.name}
        </h1>
        <h2 className="text-grey text-sm mb-4 dark:text-gray-400">
          Create Profile
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Cover Image */}
          <div>
            {/* Profile Image */}
            <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FProfile-Avatar-PNG.png&f=1&nofb=1&ipt=bfe5d7ce66085f97fb8ec90f6cd6ea510f07e2a3fc917e7f0be038f8318a0651&ipo=images')] bg-cover bg-center bg-no-repeat">
              <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                {/* <input
                  type="file"
                  name="profile"
                  id="upload_profile"
                  hidden=""
                  required=""
                /> */}
                <label htmlFor="upload_profile">
                  <svg
                    data-slot="icon"
                    className="w-6 h-5 text-blue-700"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              {/*  */}
              {/* <input
                type="file"
                name="profile"
                id="upload_cover"
                hidden=""
                required=""
              /> */}
              <div className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
          
              </div>
            </div>
          </div>
          <h2 className="text-center mt-1 font-semibold dark:text-black-300">
            {user?.name} {user?.lastname}
          </h2>
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            <div className="w-full  mb-4 mt-6">
              <label htmlFor="" className="mb-2 dark:text-red-600">
                First Name
              </label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-950 dark:border-gray-300 "
                placeholder={user?.name}
                onChange={(e)=>setedited({...edited, name:e.target.value})}
              />
            </div>
            <div className="w-full  mb-4 lg:mt-6">
              <label htmlFor="" className=" dark:text-red-600">
                Last Name
              </label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-950 dark:border-gray-300 "
                placeholder={user?.lastname}
                onChange={(e)=>setedited({...edited, lastname:e.target.value})}
              />
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            <div className="w-full mb-4 lg:mt-6">
            <label htmlFor="" className=" dark:text-red-600">
                Email
              </label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-950 dark:border-gray-300 "
                placeholder={user?.email}
                onChange={(e)=>setedited({...edited, email:e.target.value})}
              />
            </div>
            <div className="w-full mb-4 lg:mt-6">
            <label htmlFor="" className=" dark:text-red-600">
                Password
              </label>
              <input
                type="text"
                className="text-grey p-4 w-full border-2 mt-2 rounded-lg dark:text-gray-950 dark:border-gray-300 "
                onChange={(e)=>setedited({...edited, password:e.target.value})}
              />
            </div>
          </div>
          <div className="w-full rounded-lg bg-red-600 mt-4 text-white text-lg font-semibold">
            <button className="w-full p-4" onClick={()=>{dispatch(updateUser({id:user?._id,edited}));setping(!ping);Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});}}>
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>



<section>
  <h1>Mes Demandes</h1>
<Table responsive="lg">
        <thead>
          <tr>
            <th>Image product</th>
            <th>Name Product</th>
            <th>Price</th>
            <th>Date</th>
       
          </tr>
        </thead>
        <tbody>
          {demandes?.filter((el)=>el.id_user==user?._id).map((el)=>   <tr>
          
          <td><img src={el?.img_product} style={{width:"100px"}}/></td>
          <td>{el?.name_product}</td>
          <td>{el?.prix}</td>
          <td>{el?.date}</td>
          <td><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mx-1" onClick={()=>{dispatch((deletedemande(el?._id)));setping(!ping);Swal.fire({
  title: "Success",
  text: "Delete Product",
  icon: "success"
});}}>X</button>
</td>
    
        </tr>)}
       
    
        </tbody>
      </Table>
</section>













      {/* <button
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        logout
      </button> */}
    </div>
  );
}

export default Profil;
