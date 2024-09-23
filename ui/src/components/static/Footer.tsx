const Footer = () => {

    const footerStyle = {
        backgroundColor: 'var(--mui-palette-primary-main)',
        display: "flex",
        // flexDirection: "row",
        // flexWrap: "nowrap",
        justifyContent: "flex-start",
        height:"100px",
        width: "100%",
        bottom: 0,
        paddingTop: "5px",
        paddingLeft: "5px",
        paddingRight: "5px",
        fontSize: "15px"
    }

    return (
        <footer style={footerStyle}>
            <p>Copyright 2024</p>
        </footer>
    )
}

export default Footer;