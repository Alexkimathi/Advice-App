// import react, { useState, useEffect } from 'react'

// function FetchData() {
//     const [advices, setAdvice] = useState([])

//     useEffect(() => {
//         fetch('https://api.adviceslip.com')
//             .then(res => res.json())
//             .then(data => console.log(data))
//             // .catch(err => setAdvice(err))
//     }, [])

//     return (
//         <div>
//             <ul>

//                 {advices.map((index) => (
//                     <li key={index.id}>{index.advice}</li>

//                 ))}
//             </ul>

//         </div>
//     )
// }
// export default FetchData 