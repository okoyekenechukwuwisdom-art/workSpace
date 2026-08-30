import React from 'react'
import { useEffect,useState } from 'react'


const Posts = () => {



    const [data,setData]  = useState([])
    const [count,setCount]  = useState(0)
    const [loading,setLoading] = useState(true)
    const [postLoading,setpostLoading] = useState(false)
    /* const [Error,setError] = useState([]) */



    //useEffect is used to perform side effects or action  in a component/reacts. it takes two arguments, a callback function and an array of dependencies. the callback function is executed after the component renders, and the array of dependencies determines when the effect should be re-run.
    //it is used to fetch data from an API, set up event listeners, or update the DOM in response to state changes.
    //fetch or axios is used to make HTTP requests to a server or an API endpoint. it allows you to retrieve data from a server, send data to a server, or perform other operations related to network communication.
    //react query(tanstak).
    //payload is the data that is sent to the server in an HTTP request. it can be in the form of JSON, XML, or other formats, and it contains the information that the server needs to process the request.
    //react router.

    //context API: is a way to share data between components in a React application without having to pass props down through every level of the component tree. it allows you to create a global state that can be accessed by any component in the application, regardless of its position in the component hierarchy.
    //PROP: The context sent through parent component to the component
    //PROP DRILLING: passing properties through components in REACT.
    //  context API prevent us from having to pass props down through multiple levels of components, which can make the code more complex and harder to maintain. instead, we can use the context API to create a global state that can be accessed by any component in the application.
    
    const fetchPosts = async () =>{
   try {
       const response = await fetch('https://jsonplaceholder.typicode.com/posts')
       if(!response.ok){
        throw new Error('failed to fetch')
       }
       const PostData = await response.json()
       console.log(PostData, 'data from fetchPosts');
       setData(PostData)
       setLoading(false)
   }

   catch (error) {
       console.log(error, 'error from fetchPosts');
       setLoading(false)
    /* setError()  */
       
   }finally{
       setLoading(false)
   }
 }

     const postData = async () => {
        try {
            
        } catch (error) {
            
        }
     }
    useEffect(() => {
        fetchPosts()
    }, [])
  return (
    <div>
       <div>
      <p>useffect </p>
      <p>count:{count}</p>
      <div>

      </div>
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
      <button className='bg-green-600 text-purple-600 rounded-2xl'></button>
      <button className='bg-red-500 text-white px-2 rounded-lg' onClick={()=>setCount(count  +  1)}>update me</button>

      {
        loading && <p className='flex items-center justify-center'>
            <span className="loader"></span>
        </p>
      }
    </div>
    </div>
  )
}

export default Posts
