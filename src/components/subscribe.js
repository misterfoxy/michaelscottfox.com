import React from "react"

const Subscribe = props => {
    return (
        <div style={{
            fontFamily: 'Montserrat',
            padding: '1vh 1vw',
            margin: '1.5vh 1.5vw',
            display: 'flex', 
            flexDirection:'column', 
            backgroundColor:'rgb(135, 205, 255, 0.5)',
            borderRadius:'20px',
            justifyContent:'space-between',
            alignItems:'center'

        }}>
        <form name="subscribe" 
            method="post"
            data-netlify="true"
            action="/"
        >
            <div >
            <p>
                Subscribe to my weekly-ish updates
            </p>
            <p>
                <input style={{borderRadius: '5px', border:'none'}} type='email' placeholder="me@example.com" name='email'/>
            </p>
            </div>
            <div>
            <p>
                <button style={{backgroundColor: 'white', border: 'none'}} type='submit'>Sign me up!</button>
            </p>
            </div>
        </form>
        </div>
    )
}

export default Subscribe;