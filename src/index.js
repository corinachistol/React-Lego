import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Square from './lego/Square.js';
import Triangle from './lego/Triangle';
import Shape from './lego/Shape';
import { Hexagon } from './lego/Hexagon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
     <Square 
      color="orange"
      size={100}
      place={[50,100]}
      />

     <Triangle 
      color="darkorange"
      size={100}
      place={[150,100]}
      />

       <Hexagon 
        color="blue" 
        size={[100,150]}
        place={[250,200]}
      /> 

   

      
  </React.StrictMode>
);


reportWebVitals();
