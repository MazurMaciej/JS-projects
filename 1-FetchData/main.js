
const getUsers = () => {
  fetch('https://randomuser.me/api/?results=100&nat=gb&gender=female')
    .then(response => {
      if (response.status !== 200) {
        throw Error('Nie jest to odpowiedź 200')
      } else { return response.json() }
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}


document.querySelector('button').addEventListener('click', getUsers)