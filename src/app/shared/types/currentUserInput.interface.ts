import {CurrentUserInterface} from '@/app/shared/types/currentUser.interface';

export interface CurrentUserInputInterface extends CurrentUserInterface {
  password: string;
}
