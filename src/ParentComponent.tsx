// ParentComponent.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ModalView from './ModalView'; // Import my Modal component

const ParentComponent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancel = () => {
    setModalVisible(false); // Hide the modal
  };

  const ChildViewCustom = () => {
    return (
      <View style={{height: 100, width: 100}}>
        <Text>I am custom child component</Text>
      </View>
    );
  };

  return (
    <View style={styles.contaion}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </TouchableOpacity>
      <ModalView isVisible={modalVisible} onCancel={handleCancel}>
        <ChildViewCustom />
        <Text>Hello from the modal!</Text>
      </ModalView>
    </View>
  );
};

export default ParentComponent;

const styles = StyleSheet.create({
  contaion: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
