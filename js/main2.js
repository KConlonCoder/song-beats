//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getSong)
document.querySelector('#reset').addEventListener('click', resetPage)

function getSong(){
  const bpm = document.querySelector('input').value

    if(bpm < 40 || bpm > 220) {
    alert('Please choose a tempo between 40 and 220 beats per minute')
    return;
  }

  fetch(`https://api.getsongbpm.com/tempo/?api_key=c3d889f1a41e5e3ddeb1a9fb7f110cf6&bpm=${bpm}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // const tempoSongs = data.tempo
        console.log(data.tempo)
        let songTitles = data.tempo.map(item => item.song_title)
        songTitles.sort()
        console.log(songTitles)

        songTitles.forEach(index => {
          console.log(index)
          //create an li
          const li = document.createElement('li')
          //add text to li
          li.textContent = index
          //append li to the ul
          document.querySelector('ul').appendChild(li)

        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function resetPage() {
  let list = document.querySelector('ul')
  while(list.firstChild) {
    list.removeChild(list.firstChild)
  }
}



// data.tempo.forEach(obj => {
//   console.log(obj.song_title)
//   //create an li
//   const li = document.createElement('li')
//   //add text to li
//   li.textContent = obj.song_title
//   //append li to the ul
//   document.querySelector('ul').appendChild(li)

// })