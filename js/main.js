//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getSong)

function getSong(){
  const bpm = document.querySelector('input').value
  // const url = fetch(`https://api.getsongbpm.com/tempo/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&bpm=${bpm}`)

  fetch(`https://api.getsongbpm.com/tempo/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&bpm=${bpm}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // const tempoSongs = data.tempo
        console.log(data.tempo)
        // const tempoArray = Object.keys(tempoSongs)
        // for(let i = 0; i <= tempo; i++){
        //   const songList = document.createElement('li')
        //   songList.value = tempoSongs[i]
        //   songList.innerText = tempoSongs[i]
        // }  None of this is working - need to target specific properties/values to list
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


///////////////////// MAYANWOLFE FOOD CHECKER /////////////// 

// document.querySelector('button').addEventListener('click', getSongs)

// function getSongs(){
//   const bpm = document.querySelector('input').value

//   if(bpm < 40 || bpm > 200) {
//     alert('Please choose a tempo between 40 and 220 beats per minute')
//     return;
//   }

//   const url = `https://api.getsongbpm.com/tempo/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&bpm=${bpm}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         if (data.status === 1) {
//         const songDetails = new MakeSongDetails(data.tempo) // not sure if data.tempo is correct or not
//         item.showInfo()
//         item.listIngredients()
//         } else if (data.status === 0){
//           alert(`Product ${inputVal} not found. Please try another.`)
//         }
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// class ProductInfo {
//     constructor(productData) { // Passing in data.product
//         this.name = productData.product_name
//         this.ingredients = productData.ingredients
//         this.image = productData.image_url
//     }

// class MakeSongDetails {
//     constructor(songData) {
//         // this.image = songData.album.img
//         this.title = songData.song_title
//         this.artist = songData.artist
//         this.year = songData.album.year
//         this.genres = songData.artist.genres
//     }
    

//     // showInfo() {
//     //     document.getElementById('product-img').src = this.image
//     //     document.getElementById('product-name').innerText = this.name       
//     // }

    listSongDetails() {
        let tableRef = document.getElementById('songTable')

        for(let key in this.title) {
            let newRow = tableRef.insertRow(-1)
            let newTitleCell = newRow.insertCell(0)
            let newArtistCell = newRow.insertCell(1)
            let newYearCell = newRow.insertCell(2)
            let newGenreCell = newRow.insertCell(3)

            let newTitleText = document.createTextNode(
                this.ingredients[key].text)
            let artist = this.artist[key].vegetarian 
            let newArtistText = document.createTextNode(artist)
            let newYearText = document.createTextNode(year)
            newTitleCell.appendChild(newTitleText)
            newArtistCell.appendChild(newArtistText)
            newYearCell.appendChild(newYearText)
            let 


        }
    }
// }

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getSong)

function getSong(){
  const bpm = document.querySelector('input').value
  // const url = fetch(`https://api.getsongbpm.com/tempo/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&bpm=${bpm}`)

  fetch(`https://api.getsongbpm.com/tempo/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&bpm=${bpm}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // const tempoSongs = data.tempo
        console.log(data.tempo)
        data.tempo.forEach(obj => {
          console.log(obj.song_title)
          //create an li
          const li = document.createElement('li')
          //add text to li
          li.textContent = obj.song_title
          //append li to the ul
          document.querySelector('ul').appendChild(li)

        })
        // for(let i = 0; i < data.tempo.length; i++){
        //   console.log(data.tempo[i].song_title)
        //   document.querySelector('#songTitle').innerText = data.tempo[i].song_title
        // const tempoArray = Object.keys(tempoSongs)
        // for(let i = 0; i <= tempo; i++){
        //   const songList = document.createElement('li')
        //   songList.value = tempoSongs[i]
        //   songList.innerText = tempoSongs[i]
        // }  None of this is working - need to target specific properties/values to list
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// let element = document.getElementById('li')
// while(element.firstChild) {
// element.removeChild(element.firstChild)
// }

// fetch('https://api.getsongbpm.com/tempo/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6', {
//   Method: 'GET',
//   Headers: {
//     Accept: 'application.json',
//     'Content-Type': 'application/json'
//   },
// })


// document.querySelector('button').addEventListener('click', getKey)

// function getKey(){
//   const key = document.querySelector('input').value
//   // const url = fetch(`https://api.getsongbpm.com/key/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&key_of=0(1)`)

//   fetch(`https://api.getsongbpm.com/key/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&key_of=0&mode=1`)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// // 

// document.querySelector('button').addEventListener('click', getTitle)

// function getTitle() {
//   const title = document.querySelector('input').value.toLowerCase().split(' ').join('+')

//   fetch(`https://api.getsongbpm.com/search/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&type=song`)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// // }

// fetch('https://api.getsongbpm.com/song/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&id=983pB')
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });