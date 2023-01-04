import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            email: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.formData(this.state);
    }
    render() {
        return (
            <div className="card w-50 mt-5 mx-auto">
                <div className="card-header" style={{ backgroundColor: 'blue', color: '#fff', fontWeight: 'bold' }}>
                    <h1>Contact Form</h1>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                placeholder="Name"
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.name}
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                name="email"
                                placeholder="Email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="number"
                                onChange={this.handleChange}
                                value={this.state.phone}
                                name="phone"
                                placeholder="Phone" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary"> Submit </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;