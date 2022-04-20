// //Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getSong)


let song = [
  {song_title: 'The Luckiest', artist: 'Ben Folds', year: '2006', genres: 'rock, pop'}
]

let headers = ['Album Cover', 'Song Title', 'Artist', 'Year', 'Genres']

// function getSong(){
//   const bpm = document.querySelector('input').value
//   const url = fetch(`https://api.getsongbpm.com/tempo/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6`)


  fetch(`https://api.getsongbpm.com/tempo/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&bpm=120`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.tempo[0].song_title)
        for(let i = 0; i < data.tempo.length; i++){
            console.log(data.tempo[i].song_title)
            document.querySelector('#songTitle').innerText = data.tempo[i].song_title
        }
        // for(let i = 0; i < data.tempo.length; i++){
        //     console.log(data.tempo[i].artist.name)
        // }
        // for(let i = 0; i < data.tempo.length; i++){
        //     console.log(data.tempo[i].album.title)
        // }
        // for(let i = 0; i < data.tempo.length; i++){
        //     console.log(data.tempo[i].album.year)
        // }
        // for(let i = 0; i < data.tempo.length; i++){
        //     console.log(data.tempo[i].album.img)
        // }
        console.log(data.tempo.map(item => item.song_title))
        // let title = data.map(tempo => tempo.song_title)
        // console.log(title)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  

class MakeSongDetails{
  constructor(image,title,artist,year,genres){
    this.image = data.tempo
    this.title = title
    this.artist = artist
    this.year = year
    this.genres = genres
  }
}
// }



///////********//Source: https://www.youtube.com/watch?v=Wcr_bbMm3J0

//Source: https://www.youtube.com/watch?v=Wcr_bbMm3J0
// let btnGet = document.querySelector('button')
// let myTable = document.querySelector('#table')

// btnGet.addEventListener('click', () => {
//   let table = document.createElement('table')
//   let headerRow = document.createElement('tr')

//   headers.forEach(headerText => {  //code that creates table header
//     let header = document.createElement('th')
//     let textNode = document.createTextNode(headerText)
//     header.appendChild(textNode)
//     headerRow.appendChild(header)
//   })

//   table.appendChild(headerRow)

//   songDetails.forEach(song => {
//     let row = document.createElement('tr')

//     Object.values(song).forEach(text => { //code that creates the rest of the rows of the table
//       let cell = document.createElement('td')
//       let textNode = document.createTextNode(text)
//       cell.appendChild(textNode)
//       row.appendChild(cell)
//     })

//     table.appendChild(row)
//   })

//   myTable.appendChild(table)
// })
