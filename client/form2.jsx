import React from 'react';

var Form2 = (props) => (
    <div className="div-form2">
        <div><h1>Form 2:</h1></div><p />
        <div>addressline: <textarea></textarea></div><p />
        <div>city: <textarea></textarea></div><p />
        <div>state: <textarea></textarea></div><p />
        <div>zipcode: <textarea></textarea></div><p />
        <div><button className="buttonNext" onClick={() => props.F2Handler( {addressline: 'a'} )}>Onward.</button></div>
    </div>
);
  
export default Form2;