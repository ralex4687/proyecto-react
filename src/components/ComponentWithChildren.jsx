import React from 'react'

const ComponentWithChildren = ({children}) => {
  return (
    <div style={{
            display: 'flex',
            backgroundColor: '#f0f0f0',
            width: "90%",
            height: '18rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '20px',

            
        }}>
            {children}</div>
  )
}

export default ComponentWithChildren