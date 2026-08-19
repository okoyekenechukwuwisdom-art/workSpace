import React from 'react'

const StudentsData = () => {
    const[students, setStudents] = React.useState([
        {id: 1, name: "John Doe", score: 85, },
        {id: 2, name: "Jane Smith", score: 90, },
        {id: 3, name: "Michael Johnson", score: 48, },
        {id: 4, name: "Emily Davis", score: 12, },
        {id: 5, name: "David Wilson", score: 88, }, 
    ])
     console.log('StudentData', students);
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
        <h2>Students Results</h2>
        <ul>
            {
                students.map((student) => (
                    <li 
                    key={student.id} 
                    className={student.score >= 50 ? 'text-green-600' : 'text-red-600'}>
                        <strong>{student.name}</strong>: {student.score}
                        <i>{student.score >= 50 ? ' (Passed)' : ' (Failed)'}</i>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default StudentsData
