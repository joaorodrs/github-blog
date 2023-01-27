import { FormControl, FormLabel, InputGroup, InputProps, Input as ChakraUIInput, InputRightElement } from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement } from "react";
import { Control, useController } from "react-hook-form";

type Props = {
  label?: string;
  name: string;
  control: Control<any>
  rightIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
} & InputProps

export default function Input({ label, name, control, rightIcon, ...rest }: Props) {
  const {
    field: { ref, value, onChange, onBlur },
    fieldState: { invalid }
  } = useController({ name, control })

  return (
    <FormControl isInvalid={invalid} isRequired={rest.isRequired}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        <ChakraUIInput
          id={name}
          ref={ref}
          value={value}
          onChange={(value) => {
            onChange(value);
          }}
          onBlur={onBlur}
          isInvalid={invalid}
          border="1px solid"
          borderColor="base.border"
          rounded="md"
          size="lg"
          bgColor="base.input"
          fontSize="16px"
          color="base.text"
          _placeholder={{
            color: 'base.label'
          }}
          {...rest}
        />
        {!rightIcon ? null : (
          <InputRightElement mt={-1}>{rightIcon}</InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  )
}