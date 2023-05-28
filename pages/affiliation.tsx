import React from 'react';
import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {metaConstants} from '@/meta-constants';
import Container from "@/components/views/Container";

interface AffiliationProps {}

const Affiliation: NextPage<AffiliationProps> = () => {
  return (
    <>
      <NextSeo title={`Affiliation Program | ${metaConstants.SITE_NAME}`} />
      <Container>hello buddy</Container>
    </>
  );
};

export default Affiliation;
