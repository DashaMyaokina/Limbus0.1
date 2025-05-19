import Header from "../components/widjets/header/header";
import Logo from "../assets/img/Logo.jpg";
export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="logo">
          <img src={Logo} alt="Логотип" />
        </div>
      </main>
    </>
  );
}
