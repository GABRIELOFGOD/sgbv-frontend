import { ReactNode } from "react"

const Button = ({
  text,
  className,
  onclick,
  disable
  }: {
    text: ReactNode | string;
    className?: string;
    onclick?: () => void
    disable?: boolean
  }) => {
  return (
    <button
      className={`rounded-md w-fit h-fit px-4 py-1 cursor-pointer text-white ${className}`}
      onClick={onclick ? onclick : () => {}}
      disabled={disable}
    >{text}</button>
  )
}
export default Button