import React, { useRef } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Controller } from 'react-hook-form';
import { HelperText } from 'react-native-paper';
import styles from './styles'; // Update the import statement

type FormInputProps = {
  control: any;
  name: string;
  label: string;
  errors: any;
  scrollViewRef: any;
  rules?: any;
  setCountry?: any;
};

const FormInput: React.FC<FormInputProps> = ({ control, name, label, errors, scrollViewRef, rules, setCountry }) => {
  const layoutRef = useRef<number | null>(null);
  const inputRef = useRef<TextInput | null>(null);

  return (
    <View
      onLayout={event => {
        layoutRef.current = event.nativeEvent.layout.y;
      }}
    >
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value: string) => {
              onChange(value);
              if (setCountry) setCountry(value);
            }}
            value={value}
            ref={inputRef}
            onFocus={() => scrollViewRef.current && scrollViewRef.current.scrollTo({ x: 0, y: layoutRef.current, animated: true })}
            style={styles.input} // Make sure the 'styles' object is imported correctly
          />
        )}
        name={name}
        defaultValue=""
      />
      {errors[name] && <HelperText type="error">{errors[name].message}</HelperText>}
    </View>
  );
};

export default FormInput;