// Import necessary libraries
import React from "react";

// Define the ProfileView component
export const ProfileView = ({ user }) => {
return (

<div>
    <h2>User Profile</h2>
    <p>Name: {user.userName}</p>
    <p>Email: {user.email}</p>
</div>
);
};
