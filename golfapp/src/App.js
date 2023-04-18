import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./NavigationBar";
import {Container} from "react-bootstrap";
import { API, Auth } from "aws-amplify";
import { getPlayer } from "./graphql/queries";
import { createPlayer} from "./graphql/mutations";
import PathRoutes from "./Routes";
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {useState, useEffect} from "react";

function App({ signOut }) {

    const getUserJson = () => JSON.parse(localStorage.getItem("user"));
    const [currentUser, setCurrentUser] = useState(getUserJson());
    const [activePage, setActivePage] = useState(null);

    /**
     * Get user data from DynamoDB and store in application state.
     */
    useEffect(() => {
        async function dynamodbUserSearch() {
            const user = await Auth.currentAuthenticatedUser();
            console.log(user)
            let userData = await API.graphql({
                query: getPlayer,
                variables: { id: user.username },
            });
            console.log(userData);
            if (!userData?.data.getPlayer) {
                const userDetails = {
                    id: user.username,
                    name: user.attributes.name,
                    email: user.attributes.email,
                };
                userData = await API.graphql({
                    query: createPlayer,
                    variables: { input: userDetails },
                });
            }
            setCurrentUser(userData.data.getPlayer || userData.data.createPlayer);
        }
        dynamodbUserSearch();
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <div className="App">
            <NavigationBar
                activeKey={activePage}
                onSelect={setActivePage}
                signOut={signOut}
                user={currentUser}
            />
            <Container fluid className="p-3">
                <PathRoutes currUser={currentUser}/>
            </Container>
        </div>
  );
}

export default withAuthenticator(App);
