import React, { useRef,useState } from "react";
import { Form,Button, Container, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmpasswordRef = useRef(null);
    const [err,setErr] = useState(null);

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(passwordRef.current.value === confirmpasswordRef.current.value)
        {
            setErr(null);

            localStorage.setItem("email",emailRef.current.value);
            localStorage.setItem("password",passwordRef.current.value);
            navigate("/login");
        }
        else
        {
            setErr("Passwords must be same");
            
        }
        console.log(emailRef,passwordRef,confirmpasswordRef)
    }

  return (
      <>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Register</h2>
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

                    <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={confirmpasswordRef} required/>
                    </Form.Group>
                    <Button type="submit" className="w-100 my-3">Register</Button>
                </Form>    
            </Card.Body>
        </Card>
        </div>
         </Container> 
    </>
  );
}
