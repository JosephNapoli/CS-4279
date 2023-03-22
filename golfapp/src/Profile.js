import React, {useState} from "react";
import {Button, Col, Form, Modal, Row, Table} from "react-bootstrap";
import "./profile.css";
import defaultPic from './images/Default_pfp.png'

export default function Profile({ user }) {
    const [showEditModal, setEditModal] = useState(false);
    const openEditModal = () => setEditModal(true);
    const closeEditModal = () => setEditModal(false);

    const [name, setName] = useState("John Doe")
    const [email, setEmail] = useState("JohnDoe@gmail.com")
    const [course, setCourse] = useState("Augusta National")

    const saveValues = (name, email, course) => {
        setName(name)
        setEmail(email)
        setCourse(course)
    }

    return (
        <Row className="p-5">
            <Col sm={8}>
                <h1>Player Profile</h1>
                <Row>
                    <Col md={3}>
                        <img className = "profile" src = {defaultPic} width="150" height="150"/>
                    </Col>
                    <Col>
                        <Button //FIX STYLING FOR THIS BUTTON
                            className="m-1"
                            variant="outline-success"
                            onClick={openEditModal}
                        >
                            Edit Profile
                        </Button>
                        <EditModal show={showEditModal} onHide={closeEditModal} onSubmit={saveValues} currName={name}
                                   currEmail={email}  currCourse= {course}/>

                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Name:</h6>
                    </Col>
                    <Col>
                        <p>{name}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Email:</h6>
                    </Col>
                    <Col>
                        <p>{email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Home Course:</h6>
                    </Col>
                    <Col>
                        <p>{course}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Wins:</h6>
                    </Col>
                    <Col>
                        <p>1</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Losses:</h6>
                    </Col>
                    <Col>
                        <p>0</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Win Rate:</h6>
                    </Col>
                    <Col>
                        <p>100%</p>
                    </Col>
                </Row>
                <br />
                <h4>Sam's games</h4>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Opponent</th>
                        <th>W/L</th>
                        <th>Final Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>3/12/23</td>
                        <th>Joe Napoli</th>
                        <th>W</th>
                        <th>5-4</th>
                    </tr>
                    </tbody>
                </Table>
            </Col>
            <Col sm={2} />
        </Row>
    );
}

const EditModal = ({show, onHide, onSubmit, currName, currEmail, currCourse}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")

    const saveData = () => {
        onSubmit(name, email, course)
        onHide()
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Your Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group >
                        <Form.Label>Name</Form.Label>

                        {/* FIX STYLING FOR THESE THREE INPUT COMPONENTS*/}

                        <input className="userIn"   type = "text" defaultValue={currName} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <input className="userIn"   type = "text" defaultValue={currEmail} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                       <Form.Label>Favorite Course</Form.Label>
                        <input className="userIn"   type = "text" defaultValue={currCourse} onChange={(e) => setCourse(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={saveData}>
                    Save New Profile
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

