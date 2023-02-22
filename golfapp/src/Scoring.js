import {Button, Col, Container, Form, Modal, Row, Table} from "react-bootstrap";
import {useState} from "react";

export default function Scoring({ user }) {

    const [showCompleteModal, setCompleteModal] = useState(false);
    const [showHoleModal, setHoleModal] = useState(false)

    const openCompleteModal = () => setCompleteModal(true);
    const closeCompleteModal = () => setCompleteModal(false);
    const openHoleModal = () => setHoleModal(true);
    const closeHoleModal = () => setHoleModal(false);

    return (
        <Container fluid>
            <Row>
                <Col />
                <Col xs={12} lg={8}>
                    <h1 className="text-center p-5">Scoring</h1>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>Leader</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Sam Feifer</td>
                            <th>5</th>
                            <th>4</th>
                            <th>3</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>+1</th>
                        </tr>
                        <tr>
                            <td>Joe Napoli</td>
                            <th>4</th>
                            <th>6</th>
                            <th>4</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col/>
            </Row>
            <Row>
                <Col />
                <Col xs={12} lg={8}>
                    <Button
                        className="m-1"
                        variant="outline-primary"
                        onClick={openHoleModal}
                    >
                        Score Hole
                    </Button>
                    <Modal show={showHoleModal} onHide={closeHoleModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Score Hole</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="golfer1score">
                                    <Form.Label>Golfer 1</Form.Label>
                                    <Form.Control type="number" placeholder="Enter score" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="golfer2score">
                                    <Form.Label>Golfer 2</Form.Label>
                                    <Form.Control type="number" placeholder="Enter score" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeHoleModal}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={closeHoleModal}>
                                Submit Scores
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Button
                        className="m-1"
                        variant="outline-success"
                        onClick={openCompleteModal}
                    >
                        Mark Match as Completed
                    </Button>
                    <Modal show={showCompleteModal} onHide={closeCompleteModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Match Completion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Match completion is not reversible. Are you sure?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeCompleteModal}>
                                Cancel
                            </Button>
                            <Button
                                data-testid="confirm-completion"
                                variant="success"
                                onClick={closeCompleteModal}
                            >
                                Confirm Completion
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col />
            </Row>
        </Container>
    );
}