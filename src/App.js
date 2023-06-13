import logo from './logo.svg';
import './App.css';
import Img from './images/img';
import styles from './styles/app.css'

function App() {

  const data = [
    {name: 'yaman', grade: 100},
    {name: 'ali', grade: 80},
    {name: 'mohamed', grade: 70},
    {name: 'ahmed', grade: 60},
    {name: 'khaled', grade: 50},
    {name: 'mohnd', grade: 100},
    {name: 'amer', grade: 80},

  ]

  const Row = ({name , grade}) => {
    return (
      <tr className='rowInTable'>
        <td>{name}</td>
        <td>{grade}</td>
      </tr>
    )
  }

  const renderRows = () => {
    return data.map((item) => {
      return <Row name={item.name} grade={item.grade}/>
    })
  }

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
