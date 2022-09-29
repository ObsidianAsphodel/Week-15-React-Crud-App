import { useState } from "react";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./Users";

const url = "https://6327494d5731f3db9956d362.mockapi.io/users";

function App() {
  const [users, setUsers] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailaddress, setEmailAddress] = useState("");
  const [deleteID, setDeleteID] = useState("");

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setUsers(data);
  };
  const pushData = async (first, last, email) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        FirstName: first,
        LastName: last,
        EmailAddress: email,
      }),
    }).then((data) => console.log(data));
  };
  const deleteData = async (id) => {
    fetch(url + "/" + id, {
      method: "DELETE",
    }).console.log("sucess");
  };
  const updateData = async (id) => {};
  return (
    <>
      <div className="container-fluid">
        <h1>Week 15 React CRUD App</h1>
        <div className="row">
          <div>
            <button onClick={() => getUsers()}>Get Data</button>
          </div>
          <div>
            <button onClick={() => updateData()}>Update Data</button>
          </div>
          <div>
            <input
              placeholder="enter id of data you want to delete"
              size={30}
              value={deleteID}
              onChange={(e) => {
                setDeleteID(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                deleteData(deleteID);
              }}
            >
              Delete Data
            </button>
          </div>
        </div>

        <form>
          <div class="form-group">
            <label>First Name:</label>
            <input
              placeholder="Enter First Name"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Last Name:</label>
            <input
              placeholder="Enter Last Name"
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Email Address:</label>
            <input
              placeholder="Enter Email Address"
              value={emailaddress}
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              pushData(firstname, lastname, emailaddress);
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID:</th>
              <th>First Name:</th>
              <th>Last Name:</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, id) => {
              return (
                <tr key={user.id}>
                  <td>
                    <Users id={user.id} />
                  </td>
                  <td>
                    <Users FirstName={user.FirstName} />
                  </td>
                  <td>
                    <Users LastName={user.LastName} />
                  </td>
                  <td>
                    <Users EmailAddress={user.EmailAddress} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
