import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = { 
        UserName: username,
        Password: password
    };

    fetch(`https://gentle-reef-72252-e820382973dd.herokuapp.com/login?UserName=${username}&Password=${password}`, {
        method: "POST",
        body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(data.user, data.token);
        } else {
            alert("No such user");
        }
    })
    .catch((e) => {
        alert("Something went wrong");
    });
};

return (
<Form onSubmit={handleSubmit}>
    <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        minLength="3" 
        />
    </Form.Group>
        <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
        </Button>
        </Form>
        );
};