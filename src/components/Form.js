import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            email: '',
            error: {
            }
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email } = this.state;
        if (name === "") {
            return this.setState({ error: { name: "Please Enter your Name" } })
        } else if (email === "") {
            return this.setState({ error: { email: 'Please enter your email address' } })
        } else if (phone === "") {
            return this.setState({ error: { phone: 'Please Enter your phone number' } })
        }
        this.props.formData(this.state);
        this.setState({ error: {}, name: '', email: '', phone: '' });
    }
    render() {
        const { error } = this.state;
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
                            <span style={{ color: 'red' }}>{error.name}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                name="email"
                                placeholder="Email" className="form-control" />
                            <span style={{ color: 'red' }}>{error.email}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="number"
                                onChange={this.handleChange}
                                value={this.state.phone}
                                name="phone"
                                placeholder="Phone" className="form-control" />
                            <span style={{ color: 'red' }}>{error.phone}</span>
                        </div>
                        <button type="submit" className="btn btn-primary"> Submit </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;