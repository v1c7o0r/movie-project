fetch("main.json")
      .then(Response => Response.json() )
      .then(value => console.log(value))
      .catch(error=> console.error(error));
      const url = 'https://imdb8.p.rapidapi.com/v2/search?searchTerm=tom%20cruise&type=NAME&first=20';
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': '3d7a0b826emsh85cceaab2cabd34p1d8371jsna958252a738f',
              'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
          }
      };
      
      try {
          const response = await fetch(url, options);
          const result = await response.text();
          console.log(result);
      } catch (error) {
          console.error(error);
      }    