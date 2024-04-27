import { importDb, exportDb } from '@/dal/dataBase';
import { sample } from 'effector';
import {
    $isOpenDbModal,
    setDb,
    $db,
    resetDb,
    importDbEvent,
    importDbFx,
    exportDbFx,
} from './private';
import { dbModalToogle, dbImported } from './public';

$isOpenDbModal.on(dbModalToogle, (_) => !_);

importDbFx.use(async (db: Blob | null) => {
    if (db) {
        await importDb(JSON.parse(await db?.text()));
    }
});

exportDbFx.use(async () => await exportDb());

$db.on(setDb, (_, f) => f).reset(resetDb);

sample({ clock: importDbEvent, source: $db, target: importDbFx });

sample({
    clock: [importDbFx.doneData, exportDbFx.doneData],
    target: [dbModalToogle, dbImported],
});
