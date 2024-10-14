import Footer from "@/components/ui/dashboard/Footer";
import Navbar from "@/components/ui/dashboard/Navbar";
import Sidebar from "@/components/ui/dashboard/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-[20%] bg-slate-900 p-5">
        <Sidebar />
      </div>
      <div className="w-[80%] p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
