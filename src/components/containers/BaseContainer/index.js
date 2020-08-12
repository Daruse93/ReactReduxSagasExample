import React from "react";

import {
    Container
} from "react-bootstrap";

import Header from "../../fragments/Header";

const BaseContainer = ({
    children
}) => (
    <div>
        <Header/>
        <Container>
            {children}
        </Container>
    </div>
);

export default BaseContainer
