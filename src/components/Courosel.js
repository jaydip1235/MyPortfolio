import React from 'react'
import { FaCss3, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact} from 'react-icons/fa'
import { DiMongodb } from "react-icons/di";
function Courosel() {
    return (
        <div>
            
            <div className='courosel-parent position-relative' id='courosel'>
              <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>Technologies I use</h1>

              <div className='gallery'>

                  <span style={{'--i' : 1}}>
                      <FaReact color='cyan'/>
                  </span>

                  <span style={{'--i' : 2}}>
                      <img src="https://i.postimg.cc/RVs7fC7x/5848152fcef1014c0b5e4967.png"/>
                  </span>

                  <span style={{'--i' : 3}}>
                      <FaJava color='orange'/>
                  </span>

                  <span style={{'--i' : 4}}>
                      <FaNodeJs color='green'/>
                  </span>

                  <span style={{'--i' : 5}}>
                      <FaJsSquare color='yellow'/>
                  </span>

                  <span style={{'--i' : 6}}>
                  <img src="https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png"/>
                      
                  </span>

                  <span style={{'--i' : 7}}>
                      <img src="https://i.postimg.cc/rpPwLJLz/and-removebg-preview.png"/>
                  </span>

                  <span style={{'--i' : 8}}>
                      <FaHtml5 color='red'/>
                  </span>

                
                   <span style={{'--i' : 9}}>
                      <img src="  data:image/jpeg;base64,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"/>
                  </span>
                  <span style={{'--i' : 10}}>
                      <DiMongodb color='green'/>
                  </span>
                
              </div>
            </div>
        </div>
    )
}

export default Courosel
