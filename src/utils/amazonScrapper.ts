export interface AmazonProductData {
    asin: string | null;
    price: string;
    mainImage: string;
    fulfillmentType: string;
    buyboxSeller: string | null;
    bsr: string;
  }
  
  export const getAmazonProductData = (): AmazonProductData => {
    const price = document.querySelector('span.a-price span[aria-hidden="true"]')?.textContent?.trim() || '';
  
    const mainImage = (document.querySelector('#landingImage') as HTMLImageElement)?.src || '';
  
    const fulfillmentType = document.getElementById("sellerProfileTriggerId") ? 'FBM' : 'FBA';

    let buyboxSeller = null;
    const buyboxSellerElement = document.querySelector('#merchant-info');
    if (buyboxSellerElement) {
      buyboxSeller = buyboxSellerElement.textContent?.trim() || null;
    }
  
    let asin = document.getElementById("ASIN")?.getAttribute('value');
    if (!asin) {
      const urlMatch = window.location.pathname.match(/\/dp\/([A-Z0-9]{10})/);
      asin = urlMatch ? urlMatch[1] : null;
    }
  
    let bsr = '';
    const tableRows = document.querySelectorAll('tr');
    for (const row of tableRows) {
      const header = row.querySelector('th');
      if (header && header.textContent?.includes('Best Sellers Rank')) {
        const bsrText = row.querySelector('td')?.textContent || '';
        const match = bsrText.match(/#([0-9,]+)\s+in\s+([^(]+)/);
        if (match) {
          bsr = `#${match[1]} in ${match[2]}`;
        }
        break;
      }
    }
  
    return {
      asin,
      price,
      mainImage,
      fulfillmentType,
      buyboxSeller,
      bsr
    };
  };