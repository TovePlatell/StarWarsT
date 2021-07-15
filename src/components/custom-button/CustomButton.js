import { Button } from './customButtom.styles'

const CustomButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

export default CustomButton
