import React, { useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View, Text, ScrollView,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements';
import { TextInput, HelperText, Button } from 'react-native-paper';
import countryStateArray from './countryStateArray';
import countriesWithCities from './countriesWithCities';
import validCountries from '../data/validCountries';
import ShopHeader from './ShopHeader';
  // Regular expression for validating email
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // Regular expression for validating phone number
  const phoneRegex = /^\d{10}$/;
  
  // Regular expression for validating Ireland eir code
  const eirCodeRegex = /^[A-Z]\d[A-Z]\d{4}$/i;
  
  // Regular expression for validating postcode for other countries
  const postCodeRegex = /^[A-Z0-9]{5,6}$/i;


const DeliveryAddress = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [country, setCountry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const scrollViewRef = useRef();
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [postCode, setPostCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSaveUserInformation = async () => {
    try {
      const response = await axios.post('https://candii-vapes-backend.herokuapp.com/save_user_information', {
        state,
        country,
        email,
        address,
        phoneNumber,
        postCode,
        firstName,
        lastName,
      });

      console.log(response.data.message);
    } catch (error) {
      console.error('Error saving user information:', error);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    await handleSaveUserInformation(data);
    navigation.navigate('PaymentPage');
  };

  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();
  const input6Ref = useRef();
  const input7Ref = useRef();
  const input8Ref = useRef();


  const input1Layout = useRef();
  const input2Layout = useRef();
  const input3Layout = useRef();
  const input4Layout = useRef();
  const input5Layout = useRef();
  const input6Layout = useRef();
  const input7Layout = useRef();
  const input8Layout = useRef();

  const handleSearch = () => {
    navigation.push('SearchProducts', { searchTerm });
  }

  const validateEmail = value => {
    if (value.includes('@')) return true;
    setError('email', { type: 'manual', message: 'Enter a valid e-mail address' });
    return false;
  };

  const validatePhoneNumber = value => {
    if (!value || value.length === 10) return true;
    setError('phoneNumber', { type: 'manual', message: 'Enter a valid phone number' });
    return false;
  };

  const validateCountry = value => {
    if (validCountries.includes(value)) {
      return true;
    } else {
      setError('country', { type: 'manual', message: 'Enter a valid country' });
      return false;
    }
  };

  const validateStateOrCounty = value => {
    const selectedCountry = countryStateArray.countries.find(i => i.country === country);
    if (selectedCountry && selectedCountry.states.includes(value)) {
      return true;
    } else {
      setError('state', { type: 'manual', message: 'Enter a valid state' });
      return false;
    }
  };

  const validatePostOrEirCode = value => {
    if (country === 'Ireland') {
      if (value.length === 7 && typeof value[0] === 'string' && typeof value[3] === 'string') {
        return true;
      } else {
      setError('postcode', { type: 'manual', message: 'Enter a valid eir code' });
    } if (country !== 'Ireland') {
      if (value.length === 5 || value.length === 6 /* && condition to check for alphanumeric */) {
        return true;
      } else {
        setError('postcode', { type: 'manual', message: 'Enter a valid post code' });
      }
    }
  };
}

  const validateCity = value => {
    for (const country in countriesWithCities) {
      if(countriesWithCities[country].includes(value)) {
        return true;
      } else {
        setError('city', { type: 'manual', message: 'Enter a valid city' });
      }
    }
  }

  const validateFirstName = value => {
    if (value.length < 2) {
      setError('firstName', { type: 'manual', message: 'Enter a valid city' });
    } else {
      return true;
    }
  }

  const validateLastName = value => {
    if (value.length < 3) {
      setError('lastName', { type: 'manual', message: 'Enter a valid city' });
    } else {
      return true;
    }
  }

 






  return (
    <View style={{ flex: 1}}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.container}>
          <ShopHeader />
          <ScrollView ref={scrollViewRef} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={{paddingBottom: 100}}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Delivery Address</Text>
            </View>

            <View
              onLayout={event => {
                input1Layout.current = event.nativeEvent.layout.y;
              }}
            >
              <Controller
                control={control}
                rules={{ required: 'This field is required', validate: validateEmail }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    label="Email *"
                    ref={input1Ref}
                    onFocus={() => scrollViewRef.current.scrollTo({ x: 0, y: input1Ref.current.offsetTop, animated: true })}
                    style={styles.input}
                  />
                )}
                name="email"
                defaultValue=""
              />
              {errors.email && <HelperText type="error">{errors.email.message}</HelperText>}
              <View
                onLayout={event => {
                  input2Layout.current = event.nativeEvent.layout.y;
                }}
              >
              <Controller
                control={control}
                rules={{ required: 'This field is required', validate: validateFirstName }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    label="First name *"
                    ref={input2Ref}
                    onFocus={() => scrollViewRef.current.scrollTo({ x: 0, y: input2Ref.current.offsetTop, animated: true })}
                    style={styles.input}
                  />
                )}
                name="firstName"
                defaultValue=""
              />
              </View>
              {errors.email && <HelperText type="error">{errors.firstName.message}</HelperText>}

              <View
                onLayout={event => {
                  input3Layout.current = event.nativeEvent.layout.y;
                }}
              >
              <Controller
                control={control}
                rules={{ required: 'This field is required', validate: validateLastName }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  label="Last Name *"
                  ref={input3Ref}
                  onFocus={() => scrollViewRef.current.scrollTo({ x: 0, y: input3Ref.current.offsetTop, animated: true })}
                  style={styles.input}
                />
              )}
                name="lastName"
                defaultValue=""
              />
              </View>
              {errors.lastName && <HelperText type="error">{errors.lastName.message}</HelperText>}



              <View
              onLayout={event => {
                input4Layout.current = event.nativeEvent.layout.y;
              }}
              >
              <Controller
                control={control}
                rules={{ required: 'This field is required', validate: validatePhoneNumber }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    label="Phone number *"
                    ref={input4Ref}
                    onFocus={() => scrollViewRef.current.scrollTo({ x: 0, y: input4Ref.current.offsetTop, animated: true })}
                    style={styles.input}
                  />
                )}
                name="phoneNumber"
                defaultValue=""
                />
                </View>
                {errors.email && <HelperText type="error">{errors.phoneNumber.message}</HelperText>}

                <View
                onLayout={event => {
                  input5Layout.current = event.nativeEvent.layout.y;
                }}
                >
              <Controller
                control={control}
                rules={{ required: 'This field is required', validate:validateCity}}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  label="City *"
                  ref={input5Ref}
                  onFocus={() => scrollViewRef.current.scrollTo({ x: 0, y: input5Ref.current.offsetTop, animated: true })}
                  style={styles.input}
                />
                )}
                name="city"
                defaultValue=""
              />
              </View>
              {errors.city && <HelperText type="error">{errors.city.message}</HelperText>}

              <View
              onLayout={event => {
                input6Layout.current = event.nativeEvent.layout.y;
              }}
              >
              <Controller
                control={control}
                rules={{ required: 'This field is required' }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={value => {
                      onChange(value);
                      setCountry(value);
                  }}
                  value={value}
                  label="Country *"
                  ref={input6Ref}
                  onFocus={() => scrollViewRef.current.scrollTo({ x: 0, y: input6Ref.current.offsetTop, animated: true })}
                  style={styles.input}
                />
              )}
                name="country"
                defaultValue=""
              />
              </View>
              {errors.country && <HelperText type="error">{errors.country.message}</HelperText>}

              <View
              onLayout={event => {
                input7Layout.current = event.nativeEvent.layout.y;
              }}
              >
              <Controller
              control={control}
              rules={{ required: 'This field is required', validate: validateStateOrCounty }}
              render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label={country === 'Ireland' ? 'County *' : 'State *'}
                ref={input7Ref}
                onFocus={() => scrollViewRef.current.scrollTo({ x: 0, y: input7Ref.current.offsetTop, animated: true })}
                style={styles.input}
              />
              )}
              name="state"
              defaultValue=""
              />
              </View>
              {errors.state && <HelperText type="error">{errors.state.message}</HelperText>}


              <View
              onLayout={event => {
                input8Layout.current = event.nativeEvent.layout.y;
              }}
              >
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label={country === 'Ireland' ? 'Eir Code' : 'Post Code'}
                ref={input8Ref}
                onFocus={() => scrollViewRef.current.scrollTo({ x: 0, y: input8Ref.current.offsetTop, animated: true })}
                style={styles.input}
                />
                )}
                name="postcode"
                defaultValue=""
                rules={{
                validate: validatePostOrEirCode
                }}
              />
              </View>
              {errors.postcode && <HelperText type="error">{errors.postcode.message}</HelperText>}

              <TouchableOpacity
                style={styles.card}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.cardText}>Proceed to payment </Text>
              </TouchableOpacity>
            </View>
            </View>
          </ScrollView>
          <View style={styles.space}></View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

  const styles = StyleSheet.create({
    label: {
      flexDirection: 'row',
      marginBottom: 20,
      marginTop: 20,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    labelText: {
      fontSize: 24,
    },
    asterisk: {
      fontSize: 16,
      color: 'red',
    },
    fieldContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      flexGrow: 1,
    },
    space: {
      marginTop: 150,
    },
    card: {
      width: '90%', // Increase the width here
      backgroundColor: '#FFFFFF',
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      alignSelf: 'center',
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
    },
    cardText: {
      color: '#1F1F1F',
      fontSize: 18,
      fontWeight: 'bold',
    },
    container: {
      justifyContent: 'center',
      width: '100%',
    },
    input: {
      width: '100%', // Add this style
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
    },
  });

export default DeliveryAddress;