import { BackendErrorsInterface } from '@/app/shared/types/backendErrors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
