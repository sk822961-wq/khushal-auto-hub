import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import Enquiries from "./pages/admin/Enquiries";
import GalleryManage from "./pages/admin/GalleryManage";
import ProductsManage from "./pages/admin/ProductsManage";
import Analytics from "./pages/admin/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<Layout><Home /></Layout>} path="/" />
            <Route element={<Layout><Products /></Layout>} path="/products" />
            <Route element={<Layout><ProductDetail /></Layout>} path="/products/:slug" />
            <Route element={<Layout><Services /></Layout>} path="/services" />
            <Route element={<Layout><Gallery /></Layout>} path="/gallery" />
            <Route element={<Layout><About /></Layout>} path="/about" />
            <Route element={<Layout><Contact /></Layout>} path="/contact" />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="enquiries" element={<Enquiries />} />
              <Route path="gallery" element={<GalleryManage />} />
              <Route path="products" element={<ProductsManage />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
