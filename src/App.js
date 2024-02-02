import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [name, setname] = useState('');
  let [roll, setroll] = useState('');

  let [s1, sets1] = useState('');
  let [s2, sets2] = useState('');
  let [s3, sets3] = useState('');
  let [s4, sets4] = useState('');
  let [s5, sets5] = useState('');
  let [total, settotal] = useState('');
  let [avg, setavg] = useState('');
  let [min, setmin] = useState('');
  let [max, setmax] = useState('');
  let [res, setres] = useState([]);
  let [grad, setgrad] = useState('');




  const totalhandler = () => {
    let tot = parseInt(s1) + parseInt(s2) + parseInt(s3) + parseInt(s4) + parseInt(s5);
    settotal(tot);


    let per = tot / 5;
    setavg(per);

    let low = Math.min(parseInt(s1), parseInt(s2), parseInt(s3), parseInt(s4), parseInt(s5));
    setmin(low);

    let high = Math.max(parseInt(s1), parseInt(s2), parseInt(s3), parseInt(s4), parseInt(s5));
    setmax(high);


    let temp = 0,result;
    if (s1 > 33) {
      temp++;
    }
    if (s2 > 33) {
      temp++;
    }
    if (s3 > 33) {
      temp++;
    }
    if (s4 > 33) {
      temp++;
    }
    if (s5 > 33) {
      temp++;
    }
    if (temp === 5) {
      result="PASS"
    }else if(temp===4||temp===3){
      result="ATKT"
    }
    else{
      result="FAILL"
    }
    
    
    let grad ;
    if(per >90)
    {
      grad="A";
    }
    else if(per >80)
    {
      grad="B";
    }
    else if(per >70)
    {
      grad="c";
    }
    else if(per >60)
    {
      grad="D";
    }
    else if (per>50)
    {
      grad="E";
    } 
    else
    {
      grad="Faill"
    }
    
    setgrad(grad);
    setres([...res, { name, roll, s1, s2, s3, s4, s5, tot, per, low,high ,result,grad }])


  }


  return (
    <>
      <div>
        Name <input type="text" onChange={(e) => { setname(e.target.value) }} /><br />
        Roll no. <input type="text" onChange={(e) => { setroll(e.target.value) }} /><br />
        sub 1 <input type="text" onChange={(e) => { sets1(e.target.value) }} /> <br />
        sub 2 <input type="text" onChange={(e) => { sets2(e.target.value) }} /> <br />
        sub 3 <input type="text" onChange={(e) => { sets3(e.target.value) }} /> <br />
        sub 4 <input type="text" onChange={(e) => { sets4(e.target.value) }} /> <br />
        sub 5 <input type="text" onChange={(e) => { sets5(e.target.value) }} /> <br /><br />

        <input type="button" value={'clike me'} onClick={(e) => totalhandler()} /> <br /><br />
     


      </div>
      <table className='box '>
        <tr>
          <th>Name</th>
          <th>Roll no</th>
          <th>s1</th>
          <th>s2</th>
          <th>s3</th>
          <th>s4</th>
          <th>s5</th>
          <th>total</th>
          <th>avg</th>
          <th>min</th>
          <th>max</th>
          <th>result</th>
          <th>grad</th>

        </tr>

        {
          res.map((ele) => {
            return (
              <tr>
                <td>{ele.name}</td>
                <td>{ele.roll}</td>
                <td>{ele.s1}</td>
                <td>{ele.s2}</td>
                <td>{ele.s3}</td>
                <td>{ele.s4}</td>
                <td>{ele.s5}</td>
                <td>{ele.tot}</td>
                <td>{ele.per}</td>
                <td>{ele.low}</td>
                <td>{ele.high}</td>
                <td>{ele.result}</td>
                <td>{ele.grad}</td>





              </tr>
            );
          })
        }




      </table>
    </>










  );
}

export default App;
