import Header from "../../components/Header";
import NavigationBar from "../../components/NavigationBar";
import MainSection from "../../containers/home/MainSection";

const HomePage = () => {
  return (
    <main className="relative min-w-full text-black h-dvh">
      <Header />
      <div className="flex w-full">
        <NavigationBar />
        <MainSection />
      </div>
    </main>
  );
};

export default HomePage;
