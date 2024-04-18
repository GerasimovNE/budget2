import { setSearch } from './private';
import { $search } from './public';

$search.on(setSearch, (_, s) => s);
