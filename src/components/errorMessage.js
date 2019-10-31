import React from "react"

export default function ErrorMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>This is required</p>
      case "minLength":
        return <p>Your message need minimum 2 characters</p>
      case "pattern":
        return <p>Enter a valid email address</p>

      default:
        return null
    }
  }

  return null
}
