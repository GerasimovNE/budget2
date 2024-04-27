import { setSearch, $isOpenBurger, burgerToggle } from './private';
import { $search } from './public';

$search.on(setSearch, (_, s) => s);

$isOpenBurger.on(burgerToggle, (_) => !_);
