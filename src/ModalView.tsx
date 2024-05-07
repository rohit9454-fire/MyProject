import React from 'react';
import {View, Text, Button, Modal, StyleSheet, Dimensions} from 'react-native';

type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  onCancel: () => void; // Callback for cancel button
};

const ModalView: React.FC<ModalProps> = ({isVisible, children, onCancel}) => {
  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        <Text>Modal Content:</Text>
        {children}
        <Button title="Cancel" onPress={onCancel} />
      </View>
    </Modal>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
