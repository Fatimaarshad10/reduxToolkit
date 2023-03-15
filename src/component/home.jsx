import React from "react";
import { allemail } from "../api/emaildata";
import { adduser, deleteAlluser, removeuser } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import deletIcon from "../icon/deleteData.png";
import clearIcon from "../icon/clearData.png";
import addIcon from "../icon/addData.png";
import styled from "styled-components";

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
  const Button = styled.button`
border:none;
font-weight: 800;
border-radius: 3px;
background-color: ${({ theme }) => theme.thirdBg.backgroundColor};
`
  return (
    <>
      <div class="d-grid gap-2 col-6 mx-auto pb-3 pt-3">
        <h1 >
          List of the fake email data{" "}
          <Button
           
            onClick={() => newUser(allemail())}
          >
            <img src={addIcon} alt="add-data" />
          </Button>
          <Button
          
            onClick={() => deletealluser()}
          >
            <img src={clearIcon} alt="clear-data" />
          </Button>
        </h1>{" "}
      </div>

      <div className="card w-50 mx-auto pt-3">
        <table>
          <thead></thead>
          <tbody>
            <div className="w-60 mx-5">
              {getUser.map((data) => (
                <div key={data.id}>
                  <tr>
                    <td>
                      {data}
                      <button
                        onClick={() => deleteOneUser(data)}
                        style={{ border: "none", backgroundColor: "white" }}
                      >
                        <img
                          src={deletIcon}
                          alt="delete-data"
                          style={{ width: "1.5rem" }}
                        />
                      </button>
                    </td>
                  </tr>
                </div>
              ))}{" "}
            </div>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
