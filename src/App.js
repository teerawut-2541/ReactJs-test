import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
function App() {
  const [datas, setdatas] = useState([]);
  const [summarytier, setsummarytier] = useState([]);
  const [summary, setsummary] = useState([])
  const [count, setcount] = useState(5)
  useEffect(() => { 
    fetchdata();
  }, []);
  const  Nexts =()=>{
    var num = count +5
    setcount(num)
    console.log(count)
    for (let index = 0; index<5; index++) {
      console.log(index)
      datas.shift();
    }
  }
  const fetchdata = () => {
    let url = "http://localhost:5000/fetchdata";
    Axios.get(url)
      .then((res) => {
        if (res.status === 200) {
          setdatas(res.data.data.list);
          setsummarytier(res.data.data.summarytier[0])
          setsummary(res.data.data.summary)
          console.log(summary)
        } else {
          console.log("object");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  if (datas === []) {
    setTimeout(() => {
      console.log("object");
    }, 500);
  } else {
    return (
      <div className=".container-fluid" style={{backgroundColor:'#fafafa',height:'100vh'}}>
        <div className="row">
          <div className="col-sm-10 top-bar">
            <div className="row">
              <div className="col-sm-10 smilesm">
                <samp className="smil">
                  SMIL<samp className="esm">ESM</samp>
                </samp>
              </div>
              <div className="col-sm-2 icon-top">
                <samp className="box-bar">
                  <p className="ADMIN">MR.ADMIN</p>
                  <p className="Quarter">Head Quarter</p>
                </samp>
                <i
                  className="fa fa-user-circle-o fa-2x icon-user"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
          <div className="col-sm-2 top-bar2" style={{ color: "#fff" ,textAlign:'center',padding:"10px 0 0  0"}}>
            MENU
          </div>
        </div>
        <div className="col-sm-12 box-menu">
          <div className="row">
            <div className="col-sm-10">
              <ul className="list-ul">
                <li className="list-li">
                  <a href="#" className="link-menu">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </a>
                  <samp className="sqmp-li">/</samp>
                </li>
                <li className="list-li">
                  <a href="#" className="link-menu">
                    Business lnsight
                  </a>
                  <samp className="sqmp-li">/</samp>
                </li>
                <li className="list-li">
                  <a href="#" className="link-menu">
                    Report
                  </a>
                  <samp className="sqmp-li">/</samp>
                </li>
                <li className="list-li">
                  <a href="#" className="link-menu">
                    Member
                  </a>
                  <samp className="sqmp-li">/</samp>
                </li>
                <li className="list-li">
                  <a href="#" className="link-menu actives">
                    Member
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <ul className="list-ul iconul">
                <li className="list-li icon-list">
                  <a href="#" className="link-menu-icon activess">
                    <i
                      className="fa fa-area-chart  icon-a"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li className="list-li icon-list">
                  <a href="#" className="link-menu-icon">
                    <i
                      className="fa fa-cloud-download  icon-as"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li className="list-li icon-list">
                  <a href="#" className="link-menu-icon">
                    <i className="fa fa-print  icon-as" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-10">
              <samp className="text-year">
                Yearly Member 01-Jan-2020 to 31-Dec-2020
              </samp>
            </div>
            <div className="col-sm-2 box-a">
              <div className="row">
                <div className="col-sm-5 box-tear">
                  <select
                    className="form-select select-year"
                    aria-label="Default select example"
                    style={{ height: "30px", float: "right" }}
                  >
                    <option selected>Year View</option>
                    <option value="1">One</option>
                  </select>
                </div>
                <div className="col-sm-7 box-s">
                  <div className="input-group has-validation icon-cakendar">
                    <input
                      type="text"
                      style={{ height: "30px", float: "right" }}
                      className="form-control "
                      value="2020"
                      id=""
                      required
                    />
                    <span
                      className="input-group-text"
                      style={{ height: "30px", float: "right" }}
                      id="inputGroupPrepend3"
                    >
                      <i
                        className="fa fa-calendar fa-lg iconca"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=".container">
              <div className="col-sm-12" style={{ padding: "25px" }}>
                <div className="row">
                  <div className="col-sm-5 card-total">
                    <div className="row">
                      <div div className="col-sm-6 text-toat">
                        TotalMembers :
                      </div>
                      <div className="col-sm-6 text-n">{summary.totaltransaction}</div>
                      <div className="col-sm-6 text-toat">
                        Total Rev.<samp>(THB):</samp>
                      </div>
                      <div className="col-sm-6 text-n">{summary.lifetimevalue}</div>
                    </div>
                  </div>
                  <div className="col-sm-7 car-totals">
                    <div className="row" style={{ marginRight: "10px" }}>
                      <div className="col-sm-12 text-toats">{summarytier.tier_name}</div>
                      <div className="col-sm-6 text-toat">TotalMembers :</div>
                      <div className="col-sm-6 text-n">{summarytier.total_members}</div>
                      <div className="col-sm-6 text-toat">
                        Total Rev.<samp>(THB):</samp>
                      </div>
                      <div className="col-sm-6 text-n">{summarytier.total_amount}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12" style={{ padding: "0px 25px 0 25px" }}>
              <table className="col-sm-12">
                <tr>
                  <th scope="col ">NAME</th>
                  <th scope="col ">ID</th>
                  <th scope="col ">Tier</th>
                  <th scope="col ">LTV</th>
                  <th scope="col ">Total Trans.</th>
                  <th scope="col ">Total Point</th>
                  <th scope="col ">Remaining Point</th>
                </tr>
                {datas.map((itme, index) => {
                  var i = index;
                  var n = count;
                  var sum = i+n;
                  
                  if (index<=4) {
                    var boolValue = false;
                    if (index % 2 === 0) {
                      boolValue = true;
                    } else {
                      boolValue = false;
                    }
                   
                    return (
                      <tr key={index}>
                        <td
                          className="name"
                          style={
                            boolValue
                              ? { backgroundColor: "#dcdbdc" }
                              : { backgroundColor: "#fff" }
                          }
                        >
                          {itme.customername}
                        </td>
                        <td
                          className="id"
                          style={
                            boolValue
                              ? { backgroundColor: "#dcdbdc" }
                              : { backgroundColor: "#fff" }
                          }
                        >
                          {itme.customerphone}
                        </td>
                        <td
                          className="Tier"
                          style={
                            boolValue
                              ? { backgroundColor: "#dcdbdc" }
                              : { backgroundColor: "#fff" }
                          }
                        >
                          {itme.customertier}
                        </td>
                        <td
                          className="ltv"
                          style={
                            boolValue
                              ? { backgroundColor: "#dcdbdc" }
                              : { backgroundColor: "#fff" }
                          }
                        >
                          {itme.totalamount}
                        </td>
                        <td
                          className="Trans"
                          style={
                            boolValue
                              ? { backgroundColor: "#dcdbdc" }
                              : { backgroundColor: "#fff" }
                          }
                        >
                          {itme.totaltransaction}
                        </td>
                        <td
                          className="Point"
                          style={
                            boolValue
                              ? { backgroundColor: "#dcdbdc" }
                              : { backgroundColor: "#fff" }
                          }
                        >
                          {itme.totalreward}
                        </td>
                        <td
                          className="Remaining"
                          style={
                            boolValue
                              ? { backgroundColor: "#dcdbdc" }
                              : { backgroundColor: "#fff" }
                          }
                        >
                          {itme.remainingpoint}
                        </td>
                      </tr>
                    );
                  }
                })}
              </table>
              <div className="col-sm-12">
                <div
                  class="btn-group me-2 btn-groups"
                  role="group"
                  aria-label="First group"
                >
                  <button type="button" class="btn btn-outline but-h" onClick={fetchdata}>
                    <i class="fa fa-step-backward" aria-hidden="true"></i>
                  </button>
                  <button type="button" class="btn btn-outline but-h" onClick={fetchdata}>
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </button>
                  <button type="button" class="btn btn-outline but-h" onClick={Nexts}>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </button>
                  <button type="button" class="btn btn-outline but-h" onClick={Nexts}>
                    <i class="fa fa-step-forward" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-sm-12 gg">
               <div className="row">
                 <div className="col-sm-4 totals">Total</div>
                 <div className="col-sm-2 totals">{summary.lifetimevalue}</div>
                 <div className="col-sm-2 totals">{summary.totaltransaction}</div>
                 <div className="col-sm-2 totals">{summary.remainingpoint}</div>
                 <div className="col-sm-2 totals">{summary.totalpoint}</div>
               </div>
        </div>
      </div>
    );
  }
}

export default App;
