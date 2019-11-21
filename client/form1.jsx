import React from 'react';

var Form1 = (props) => (
    <div className="div-form1">
        <div><h1>Form 1:</h1></div><p />
        <div>name: <textarea></textarea></div><p />
        <div>email: <textarea></textarea></div><p />
        <div><button className="buttonNext" onClick={() => props.F1Handler( {name: 'a', email: 'b'} )}>Onward.</button></div>
    </div>
);

export default Form1;