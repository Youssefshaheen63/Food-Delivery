import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; 

const fetchProductsFromFirestore = async () => {
  try {
	
    const productsSnapshot = await getDocs(collection(db, "products"));
    const productsData = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return productsData;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
  
};

export default fetchProductsFromFirestore;
