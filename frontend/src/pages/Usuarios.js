import React, { Component, useState } from 'react'
import "../assets/css/style.css"

import UserComponent from './components/UserComponent.js';

import Menu from './Menu';  


function Usuarios(){
    return(
        <div>
            <Menu/>
            <UserComponent/>
        </div>
    )

}
export default Usuarios