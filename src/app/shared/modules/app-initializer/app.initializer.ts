import {Store} from '@ngrx/store';
import {PersistenceService} from '@/app/shared/services/persistence.service';
import {getCurrentUserAction} from '@/app/auth/store/actions/getCurrentUser.action';

export function initializeAppFactory(
  store: Store,
  persistenceService: PersistenceService,
): () => void {
  return () => {
    if (persistenceService.get('accessToken')) {
      store.dispatch(getCurrentUserAction());
    }
  };
}
