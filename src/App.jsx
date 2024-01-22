// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DatePicker from './components/Date';
import Name from './components/Name';
import RecuperarDatos from './components/RecuperarData';


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Aplicación con Redux</h1>
        <DatePicker />
        <Name/>
        <RecuperarDatos/>
      </div>
    </Provider>
  );
};

export default App;

