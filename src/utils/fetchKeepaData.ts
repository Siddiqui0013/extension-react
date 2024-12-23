export interface KeepaProduct {
    title: string;
    brand: string;
    model: string;
    categoryTree: Array<{ name: string }>;
    variations: unknown[];
    fbaFees: {
      pickAndPackFee: number;
    };
    monthlySold: number;
  }
  
  interface KeepaResponse {
    products: KeepaProduct[];
  }
  
  const KEEPA_API_KEY = '2e327hvqq9m6q1umr6c2onbqr71pguhtum53drsopk60d5a9bdn68tu001fpoban';
  
  export const fetchKeepaData = async (asin: string): Promise<KeepaProduct | null> => {
    try {
      const response = await fetch(
        `https://api.keepa.com/product?key=${KEEPA_API_KEY}&domain=1&asin=${asin}`
      );
      
      if (!response.ok) {
        throw new Error(`Keepa API responded with status: ${response.status}`);
      }
  
      const data: KeepaResponse = await response.json();
      
      if (data.products && data.products.length > 0) {
        return data.products[0];
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching Keepa data:', error);
      return null;
    }
  };