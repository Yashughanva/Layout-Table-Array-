import React from "react";
import logo from './logo.svg';
import { useNavigate } from "react-router-dom";
import { BiClipboard } from "react-icons/bi";
import { SiGoogleassistant } from "react-icons/si";
import { IoMdNotifications, } from "react-icons/io";
import {
    AppstoreOutlined,
    FileOutlined,
    GlobalOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Button } from 'antd';
const { Sider } = Layout;
const Listitem = [{ icons: <AppstoreOutlined />, label: "Dashboard" }, { icons: <UserOutlined />, label: "UserProfile" },
{ icons: <BiClipboard />, label: "TableList" }, { icons: <FileOutlined />, label: "Typography" },
{ icons: <SiGoogleassistant />, label: "Icons" },
{ icons: <IoMdNotifications />, label: "Notifications" }, { icons: <GlobalOutlined />, label: "Arraytable" }]
export const Siderroute = () => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ backgroundColor: "navyblue" }}>
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
            </div>
        </>
    )
}