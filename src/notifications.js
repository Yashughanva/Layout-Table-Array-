import React from "react";
import { toast } from 'react-toastify';
import { Badge } from 'antd';
import { AiFillBell } from 'react-icons/ai'
import { Siderroute } from './sider';
import { AppstoreOutlined, UserOutlined, SearchOutlined, BellOutlined, CloseOutlined } from '@ant-design/icons';
//import { type } from "@testing-library/user-event/dist/type";
export const Notifications = () => {
    const notify = () => toast.info("Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.", {
        position: "top-left",
        autoClose: 5000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notify1 = () => toast.info("Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.", {
        position: "top-center",
        autoClose: 5000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notify2 = () => toast.info("Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.", {
        position: "top-right",
        autoClose: 5000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notify3 = () => toast.info("Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.", {
        position: "bottom-left",
        autoClose: 5000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notify4 = () => toast.info("Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.", {
        position: "bottom-center",
        autoClose: 5000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notify5 = () => toast.info("Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer.", {
        position: "bottom-right",
        autoClose: 5000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    return (
        <>
            <Siderroute />
            <div style={{ marginLeft: "12%", marginRight: "2%" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: "gray", fontSize: "30px" }}>Notifications</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                    </div>
                </div>
                <div className="row" style={{ backgroundColor: "lightgray", padding: "2%", margin: "2%" }} >
                    <div style={{ backgroundColor: "#ab47bc", marginTop: "-70px", borderRadius: "10px", color: "white", padding: "10px" }}>
                        <h3>Notifications</h3>
                        <p>Handcrafted by our friends from Material UI and styled by Creative Tim. Please checkout the full documentation.
                        </p>
                    </div>
                    <div className="col-6" style={{ padding: "0.5%" }}>
                        <div style={{ backgroundColor: "#eee", padding: "5%", borderRadius: "20px", marginTop: "8%" }}>
                            <h2>Notifications Style</h2>
                            <div style={{ backgroundColor: "lightgray", padding: "5px", borderRadius: "10px" }}>
                                <p style={{ fontSize: "20px" }}>This is a plain notification</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "lightgray", padding: "5px", marginTop: "10px", borderRadius: "10px" }}>
                                <div>
                                    <p style={{ fontSize: "20px" }}>This is a notification with close button.</p>
                                </div>
                                <div>
                                    <CloseOutlined style={{ marginRight: "17px" }} />
                                </div>
                            </div>
                            <div className="row " style={{ backgroundColor: "lightgray", padding: "5px", marginTop: "2%", borderRadius: "10px" }}>
                                <div className="col-1" style={{ marginTop: "5px", fontSize: "20px" }}>
                                    <AiFillBell />
                                </div>
                                <div className="col-10">
                                    <p style={{ fontSize: "20px", marginRight: "1%px" }}>This is a notification with close button and icon.</p>
                                </div>
                                <div className="col-1">
                                    <CloseOutlined style={{ marginRight: "20px" }} />
                                </div>
                            </div>
                            <div className="row " style={{ backgroundColor: "lightgray", padding: "5px", marginTop: "2%", borderRadius: "10px" }}>
                                <div className="col-1" style={{ marginTop: "7%", fontSize: "25px" }}>
                                    <AiFillBell />
                                </div>
                                <div className="col-10">
                                    <p style={{ fontSize: "20px", marginRight: "1%px" }}>This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</p>
                                </div>
                                <div className="col-1">
                                    <CloseOutlined style={{ marginRight: "20px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" style={{ padding: "0.5%", marginTop: "4%" }}>
                        <div style={{ backgroundColor: "#eee", padding: "5%", borderRadius: "20px" }}>
                            <h2 >Notifications States</h2>
                            <div className="text-bg-info" style={{ display: "flex", justifyContent: "space-between", padding: "5px", marginTop: "10px", borderRadius: "10px", color: "white" }}>
                                <div>
                                    <p style={{ fontSize: "18px" }}>INFO - This is a regular notification made with color="info"</p>
                                </div>
                                <div>
                                    < CloseOutlined style={{ marginRight: "20px" }} />
                                </div>
                            </div>
                            <div className="text-bg-success" style={{ display: "flex", justifyContent: "space-between", padding: "5px", marginTop: "10px", borderRadius: "10px", color: "white" }}>
                                <div>
                                    <p style={{ fontSize: "20px" }}>SUCCESS - This is a regular notification made with color="success"</p>
                                </div>
                                <div>
                                    < CloseOutlined style={{ marginRight: "18px" }} />
                                </div>
                            </div>
                            <div className="text-bg-warning" style={{ display: "flex", justifyContent: "space-between", padding: "5px", marginTop: "10px", borderRadius: "10px", color: "white" }}>
                                <div>
                                    <p style={{ fontSize: "20px" }}>WARNING - This is a regular notification made with color="warning"</p>
                                </div>
                                <div>
                                    < CloseOutlined style={{ marginRight: "18px" }} />
                                </div>
                            </div>
                            <div className="text-bg-danger" style={{ display: "flex", justifyContent: "space-between", padding: "5px", marginTop: "10px", borderRadius: "10px", color: "white" }}>
                                <div>
                                    <p style={{ fontSize: "20px" }}>DANGER - This is a regular notification made with color="danger"</p>
                                </div>
                                <div>
                                    < CloseOutlined style={{ marginRight: "18px" }} />
                                </div>
                            </div>
                            <div class="text-bg-secondary" style={{ display: "flex", justifyContent: "space-between", padding: "5px", marginTop: "10px", borderRadius: "10px", color: "white" }}>
                                <div>
                                    <p style={{ fontSize: "20px" }}>SECONDARY - This is a regular notification made with color="secondary"</p>
                                </div>
                                <div>
                                    < CloseOutlined style={{ marginRight: "18px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "3%" }}>
                        <h4>Notifications Places</h4>
                        <p>Click to view notifications</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div>
                            <button type="button" class="btn" onClick={notify} style={{ marginTop: "20px", backgroundColor: "#ab47bc", color: "white", width: "250PX" }}>TOP LEFT</button>
                        </div>
                        <div>
                            <button type="button" class="btn" onClick={notify1} style={{ marginTop: "20px", backgroundColor: "#ab47bc", color: "white", width: "250PX" }}>TOP CENTER</button>
                        </div>
                        <div>
                            <button type="button" class="btn" onClick={notify2} style={{ marginTop: "20px", backgroundColor: "#ab47bc", color: "white", width: "250PX" }}>TOP RIGHT</button>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div>
                            <button type="button" class="btn" onClick={notify3} style={{ marginTop: "20px", backgroundColor: "#ab47bc", color: "white", width: "250PX" }}>BOTTOM LEFT</button>
                        </div>
                        <div>
                            <button type="button" class="btn" onClick={notify4} style={{ marginTop: "20px", backgroundColor: "#ab47bc", color: "white", width: "250PX" }}>BOTTOM CENTER</button>
                        </div>
                        <div>
                            <button type="button" class="btn" onClick={notify5} style={{ marginTop: "20px", backgroundColor: "#ab47bc", color: "white", width: "250PX" }}>BOTTOM RIGHT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}