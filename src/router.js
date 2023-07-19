import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { Userprofile } from "./userprofile";
import { Tablelist } from "./tablelist";
import { Typography } from "./typography";
import { Icons } from "./icons";
import { Notifications } from "./notifications";
import { Arraytable } from "./arraytable";

export const Routerreact = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/userProfile" element={<Userprofile />} />
                    <Route path="/tablelist" element={<Tablelist />} />
                    <Route path="/typography" element={<Typography />} />
                    <Route path="/icons" element={<Icons />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/arraytable" element={<Arraytable />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}