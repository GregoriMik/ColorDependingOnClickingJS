//KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

//jeśli wartość dla x (event.clientX) i y(event.clientY) jest parzysta (np. 100, 122) to kolor jest czerwony #ff0000
//jeśli wartość dla x i y jest nieparzysta to kolor jest niebieski #0000ff
//jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor jest zielony #008000


document.body.addEventListener("click", (event) => {
  console.log(event.clientX, event.clientY);
  const color = getColor(event);
  document.body.style.backgroundColor = color;
})

const getColor = (e) => {
  if (e.clientX % 2 === 0) {
    if (e.clientY % 2 === 0) {
      return "#ff0000";
    } else {
      return "#008000";
    }
  } else {
    if (e.clientY % 2 === 0) {
      return "#008000";
    } else {
      return "#0000ff";
    }
  }
}