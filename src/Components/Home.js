import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/Actions";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddUser from "../Components/AddUser";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.Data);
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDeleteUser = (id) => {
    alert("Are you sure want to delete user?");
    dispatch(deleteUser(id));
  };

  return (
    <>
      <Button
        variant="contained"
        color="inherit"
        sx={{ marginLeft: "650px", mt: "10px" }}
        onClick={() => {
          navigate("Adduser");
        }}
      >
        Add User
      </Button>

      <TableContainer component={Paper} sx={{ mt: "50px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Adderss</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="user">
                  {user.id}
                </StyledTableCell>
                <StyledTableCell align="center">{user.name}</StyledTableCell>
                <StyledTableCell align="center">{user.adderss}</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">{user.contact}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    style={{ marginRight: "5px" }}
                    variant="contained"
                    color="inherit"
                    onClick={() => navigate(`/edituser/:${user.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
