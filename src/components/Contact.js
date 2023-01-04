import React from "react";

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            isShowing: false,
        }
    }
    handleShowHide = () => {
        this.setState({ isShowing: !this.state.isShowing })
    }
    handleDelete = () => {
        this.props.delete(this.props.contact.id);
    }
    render() {
        let cls = this.state.isShowing
            ? "fas fa-sort-up mr-3"
            : "fas fa-sort-down mr-3";
        return (
            <div>
                <div className="card w-50 mt-5 mx-auto">
                    <div
                        className="card-header"
                        style={{
                            backgroundColor: 'grey',
                            color: '#fff',
                            fontWeight: 'bold'
                        }}
                    >
                        <h1>
                            <i className={cls} onClick={this.handleShowHide}></i>
                            {this.props.contact.name}
                            <div className="float-right">
                                <i className="fas fa-trash mr-3" onClick={this.handleDelete}></i>
                                <i className="fas fa-edit"></i>
                            </div>
                        </h1>
                    </div>
                    {this.state.isShowing ? (
                        <div className="card-body">
                            <ul className="lst-group">
                                <li className="list-group-item">{this.props.contact.email}</li>
                                <li className="list-group-item">{this.props.contact.phone}</li>
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Contact;