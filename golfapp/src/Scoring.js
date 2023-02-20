import {Button, Col, Container, Row, Table} from "react-bootstrap";

export default function Scoring({ user }) {
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
                    <Button variant="primary" size="lg">
                        Score Hole
                    </Button>{' '}
                    <Button variant="danger" size="lg">
                        End Game
                    </Button>
                </Col>
                <Col />
            </Row>
        </Container>
    );
}