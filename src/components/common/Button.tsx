import { Button } from "../ui/button"

const CommonButton = ({ text }) => {
  return (
    <div>
      <Button className="bg-[#3b67fc] text-sm" variant="default">{text}</Button>
    </div>
  )
}

export default CommonButton
