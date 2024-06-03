import React from 'react';

export default function Popup() {
  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('college_student.jpeg')" }}>
      <div className="absolute inset-0 backdrop-filter backdrop-blur-lg flex justify-center items-center">
        <div style={{ height: 200, width: 400, backgroundColor: 'white', textAlign: 'center' }}>
          <p style={{ color: 'blue', fontSize: '24px', lineHeight: '1.5', fontWeight: 'bold' }}>This is a popup</p>
        </div>
      </div>
    </div>
  );
}
