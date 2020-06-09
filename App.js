import './src/config/reactotronConfig';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {appStore, appPersistor} from './src/appStore/appStore';
import createRouter from './routes';

function DevDoido() {
  const signed = useSelector(state => state.auth.signed);
  const Routes = createRouter(signed);
  return <Routes />;
}

const App = () => {
  return (
    <Provider store={appStore}>
      <PersistGate persistor={appPersistor}>
        <StatusBar barStyle="light-content" backgroundColor="#fff" />
        <PaperProvider>
          <DevDoido />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
