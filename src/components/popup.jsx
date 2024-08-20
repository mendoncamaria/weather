
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styled from 'styled-components';

function MyPopup() {
  return (
    <div>
      <Popup trigger={<button> Open Popup </button>} modal nested>
        {(close) => (
          <Modal>
            <Close className="close" onClick={close}>
              &times;
            </Close>
            <div className="content">
              <h1>Popup content</h1>
              <p>This is a simple popup component.</p>
            </div>
          </Modal>
        )}
      </Popup>
    </div>
  );
}

export default MyPopup;

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
