import React, { Component, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function LoginComponent() {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Username"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Password"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      
    </View>
  );
}
