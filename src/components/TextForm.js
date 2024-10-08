import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case', 'success');
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case', 'success');
    };

    const handleEmailExtractorClick = () => {
        let re = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

        // Check if there are any matches
        let emails = text.match(re);
        console.log(emails);

        if (emails) {
            emails.forEach(function (email) {
                console.log(email);
            });

            setText(emails.join(', '));
        } else {
            console.log('No emails found');
            setText('');
        }
        props.showAlert('Emails extracted', 'success');
    };
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text box clered', 'success');
    };

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied to clipboard', 'success');
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces removed', 'success');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState('');
    return (
        <>
            <div
                className='container'
                style={{
                    color: props.mode === 'dark' ? 'white' : '#042743',
                }}
            >
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea
                        className='form-control'
                        style={{
                            backgroundColor:
                                props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : '042743',
                        }}
                        id='myBox'
                        rows='8'
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button
                    className='btn btn-primary mx-2'
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    className='btn btn-primary mx-2 my-2'
                    onClick={handleLoClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    className='btn btn-primary mx-2 my-2'
                    onClick={handleEmailExtractorClick}
                >
                    Email Extractor
                </button>
                <button
                    className='btn btn-primary mx-2 my-2'
                    onClick={handleClearClick}
                >
                    Clear Text
                </button>
                <button
                    className='btn btn-primary mx-2 my-2'
                    onClick={handleCopy}
                >
                    Copy Text
                </button>
                <button
                    className='btn btn-primary mx-2 my-2'
                    onClick={handleExtraSpaces}
                >
                    Remove Extra Spaces
                </button>
            </div>
            <div
                className='container my-3'
                style={{
                    color: props.mode === 'dark' ? 'white' : '042743',
                }}
            >
                <h2>Your Text Summary</h2>
                <p>
                    {text.trim() === '' ? 0 : text.trim().split(/\s+/).length}{' '}
                    words and {text.length} characters
                </p>
                <p>{text.split(' ').length * 0.008} minutes read</p>
                <h2>Preview</h2>
                <p>
                    {text.length > 0
                        ? text
                        : 'Enter something in the textbox to preview it here'}
                </p>
            </div>
        </>
    );
}
