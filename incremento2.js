import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Mult2 = () => {
  const [multCount, setMultCount] = useState(2);

  const handleMultiply2 = () => {
    setMultCount(multCount * 2);
  };

  const handleDivide2 = () => {
    setMultCount(multCount / 2);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 50 }}>(2){multCount}</Text>
      <TouchableOpacity onPress={handleMultiply2} >
        <Text style={{ fontSize: 40, color: 'blue', marginTop: 10 }}>
          +
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDivide2}>
        <Text style={{ fontSize: 40, color: 'blue', marginTop: 10 }}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Mult2;
