//Giống định nghĩa slide master trong ppt
import React, { Component } from 'react'
import {NavLink,Outlet} from 'react-router-dom'
import { connect } from "react-redux";
import { actSearch } from "./../redux/reducers/user/action";

class HomeTemplate extends Component {
    handleOnchange = (event) => {
        this.props.searchUser(event.target.value);
      };

    render() {
        return (
            <>
                {/* b4-navbar-background */}
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <NavLink className="navbar-brand" to="/home">Bách Khoa</NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <NavLink className={({isActive})=> isActive ? 'bg-white text-dark nav-link' : 'nav-link'} style={({isActive})=> isActive ? {fontWeight:'bold'} : {} } to="/user-management">Admin </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'bg-white text-dark nav-link' : 'nav-link'} style={({isActive})=> isActive ? {fontWeight:'bold'} : {} } to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'bg-white text-dark nav-link' : 'nav-link'} style={({isActive})=> isActive ? {fontWeight:'bold'} : {} } to="/form-validation">Form Validation</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={this.handleOnchange} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                <div style={{minHeight:'83vh'}}>
                    <Outlet />
                </div>
                
                <footer className='bg-dark p-3 text-center text-light'>Footer</footer>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      searchUser: (keyword) => {
        dispatch(actSearch(keyword));
      },
    };
  };
  
  export default connect(null, mapDispatchToProps)(HomeTemplate);
