import React from "react";
import { Badge } from 'antd';
import logo from './logo.svg';
import { Checkbox } from 'antd';
import { BiClipboard } from "react-icons/bi";
import { SiGoogleassistant } from "react-icons/si";
import { IoMdNotifications, } from "react-icons/io";
import {
    AppstoreOutlined,
    FileOutlined,
    GlobalOutlined,
    UserOutlined, SearchOutlined, BellOutlined,
    SwitcherOutlined, WarningOutlined, ShopOutlined, CalendarOutlined, InfoCircleOutlined, FieldTimeOutlined,
    ArrowUpOutlined, EditOutlined, CloseOutlined
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const Listitem = [{ icons: <AppstoreOutlined />, label: "Dashboard" }, { icons: <UserOutlined />, label: "UserProfile" },
{ icons: <BiClipboard />, label: "Tablelist" }, { icons: <FileOutlined />, label: "Typography" },
{ icons: <SiGoogleassistant />, label: "Icons" },
{ icons: <IoMdNotifications />, label: "Notifications" }, { icons: <GlobalOutlined />, label: "Arraytable   " }]
export function Dashboard() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACACAMAAACfiN+sAAAAA1BMVEUANGa4gQpAAAAAIElEQVRoge3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAD4DJIAAAfMe06sAAAAASUVORK5CYII=')",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <img src={logo} className="App-logo" alt="logo" height="40px" width="40px" style={{ marginTop: "15px" }} />
                    <p style={{ color: "white", fontSize: "20px", marginTop: "18px" }}>CREATIVE TIM</p>
                </div><hr />
                <div className="demo-logo-vertical" style={{ display: "flex", flexDirection: "column", gap: "25px" }} >
                    {Listitem?.map((item) => {
                        return (<Button style={{ background: 'transparent', color: "white", border: "none" }}
                            title={item?.label} onClick={() => {
                                navigate(`/${item.label.toLocaleLowerCase()}`)
                            }} >
                            {item.label}</Button>)
                    })}
                </div>
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                    }}
                >
                    <div
                        style={{
                            padding: 15,
                        }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <h2 style={{ color: "gray" }}>Dashboard</h2>
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                                <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                                </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "4%" }}>
                            <div className="col-sm-3">
                                <div style={{ backgroundColor: "white", borderRadius: "25px", padding: "9px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div style={{ backgroundColor: "orange", height: "90px", width: "90px", marginTop: "-40px", borderRadius: "5px" }}><SwitcherOutlined style={{ fontSize: "45px", padding: "15px", color: "white" }} /></div>
                                        <div>
                                            <p style={{ color: "gray" }}>Used Space</p>
                                            <h3 style={{ marginTop: "-10px", color: "gray" }}>49/50 GB</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <WarningOutlined style={{ marginTop: "5px" }} /><p>Get more Space</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div style={{ backgroundColor: "white", borderRadius: "25px", padding: "9px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div style={{ backgroundColor: "black", height: "90px", width: "90px", marginTop: "-40px", borderRadius: "5px" }}><ShopOutlined style={{ fontSize: "45px", padding: "15px", color: "white" }} /></div>
                                        <div>
                                            <p style={{ color: "gray" }}>Revenue</p>
                                            <h3 style={{ marginTop: "-10px", color: "gray" }}>$34,824</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <CalendarOutlined style={{ marginTop: "5px" }} /><p>Last 24 hours</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div style={{ backgroundColor: "white", borderRadius: "25px", padding: "9px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div style={{ backgroundColor: "#EA4542", height: "90px", width: "90px", marginTop: "-40px", borderRadius: "5px" }}><InfoCircleOutlined style={{ fontSize: "45px", padding: "15px", color: "white" }} /></div>
                                        <div>
                                            <p style={{ color: "gray" }}>Fixed issue</p>
                                            <h3 style={{ marginTop: "-10px", color: "gray" }}>85</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <WarningOutlined style={{ marginTop: "5px" }} /><p>Tracked form Github</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div style={{ backgroundColor: "white", borderRadius: "25px", padding: "9px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div style={{ backgroundColor: "#26C6DA", height: "90px", width: "90px", marginTop: "-40px", borderRadius: "5px" }}><UserOutlined style={{ fontSize: "45px", padding: "15px", color: "white" }} /></div>
                                        <div>
                                            <p style={{ color: "gray" }}>Followers</p>
                                            <h3 style={{ marginTop: "-10px", color: "gray" }}>+810</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <FieldTimeOutlined style={{ marginTop: "5px" }} /><p>Just Upadate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div style={{ backgroundColor: "white", borderRadius: "15px", padding: "9px", marginTop: "20%" }}>
                                    <div>
                                        <img style={{ padding: "1%", marginTop: "-70px", borderRadius: "20px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW05D07aRqnpNnzsu5Fy43yLKG0-FsK9vpXA&usqp=CAU" height="270px" width="510px" />
                                    </div>
                                    <h4>Daily Sales</h4>
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <ArrowUpOutlined style={{ marginTop: "5px", color: "green" }} /><p>55% increase in today sales</p>
                                    </div>
                                    <hr />
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        < InfoCircleOutlined style={{ marginTop: "5px" }} /><p>updated 4 minutes ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div style={{ backgroundColor: "white", borderRadius: "15px", padding: "9px", marginTop: "20%" }}>
                                    <div>
                                        <img style={{ padding: "1%", marginTop: "-70px", borderRadius: "20px" }} src="https://api.backlinko.com/app/uploads/2021/05/substack-paying-subscribers-over-time.png" height="270px" width="510px" />
                                    </div>
                                    <h4>Email Subscriptions</h4>
                                    <p>Last Campaign Performance</p>
                                    <hr />
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        < InfoCircleOutlined style={{ marginTop: "5px" }} /><p>campaign sent 2 days ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div style={{ backgroundColor: "white", borderRadius: "15px", padding: "9px", marginTop: "20%" }}>
                                    <div>
                                        <img style={{ padding: "1%", marginTop: "-70px", borderRadius: "20px" }} src="https://cdn.labmanager.com/assets/articleNo/29645/aImg/53266/reading-a-bar-chart-versus-a-line-graph-biases-our-judgement-l.jpg" height="270px" width="510px" />
                                    </div>
                                    <h4>Completed Tasks</h4>
                                    <p>Last Campaign Performance</p>
                                    <hr />
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        < InfoCircleOutlined style={{ marginTop: "5px" }} /><p>campaign sent 2 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6" style={{ marginTop: "4%" }}>
                                <div style={{ backgroundColor: "white", borderRadius: "15px", padding: "20px" }}>
                                    <div style={{ backgroundColor: "black", color: "white", padding: "3%", marginTop: "-60px", borderRadius: "8px" }}>
                                        <div style={{ display: "flex", gap: "40px" }}>
                                            <p >Task:</p>
                                            <p>BUGS </p>
                                            <p>WEBSITE </p>
                                            <p>SERVERS</p>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                                        <div>
                                            <Checkbox >Sign contract for "What are conference organizers afraid of?"</Checkbox>
                                        </div>
                                        <div>
                                            <EditOutlined style={{ fontSize: "20px" }} /><CloseOutlined style={{ fontSize: "20px" }} />
                                        </div>
                                    </div><br />
                                    <hr />
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <Checkbox >Lines From Great Russian Literature? Or E-mails From My Boss?</Checkbox>
                                        </div>
                                        <div>
                                            <EditOutlined style={{ fontSize: "20px" }} /><CloseOutlined style={{ fontSize: "20px" }} />
                                        </div>
                                    </div><br />
                                    <hr />
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <Checkbox >Flooded: One year later, assessing what was lost and what was found when a ravaging rain<br /> swept through metro Detroit</Checkbox>
                                        </div>
                                        <div>
                                            <EditOutlined style={{ fontSize: "20px" }} /><CloseOutlined style={{ fontSize: "20px" }} />
                                        </div>
                                    </div><br />
                                    <hr />
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <Checkbox >Create 4 Invisible User Experiences you Never Knew About</Checkbox>
                                        </div>
                                        <div>
                                            <EditOutlined style={{ fontSize: "20px" }} /><CloseOutlined style={{ fontSize: "20px" }} />
                                        </div>
                                    </div><br />
                                    <hr />
                                </div>
                            </div>
                            <div className="col-6" style={{ marginTop: "4%" }}>
                                <div style={{ backgroundColor: "white", borderRadius: "15px", padding: "15px" }}>
                                    <div style={{ backgroundColor: "#FFA726", color: "white", padding: "5px", marginTop: "-60px", borderRadius: "8px" }}>
                                        <h3>Employees Stats</h3>
                                        <p>New employees on 15th September, 2016</p>
                                    </div><br />
                                    <table className="table table-hover">
                                        <thead>
                                            <th>ID  </th>
                                            <th>Name</th>
                                            <th>Salary</th>
                                            <th>Country</th>
                                        </thead><br />
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Dakota Rice</td>
                                                <td>$36,738</td>
                                                <td>Niger</td>
                                            </tr><br />
                                            <tr>
                                                <td>2</td>
                                                <td>Minerva Hooper</td>
                                                <td>$23,789</td>
                                                <td>Curaçao</td>
                                            </tr><br />
                                            <tr>
                                                <td>3</td>
                                                <td>Sage Rodriguez</td>
                                                <td>$56,142</td>
                                                <td>Netherlands</td>
                                            </tr><br />
                                            <tr>
                                                <td>4</td>
                                                <td>Philip Chaney</td>
                                                <td>$38,735</td>
                                                <td>Korea, South</td>
                                            </tr><br />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};