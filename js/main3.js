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

        let tableRef = document.getElementById('songs-table')

        // Clear table of previous data pulls
          // FYI-works without the i++ -- bc you're deleting a row, each row gets moved up to index row. If you DID increment, then you'd skip rows. Could also do a while loop.
          for(let i=1; i< tableRef.rows.length;){
            tableRef.deleteRow(i);
        }

        data.tempo.forEach( (element, index) => {
            console.log(data.tempo[index])

            if(!(data.tempo[index].song_title==null)){
                // Add songs from data pull
                let newRow = tableRef.insertRow(-1) // Add to add of table
                let newICell = newRow.insertCell(0) // Add new cell at index zero   
                let newVCell = newRow.insertCell(1)
                let newIText = document.createTextNode(data.tempo[index].artist.name)

                let songTitle = data.tempo[index].song_title

                if(songTitle==null){ //null is checking for anything that is falsey, including 'undefined'
                    songTitle='unknown'
                }

                let newVText = document.createTextNode(songTitle)
                
                newICell.appendChild(newIText)
                newVCell.appendChild(newVText)
                
            }
        });

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
