import { atom } from 'recoil';
import { NomalFacilityDetails } from '@/apis/get/getFacilityDetails';

// 선택된 시설 상세 정보를 저장하는 상태
export const selectedFacilityDetailsState = atom<NomalFacilityDetails | null>({
  key: 'selectedFacilityDetailsState',
  default: null,
});
