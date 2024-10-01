import React from 'react'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { baseUrl , updateUrl  } from '../utility/Constant';
import  axios  from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../Store/UserSlice';
import images from "../assets/images.jpeg";

const Profile = () => {
  let dispatch = useDispatch(); 
  let userData = useSelector((store)=> store.user)
  let {userName , email , _id } = userData.user;
  let updateUserName = useRef("");

  let handleUpdate = async () => {
    let updatedName = updateUserName.current.value; 
        try {
        let apiRes = await axios.patch(baseUrl + updateUrl, { userName: updatedName }, { withCredentials: true });
        let data = apiRes.data;
        if (data?.result == true) {
          dispatch(addUser(data.data));
        }
      } catch (err) {
        console.log(err);
      }
  }
  
  return (
    <div className="avatar placeholder flex items-center 
    justify-center pt-5 flex-col min-h-screen max-w-3xl mx-auto bg-[#4ca981]">
      <div className="bg-neutral text-neutral-content 
      w-1/3 rounded-full mb-1">
      <img src={images} alt="" className="w-full h-32 
      object-cover rounded-r-full" />
      </div>
    <br />
      <label className="input input-bordered flex items-center justify-center 
    pt-10 flex-col input-lg w-full max-w-sm bg-zinc-100">
          <p> UserID  : {_id}</p> <br/>
    </label>
    <br/>
      <label className="input input-bordered flex items-center justify-center 
    pt-10 flex-col input-lg w-full max-w-sm bg-zinc-100">
          <p> Email : {email}</p> <br />
        </label>
        <br/>
      <label className="input input-bordered flex items-center justify-center 
    pt-1 flex-col input-lg w-full max-w-sm bg-zinc-100">
          <p>Username  : {userName} </p>
    </label>
    <br />

<button className="btn text-white bg-blue-700 hover:bg-blue-800 border-black 
rounded-lg focus:outline-none font-semibold text-base"
onClick={() => document.getElementById('my_modal_2').showModal()}> Update Username </button>

<dialog id="my_modal_2" className="modal">
        
<div className="modal-box bg-teal-800 w-3/4 mt-4">

<button className="text-white px-2 ml-96 border-2"
onClick={() => document.getElementById('my_modal_2').close()}
>CLOSE</button>

<div className="join px-12">  
           
<input className="input input-bordered join-item mt-2 mr-2
bg-slate-300 focus:visible hover:border-black"
placeholder="Username" ref={updateUserName} />

<button className="btn join-item rounded-l-xl w-1/3 mt-2 text-black text-base
font-semibold bg-blue-500 hover:bg-blue-500" onClick={handleUpdate}>Update</button>
            
</div>
</div>

<form method="dialog" className="modal-backdrop" id="form">
<button>Close</button>          
</form>

</dialog>
</div>
   )
}

export default Profile