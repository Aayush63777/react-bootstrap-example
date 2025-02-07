import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #4A90E2, #9013FE)",
        color: "white",
        padding: "100px 0",
        textAlign: "center",
        width: "100vw", // ✅ Make it full width
      }}
    >
      <h1>Welcome to React-Bootstrap</h1>
      <p className="lead">Create beautiful websites quickly with React-Bootstrap.</p>
      <Button variant="light" size="lg">Get Started</Button>
    </div>
  );
};

export default Hero;


