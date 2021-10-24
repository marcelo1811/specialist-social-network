import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { CSSProperties, ReactNode } from "react"

interface IBaseFormControl {
  containerStyle?: CSSProperties;
  label: string;
  children: ReactNode;
}

export default function BaseFormControl({ containerStyle, label, children }: IBaseFormControl ) {
  return (
    <FormControl my={5}>
      <FormLabel fontWeight='bold'>{label}</FormLabel>
      {children}
    </FormControl>
  )
}