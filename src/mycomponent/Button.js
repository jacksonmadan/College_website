import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
export default function Button() {
    return (
        <div>
            <div class="bt0">
            <Link to="/Apply">  <button class="custom-btn btn-2">APPLY</button> </Link>
            <Link to="/LOGIN">  <button class="custom-btn btn-2">LOGIN</button> </Link>
            <Link to="/Register">  <button class="custom-btn btn-2">REGISTER</button> </Link>
            <Link to="/Chat">  <button class="custom-btn btn-2">CHAT WITH US</button> </Link>
            </div>
        </div>
    )
}
