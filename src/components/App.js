import React, { useState, useEffect } from "react";

// create your App component here
function App() {
    const [newDog, setNewDog] = useState("");
    const [isLoaded, setIsLoaded] = useState (false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            setNewDog((img)=>img = data.message);
            setIsLoaded(true);
            
          });
      }, []);

      //if the data hasn't been loading, show a loading indicator
      if (!isLoaded) return  <p>Loading...</p>;
    return (
    <div>
       
        <img src = {newDog} alt="A Random Dog"/>

    </div>
    );
}


export default App;