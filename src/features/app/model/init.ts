import { setSearch, $isOpenBurger, burgerToggle, exportDbFx } from './private';
import { $search } from './public';
import { exportDb } from '@/dal/dataBase';

$search.on(setSearch, (_, s) => s);
exportDbFx.use(() => exportDb());

$isOpenBurger.on(burgerToggle, (_) => !_);
