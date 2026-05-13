import Layout from "./Layout";
import Button from "./Button";
import UserCard from "./UserCard";

function App() {

  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <Layout>

      <UserCard name="Kayal" age={20} />

      <Button
        label="Click Me"
        onClick={handleClick}
      />

    </Layout>
  );
}

export default App;