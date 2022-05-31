import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [provinces, setProvinces] = useState(23);

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     items: []
  //   }
  // }

  // componentDidMount() {
  //   this._getData()
  // }

  // _getData() {
  //   const options = {
  //     method: "GET",
  //     url: "https://api.rajaongkir.com/starter/province",
  //     headers: { key: "5c13e972e89f2386e7ef9b4bf5eed6d1" },
  //   };
      

    fetch('https://api.rajaongkir.com/starter/province', options)
    .then(data => data.json())
    .then(json => this.setState({items: json}))
    .catch(e => console.log(e))
  // }


  // useEffect(() => {
  //   resultProvinces()
  // }, [])

  // const resultProvinces = async () => {
  //   try {

  //     const { data } = await axios.get('https://api.rajaongkir.com/starter/province')
  //     console.log(data, '<== response provinces');

  //   } catch (error) {
  //     console.log(error, '<== error provinces');
  //   }
  // }

  // var request = require("request");

  // function getData() {
  //   var options = {
  //     method: "GET",
  //     // url: "https://api.rajaongkir.com/starter/province",
  //     headers: { key: "5c13e972e89f2386e7ef9b4bf5eed6d1" },
  //   }

  //   fetch('https://api.rajaongkir.com/starter/province', options)
  //   .then(data => data.json())
  //   .then(json => this.setState({items: json}))
  //   .catch(e => console.log(e))

  //   console.log(options);
  // }

  // request(options, function (error, response, body) {
  //   if (error) throw new Error(error);

    // console.log(body);
  // });



  return (
    <div className="App">
      
    </div>
  );

}
