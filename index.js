fetch("main.json")
      .then(Response => Response.json() )
      .then(value => console.log(value))
      .catch(error=> console.error(error));
