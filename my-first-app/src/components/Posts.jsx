import React from 'react'

const Posts = () => {
    //useEffect is used to perform side effects or action  in a component/reacts. it takes two arguments, a callback function and an array of dependencies. the callback function is executed after the component renders, and the array of dependencies determines when the effect should be re-run.
    //it is used to fetch data from an API, set up event listeners, or update the DOM in response to state changes.
    //fetch or axios is used to make HTTP requests to a server or an API endpoint. it allows you to retrieve data from a server, send data to a server, or perform other operations related to network communication.


    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            console.log(data, 'data from fetchPosts');
        }

        catch (error) {
            console.log(error, 'error from fetchPosts');
        }
    }
    fetchPosts()
  return (
    <div>
      
    </div>
  )
}

export default Posts
