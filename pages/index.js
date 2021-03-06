import React from 'react';
import dynamic from 'next/dynamic';
import {useMedia} from 'react-use';

import Layout from 'layouts/default';
import Head from 'components/Head';
import FeaturedListing from 'modules/FeaturedListing';
import NewestListing from 'modules/NewestListing';
import RecentListing from 'modules/RecentListing';
import BestForYouListing from 'modules/BestForYouListing';
import Sidebar from 'modules/Sidebar';

const Gallery = dynamic(() => import('modules/Gallery'), {ssr: false});

const Home = () => {
  const isWide = useMedia('(min-width: 1024px)', true);

  return (
    <Layout>
      <Head />
      <div className="bg-gray-200 py-3 sm:py-6 md:py-10">
        <div className="container container-fluid px-2 lg:px-0">
          <FeaturedListing />
        </div>
      </div>
      <div className="py-3 sm:py-6 md:py-10">
        <div className="container container-fluid px-2 lg:px-0">
          <div className="flex">
            <NewestListing />
            {isWide && (
              <div className="ml-6">
                <RecentListing />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-3 sm:py-6 md:py-10">
        <div className="container container-fluid px-2 lg:px-0">
          <div className="flex">
            <BestForYouListing />
            {isWide && (
              <div className="ml-6">
                <Sidebar />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="py-3 sm:py-6 md:py-10">
        <div className="container container-fluid px-2 lg:px-0">
          <h3 className="underline-title underline-title-xl text-xl text-gray-700">
            Thư viện ảnh
          </h3>
          <Gallery />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
