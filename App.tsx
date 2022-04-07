import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  Extrapolate,
  useAnimatedStyle,
  ZoomIn,
  ZoomInEasyDown,
  ZoomInEasyUp,
  ZoomOut,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const Sound = require('react-native-sound');
  let hello = new Sound(
    'Correct-answer.mp3',
    Sound.MAIN_BUNDLE,
    (error: any) => {
      if (error) {
        console.log(error);
      }
    },
  );
  const onShowModal = () => {
    setModalVisible(!modalVisible);
    hello.play((success: any) => {
      if (!success) {
        console.log('Sound did not play');
      }
    });
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };

  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <Modal animationType="none" transparent={true} visible={modalVisible}>
          <Animated.View
            style={styles.centeredView}
            entering={ZoomIn.duration(2000)}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Icon name="check-circle" size={30} />
            </View>
          </Animated.View>
        </Modal>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen]}
          onPress={onShowModal}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default App;
