import React from 'react'
import { Link } from 'react-router-dom';
import { pageUrl } from './Constants';
// import NavMenu from './NavMenu';
import './style.css';
function Main() {
    return (
        <>
            
    <main class="content">
        <div class="paragraph">
        <p>Hey,<br/></p>
        <p>Check Your City Weather</p>
        <Link to={pageUrl.WEATHERPAGE}><button class="check-btn">Checkout</button></Link>
    </div>
   
    </main>

    
        </>
    )
}

export default Main
