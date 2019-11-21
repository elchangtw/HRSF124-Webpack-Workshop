import React from 'react';

var Form3 = (props) => (
    <div className="div-form3">
        <div><h1>Form 3:</h1></div><p />
        <div>creditcard: <textarea></textarea></div><p />
        <div><button className="buttonNext" onClick={() => props.F3Handler( {creditcard: 'a'} )}>Last Button...</button></div>
    </div>
);

export default Form3;