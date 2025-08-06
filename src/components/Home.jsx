import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.taskInput = React.createRef();

    const emailId = localStorage.getItem("emailId");
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const localUser = storedUsers.find(u => u.emailId === emailId);

    let user = null;

    if (emailId === "Admin") {
      user = { name: "Admin", emailId: "Admin" };
    } else if (
      ["luna@gmail.com", "lily@gmail.com", "kai@gmail.com", "ibuki@gmail.com", "deepika@gmail.com", "max@gmail.com"].includes(emailId)
    ) {
      user = { emailId };
    } else if (localUser && localUser.emailId === emailId) {
      user = localUser;
    }

    this.state = {
      user: user,
      tasks: [],
      editIndex: -1,
      editedText: ""
    };
  }

  componentDidMount() {
    const { user } = this.state;
    if (user) {
      const savedTasks = JSON.parse(localStorage.getItem(user.emailId + "_tasks")) || [];
      this.setState({ tasks: savedTasks });
    }
  }

  saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem(this.state.user.emailId + "_tasks", JSON.stringify(tasks));
  };

  addTask = () => {
    const taskText = this.taskInput.current.value.trim();
    if (taskText === "") {
      alert("⚠️ Task cannot be empty!");
      return;
    }

    const updatedTasks = [...this.state.tasks, taskText];
    this.setState({ tasks: updatedTasks }, () => {
      this.saveTasksToLocalStorage(updatedTasks);
    });

    this.taskInput.current.value = "";
  };

  deleteTask = (index) => {
    const updatedTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks }, () => {
      this.saveTasksToLocalStorage(updatedTasks);
    });
  };

  startEdit = (index) => {
    this.setState({
      editIndex: index,
      editedText: this.state.tasks[index]
    });
  };

  handleEditChange = (e) => {
    this.setState({ editedText: e.target.value });
  };

  updateTask = () => {
    const { tasks, editIndex, editedText } = this.state;

    if (editedText.trim() === "") {
      alert("⚠️ Updated task cannot be empty!");
      return;
    }

    tasks[editIndex] = editedText.trim();

    this.setState({ tasks, editIndex: -1, editedText: "" }, () => {
      this.saveTasksToLocalStorage(tasks);
    });
  };

  cancelEdit = () => {
    this.setState({ editIndex: -1, editedText: "" });
  };

  render() {
    const { user, tasks, editIndex, editedText } = this.state;

    if (!user) {
      return (
        <div className="container mt-5 text-center">
          <div className="alert alert-danger shadow p-4 rounded-4" style={{ maxWidth: "500px", margin: "auto" }}>
            <h4>Please login first to access the Home page. 🔐</h4>
          </div>
        </div>
      );
    }

    return (
      <div className="container mt-5">
        <div className="card bg-light shadow p-4 rounded-4" style={{ maxWidth: "650px", margin: "auto" }}>
          <h2 className="text-center text-black mb-4">👋 Welcome, <span className="fw-bold">{user.emailId}</span></h2>

          <div className="input-group mb-4">
            <input
              type="text"
              ref={this.taskInput}
              
              className="form-control rounded-start-pill border border-black"
              placeholder="📝 Enter your task here..."
            />
            <button 

            className="btn btn-outline-primary rounded-end-pill"

           
            onClick={this.addTask} >
               Add Task
            </button>
          </div>

          <h5 className="text-secondary mb-3">🗂️ Your Tasks</h5>
          <ul className="list-group">
            {tasks.length === 0 ? (
              <li className="list-group-item text-muted text-center bg-white rounded-pill">
                🎉 No tasks yet! Add something to get started!
              </li>
            ) : (
              tasks.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center bg-white rounded-3 mb-2 shadow-sm">
                  {editIndex === index ? (
                    <>
                      <input
                        type="text"
                        className="form-control me-2"
                        value={editedText}
                        onChange={this.handleEditChange}
                      />
                      <button onClick={this.updateTask} className="btn btn-sm btn-primary me-1">✔️</button>
                      <button onClick={this.cancelEdit} className="btn btn-sm btn-secondary">✖️</button>
                    </>
                  ) : (
                    <>
                      <span className="text-dark fw-medium">{task}</span>
                      <div className="btn-group btn-group-sm">
                        <button onClick={() => this.startEdit(index)} className="btn btn-outline-warning">✏️</button>
                        <button onClick={() => this.deleteTask(index)} className="btn btn-outline-danger">🗑️</button>
                      </div>
                    </>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    );
  }
}
