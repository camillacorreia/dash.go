import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  error?: FieldError;
} 
  const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({name, label, error = null, ...rest}) => {
  return(
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

      <ChakraInput 
        name={name} 
        id={name}
        type="string"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
export const Input = forwardRef(InputBase);