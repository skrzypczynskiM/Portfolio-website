import { useState, useRef } from "react"

const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleFocus = e => {
    const inputRef = e.currentTarget.name
    refs[inputRef].current.checked = !refs[inputRef].current.checked
  }

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    e.currentTarget.reset()
  }

  return {
    handleFocus,
    handleChange,
    handleSubmit,
    values,
  }
}

export default useForm
