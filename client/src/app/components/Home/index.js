import React from "react";

export default function Home() {
  return(
    <div>
      {/* <img src="https://expeditionworkshed.org/assets/high-strength-concrete-cylinder-compression-test-440x330.jpg" alt="Concrete Compression Test"/> */}
      <h2>Lab Data Tracking</h2>
      <img src={require("../../../img/concrete-testing-handwritten.jpeg")} width="100%" alt=""/>
      <div className="triangle-down"></div>
      <p>Imagine having to write the same information down on multiple documents and samples. The task could tedious, and monotonous for the individual performing the task. Not only that, but it also leaves a lot of room for human error, and waisted a lot of time that could be spent doing other tasks that a computer isn't set up to handle.</p>
      {/* <div className="triangle-down"></div> */}
      <p>The need for a streamlined, simple, and easily tracked system that minimizes the potential for human error is the purpose of this application. Through it's use the information entered only needs to be input once which will improve time management, productivity, and reliabitlity for the technicians performing the work, managements oversight, and the ability of the client to trust the results.</p>
      <div className="triangle-down"></div>
      <img src={require("../../../img/concrete-testing-machine.gif")} alt=""/>
      <p>Take the different samples from off the shelf and put them into compressive strength testing machine. </p>
      <img src={require("../../../img/concrete-testing-compression.jpg")} alt=""/>
    </div>
  )
}
