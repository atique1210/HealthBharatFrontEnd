import React, { Suspense, lazy } from 'react';
import Loading from '../loading';
const SalesReport = lazy(() => import('./SalesReport'));
const UpToDateStockBalance = lazy(() => import('./UpToDateStockBalance'));
const EditDrugs = lazy(() => import('./EditDrugs'));
const AddDrug = lazy(() => import('./AddDrug'));
const PrescriptionProcessingForm = lazy(() =>
  import('./PrescriptionProcessingForm')
);

const Tabs = ({ setComponentToRender }) => {
  return (
    <div style={{ width: '100%' }}>

      <button
        onClick={() => setComponentToRender('AddDrug')}
        className="btn btn-outline-danger col-xs-12 col-sm-6 col-md-4 col-lg-4"
      >
        ADD Drugs
      </button>
     
    </div>
  );
};

const TabForm = ({
  pendingRequest,
  showCarousel,
  processing,
  toggleProcessingForm,
  details,
  renderComponents
}) => {
  return (
    <Suspense fallback={<Loading />}>
      {renderComponents()}
      {processing && (
        <div>
          <PrescriptionProcessingForm
            details={details}
            toggleProcessingForm={toggleProcessingForm}
          />
        </div>
      )} 
    </Suspense>
  );
};

class PharmacyDashboard extends React.Component {
  state = {
    component: ''
  }

  hideCarousel = () => this.setState({ showCarousel: false });

  renderComponents = () => {
    const {component} = this.state

    switch (component) {
      case 'SalesReport' : return <SalesReport />
      case 'AddDrug' : return <AddDrug />
      case 'UpToDateStockBalance' : return <UpToDateStockBalance />
      case 'EditDrugs' : return <EditDrugs />
      default : return <p className="text-center">Select an item above to view</p>
    }
  }

  setComponentToRender = component => this.setState({ component })

  render() {
    const {
      pendingRequest,
      processing,
      toggleProcessingForm,
      details,
    } = this.props;
    return (
      <div>
        <Tabs 
          setComponentToRender={this.setComponentToRender} 
        />
        <br />
        <TabForm
          renderComponents={this.renderComponents}
          processing={processing}
          pendingRequest={pendingRequest}
          toggleProcessingForm={toggleProcessingForm}
          details={details}
        />
      </div>
    );
  }
}

export default PharmacyDashboard;
