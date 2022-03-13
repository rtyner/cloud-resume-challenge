const countEl = document.getElementById('vc');

updateVisitCount();
function updateVisitCount() {
    fetch('')
        .then(response => {
        return response.json()
      })
        .then(data => {
            console.log(data)
            document.getElementById('count').innerHTML = data;
        })
    }