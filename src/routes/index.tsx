import React from 'react'
import { Route, Routes } from "react-router-dom";
//
import Layout from "../components/Layout/Layout";
import CommandsScreen from "../views/CommandsScreen";
import PackageScreen from "../views/PackageScreen";
import ConfigurationsScreen from "../views/ConfigurationScreen";
import TutorialScreen from '../views/TutorialScreen';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<TutorialScreen />} />
                <Route path='commands' element={<CommandsScreen />} />
                <Route path="packages" element={<PackageScreen />} />
                <Route path="configuration" element={<ConfigurationsScreen />} />
            </Route>
        </Routes>
    )
}
