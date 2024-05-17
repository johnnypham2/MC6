import Like from './Like';
import Buttons from './Buttons/Button';

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <>
      <Like />
      <Buttons
        children="Primary"
        onClickFunction={handleButtonClick}
        color="primary"
      />
    </>
  );
}

export default App;