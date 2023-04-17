import {ProfileInterface} from '@/app/shared/types/profile.interface';

export interface UserProfileStateInterface {
  data: ProfileInterface | null;
  isLoading: boolean;
  error: string | null;
}
