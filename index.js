const glamorous = require("glamorous");

const ContainerDiv = glamorous.Div(
    ({width, isOpen, theme}) => ({
        display: isOpen ? "block" : "none"
    })
);
