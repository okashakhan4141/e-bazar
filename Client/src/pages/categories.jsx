import Products from '../components/products';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import BasicBreadcrumbs from '../components/layouts/breadcrumb';
import { formatCategoryName } from '../utils/helpers';

import { dummyProducts } from '../utils/dummyData';
import Section from '../components/layouts/section';

const createBreadcrumbs = (category, categoryId, subCategory) => {
  const breadcrumbItems = [{ name: 'Home', route: '/home' }];
  breadcrumbItems.push({
    name: category,
    route: `/home/products/${category}?id=${categoryId}${
      subCategory ? '&subCategory=' + subCategory : ''
    }`,
  });

  return breadcrumbItems;
};

const Categories = props => {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();

  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get('id');
  const subCategoryId = queryParams.get('subCategory');

  const breadcrumbItems = createBreadcrumbs(
    params.category,
    categoryId,
    subCategoryId
  );

  useEffect(() => {
    if (!categoryId) {
      history.replace('/error/404');
    }
  }, [categoryId, subCategoryId, history]);

  return (
    <>
      <BasicBreadcrumbs
        breadcrumbs={breadcrumbItems}
        active="Product"
      ></BasicBreadcrumbs>
      <Section>
        <Products data={dummyProducts}></Products>
      </Section>
    </>
  );
};

export default Categories;
