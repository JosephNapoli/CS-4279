import React, {useContext} from "react"
import UserContext from "./Profile"
import {Col, Row, Table} from "react-bootstrap";



function Display(){
    const { name, email, homeCourse, setName, setEmail, setHomeCourse } = useContext(UserContext)

    return (
        <Row className="p-5">
            <Col sm={8}>
                <h1>Edit Player Profile</h1>
            </Col>
        </Row>
    )
}
{/* function valueHandler(){
    // init context variables from profile page
    const { name, email, homeCourse, setName, setEmail, setHomeCourse } = useContext(UserContext)

    function handleName(event){
        setName(event.target.value)
    }

    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handleCourse(event){
        setHomeCourse(event.target.value)
    }

    return (
        <Display/>
    )
} */}
export default function EditProfile({user}){
    return (
        <Display/>
    )
}