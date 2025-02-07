import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Features = () => {
  return (
    <Container fluid className="mt-5 px-5"> {/* ✅ Make it full width */}
      <Row>
        <Col md={4}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <h5>Fast & Responsive</h5>
              <p>Bootstrap ensures that your website looks great on any device.</p>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <h5>Customizable</h5>
              <p>Easily customize Bootstrap with built-in utilities.</p>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <h5>Modern Design</h5>
              <p>Pre-built components allow you to build a modern website easily.</p>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
