import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/useRedux';
import { Spinner } from '@/components/UI';
import Layout from '@/components/Layout';
import AuthLayout from '@/components/Layout/AuthLayout';
import ProtectedRoute from '@/components/ProtectedRoute';

const Homepage = React.lazy(() => import('./pages/Home'));
const ExplorePage = React.lazy(() => import('./pages/Explore'));
const CartPage = React.lazy(() => import('./pages/Cart'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const SuccessOrder = React.lazy(() => import('./pages/Success'));

function App() {
  const { isAuthenticate } = useAppSelector((state) => state.auth);

  if (isAuthenticate) {
    return (
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route
              path="/explore"
              element={
                <ProtectedRoute>
                  <ExplorePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route path="/order-success" element={<SuccessOrder />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    );
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
