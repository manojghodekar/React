import React from 'react';

export const FunctionalComponent=()=> {

    const Title = ()=> (<h1 id="heading"> React</h1>)
    

    const price = 1000;
    //Component Compostion
    return(<div id="container">
        {Title()}
        <Title/>
        <Title></Title>
       <h1>Welcome to functional Component</h1>
       <h2>Fees {price}</h2>
    </div>) 
    ;
}

