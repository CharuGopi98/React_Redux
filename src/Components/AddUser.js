import React from "react";
import { Button, TextField, Box, Card, ButtonGroup } from "@mui/material";

const AddUser = () => {
  const submitUser = () => {};
  return (
    <Box sx={{ width: "400px", padding: "10px" }}>
      <Card>
        <form
          style={{
            marginLeft: "50px",
            marginBottom: "50px",
            alignItems: "center",
          }}
          onSubmit={submitUser}
        >
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            style={{ marginTop: "10px", width: "300px" }}
          />
          <br />
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            style={{ marginTop: "10px", width: "300px" }}
          />
          <br />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            style={{ marginTop: "10px", width: "300px" }}
          />
          <br />
          <TextField
            id="contact"
            label="Contact"
            variant="outlined"
            style={{ marginTop: "10px", width: "300px" }}
          />
          <br />
          <ButtonGroup sx={{ mt: "20px" }}>
            <Button
              variant="contained"
              color="inherit"
              type="submit"
              sx={{ ml: "30px", mr: "30px" }}
            >
              Add User
            </Button>
            <Button variant="contained" color="inherit" type="submit">
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      </Card>
    </Box>
  );
};

export default AddUser;
