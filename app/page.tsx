'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css';
import { PageType, pageData } from './constants/pageData';

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<PageType | null>(null);
  const [PageComponent, setPageComponent] = useState<any>(null);

  useEffect(() => {
    if (selectedPage) {
      const DynamicComponent = dynamic(
        () => import(`./components/Page${selectedPage.id}`).catch(err => {
          console.error('컴포넌트 로딩 실패:', err);
        //   return import('./components/ErrorPage');
        }),
        {
          loading: () => <div>페이지 로딩중...</div>,
        //   ssr: false,
        }
      );
      setPageComponent(() => DynamicComponent);
    }
  }, [selectedPage]);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.sidebar}>
          {pageData.map((page) => (
            <div
              key={page.id}
              className={`${styles.pageCard} ${selectedPage?.id === page.id ? styles.selected : ''}`}
              onClick={() => setSelectedPage(page)}
            >
              <h2>{page.title}</h2>
              <p>{page.content}</p>
            </div>
          ))}
        </div>
        <div className={styles.viewer}>
          {PageComponent ? (
            <PageComponent />
          ) : (
            <div className={styles.viewerPlaceholder}>
              <p>페이지를 선택해주세요</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
