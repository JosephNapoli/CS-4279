import {useNavigate} from "react-router-dom";
import {Col, Container, Row, Table} from "react-bootstrap";
import {API} from "aws-amplify";
import {listGames} from "./graphql/queries";
import {useEffect, useState} from "react";


export default function AllGames() {

    const [games, setGames] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        async function fetchGames() {
            const apiData = await API.graphql({ query: listGames });
            setGames(apiData.data.listGames.items);
        }
        fetchGames();
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col />
                <Col xs={12} lg={8}>
                    <h1 className="text-center p-5">Game Scores</h1>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Player 1</th>
                            <th>Player 2</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {games.map((game) => (
                            <tr
                                key={game.id}
                                onClick={() => navigate(`/score/${game?.id}`)}
                                style={{ cursor: "pointer" }}
                            >
                                <td>
                                    {game.player1}
                                </td>
                                <td>
                                    {game.player2}
                                </td>
                                <td>
                                    {game.player1Score} - {game.player2Score}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                <Col />
            </Row>
        </Container>
    );
};