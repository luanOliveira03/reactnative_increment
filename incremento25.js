import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Increment25 = () => {
  const [incrementCount, setIncrementCount] = useState(0);

  const handleIncrement25 = () => {
    setIncrementCount(incrementCount + 25);
  };

  const handleDecrement25 = () => {
    setIncrementCount(incrementCount - 25);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 50 }}> (25) {incrementCount}</Text>
      <TouchableOpacity onPress={handleIncrement25}>
        <Text style={{ fontSize: 40, color: 'blue', marginTop: 20 }}>
          +
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDecrement25}>
        <Text style={{ fontSize: 40, color: 'blue', marginTop: 20 }}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Increment25;
