import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import ColumnCenter from './ColumnCenter';

const styles = {
  modalContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(0, 0, 0, .5)'
  },
  modal: {
    width: 500,
    margin: 'auto',
    height: 300
  },

  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

};

export default ({ children, title, isVisible }) => ReactDOM.createPortal(
  <div
    style={{
      ...styles.modalContainer,
      display: isVisible ? 'block' : 'none'
    }}
  >
    <div className={isVisible ? 'bounceIn' : ''}>
      <Card
        style={styles.modal}
        titleStyle={{
          background: '#00aeef',
          textAlign: 'center',
          color: 'white',
          fontWeight: '300',
          paddingBottom: 20,
          fontFamily: 'Pacifico'
        }}
        title={title}
      >
        <ColumnCenter>
          {children}
        </ColumnCenter>

      </Card>

    </div>
  </div>,
  document.getElementById('modal')
)
// export default ReactDOM.createPortal(Modal, );