console.log("estamos en mi index js");


let button = document.querySelector("#buttonCrear")

button.addEventListener("click", async (event) => {
  event.preventDefault();


  let title = document.querySelector("#title").value
  let author = document.querySelector("#author").value

  let datos = {
    title,
    author
  }
  
  let url = `http://localhost:5000/api/posts`
  const data = await fetch(url,  {
    method: "Post",
    headers : {"Content-Type": "application/json"},
    body: JSON.stringify(datos)
  })
  let datos_nuevo = await data.json()
  console.log("data",datos_nuevo)
})

// Fetch, async await