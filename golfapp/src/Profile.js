import React, {useEffect, useState} from "react";
import {Button, Col, Form, Modal, Row, Table} from "react-bootstrap";
import "./profile.css";
import defaultPic from './images/Default_pfp.png'
import {API} from "aws-amplify";
import {getPlayer} from "./graphql/queries";
import {useParams} from "react-router-dom";
import {updatePlayer} from "./graphql/mutations";

export default function Profile({ user }) {

    let { id } = useParams();

    const [showEditModal, setEditModal] = useState(false);
    const openEditModal = () => setEditModal(true);
    const closeEditModal = () => setEditModal(false);

    const [showDeleteUserModal, setDeleteUserModal] = useState(false);
    const closeDeleteModal = () => setDeleteUserModal(false);
    const openDeleteModal = () => setDeleteUserModal(true);

    const [getName, setName] = useState("John Doe")
    const [getEmail, setEmail] = useState("JohnDoe@gmail.com")
    const [getCourse, setCourse] = useState("Augusta National")
    const [profilePicture, setProfilePicture] = useState(defaultPic)
    const [userData, setUserData] = useState();

    useEffect(() => {
        async function fetchUserData() {
            const userData = await API.graphql({
                query: getPlayer,
                variables: {id: id},
            });
            setUserData(userData.data.getUser);
        }
        fetchUserData();
    }, [id]);

    const saveValues = async(name1, email1, course1) => {
        setName(name1)
        setEmail(email1)
        setCourse(course1)

        const userDetails = {
                id: id,
                name: name1,
                email: email1,
                homeCourse: course1
            };
        console.log(userDetails)
        const userData = await API.graphql({
                query: updatePlayer,
                variables: { input: userDetails },
            });
        setUserData(userData.data.updatePlayer);
        console.log(userData);
        window.location.reload();
        };

    const handleProfileChange = (event) => {
        const newPicture = URL.createObjectURL(event.target.files[0])
        setProfilePicture(newPicture)
    }

    return (
        <Row className="p-5">
            <Col sm={8}>
                <h1>Player Profile</h1>
                <Row>
                    <Col md = {3}>
                        <img className = "profile-picture" src = {profilePicture} width="150" height="150"/>
                    </Col>
                    <Col md={4}>
                        <br/> <br/>
                        <Row>
                            <h6> Change Your Profile Picture: </h6>
                        </Row>
                        <Row>
                            <input type = "file" accept = "image/*" onChange = {handleProfileChange} style={{cursor: "pointer"}}/>
                        </Row>

                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Name:</h6>
                    </Col>
                    <Col>
                        <p>{user?.name}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Email:</h6>
                    </Col>
                    <Col>
                        <p>{user?.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Home Course:</h6>
                    </Col>
                    <Col>
                        <p>{user?.homeCourse}</p>
                        <GenerateMap course={user?.homeCourse}></GenerateMap>
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
                <Row >
                    <Col sm = {2}>
                        <Button // TODO: FIX STYLING FOR THIS BUTTON
                            className="m-1"
                            variant="outline-success"
                            onClick={openEditModal}
                        >
                            Edit Profile
                        </Button>
                        <EditModal show={showEditModal} onHide={closeEditModal} onSubmit={saveValues} currName={userData?.name}
                                   currEmail={userData?.email}  currCourse= {userData?.homeCourse}/>
                    </Col>
                    <Col sm = {2}>
                        <Button
                            className="m-1"
                            variant="outline-danger"
                            onClick={openDeleteModal}
                        >
                            Delete User
                        </Button>
                        <Modal show={showDeleteUserModal} onHide={closeDeleteModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete User</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Are you sure you want to delete user. This action
                                cannot be undone.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={closeDeleteModal}>
                                    Cancel
                                </Button>
                                <Button
                                    data-testid="confirm-deletion"
                                    variant="danger"
                                    //onClick={handleDeleteUser}
                                >
                                    Confirm Deletion
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
                <br />
                <h4>{getName}'s games</h4>
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
    const [name, setName] = useState(currName)
    const [email, setEmail] = useState(currEmail)
    const [course, setCourse] = useState(currCourse)

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
                    <Form.Group>
                        <Form.Label>Name </Form.Label>
                        <input className="userIn" type="text" defaultValue={currName} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email </Form.Label>
                        <input className="userIn"   type = "text" defaultValue={currEmail} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                       <Form.Label>Home Course </Form.Label>
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

const GenerateMap = ({course}) => {
    const key = process.env.REACT_APP_API_KEY
    const [validLocation, setValidLocation] = useState(true)

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + key + "&libraries=places";
        script.async = true
        script.defer = true
        document.head.appendChild(script)
        script.onload = () => {
            const geocoder = new window.google.maps.Geocoder()
            geocoder.geocode({address: course}, (results, status) => {
                if (status === window.google.maps.GeocoderStatus.OK){
                    setValidLocation(true)
                }
                else{
                    setValidLocation(false)
                }
            })
        }
    }, [course])
    var mapSrc = "https://maps.googleapis.com/maps/api/staticmap?markers=" + course + "&zoom=15&size=400x400&key=" + key

    return(
        <div>
            {validLocation ? (
            <img src ={mapSrc} style={{marginBottom: "15px"}}/>)
            : null}
        </div>
    )
}
