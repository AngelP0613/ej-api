const express = require("express");
const app = express();
const port = 5000;
app.get('/name', (req, res) => {
    // /suma?num1=25&&num2=25
    let name = api
    return res.status(200).json({msg: `Hola ${name}, ¿Cómo estás? `})
  
  });
function dimeTuNombre() {
    let name = api.document.getElementById("name")
  
      const url = `localhost/5000/name `;
  
      fetch(url)
        .then((res) => {
          return res.json();
        })
        //.then(res => return res.json())
        .then((data) => {
            console.log(data)
  
            let card = `
              <div class="card shadow mt-4" style="width: 18rem;">
                  <img src="${data.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${data.name}</h5>
                      <h6>${data.species}</h6>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
            `
  
            document.getElementById("card-container").innerHTML += card
  
        });
    }
  
  //   // fetch(url del servicio a consumir)
  //   //     .then(convierte el response a JSON yt se lo pasa al siguiente then)
  //   //     .then(data en formato JSON)
  
