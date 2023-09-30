import * as React from 'react'

import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

import { Wrapper } from '@/components/Wrapper'
import { Navbar } from '@/components/Navbar'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  //return <NotionPage {...props} />
  return (
    <div className="body">
      <div className="page-wrapper">
        <Navbar isIndexPage={true} />
        <Wrapper {...props} />
      </div>
      {/* <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63c66c0fda4f7206d418ec3c"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
      />
      <Script src="/js/webflow.js" /> */}
    </div>
  );
}
