import React, { useRef,useState } from "react";
import { Form,Button, Container, Card, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions";


export default function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [err,setErr] = useState(null);

    const navigate = useNavigate();
     const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(localStorage.getItem("email") === emailRef.current.value && localStorage.getItem("password") === passwordRef.current.value)
        {
            setErr(null);
            dispatch(login(true));
            navigate("/");
            
        }
        else
        {
            setErr("email or password is wrong");
            
        }
    }

  return (
      <>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                  <Form onSubmit={handleSubmit}>
                      {err && <Alert variant="danger">{err}</Alert>}
                     <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>

                    
                    <Button type="submit" className="w-100 my-3">Login</Button>
                </Form>    
            </Card.Body>
        </Card>
        <div className="text-center">
            Don't have an Account?<Link to="/register">Register</Link>
        </div>
        </div>
         </Container> 
    </>
  );
}
