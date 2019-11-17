import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1>
                About
                {
                    props.data
                        ? <h2>yes data</h2>
                        : <h2>no data</h2>
                }
            </h1>
        </div>
    );
}
