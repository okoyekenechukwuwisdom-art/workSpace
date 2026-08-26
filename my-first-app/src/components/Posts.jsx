import React from 'react'
import { useEffect,useState } from 'react'

const Posts = () => {



    const [data,setData]  = useState([])
    const [count,setCount]  = useState(0)


    //useEffect is used to perform side effects or action  in a component/reacts. it takes two arguments, a callback function and an array of dependencies. the callback function is executed after the component renders, and the array of dependencies determines when the effect should be re-run.
    //it is used to fetch data from an API, set up event listeners, or update the DOM in response to state changes.
    //fetch or axios is used to make HTTP requests to a server or an API endpoint. it allows you to retrieve data from a server, send data to a server, or perform other operations related to network communication.


    
    useEffect(() => {
         const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            console.log(data, 'data from fetchPosts');
            setData(data)
        }

        catch (error) {
            console.log(error, 'error from fetchPosts');
        }
    }
        fetchPosts()
    }, [])
  return (
    <div>
       <div>
      <p>useffect </p>
      <p>count:{count}</p>
      <div className='grid grid-cols-4 gap-5'>
        {
            data.map((d)=>{
                return (
                    <div className='flex  gap-3' key={d.id}> 
                    <div className={` ${d.completed ? "bg-green-600" : "bg-blue-600"} h-14 rounded-xl px-4`}>
                        <h2 className='text-white'>{d.title}</h2>
                        <h4>{d.completed}</h4>
                    </div>
                    </div>
                )
            })
        }

      </div>
      <button className='bg-red-500 text-white px-2 rounded-lg' onClick={()=>setCount(count  +  1)}>update me</button>
    </div>
    </div>
  )
}

export default Posts
