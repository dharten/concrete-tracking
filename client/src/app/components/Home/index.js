import React from "react";

export default function Home() {
  return(
    <div>
      {/* <img src="https://expeditionworkshed.org/assets/high-strength-concrete-cylinder-compression-test-440x330.jpg" alt="Concrete Compression Test"/> */}
      <h2>Lab Data Tracking</h2>
      <img src={require("../../../img/concrete-testing-handwritten.jpeg")} width="100%" alt=""/>
      <p>The inspiration behind it came from some work I did as a Construction and Materials Testing Technician. In this line of work there were many times that the same data had to be hand written on many different forms and samples leaving multiple avenues for human error.</p>
      <p>The need for a streamlined, simple, and easily tracked system was very apparent so I set out to create this application to fullfill the need and remove the monotony of such an important yet easily mis-copied task.</p>
      <img src={require("../../../img/concrete-testing-compression.jpg")} alt=""/>
    </div>
  )
}
