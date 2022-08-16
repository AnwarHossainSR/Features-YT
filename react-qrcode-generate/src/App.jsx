import QRCode from 'qrcode.react';
import React from 'react';
import './App.css';

const App = () => {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState('');

  const handleCLick = (e) => {
    e.preventDefault();
    setValue(ref.current.value);
  };
  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById('qrCodeEl')
      .toDataURL()
      .replace('image/png', 'image/octet-stream');
    console.log(qrCodeURL);
    let aEl = document.createElement('a');
    aEl.href = qrCodeURL;
    aEl.download = `${Date.now()}_QR_Code.png`;
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };
  return (
    <div className='parent_div'>
      <div className='child_div'>
        <h1>React QRCode</h1>
        <div className='input_group'>
          <form onClick={handleCLick}>
            <input
              type='text'
              className='form-control'
              placeholder='Enter qr text'
              ref={ref}
            />
            <button>Generate</button>
          </form>
        </div>
        {value && (
          <div className='qrcode-container'>
            <div className='qr_code'>
              <QRCode id='qrCodeEl' value={value} size={200} />
            </div>
            <button onClick={downloadQRCode}>Download</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
