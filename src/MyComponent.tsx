import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';

const MyComponent = (props: any, ref: any) => {
  const inputRef = useRef<any>(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef?.current?.focus();
        },
      };
    },
    [],
  );

  return (
    <View style={styles.childView}>
      <Text>MyComponent</Text>
      <TextInput ref={inputRef} placeholder="Child Componet" />
    </View>
  );
};

export default forwardRef(MyComponent);

const styles = StyleSheet.create({
  childView: {
    height: 100,
    width: '100%',
    backgroundColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
