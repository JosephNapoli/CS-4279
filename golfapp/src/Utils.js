import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { API } from "aws-amplify";
import { getPlayer } from "./graphql/queries";
import { updatePlayer } from "./graphql/mutations";

export const GameTable = (games, showNewGameRow = true) => {
    let navigate = useNavigate();
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Status</th>
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
                        <strong>{game.complete ? "Complete" : "Active"}</strong>
                    </td>
                    <td>
                        {game.player1.name}
                    </td>
                    <td>
                        {game.player2.name}
                    </td>
                    <td>
                        {game.player1Score} - {game.player2Score}
                    </td>
                </tr>
            ))}
            {showNewGameRow && (
                <tr key="newGame">
                    <td colSpan={5} className="text-center">
                        <Link to="/new">Start New Game</Link>
                    </td>
                </tr>
            )}
            </tbody>
        </Table>
    );
};

export async function addGameToProfile(username, gameId) {
    const userData = await API.graphql({
        query: getPlayer,
        variables: { id: username },
    });
    const userDetails = {
        id: username,
        games: userData.data.getPlayer.games
            ? [...userData.data.getPlayer.games, gameId]
            : gameId,
    };
    API.graphql({ query: updatePlayer, variables: { input: userDetails } }).catch(
        (err) => console.log(err)
    );
}