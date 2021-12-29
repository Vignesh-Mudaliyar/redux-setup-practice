import React, { useEffect,useState } from "react";
import { Button, Container, Nav, Navbar, Table } from "react-bootstrap";
import Api from "../../Api/index";
import {useDispatch,useSelector} from "react-redux";
import { getTableData } from "../../redux/actions";
import ReactPaginate from "react-paginate";
import "./dashboard.css"

export const Dashboard = () => {

  const [currentPage,setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  const tableData = useSelector(state => state.tableData);

    useEffect(() => {

      const OnSuccess = (response) => {
        if(response.data) 
        {
          dispatch(getTableData(response.data))
        }
        else{
          console.log("cannot get data");
        }
      } 

      const OnError= (err) => {
        console.log("Error :-",err);
      }
      Api.GetRequest("https://jsonplaceholder.typicode.com/comments",OnSuccess,OnError);
    },[]);

    const PER_PAGE = 10;

    const offset = currentPage*PER_PAGE;
    const pageCount = Math.ceil(tableData.length/PER_PAGE);

    const handlePage = (e) => {
      setCurrentPage(e.selected);
    }
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>

        {tableData.length ? <Table striped bordered hover className='mt-2'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>PostId</th>
            </tr>
          </thead>
          <tbody>

            {tableData.slice(offset,offset+PER_PAGE).map((row) => (
                <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.postId}</td>
              </tr>
            ))}
          
          </tbody>
        </Table> : <div className="text-center mt-5">Loading ....</div>}

        <ReactPaginate
          previousLabel={`Previous`}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={handlePage}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        
      </Container>
    </>
  );
};


export default Dashboard;