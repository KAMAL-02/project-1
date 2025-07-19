import { Input } from "../ui/input"

const CommonInput = ({text}) => {
  return (
    <div>
      <Input placeholder={text} className="rounded-2xl"/>
    </div>
  )
}

export default CommonInput
