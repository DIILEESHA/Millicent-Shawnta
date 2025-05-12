import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input, Card, Typography, message } from "antd";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Wedding from "./pages/wedding/Wedding";
import Rsvp from "./pages/rsvp/Rsvp";
import "./App.css"; // We'll create this next
import Qa from "./pages/qa/Qa";
import Story from "./pages/story/Story";
import AdminDashboard from "./pages/rsvp/AdminDashboard";
import Header from "./pages/home/Header";

const { Title } = Typography;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Replace with your actual password validation logic
    setTimeout(() => {
      if (values.password === "forever2025") {
        // Change this to your desired password
        setIsAuthenticated(true);
        message.success("Welcome! Redirecting...");
      } else {
        message.error("Incorrect password. Please try again.");
      }
      setLoading(false);
    }, 1000);
  };

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" replace />;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <div className="password-container">
                <Card className="password-card">
                  <img
                    src="https://i.imgur.com/PG68m0j.png"
                    alt=""
                    className="logo"
                  />

                  {/* <Title level={2} className="password-title">
                    Welcome to Our Wedding
                  </Title> */}
                  <Form
                    name="password_form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the password",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="Enter password"
                        size="large"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        style={{ background: "#333", color: "#fff" }}
                        // type="primary"
                        htmlType="submit"
                        loading={loading}
                        block
                        size="large"
                      >
                        Enter
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </div>
            )
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute
              element={
                <div>
                  <Nav />
                  <Home />
                  <Footer />
                </div>
              }
            />
          }
        />
        <Route
          path="/gallery"
          element={
            <ProtectedRoute
              element={
                <div>
                  <Nav />
                  <Gallery />
                  <Footer />
                </div>
              }
            />
          }
        />
        <Route
          path="/wedding"
          element={
            <ProtectedRoute
              element={
                <div>
                  <Nav />
                  <Wedding />
                  <Footer />
                </div>
              }
            />
          }
        />
        <Route
          path="/rsvp"
          element={
            <ProtectedRoute
              element={
                <div>
                  <Nav />
                  <Rsvp />
                  <Footer />
                </div>
              }
            />
          }
        />

        <Route
          path="/qa"
          element={
            <ProtectedRoute
              element={
                <div>
                  <Nav />
                  <Qa />
                  <Footer />
                </div>
              }
            />
          }
        />

        <Route
          path="/story"
          element={
            <ProtectedRoute
              element={
                <div>
                  <Nav />
                  <Story />
                  <Footer />
                </div>
              }
            />
          }
        />

        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
