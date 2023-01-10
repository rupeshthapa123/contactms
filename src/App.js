import React from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
class App extends React.Component {
  state = {
    contact: [
    ],
  };
  // constructor() {
  //   super();
  //   this.state = {
  //     contact: [
  //      ],
  //   };
  //   // console.log("Constructor called");
  // }
  handledelete = (id) => {
    let filterData = this.state.contact.filter(function (contact) {
      return contact.id !== id
    });
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // this.setState({ contact: filterData });
        Axios.delete(`http://localhost:5000/api/v1/contacts/${id}`).then(
          res => {
            console.log(res);
            if (res.status === 200) {
              this.getContact();
            }
          }
        ).catch(err => console.log(err));
        toast.success("Successfully Deleted !!");
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };
  handleSubmittedData = (formData) => {
    // let id = this.state.contact.length + 1;
    // let insertData = { id: uuidv4(), ...formData };
    // this.setState({ contact: [insertData, ...this.state.contact] })

    Axios.post('http://localhost:5000/api/v1/contacts', formData).then(res => {
      if (res.status === 201) {
        this.getContact();
      }
      toast.success("Data inserted");
    }).catch(err => console.log(err))
  };
  handleEditData = (editData) => {
    // let editContact = this.state.contact.map(function (contact) {
    //   if (editData.id === contact.id) {
    //     return editData;
    //   }
    //   return contact;
    // })
    // this.setState({ contact: editContact });
    Axios.put(`http://localhost:5000/api/v1/contacts/${editData.id}`, editData).then(
      res => {
        if (res.status === 200) {
          this.getContact();
        }
      }
    ).catch(err => console.log(err));
    toast.success("Edited Successfully");
  };
  componentDidMount() {
    // console.log("ComponentDid mount called")
    //Ajax request
    this.getContact();
  }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("ComponentDid update called");
  //   // if (this.state.contact !== prevState) {

  //   // }
  // }
  //get data from database
  getContact = () => {
    //Methods
    Axios.get("http://localhost:5000/api/v1/contacts").then((response) => {
      this.setState({ contact: response.data.data })
      console.log(response.data.data)
    }).catch(err => console.log(err));
  }
  render() {
    // console.log("Render called")
    return (
      <div>
        <Navbar title="Contact Management System" />
        <Form formData={this.handleSubmittedData} />
        {this.state.contact.map(contact => (
          <Contact
            contact={contact}
            delete={this.handledelete}
            edit={this.handleEditData}
            key={contact._id}
          />))}
        <ToastContainer />
      </div>
    );
  }
}

export default App;