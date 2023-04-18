import {
    Alert,
    Button,
    Col,
    Container,
    Fade,
    Form,
    Row,
} from "react-bootstrap";
import { listPlayers } from "./graphql/queries";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import $ from "jquery";
import { createGame } from "./graphql/mutations";
import { useNavigate } from "react-router-dom";
import { addGameToProfile } from "./Utils";

export default function CreateGame({ user }) {
    let navigate = useNavigate();
    const [showAlert, setAlert] = useState(false);
    const [users, setUsers] = useState([]);

    const [player1, setPlayer1] = useState(" ")
    const [player2, setPlayer2] = useState(" ")

    /**
     * Handle submission of the "create game" form.
     */
    async function handleSubmit() {
        let p2 = player2;

        // Compile game details
        const gameDetails = {
            complete: false,
            player1: player1,
            player2: player2,
            player1Score: 0,
            player2Score: 0,
        };

        // Post game to DynamoDB
        let playerList = [
            gameDetails.player1,
            gameDetails.player2,
        ];
        console.log(gameDetails)
        await API.graphql({ query: createGame, variables: { input: gameDetails } })
            .then(async (response) => {
                navigate(`/score/${response.data.createGame.id}`);
            })
            .catch((err) => console.log(err));
    }

    return (
        <Container fluid>
            <Row>
                <Col />
                <Col xs={12} lg={6}>
                    <h1 className="text-center p-5">Create New Game</h1>
                    <Fade in={showAlert}>
                        <div>
                            <Alert variant="danger" id="alertBox"></Alert>
                        </div>
                    </Fade>
                    <Form>
                        <Row>
                            <Col className="card">
                                <h5 className="d-flex justify-content-center">Player 1</h5>
                                <Form.Group className="mb-3" controlId="selectplayer1">
                                    <Form.Control type="string" placeholder="" onChange={(e) => setPlayer1(e.target.value)} value={player1}/>
                                </Form.Group>
                            </Col>
                            <Col xs={1}>
                                <div className="d-flex justify-content-center">
                                    <h3>vs</h3>
                                </div>
                            </Col>
                            <Col className="card">
                                <h5 className="d-flex justify-content-center">Player 2</h5>
                                <Form.Group className="mb-3" controlId="selectplayer2">
                                    <Form.Control type="string" placeholder="" onChange={(e) => setPlayer2(e.target.value)} value={player2}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="card mt-4">
                                <Button onClick={handleSubmit} className="mb-2">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col />
            </Row>
        </Container>
    );
}