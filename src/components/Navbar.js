import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg"
                style={{ backgroundColor: "blue" }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href=" " style={{ color: "#fff" }}>
                        {this.props.title}
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar;