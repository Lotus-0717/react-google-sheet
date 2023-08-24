import { useState } from "react";
export default function App () {
  console.log(process.env.REACT_SHEET_URL)
  const [ valName, setValName ] = useState('');
  function nameChange(e) {
    setValName(e.target.value);
  }

  const [ valGender, setValGender ] = useState('');
  function genderChange(e) {
    setValGender(e.target.value);
  }

  const [ valAge, setValAge ] = useState('');
  function ageChange(e) {
    setValAge(e.target.value);
  }

  function fetchData() {
    let formdata = new FormData();
    formdata.append("name", valName);
    formdata.append("gender", valGender);
    formdata.append("age", valAge);

    const config = { method: "POST", body: formdata, redirect: "follow" };
    //call api
    fetch(process.env.REACT_APP_SHEET_URL, config)
    .then((result) => {
      if (result === "success") {
        console.log("success");
      }
    })
    .catch((error) => console.log("error", error));
  }
  return(
    <div id="app">
      <h1>Google sheet</h1>
      <h5>Name</h5>
      <input type="text" name="name" onChange={nameChange}></input>
      <h5>Gender</h5>
      <label htmlFor="male">Male</label>
      <input type="radio" name="gender" id="male" value="male" onChange={genderChange}></input>
      <label htmlFor="female">Female</label>
      <input type="radio" name="gender" id="female" value="female" onChange={genderChange}></input>
      <h5>Age</h5>
      <select name="age" onChange={ageChange}>
        <option value="Below 20">Below 20</option>
        <option value="20 ~ 29">20 ~ 29</option>
        <option value="30 ~ 39">30 ~ 39</option>
        <option value="Above 40">Above 40</option>
      </select>
      <br></br>
      <br></br>
      <p>{`${valName}/${valGender}/${valAge}`}</p>
      <button onClick={fetchData}>Send</button>
    </div>
  )
}
