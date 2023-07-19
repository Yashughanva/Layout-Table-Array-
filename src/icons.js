import React from "react";
import { Badge } from 'antd';
import { Siderroute } from './sider';
import { AppstoreOutlined, UserOutlined, SearchOutlined, BellOutlined, } from '@ant-design/icons';
export const Icons = () => {
    return (
        <>
            <Siderroute />
            <div style={{ marginLeft: "12%", marginRight: "2%" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: "gray", fontSize: "30px" }}>Icons</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                    </div>
                </div>
                <iframe src="https://tabler-icons.io/" title="Inline Frame Example" frameBorder={0}
                    width="100%"
                    height="850">
                </iframe>
            </div>
        </>
    )
}