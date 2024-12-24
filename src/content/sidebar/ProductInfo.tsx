import { useEffect, useState } from 'react';
import { getAmazonProductData, AmazonProductData } from '../../utils/amazonScrapper';
import { fetchKeepaData, KeepaProduct } from '../../utils/fetchKeepaData';
import { FaGoogle, FaAmazon, FaDesktop, FaList } from "react-icons/fa";

interface ProductInfoProps {
  onFbaFeeChange: (fbaFee: number) => void;
  onCostChange: (cost: number) => void;
}
const ProductInfo: React.FC<ProductInfoProps> = ({ onFbaFeeChange, onCostChange }) => {
  const [productData, setProductData] = useState<AmazonProductData | null>(null);
  const [keepaData, setKeepaData] = useState<KeepaProduct | null>(null);
  const [fbaFee, setFbaFee] = useState(0);

  
  useEffect(() => {
    const fetchData = async () => {
      const amazonData = getAmazonProductData();
      setProductData(amazonData);

      if (amazonData.price) {
        const price = parseFloat(amazonData.price.replace('$', ''));
        onCostChange(price);
      }

      if (amazonData.asin) {
        const keepaProduct = await fetchKeepaData(amazonData.asin);
        setKeepaData(keepaProduct);

        if (keepaProduct) {
          const fee = parseFloat(String(keepaProduct.fbaFees.pickAndPackFee)) / 100;
          setFbaFee(fee);
          onFbaFeeChange(fee);
        }
      }
    };

    fetchData();
  }, [ onFbaFeeChange, onCostChange ]);  

  const handleIconClick = (type: 'google' | 'amazon') => {
    if (!productData?.asin || !keepaData?.title) return;
    
    const url = type === 'google'
      ? `https://www.google.com/search?q=${keepaData.title}`
      : `https://www.amazon.com/dp/${productData.asin}`;
    
    window.open(url, '_blank');
  };

  return (
    <div id="product-insights">
      <main>
        <section className="product-basic">
          <div className="box">
            <img id="sidebar-image" height="150" src={productData?.mainImage} alt="" />
          </div>
          <div className="box">
            <p id="sidebar-title" style={{ textAlign: 'center', fontWeight: 'bold' }}>
              {keepaData?.title && keepaData.title.length > 80 ? keepaData.title.slice(0, 80) + "......" : keepaData?.title || 'Loading...'}
            </p>
          </div>
          <div className="box">
            <p><span id="sidebar-asin">{productData?.asin || 'Loading...'}</span></p>
          </div>
          <div className="box">
            <p><span id="sidebar-price">{productData?.price || 'Loading...'}</span></p>
          </div>

          <div className="icons-container">
            <div className="icon">
              <div className="icon-circle" onClick={() => handleIconClick('google')}>
                <FaGoogle size={20} />
              </div>
            </div>
            <div className="icon">
              <div className="icon-circle" onClick={() => handleIconClick('amazon')}>
                <FaAmazon size={20} />
              </div>
            </div>
            <div className="icon">
              <div className="icon-circle">
                <FaDesktop size={20} />
              </div>
            </div>
            <div className="icon">
              <div className="icon-circle">
                <FaList size={20} />
              </div>
            </div>
          </div>
        </section>

        <div className="info-section" id="info-section">
          <div className="table-header1">Info</div>
          <div className="info-grid">
            <div className="info-item">
              <div className="item-label">Eligible</div>
              <div className="item-value" id="sidebar-fulfillment">
                {productData?.fulfillmentType || 'Not available'}
              </div>
            </div>
            <div className="info-item">
              <div className="item-label">FBA fee</div>
              <div className="item-value" id="sidebar-fba">
                {fbaFee ? `$${fbaFee.toFixed(2)}` : 'Not available'}
              </div>
            </div>

            <div className="info-item">
              <div className="item-label">Category</div>
              <div className="item-value" id="sidebar-category">
                {keepaData?.categoryTree?.[0]?.name || 'Not available'}
              </div>
            </div>

            <div className="info-item">
              <div className="item-label">Brand</div>
              <div className="item-value" id="sidebar-brand">
                {keepaData?.brand || 'Not available'}
              </div>
            </div>

            <div className="info-item">
              <div className="item-label">Model</div>
              <div className="item-value" id="sidebar-model">
                {keepaData?.model || 'Not available'}
              </div>
            </div>

            <div className="info-item">
              <div className="item-label">BSR</div>
              <div className="item-value" style={{ color: 'red' }} id="sidebar-bsr">
                {productData?.bsr || 'Unknown'}
              </div>
            </div>

            <div className="info-item">
              <div className="item-label">Variations</div>
              <div className="item-value" style={{ color: 'blue' }} id="sidebar-variations">
                {keepaData?.variations ? 
                  `This listing has ${keepaData.variations.length} variations` 
                  : 'Not available'}
              </div>
            </div>

            <div className="info-item">
              <div className="item-label">Monthly Sales</div>
              <div className="item-value" style={{ color: 'blue' }} id="sidebar-sold">
                {keepaData?.monthlySold ? 
                  `${keepaData.monthlySold} +` 
                  : 'Not available'}
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ProductInfo; 