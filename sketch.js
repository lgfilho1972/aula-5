function setup() {
    createCanvas(400, 400);
    background("blue")
  }
  
  function draw() {
    stroke("black");
    fill("green");
    
    //Por último, podemos criar uma condição ao nosso código utilizando o comando if(){}(traduzido do inglês, significa "se").
    //Interpretando a condição if: se o mouse está pressionado, define um retângulo com as medidas descritas acima.
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }