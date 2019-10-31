import React from "react"
import envelopeStyle from "./formEnvelope.module.scss"

const FormEnvelope = () => {
  return (
    <div className={envelopeStyle.elBase}>
      <div className={envelopeStyle.elInnerSpace}>
        <div className={envelopeStyle.elFlap}></div>
      </div>
    </div>
  )
}

export default FormEnvelope
