import { useState, useEffect } from 'react';

interface CalculatorProps {
  fbaFee?: number;
  initialPrice?: string;
}

const Calculator: React.FC<CalculatorProps> = ({ fbaFee = 0, initialPrice = '0.00' }) => {
  const [costPrice, setCostPrice] = useState('0.00');
  const [salePrice, setSalePrice] = useState(initialPrice);
  const [profit, setProfit] = useState('0.00');
  const [roi, setRoi] = useState('0%');
  const [profitColor, setProfitColor] = useState('#00cc00');

  const validatePositiveNumber = (value: string): number => {
    const cleanValue = value.replace(/^0+(?=\d)/, '').replace(/[^\d.]/g, '');
    const parts = cleanValue.split('.');
    const finalValue = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : cleanValue;
    const num = parseFloat(finalValue);
    return num < 0 || isNaN(num) ? 0 : num;
  };

  const calculateProfitAndROI = () => {
    const cost = validatePositiveNumber(costPrice);
    const sale = validatePositiveNumber(salePrice);
    const calculatedProfit = sale - (cost + fbaFee);
    
    let calculatedRoi: string;
    if (cost > 0) {
      calculatedRoi = ((calculatedProfit / cost) * 100).toFixed(2) + '%';
    } else {
      calculatedRoi = '∞%';
    }

    setProfit(calculatedProfit.toFixed(2));
    setRoi(calculatedRoi);
    setProfitColor(calculatedProfit >= 0 ? '#00cc00' : '#ff4444');
  };

  useEffect(() => {
    calculateProfitAndROI();
  }, [costPrice, salePrice, fbaFee]);

  const handleBlur = (value: string, setter: (value: string) => void) => {
    const formattedValue = parseFloat(value || '0').toFixed(2);
    setter(formattedValue);
  };

  return (
    <div className="calculator-section">
      <div className="table-header5">Calculator</div>
      <div className="calculator-grid">
        <div className="calc-field">
          <label>Cost Price</label>
          <div className="input-wrapper">
            <span className="currency">$</span>
            <input
              type="number"
              value={costPrice}
              className="calc-input"
              onChange={(e) => setCostPrice(e.target.value)}
              onBlur={() => handleBlur(costPrice, setCostPrice)}
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="calc-field">
          <label>Sale Price</label>
          <div className="input-wrapper">
            <span className="currency">$</span>
            <input
              type="number"
              value={salePrice}
              className="calc-input"
              onChange={(e) => setSalePrice(e.target.value)}
              onBlur={() => handleBlur(salePrice, setSalePrice)}
              placeholder="0.00"
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
              style={{ color: profitColor }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;