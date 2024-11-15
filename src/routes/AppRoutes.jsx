import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../screens/HomePage";
import About from "../screens/About/About";
import ContactUs from "../screens/ContactUs/ContactUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Layout>
            <ContactUs />
          </Layout>
        }
      />
    </Routes>
  );
}
