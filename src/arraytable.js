import React from "react";
import { useState } from "react";
import { Badge } from 'antd';
import { Siderroute } from './sider';
import { AppstoreOutlined, UserOutlined, SearchOutlined, BellOutlined, } from '@ant-design/icons';
export const Arraytable = () => {
    const [input, setInput] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        age: "",
        state: []
    });
    const [search, setSearch] = useState(JSON.parse(localStorage.getItem("search")) || []);
    function change(e) {
        console.log(e.target)
        let { name, value } = e.target
        setInput({ ...input, [name]: value })
    }
    function Info(e) {
        console.log(e.target)
        setSearch([...search, input])
        localStorage.setItem("search", JSON.stringify(search))
    }
    function checkchange(e) {
        if (e.target.checked) {
            setInput({ ...input, state: [...input.state, e.target.value] })
        }
        else {
            setInput({ ...input, state: [...input.state.filter(value => value !== e.target.state)] })
        }
        console.log(e.target.checked, e.target.value)
    }
    console.log(input);
    return (
        <>
            <Siderroute />
            <div style={{ marginLeft: "12%", marginRight: "2%" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: "gray", fontSize: "30px" }}>Array Table</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                    </div>
                </div>
                <div style={{ backgroundColor: "#eee", padding: "3%", borderRadius: "15px", marginTop: "3%" }}>
                    <div style={{ backgroundColor: "#AB47BC", padding: "1%", marginTop: "-70px", borderRadius: "10px", color: "white" }}>
                        <h3>Array Table</h3>
                        <p>Here is a subtitle for this table</p>
                    </div>
                    <form style={{ marginTop: "3%" }}>
                        <label htmlFor="name"> Name : </label>
                        <input type="text" id="name" name="name" value={input.name} onChange={change} /><br /><br />
                        <label htmlFor="surname"> Surname : </label>
                        <input type="text" id="surname" name="surname" value={input.surname} onChange={change} /><br /><br />
                        <label htmlFor="email">Email : </label>
                        <input type="email" id="email" name="email" value={input.email} onChange={change} /><br /><br />
                        <label htmlFor="phone"> Phone : </label>
                        <input type="tel" id="phone" name="phone" value={input.phone} onChange={change} /><br /><br />
                        <label htmlFor="age">Age : </label>
                        <input type="number" id="age" name="age" value={input.age} onChange={change} /><br /><br />
                        <label htmlFor="state">State : </label>
                        <input type="checkbox" name="state" id="state" value="Gujarat" onChange={checkchange} />Gujarat
                        <input type="checkbox" name="state" id="state" value="Rajsthan" onChange={checkchange} />Rajsthan
                        <input type="checkbox" name="state" id="state" value="Madhya-Pradesh" onChange={checkchange} />Madhya-Pradesh<br /><br />
                        <button type="button" onClick={Info}>submit</button>
                    </form>
                    <table className="table table-stripped table-warning">
                        <thead>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>State</th>
                        </thead>
                        <tbody>
                            {search.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.surname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.age}</td>
                                        <td><ol>{item?.state?.map((index) => {
                                            return (
                                                <li>{index}</li>
                                            )
                                        })}</ol></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}