import React from "react";
import { Badge } from 'antd';
import { Siderroute } from './sider';
import { AppstoreOutlined, UserOutlined, SearchOutlined, BellOutlined, } from '@ant-design/icons';

export const Tablelist = () => {
    return (
        <>
            <Siderroute />
            <div style={{marginLeft:"12%",marginRight:"2%"}}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: "gray", fontSize: "30px" }}>Table List</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                    </div>
                </div>
                <div style={{ backgroundColor: "#eee", padding: "3%", borderRadius: "15px", marginTop: "3%" }}>
                    <div style={{ backgroundColor: "#AB47BC", padding: "1%", marginTop: "-70px", borderRadius: "10px", color: "white" }}>
                        <h3>Simple Table</h3>
                        <p>Here is a subtitle for this table</p>
                    </div>
                    <table className="table table-hover" style={{ marginTop: "35px" }}>
                        <thead >
                            <th>Name    </th>
                            <th>Country</th>
                            <th>City</th>
                            <th>Salary</th>
                        </thead><br />
                        <tbody>
                            <tr>
                                <td>Dakota Rice</td>
                                <td>Niger</td>
                                <td>Oud-Turnhout</td>
                                <td>$36,738</td>
                            </tr><br />
                            <tr>
                                <td>Minerva Hooper</td>
                                <td>Curaçao</td>
                                <td>Sinaai-Waas</td>
                                <td>$23,789</td>
                            </tr><br />
                            <tr>
                                <td>Dakota Rice</td>
                                <td>Niger</td>
                                <td>Oud-Turnhout</td>
                                <td>$36,738</td>
                            </tr><br />
                            <tr>
                                <td>Minerva Hooper</td>
                                <td>Curaçao</td>
                                <td>Sinaai-Waas</td>
                                <td>$23,789</td>
                            </tr><br />
                            <tr>
                                <td>Dakota Rice</td>
                                <td>Niger</td>
                                <td>Oud-Turnhout</td>
                                <td>$36,738</td>
                            </tr><br />
                            <tr>
                                <td>Minerva Hooper</td>
                                <td>Curaçao</td>
                                <td>Sinaai-Waas</td>
                                <td>$23,789</td>
                            </tr><br />
                        </tbody>
                    </table>
                </div>
                <div style={{ backgroundColor: "#AB47BC", padding: "1%", marginTop: "-50px", borderRadius: "10px", color: "white", marginTop: "5%" }}>
                    <h3>Table on Plain Background</h3>
                    <p>Here is a subtitle for this table</p>
                </div>
                <table className="table table-hover" style={{ marginTop: "35px" }}>
                    <thead >
                        <th>ID</th>
                        <th>Name    </th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Salary</th>
                    </thead><br />
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dakota Rice</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                            <td>$36,738</td>
                        </tr><br />
                        <tr>
                            <td>2</td>
                            <td>Minerva Hooper</td>
                            <td>Curaçao</td>
                            <td>Sinaai-Waas</td>
                            <td>$23,789</td>
                        </tr><br />
                        <tr>
                            <td>3</td>
                            <td>Dakota Rice</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                            <td>$36,738</td>
                        </tr><br />
                        <tr>
                            <td>4</td>
                            <td>Minerva Hooper</td>
                            <td>Curaçao</td>
                            <td>Sinaai-Waas</td>
                            <td>$23,789</td>
                        </tr><br />
                        <tr>
                            <td>5</td>
                            <td>Dakota Rice</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                            <td>$36,738</td>
                        </tr><br />
                        <tr>
                            <td>6</td>
                            <td>Minerva Hooper</td>
                            <td>Curaçao</td>
                            <td>Sinaai-Waas</td>
                            <td>$23,789</td>
                        </tr><br />
                    </tbody>
                </table>
            </div>
        </>
    )
}