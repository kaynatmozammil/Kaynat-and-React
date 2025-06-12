import React, { useEffect, useState } from 'react';




const Card = ({ title, rating = 0,actors = [],isCool = false }) => {

  const[count,setCount] = useState(0)
  const [hasLiked , setHasLiked] = useState(false); 

  useEffect(()=>{
    console.log(`${title} has been liked:${hasLiked}`)
  },[hasLiked]);

  // useEffect(()=>{
  //   console.log('Card Rendeerd')
  // },[])


  return (
    <div style={{
      border:'1px solid #4b5362',
      padding:'20px',
      margin:'10px',
      backgroundColor:'#31363f',
      borderRadius:'10px',
      minHeight:'100px'


    }} onClick={()=>setCount(count+1)}>
      <h2>
        {title} <br/> {count||null} <br/> {rating }
        {actors && actors.map((actor, index) => <span key={index}>{actor.name}</span>)}
      </h2>
      {isCool && <p>This movie is cool!</p>} 

      <button onClick={() =>setHasLiked(!hasLiked)}>
        {hasLiked?'❤️':'🤍'}
      </button>
    </div>
  );
};

// Optional Class Component
// class ClassComponent extends React.Component {
//   render() {
//     return <h2>Class Component</h2>;
//   }
// }

const App = () => { 
  
  // cosnt [hideAllMovies , setHasLiked] = useState(false);
  return (
    <div className='card-container'>
      <Card title="Star War" rating={5} isCool={true}
      
      actors={[{ name: 'Luke Skywalker' }]} />
      <Card title="Avatar" />
      <Card title="The Lion King" />

    </div>
  );
};

export default App;
