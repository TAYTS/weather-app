import { select } from 'utils/selectors';

const selectLoading = select<boolean>(['layout', 'loading']);

export { selectLoading };
