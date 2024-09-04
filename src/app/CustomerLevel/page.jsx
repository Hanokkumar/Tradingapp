import React from 'react'

import './customerlevel.css'

function CustomerLevel() {
  return (
    <div style={{width:"100%"}} >

<div class="container">
    <h1 class="level-1 rectangle">Node 1 </h1>
    <ol class="level-2-wrapper">
      <li>
        <h2 class="level-2 rectangle">Node 2</h2>
        <ol class="level-3-wrapper">
          <li>
            <h3 class="level-3 rectangle">Node 4</h3>
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
             
            </ol>
          </li>
          <li>
            <h3 class="level-3 rectangle">Node 5 </h3>
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
           
            </ol>
          </li>
        </ol>
      </li>
      <li>
        <h2 class="level-2 rectangle">Node 3 </h2>
        <ol class="level-3-wrapper">
          <li>
            <h3 class="level-3 rectangle">Node 6 </h3>
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
            
            </ol>
          </li>
          <li>
            <h3 class="level-3 rectangle">Node 7 </h3>
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
              
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </div>
    </div>
  )
}

export default CustomerLevel
