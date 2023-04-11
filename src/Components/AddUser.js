import React, { useState } from "react";
import { Button, TextField, Box, Card, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/Actions";

const AddUser = () => {
  const [values, setValues] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
  });
  const [error, setError] = useState("");
  const { name, address, email, contact } = values;
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [email, setEmail] = useState("");
  // const [contact, setContact] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const valueHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitUser = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please enter all input fields!!");
    } else {
      dispatch(addUser(values));
      navigate("/");
      setError("");
    }
  };

  return (
    <Box sx={{ width: "400px", padding: "10px" }}>
      <Card>
        <h2>ADD USER</h2>
        {error && <h5 style={{ color: "red" }}>{error}</h5>}
        <form
          style={{
            marginLeft: "50px",
            marginBottom: "50px",
            alignItems: "center",
          }}
        >
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            style={{ marginTop: "10px", width: "300px" }}
            value={name}
            onChange={valueHandler}
          />
          <br />
          <TextField
            id="address"
            name="address"
            label="Address"
            variant="outlined"
            style={{ marginTop: "10px", width: "300px" }}
            value={address}
            onChange={valueHandler}
          />
          <br />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            style={{ marginTop: "10px", width: "300px" }}
            value={email}
            onChange={valueHandler}
          />
          <br />
          <TextField
            id="contact"
            name="contact"
            label="Contact"
            variant="outlined"
            style={{ marginTop: "10px", width: "300px" }}
            value={contact}
            onChange={valueHandler}
          />
          <br />
          <ButtonGroup sx={{ mt: "20px" }}>
            <Button
              variant="contained"
              color="inherit"
              type="submit"
              sx={{ ml: "30px", mr: "30px" }}
              onClick={submitUser}
            >
              Add User
            </Button>
            <Button
              variant="contained"
              color="inherit"
              type="submit"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      </Card>
    </Box>
  );
};

export default AddUser;
