import Footer from "@components/ui/footer";
import Navbar from "@components/ui/navbar";

type Props = {
  children?: React.ReactNode;
};
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

// 