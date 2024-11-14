import React, { useEffect, useState } from 'react';
import { getFavorites, FavoritesItem } from '@/apis/get/getFavorites';
import styles from './LikeList.module.scss';
import Schedule from '../Schedule';
import Link from 'next/link';
import LoadingSpinner from '../LoadingSpinner';
import IconComponent from '../Asset/Icon';

export default function LikeList() {
  const [favorites, setFavorites] = useState<FavoritesItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFavorites = async () => {
    try {
      const data = await getFavorites();
      setFavorites(data);
      setLoading(false);
    } catch (err) {
      console.log('찜한 강좌를 가져오는데 실패했습니다.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <h2 className={styles.title}>찜한 강좌</h2>
        <p className={styles.counter}>{favorites.length}</p>
      </header>
      {favorites.length > 0 ? (
        favorites.map(facility => (
          <div className={styles.listContainer}>
            <Link
              key={`${facility.businessId}-${facility.serialNumber}`}
              href={`/details/${facility.businessId}/${facility.serialNumber}`}
            >
              <Schedule facility={facility} />
            </Link>
          </div>
        ))
      ) : (
        <div className={styles.resultContainer}>
          <IconComponent
            name="noResult"
            width={48}
            height={48}
            alt="결과 없음"
          />
          <div className={styles.textContainer}>
            <p className={styles.mainText}>찜한 시설이 없어요.</p>
            <p className={styles.subText}>강좌 상세 화면에서 찜할 수 있어요.</p>
          </div>
        </div>
      )}
    </div>
  );
}
