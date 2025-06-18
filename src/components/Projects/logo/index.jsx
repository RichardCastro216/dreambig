import React from 'react';
import './graphic.css'

import img1 from "../../../assets/images/logo/1.png"
import img2 from "../../../assets/images/logo/2.png"
import img3 from "../../../assets/images/logo/3.png"
import img4 from "../../../assets/images/logo/4.png"
import img5 from "../../../assets/images/logo/5.png"
import img6 from "../../../assets/images/logo/6.png"
import img7 from "../../../assets/images/logo/7.png"
import img8 from "../../../assets/images/logo/8.png"
import img9 from "../../../assets/images/logo/9.png"
import img10 from "../../../assets/images/logo/10.png"
function Erotic() {
  return (
    <div className="back_page" style={{backgroundColor:'#f7f6f2'}}>
      <div className='project_topic' style={{color:'white'}}>
        <h1 style={{fontFamily:'Times New Roman', textTransform:"uppercase"}}>Past Mobile APP Design Work</h1>
        <br></br>
        <p style={{fontFamily:'Times New Roman'}}>My Recent Mobile APP Design Works</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div style={{paddingLeft:'10%', paddingRight:'10%'}}>
        <div>
          <a target='blank' style={{color:'white'}}><h1 style={{fontFamily:'Times New Roman', textTransform:'uppercase'}}>Teeth & Ciela</h1></a>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%',display:'flex',gap:'40px'}}>
              <img src={img1} style={{width:'50%',height:'100%'}} />
              <img src={img3} style={{width:'50%'}} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        
        <div>
          <a target='blank' style={{color:'white'}}><h1 style={{fontFamily:'Times New Roman', textTransform:'uppercase'}}>MD & HULYA</h1></a>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%',display:'flex',gap:'40px'}}>
              <img src={img2} style={{width:'50%',height:'100%'}} />
              <img src={img4} style={{width:'50%'}} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>

        <div>
          <a target='blank' style={{color:'white'}}><h1 style={{fontFamily:'Times New Roman', textTransform:'uppercase'}}>EMBER & DOLLAR</h1></a>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%',display:'flex',gap:'40px'}}>
              <img src={img5} style={{width:'40%',height:'100%'}} />
              <img src={img6} style={{width:'60%'}} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>

        <div>
          <a target='blank' style={{ color: 'white' }}><h1 style={{ fontFamily: 'Times New Roman', textTransform: 'uppercase' }}>EKho & SPADA</h1></a>
          <br></br>
          <div style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
            <div style={{ width: '100%', display: 'flex', gap: '40px' }}>
              <img src={img7} style={{ width: '40%', height: '100%' }} />
              <img src={img8} style={{ width: '60%' }} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>

        <div>
          <a target='blank' style={{ color: 'white' }}><h1 style={{ fontFamily: 'Times New Roman', textTransform: 'uppercase' }}>WALTON & BEEYE</h1></a>
          <br></br>
          <div style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
            <div style={{ width: '100%', display: 'flex', gap: '40px' }}>
              <img src={img9} style={{ width: '30%', height: '100%' }} />
              <img src={img10} style={{ width: '70%' }} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Erotic;