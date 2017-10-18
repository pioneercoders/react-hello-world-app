import React from 'react';

class HelloWorld extends React.Component {
    
   render() {
    const bgColor = {
        backgroundColor: "rgb(0, 188, 212)",
        padding: 10,
        margin: 10,
        fontSize: 32,
        textAlign: "center",
        color: "#ffffff"
    };

      return (
         <div style={bgColor}>
            Welcome to Pioneer Coders 
         </div>
      );
   }
}

export default HelloWorld;