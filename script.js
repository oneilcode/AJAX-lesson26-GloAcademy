let user = {};

const getData = () => {
   fetch('db.json')
      .then(response => response.json())
      .then(data => {
         user = data;

         sendData('https://jsonplaceholder.typicode.com/posts', user);
      })

      .catch(error => {
         console.log(error);
      });
};

const sendData = () => {
   fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(user),

         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })

      .then((json) => console.log(json));
   console.log(user);
};

getData();