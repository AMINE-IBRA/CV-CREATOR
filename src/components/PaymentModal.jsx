import React, { useState } from 'react';
import { CreditCard, X, CheckCircle } from 'lucide-react';
import './PaymentModal.css';

function PaymentModal({ onClose, onSuccess }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        
        {isSuccess ? (
          <div className="success-state">
            <CheckCircle size={48} color="#10b981" />
            <h2>Payment Successful!</h2>
            <p>Your CV is being prepared for download.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <CreditCard size={32} className="modal-icon" />
              <h2>Premium CV Download</h2>
              <p>Unlock your professional PDF CV for just <strong style={{ color: '#10b981' }}>$5.00</strong></p>
            </div>
            <form onSubmit={handlePayment} className="payment-form">
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="0000 0000 0000 0000" required pattern="[0-9\s]{16,19}" maxLength="19" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" required pattern="[0-9]{2}/[0-9]{2}" maxLength="5" />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input type="text" placeholder="123" required pattern="[0-9]{3,4}" maxLength="4" />
                </div>
              </div>
              <div className="form-group">
                <label>Cardholder Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <button type="submit" className="btn btn-primary payment-btn" disabled={isProcessing}>
                {isProcessing ? 'Processing...' : 'Pay $5.00 & Download PDF'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default PaymentModal;
