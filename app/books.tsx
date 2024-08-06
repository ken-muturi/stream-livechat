import React, { useState } from 'react';
import { View, Text , StyleSheet, KeyboardAvoidingView, Platform, Button} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, sePassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSignInPress = () => {}
  const onSignUpPress = () => {}

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Spinner visible={loading} />
        <Text style={styles.header}>Loading.</Text>
        <Text style={styles.subHeader}>Vedio.</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40
  },
})
export default Page