import ListItem from '../../components/common/ListItem';
import PromoCarousel from '../../components/home/PromoCarousel';
import FeatureTitle from '../../components/ui/FeatureTitle';
import mockProducts from '@/mock/productList.json';
import mockCategories from '@/mock/category.json';
import { Category, Product } from '../../types/product';
import ProductCard from '../../components/common/item/ProductCard';
import CategoryCard from '../../components/common/item/CategoryCard';
import AccessoryItem from '../../components/common/item/AccessoryItem';
import NewsCard from '../../components/common/item/NewsItem';

const news = [
  {
    image: '/img/products/galaxy-s24.jpg',
    name: 'Here is my news, at real time',
  },
  {
    image: '/img/products/tablet.jpg',
    name: 'Here is my news, at real time',
  },
  {
    image: '/img/products/laptop.jpg',
    name: 'Here is my news, at real time',
  },
  {
    image: '/img/products/watch.jpeg',
    name: 'Here is my news, at real time',
  },
];

const Home = () => {
  const products = mockProducts as Product[];
  const categories = mockCategories as Category[];
  return (
    <div className="flex flex-col space-y-10 py-4">
      <PromoCarousel />
      <div className="flex flex-col space-y-8">
        <FeatureTitle preTitle="Best deal on" mainTitle="Smartphones" />
        <ListItem
          data={products}
          className="grid-cols-2  lg:grid-cols-3 xl:grid-cols-6"
          renderItem={(item) => <ProductCard item={item as Product} />}
        />
      </div>
      <div className="flex flex-col space-y-8">
        <FeatureTitle preTitle="Shop from top" mainTitle="Categories" />
        <ListItem
          data={categories}
          className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
          renderItem={(item) => <CategoryCard item={item as Category} />}
        />
      </div>
      <div className="flex flex-col space-y-8">
        <FeatureTitle
          preTitle="Upgrade Your Look with"
          mainTitle="Accessories"
        />
        <ListItem
          data={[...categories, ...categories]}
          className="grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6"
          renderItem={(item) => <AccessoryItem item={item as Category} />}
        />
      </div>
      <div className="flex flex-col space-y-8">
        <FeatureTitle preTitle="Second-Hand" mainTitle="Devices" />
        <ListItem
          data={products}
          className="grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          renderItem={(item) => <ProductCard item={item as Product} />}
        />
      </div>
      <div className="flex flex-col space-y-8">
        <FeatureTitle preTitle="Latest" mainTitle="News & Updates" />
        <ListItem
          data={news}
          className="grid-cols-2 lg:grid-cols-4"
          renderItem={(item) => <NewsCard item={item as Category} />}
        />
      </div>
    </div>
  );
};

export default Home;
