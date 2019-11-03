import React from 'react';
import './guides.css';


/**
 * this component contains the users guide for
 * all the modules
 *
 */
const title = <h6>Starter's Guide</h6>

function DoctorGuide() {
  return (
    <div className="guide">
      <h1>Welcome To Doctor Module </h1>
    </div>
  );
}

function RecordGuide() {
  return (
    <div className="guide">
    </div>
  );
}

function PharmacyGuide() {
  return (
    <div className="guide">
      
    </div>
  );
}

function LabGuide() {
  return (
    <div className="guide">
     
    </div>
  );
}

function AccountGuide() {
  return (
    <div className="guide">
    
    </div>
  );
}

export { DoctorGuide, RecordGuide, PharmacyGuide, LabGuide, AccountGuide };
