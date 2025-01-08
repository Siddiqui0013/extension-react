import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getAmazonProductData, AmazonProductData } from '../../utils/amazonScrapper';

export default function Chart() {

    const [productData, setProductData] = useState<AmazonProductData | null>(null);
  const { settings,toggles } = useAuth();
  const [chartSpan, setChartSpan] = useState(1);
  const [chartType, setChartType] = useState({
    showSalesChart: false,
    showPricesChart : false,
    showBBChart : false,
  }); 
  

    useEffect(() => {
      const fetchData = async () => {
        const amazonData = getAmazonProductData();
        setProductData(amazonData);
        }
      fetchData();
    }, []);  

  useEffect(() => {
    setChartSpan(settings.chartsTimeSpan);
    setChartType({
      showSalesChart: toggles.showSalesChart,
      showPricesChart: toggles.showPricesChart,
      showBBChart: toggles.showBBChart,
    });
  },[ settings, toggles ]);

  const KEEPA_API_KEY = '2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban';
  const BASE_KEEPA_URL = `https://api.keepa.com/graphimage?key=${KEEPA_API_KEY}&asin=${productData?.asin}&domain=1&range=${chartSpan}&width=350&height=250`;

  return (
          <div className="chart-table">
            <div className="table-header4">Chart</div>
            <div className="chart-content">

              {chartType.showPricesChart && (
                <div className="chart-image">
                  <h1>Price History</h1>
                  <img 
                    id="keepa-chart"
                    width="350"
                    height="200"
                    src={ `${BASE_KEEPA_URL}&used=1` }
                    alt="Price History Chart"
                  />
                  <div className="logo"></div>
                </div>
              )}

              {chartType.showSalesChart && (
                <div className="chart-image">
                  <h1>Sales Rank History</h1>
                  <img
                    id="keepa-chart"
                    width="350"
                    height="200"
                    src={ `${BASE_KEEPA_URL}&new=0&amazon=0&salesrank=1` }
                    alt="Sales History Chart"
                  />
                  <div className="logo"></div>
                </div>
              )}

              {chartType.showBBChart && (
                <div className="chart-image">
                  <h1>Buy Box History</h1>
                  <img
                    id="keepa-chart"
                    width="350"
                    height="200"
                    src={ `${BASE_KEEPA_URL}&new=0&amazon=0&bb=1` }
                    alt="BB History Chart"
                  />
                                    <div className="logo"></div>
                </div>
              )}

            </div>
          </div>
  )
}
