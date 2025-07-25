
// function Home(){
//     return(<div>
//         <h1>Home</h1>
//     </div>)
// }
// export default Home;


import Header from "./Header";
import './Hello.css';
import wp from './wp.jpeg'

function Home(){
    var a=10
    var b=20
    var mycolor = { color:'white', backgroundColor: 'green'}
    return(<>
        <h1>Home</h1>
        A value is {a} <br/>
        B value is {b}
        <p style={{color: 'red', backgroundColor:'black'}}>Hello I am P Tag</p>
        <p style={{color: 'red', backgroundColor:'black'}}>Hello I am P Tag</p>
        <p style={mycolor}>I am P again</p>
        <p style={mycolor}>I am P again</p>
        <p style={mycolor}>I am P again</p>
        <img src={wp}/>
    </>)
}
export default Home