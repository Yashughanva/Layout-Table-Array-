import React from "react";
import { Badge } from 'antd';
import { Siderroute } from './sider';
import { AppstoreOutlined, UserOutlined, SearchOutlined, BellOutlined, } from '@ant-design/icons';

export const Typography = () => {
    return (
        <>
            <Siderroute />
            <div style={{ marginLeft: "12%", marginRight: "2%" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: "gray", fontSize: "30px" }}>Typography</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                    </div>
                </div>
                <div style={{ backgroundColor: "#eee", padding: "3%", borderRadius: "15px", marginTop: "5%" }}>
                    <div style={{ backgroundColor: "#ab47bc", marginTop: "-90px", borderRadius: "10px", color: "white", padding: "2%" }}>
                        <h3>Material Dashboard Heading</h3>
                        <p>Created using Roboto Font Family</p>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }} >
                        <div className="col-3">
                            <h6 style={{ marginTop: "15px", color: "gray" }}>Heading 1</h6>
                        </div>
                        <div className="col-9">
                            <h1 style={{ fontFamily: "initial", fontSize: "40px" }}>The Life of Material Dashboard</h1>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <h6 style={{ marginTop: "15px", color: "gray" }}>Heading 2</h6>
                        </div>
                        <div className="col-9">
                            <h1 style={{ fontFamily: "initial", fontSize: "30px" }}>The Life of Material Dashboard</h1>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <h6 style={{ marginTop: "15px", color: "gray" }}>Heading 3</h6>
                        </div>
                        <div className="col-9">
                            <h1 style={{ fontFamily: "initial", fontSize: "25px" }}>The Life of Material Dashboard</h1>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <h6 style={{ marginTop: "10px", color: "gray" }}>Heading 4</h6>
                        </div>
                        <div className="col-9">
                            <h1 style={{ fontFamily: "initial", fontSize: "22px" }}>The Life of Material Dashboard</h1>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <h6 style={{ marginTop: "10px", color: "gray" }}>Heading 5</h6>
                        </div>
                        <div className="col-9">
                            <h1 style={{ fontFamily: "initial", fontSize: "20px" }}>The Life of Material Dashboard</h1>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <h6 style={{ marginTop: "10px", color: "gray" }}>Heading 6</h6>
                        </div>
                        <div className="col-9">
                            <h1 style={{ fontFamily: "initial", fontSize: "14px" }}>THE LIFE OF MATERIAL DASHBOARD</h1>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <p style={{ marginTop: "20px", color: "gray" }}>Paragraph</p>
                        </div>
                        <div className="col-9">
                            <p style={{ marginTop: "20px", color: "gray" }}>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <p style={{ marginTop: "32%", color: "gray" }}>Quote</p>
                        </div>
                        <div className="col-9">
                            <p style={{ fontSize: "19px", marginLeft: "25px" }}><i>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</i></p>
                            <p style={{ marginLeft: "25px" }}>- Kanye West, Musician</p>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <p style={{ color: "gray" }}>Muted Text</p>
                        </div>
                        <div className="col-9">
                            <p class="text-muted">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>

                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <p style={{ color: "gray" }}>Primary Text</p>
                        </div>
                        <div className="col-9">
                            <p class="text-primary">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>

                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <p style={{ color: "gray" }}>Info Text</p>
                        </div>
                        <div className="col-9">
                            <p class="text-info">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>

                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <p style={{ color: "gray" }}>Success Text</p>
                        </div>
                        <div className="col-9">
                            <p class="text-success">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>

                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <p style={{ color: "gray" }}>Warning Text</p>
                        </div>
                        <div className="col-9">
                            <p class="text-warning">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>

                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <p style={{ color: "gray" }}>Danger Text</p>
                        </div>
                        <div className="col-9">
                            <p class="text-danger">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..</p>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-3">
                            <p style={{ marginTop: "10px", color: "gray" }}>Small Tag</p>
                        </div>
                        <div className="col-9">
                            <h1 style={{ fontFamily: "initial", fontSize: "35px" }}>Header with small subtitle</h1>
                            <h1 style={{ fontSize: "35px", fontFamily: "cursive" }}>Use "Small" tag for the headers</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

