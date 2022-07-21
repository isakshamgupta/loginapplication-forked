import React from "react";
import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import { Button } from "react-bootstrap";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <h1>Welcome to Home</h1>
    <Button
      onClick={(e) => {
        navigate("/");
      }}
    >
      Logout
    </Button>
    </>
    
  );
};
export default Home;
