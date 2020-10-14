import React from 'react'

const Quotebox = ({ quote, getNewQuote }) => {
    return (
        <div id="quote-box">
            <div id="text">
                <p>{quote.content}</p>
            </div>
            <div id="author">
                <p>-{quote.author}</p>
            </div>
            <div id="buttons">
                <a href={`https://twitter.com/intent/tweet?text=${quote.content}%0D%0A-${quote.author}`} id="tweet-quote"><i className="fa fa-twitter"></i></a>
                <button id="new-quote" onClick={getNewQuote}>New Quote</button>
            </div>
        </div>
    )
}

export default Quotebox