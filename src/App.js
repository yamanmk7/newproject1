import logo from './logo.svg';
import './App.css';
import Img from './images/img';
import styles from './styles/app.css'
import { useEffect, useState } from 'react';

function App() {

  const [data , setData] = useState([])
  const Row = ({name , grade , index}) => {
    return (
      <tr className='rowInTable'>
        <td>{name}</td>
        <td>{grade + "/10"}</td>
        <td>{index}</td>
      </tr>
    )
  }

  const renderRows = () => {
    return data.map((item , index) => {
      return <Row name={item.username} grade={item.userScore} index={index + 1 } />
    })
  }

  const getGrades = ()=> {
    const url = 'https://trivia-zee4.onrender.com/getHigh20'; 
    fetch(url , {
      headers:{
        "Access-Control-Allow-Origin" :'no-cors' , 
        'crose-origin' : 'no-cors',
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(resJson =>{
      console.log("data: ", resJson);
      setData(resJson?.finalscores)
    }).catch(err => {
      console.log(err);
    });
  }

  useEffect(()=> {
    getGrades();
  }, [])

  return (
    <div className="App">
      <div>
      <img src={Img.img2}  style={{width:200, marginLeft:1100}}/>
      <img src={Img.img1}  style={{width:200, marginLeft:50, marginTop:-200}}/>
      </div>
       
      <p className='' style={{fontSize:30,marginTop:40,marginLeft:1100 }}>: نتائج المشتركين</p>
      <div >
      <table className='table'>
        <tr>
          <th>name</th>
          <th>grade</th>
        </tr>
        
        {renderRows()}
        
      </table>

      </div>
      
    </div>
  );
}

export default App;
