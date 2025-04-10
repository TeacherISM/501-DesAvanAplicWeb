// Diego Valencia Moreno
// 04-07-25
// Code that fetch data from a URL

const URL = 'https://jsonplaceholder.typicode.com/posts/4';

async function fetchData() {
        try{
                const response = await fetch(URL);
                if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                }

                const data = await response.json();
                console.log ( `Id: ${data.userId}`,
                              `Title: ${data.title}`,
                              `Body: ${data.body}`
                )
        }

        catch(err){
                console.error(`Error fetching data: ${err}`)
        }
}

fetchData();
