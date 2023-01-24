import React, { Component } from "react";
import { connect } from "react-redux";
import { actSubmit } from "./../redux/reducers/user/action";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      maSV:"",
      fullname: "",
      phoneNumber: "",
      email: "",
    };

    this.closeModal = React.createRef();
  }

  handleOnchange = (event) => {
    //name đặt dưới ô input
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  /**
   * Submit
   */
  handleSubmit = (event) => {
    //chặn load lại trang web
    event.preventDefault();
    this.props.submitUser(this.state);
    //Close modal
    this.closeModal.current.click();
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.userEdit) {
      const { id, maSV, fullname, phoneNumber, email } =
        nextProps.userEdit;
      this.setState({
        id,
        maSV,
        fullname,
        phoneNumber,
        email,
      });
    } else {
      this.setState({
        id: "",
        maSV: "",
        fullname: "",
        phoneNumber: "",
        email: "",
      });
    }
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "Edit User" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Sự kiện submit */}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Mã sinh viên</label>
                  <input
                    type="text"
                    className="form-control"
                    name="maSV"
                    onChange={this.handleOnchange}
                    value={this.state.maSV}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    onChange={this.handleOnchange}
                    value={this.state.fullname}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleOnchange}
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleOnchange}
                    value={this.state.email}
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => {
      dispatch(actSubmit(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
