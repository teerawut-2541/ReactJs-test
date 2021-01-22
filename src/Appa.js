import React, { Component } from 'react'
import "./App.css";
import Axios from 'axios'; 
export class App extends Component {
    constructor(pros){
        super(pros);
        this.state={
            data:''
        }
        console.log('object')
    }
   fetchdata =()=>{
      let url = "http://localhost:5000/fetchdata"
      Axios.get(url).then((res)=>{
        if(res.status === 200){
          this.setState({data:res.data})
        }else{
          console.log('object')
        }
      }).catch((error)=>{
       console.log(error)
      })
    }
    
    componentDidMount(){
      this.fetchdata();
      console.log(this.state)
    }
    render() {

        return (
            <div className=".container-fluid">
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
              <div className="col-sm-2 top-bar2" style={{ color: "#fff" }}>
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
                        <i className="fa fa-area-chart  icon-a" aria-hidden="true"></i>
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
                          <div className="col-sm-6 text-n">5</div>
                          <div className="col-sm-6 text-toat">
                            Total Rev.<samp>(THB):</samp>
                          </div>
                          <div className="col-sm-6 text-n">639K</div>
                        </div>
                      </div>
                      <div className="col-sm-7 car-totals">
                        <div className="row" style={{ marginRight: "10px" }}>
                          <div className="col-sm-12">ttt</div>
                          <div className="col-sm-6 text-toat">TotalMembers :</div>
                          <div className="col-sm-6 text-n">5</div>
                          <div className="col-sm-6 text-toat">
                            Total Rev.<samp>(THB):</samp>
                          </div>
                          <div className="col-sm-6 text-n">639K</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12" style={{ padding: "0px 25px 0 25px" }}>
                  <table className='col-sm-12'>
                    <tr>
                      <th scope="col ">NAME</th>
                      <th scope="col ">ID</th>
                      <th scope="col ">Tier</th>
                      <th scope="col ">LTV</th>
                      <th scope="col ">Total Trans.</th>
                      <th scope="col ">Total Point</th>
                      <th scope="col ">Remaining Point</th>
                    </tr>
                    
                    {/* {this.state.datas.data.list.map((itme, index) => (
               <tr key={index}>
               <td>{itme.customername}</td>
               <td>{itme.customerphone}</td>
               <td>{itme.customertier}</td>
               <td>{itme.totalamount}</td>
               <td>{itme.totaltransaction}</td>
               <td>{itme.totalreward}</td>
               <td>{itme.remainingpoint}</td>
             </tr>
          ))} */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default App
