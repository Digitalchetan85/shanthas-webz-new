import React from 'react'
import { Image } from 'react-bootstrap';
import Attest from "../images/coming.png"

const Attestation = () => {
  return (
    <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        {/* <Container></Container>
        <h2 className="text-center text-primary">Coming Soon.....</h2> */}
        <div className="pt-3 pb-3 pt-md-5 text-center">
            <Image src={Attest} alt="" className="img-fluid" />
        </div>
    </div>
  )
}

export default Attestation
