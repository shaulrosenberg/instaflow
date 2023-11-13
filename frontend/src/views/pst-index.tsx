// feed
// renders a pst-list
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function PstIndex() {

    return (
        <section className='pst-index'>
            <Link to="/login" className='link'>Check out login page Figsy</Link>
        </section>
    )
}

export default PstIndex