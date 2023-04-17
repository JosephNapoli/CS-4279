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

    /**
     * Validate that user is a scorer or admin. Fetch user list
     * to populate selector fields.
     */
    useEffect(() => {
        async function fetchUsers() {
            setUsers(
                (await API.graphql({ query: listPlayers })).data?.listPlayers?.items
            );
        }
        fetchUsers();
    }, [navigate, user]);

    /**
     * Handle submission of the "create game" form.
     */
    async function handleSubmit() {
        let p1 = $("#player1");
        let p2 = $("#player2");

        // Validate player uniqueness
        let playerArray = [p1.val(), p2.val()];
        if (new Set(playerArray).size !== playerArray.length) {
            $("#alertBox").text("All four players must be unique. Please correct.");
            setAlert(true);
            return;
        }

        // Compile game details
        const gameDetails = {
            complete: false,
            player1: p1.val(),
            player2: p2.val(),
            player1name: p1.find("option:selected").text(),
            player2name: p2.find("option:selected").text(),
            player1Score: 0,
            player2Score: 0,
        };

        // Post game to DynamoDB
        let playerList = [
            gameDetails.player1,
            gameDetails.player2,
        ];
        await API.graphql({ query: createGame, variables: { input: gameDetails } })
            .then(async (response) => {
                for (const player of playerList) {
                    await addGameToProfile(player, response.data.createGame.id);
                }
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
                                <Form.Group className="mb-2" controlId="selectplayer1">
                                    <Form.Label id="p1-label">Player 1</Form.Label>
                                    <Form.Select id="player1" aria-labelledby="p1-label">
                                        {users.map((user) => (
                                            <option key={user.id} value={user.id}>
                                                {user.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xs={1}>
                                <div className="d-flex justify-content-center">
                                    <h3>vs</h3>
                                </div>
                            </Col>
                            <Col className="card">
                                <h5 className="d-flex justify-content-center">Player 2</h5>
                                <Form.Group className="mb-2" controlId="selectplayer3">
                                    <Form.Label id="p3-label">Player 2</Form.Label>
                                    <Form.Select id="player3" aria-labelledby="p3-label">
                                        {users.map((user) => (
                                            <option key={user.id} value={user.id}>
                                                {user.name}
                                            </option>
                                        ))}
                                    </Form.Select>
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