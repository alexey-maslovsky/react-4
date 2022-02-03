import { FC } from 'react';
import Header from './components/Header/Header';

const App: FC = () => {
  const handleOnClick = () => {
    console.log('asd');
  };

  return (
    <div>
      <Header buttonText="save" onClick={handleOnClick}>
        Title
      </Header>

      <Header>
        Title2
      </Header>

      Hello World
    </div>
  );
};

export default App;
