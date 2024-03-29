import React from 'react';
import { PcomplaintsForm } from './PcomplaintsForm';
import HistoryForm from './HistoryForm';
import SystemExaminationForm from './SysExaminationEdit';
import CreateVitalSigns from './CreateVitalSigns';
import NewProblems from './NewProblems';
//import { NewRadiologyInvestigations } from './NewRadiologyInvestigations';
import NewProvisionalDiagnosis from './NewProvisionalDiagnosis';
//import CreateAthropometry from './CreateAthropometry';
//import EditManagementplan from './EditManagementplan';
import EditPrescriptionRequest from './EditPrescriptionRequest';
//import EditDressingRequest from './EditDressingRequest';
//import EditObservationRequest from './EditObservationRequest';
import PreviousMedicalHistoryForm from './PreviousMedicalHistoryForm';
import DiagnosticCode from './DiagnosticCode'

const Tabs =({ setComponentToRender })=> {
    
    return (
        <div style={{width:'100%'}}>
            <button 
                onClick={() => setComponentToRender('CreateVitalSigns')} 
                className='btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4'
                >Vital Signs
            </button>
            <button 
                onClick={() => setComponentToRender('NewProblems')} 
                className='btn btn-outline-secondary col-xs-12 col-sm-6 col-md-4 col-lg-4'
                >Problems
            </button>
            <button 
                onClick={() => setComponentToRender('NewProvisionalDiagnosis')} 
                className='btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4'
                >Provisional Diagnosis
            </button>
            <button 
                onClick={() => setComponentToRender('EditPrescriptionRequest')} 
                className='btn btn-outline-info col-xs-12 col-sm-6 col-md-4 col-lg-4'
                >Prescription Request
            </button>
        </div>
    )
}

const TabForm = ({ renderTabItems }) => {
    return (
            <div style={{height: '60vh', width:'100%'}}>
                {
                    renderTabItems()
                }
            </div>
    )
}

class Diagnosis extends React.Component {
    state = {
        component: ''
    }
    renderTabItems = () => {
        const { component } = this.state

        switch (component) {
          //  case 'PcomplaintsForm': return <PcomplaintsForm />
           // case 'HistoryForm': return <HistoryForm />
           // case 'PreviousMedicalHistoryForm': return <PreviousMedicalHistoryForm />
          //  case 'SystemExaminationForm': return <SystemExaminationForm />
            case 'CreateVitalSigns': return <CreateVitalSigns />
            case 'NewProblems': return <NewProblems />
            //case 'NewRadiologyInvestigations': return <NewRadiologyInvestigations />
            case 'NewProvisionalDiagnosis': return <NewProvisionalDiagnosis />
            //case 'CreateAthropometry': return <CreateAthropometry />
            //case 'EditManagementplan': return <EditManagementplan />
            case 'EditPrescriptionRequest': return <EditPrescriptionRequest />
            //case 'EditObservationRequest': return <EditObservationRequest />
            //case 'EditDressingRequest': return <EditDressingRequest />
            case 'DiagnosticCode': return <DiagnosticCode />
            default : return <p style={{textAlign:'center', marginTop: '20vh'}}>Click a button above to get started</p>
        }
    }

    setComponentToRender = (component) => this.setState({ component })

    render() {
        return (
            <div>
                <Tabs 
                    setComponentToRender={this.setComponentToRender} 
                />

                <TabForm 
                    renderTabItems={this.renderTabItems} 
                />
            </div>
        )
    }
}

export default Diagnosis;