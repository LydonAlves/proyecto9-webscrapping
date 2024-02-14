const button = document.querySelector('button')

//!I'd have to set this up with each type of images I want to retrieve
const getImages = async () => {
  const input = document.querySelector('.search')

  pintarLoading()
  // console.log(input.value)
  const res = await fetch('http://localhost:3000/api/v1/imgs')

  const images = await res.json()
  console.log(images)

  printImages(images)
}

//this makes fake squares to show that something is going to be loaded while await is taking place
const pintarLoading = () => {
  const divImgs = document.querySelector('.imgs')

  divImgs.innerHTML = ''

  for (let i = 0; i < 10; i++) {
    divImgs.innerHTML += `
          <div class="skeleton">

          </div>
      `
  }
}

const pintarImgs = (imgs) => {
  const divImgs = document.querySelector('.imgs')

  divImgs.innerHTML = ''

  for (const img of imgs) {
    divImgs.innerHTML += `
          <div class="img-wrp">
              <img src="${img}">
          </div>
      `
  }
}

button.addEventListener('click', getImages)
