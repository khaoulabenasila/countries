import Countries from "../Components/Countries";
import Logo from "../Components/Logo";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Logo />
      </div>

      <div>
        <Countries />
      </div>
    </>
  );
};

export default Home;
