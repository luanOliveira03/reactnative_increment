import React from 'react';
import { SafeAreaView } from 'react-native';
import Mult2 from './incremento2';
import Increment25 from './incremento25';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'yellow' }}>
      <Mult2 />
      <Increment25 />
    </SafeAreaView>
  );
};

export default App;
