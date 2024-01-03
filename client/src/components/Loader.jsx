import {   FidgetSpinner } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>

<FidgetSpinner
  visible={true}
  height="80"
  width="80"
  ariaLabel="fidget-spinner-loading"
  wrapperStyle={{}}
  wrapperClass="fidget-spinner-wrapper"
  />
  <span className='text-slate-500'>sit tight we are fetching data...</span>
    </div>)
}

export default Loader