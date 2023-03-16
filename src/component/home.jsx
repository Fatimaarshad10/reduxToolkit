import React from "react";
import { allemail } from "../api/emaildata";
import { adduser, deleteAlluser, removeuser } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function Home() {
  const getUser = useSelector((state) => {
    return state.user.users;
  });
  const dispatch = useDispatch();
  const newUser = (payload) => {
    dispatch(adduser(payload));
    console.log(payload);
  };
  const deleteOneUser = (data) => {
    dispatch(removeuser(data));
  };
  const deletealluser = () => {
    dispatch(deleteAlluser());
  };


  return (
    <>

      <div class="d-grid gap-2 col-6 mx-auto pb-3 pt-3">
          <button
           
            onClick={() => newUser(allemail())}
          >
            Add 
          </button>
          <button
            onClick={() => deletealluser()}
          >
          Remove

          </button>

      </div>
      <table class="table table-striped table-inverse">
  <thead>
  <tr   className = 'table-warning'>
      
            <th>Email</th>
            <th>Delete</th>
            
          </tr>
   
  </thead>
  <tbody>
  {getUser.map((data) => {
            return (
              <tr key={data.id}>
                 
                <td className = 'table-warning'>{data}</td>
                
                <td className = 'table-warning'> 
                <div className = 'table-warning'
                        onClick={() => deleteOneUser(data)}
                        style={{ border: "none", cursor:'pointer' }}
                      >
<FontAwesomeIcon icon={faTrash}/>

                      
                      </div>
                      </td>
              </tr>
            );
          })}
    
    
  </tbody>
</table>
      
    </>
  );
}

export default Home;
