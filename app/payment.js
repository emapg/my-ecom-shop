import QRCodeTimer from '../components/QRCodeTimer';

const Payment = () => {
  const cryptoAddress = 'your-crypto-address-here';

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      <QRCodeTimer address={cryptoAddress} />
    </div>
  );
};

export default Payment;
