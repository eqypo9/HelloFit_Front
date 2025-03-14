import { useState } from 'react';

export default function useKakaoMap(
  KAKAO_MAP_KEY: string,
  initialMap: kakao.maps.Map | null
) {
  const [map, setMap] = useState<kakao.maps.Map | null>(initialMap);

  return { map, setMap };
}
