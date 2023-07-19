import React from "react";
import { Badge } from 'antd';
import { Siderroute } from './sider';
import { AppstoreOutlined, UserOutlined, SearchOutlined, BellOutlined, } from '@ant-design/icons';
export const Userprofile = () => {
    return (
        <>
            <Siderroute />
            <div style={{marginLeft:"12%",marginRight:"2%"}}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: "gray", fontSize: "30px" }}>User Profile</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">

                        <div style={{ backgroundColor: "#fff2e6", padding: "1%", borderRadius: "10px", marginTop: "14%" }}>
                            <div style={{ backgroundColor: "#d633ff", marginTop: "-50px", padding: "1%", borderRadius: "10px", color: "white" }}>
                                <h1>Edit Profile</h1>
                                <p>Complete your Profile</p>
                            </div>
                            <div style={{ height: '90px', marginTop: "5%" }}>
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "400px", marginRight: "5%" }} type="text" id="com" name="com" placeholder="Company (Disabled)" />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "150px", marginRight: "5%" }} type="text" id="com" name="com" placeholder="Username" />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "350px" }} type="text" id="com" name="com" placeholder="Email address" />
                            </div>
                            <div style={{ height: '90px' }}>
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "460px", marginRight: "5%" }} type="text" id="fname" name="fname" placeholder="first name" />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "470px", marginRight: "5%" }} type="text" id="lname" name="lname" placeholder="last name" />
                            </div>
                            <div style={{ height: '90px' }}>
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "300px", marginRight: "5%" }} type="text" id="com" name="com" placeholder="City" />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "250px", marginRight: "5%" }} type="text" id="com" name="com" placeholder="Country" />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "330px" }} type="text" id="com" name="com" placeholder="Postal code" /><br />
                                About me
                            </div>
                            <div style={{ height: '90px' }}>
                                <p style={{ color: "gray" }}>Lamborghini Mercy, your chick She so thirsty, i'm in that two seat lambo</p>
                            </div><hr />
                            <div style={{ height: '50px' }}>
                                <button style={{ backgroundColor: "#d633ff", color: "white", border: "none", padding: '1%', borderRadius: "10px" }} type="button">UPDATE PROFILE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div style={{ backgroundColor: "#fff2e6", padding: "1%", borderRadius: "10px", marginTop: "30%" }}>
                            <div style={{marginTop: "-80px",paddingLeft:'35%'}}>
                                <img src="https://www.newtons.co.uk/wp-content/uploads/2021/01/alex-thompson-memorial.jpg" alt="photo" style={{ borderRadius: "50%", height: "150px" }} />
                                <p style={{ marginTop: '10%' }}>CEO / CO-FOUNDER</p>
                                <p style={{ marginTop: '6%' }}>ALEC THOMPSON</p>
                            </div>

                            <p style={{ marginTop: '6%',padding:"5%" }}>
                                Don't be scared of the truth because we need to restart the human foundation
                                in truth And I love you like Kanye loves Kanye I love Rick Owens bed design
                                but the back is...
                            </p>
                            <button style={{border:"none",borderRadius:'30px',backgroundColor:"#d633ff",color:"white",padding:"10px",marginLeft:"40%"}} type="button">FOLLOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}