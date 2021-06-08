import React from "react"


export default function Layout({children}) {
  return (
    <body style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{width: 900}}>
        <h1><a style={{textDecoration: 'none', color: 'black'}} href={'/'}>Блог прогрессивной психологии </a><br /> <span style={{color: 'green'}}> MRTE, MBSR/MBCT, MSC, MCT, ACT, ISST, CBT</span></h1>
        <hr />

        <div style={{fontSize: 22}}>
          {children}
        </div>
        <hr />


        denis.klimenko.dx@gmail.com
      </div>
    </body>
  )
}
