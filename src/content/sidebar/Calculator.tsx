import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

interface CalculatorProps {
  fbaFee?: number;
  cost?: number;
}

const Calculator: React.FC<CalculatorProps> = ({ fbaFee = 0, cost = 0 }) => {
  const { settings } = useAuth();

  const [costPrice, setCostPrice] = useState<string>('0');
  const [salePrice, setSalePrice] = useState<string>(cost.toFixed(2));
  const [profit, setProfit] = useState<string>('0');
  const [roi, setRoi] = useState<string>('0%');
  const [profitColor, setProfitColor] = useState<string>('#00cc00');
  const [roiColor, setRoiColor] = useState<string>('#00cc00');
  const [miscFee, setMiscFee] = useState<number>(0);
  const [prepFee, setPrepFee] = useState<number>(0);

  const calculateProfitAndROI = () => {
    const parsedCostPrice = parseFloat(costPrice);
    const parsedSalePrice = parseFloat(salePrice);
    const calculatedProfit = parsedSalePrice - (parsedCostPrice + fbaFee + miscFee + prepFee);

    const calculatedRoi = parsedCostPrice > 0
      ? `${((calculatedProfit / parsedCostPrice) * 100).toFixed(2)}`
      : '%';

    setProfit(calculatedProfit.toFixed(2));
    setRoi(calculatedRoi);
    setProfitColor(calculatedProfit >= settings.minProfit ? '#00cc00' : '#ff4444');
    setRoiColor(calculatedRoi >= settings.minROI ? '#00cc00' : '#ff4444');
  };

  useEffect(() => {
    setMiscFee(settings.miscFee);
    setPrepFee(settings.prepFee);
  }, [settings]);

  useEffect(() => {
    setSalePrice(cost.toFixed(2));
  }, [cost]);

  useEffect(() => {
    calculateProfitAndROI();
  }, [costPrice, salePrice, fbaFee, miscFee, prepFee]);

  return (
    <div className="calculator-section">
      <div className="table-header5">Calculator</div>
      <div className="calculator-grid">
        <div className="calc-field">
          <label>Cost Price</label>
          <div className="input-wrapper">
            <span className="currency">$</span>
            <input
              type="text"
              value={costPrice}
              className="calc-input"
              onChange={(e) => setCostPrice(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        <div className="calc-field">
          <label>Sale Price</label>
          <div className="input-wrapper">
            <span className="currency">$</span>
            <input
              type="text"
              value={salePrice}
              className="calc-input"
              onChange={(e) => setSalePrice(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        <div className="calc-field">
          <label>Profit</label>
          <div className="input-wrapper">
            <span className="currency">$</span>
            <input
              type="text"
              value={profit}
              className="calc-input"
              readOnly
              style={{ color: profitColor }}
            />
          </div>
        </div>

        <div className="calc-field">
          <label>ROI</label>
          <div className="input-wrapper">
            <span className="currency">%</span>
            <input
              type="text"
              value={roi}
              className="calc-input"
              readOnly
              style={{ color: roiColor }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;