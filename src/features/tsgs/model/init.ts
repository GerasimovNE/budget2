import { $tags, getTagsFx, createTagFx, deleteTagFx } from './private';
import { sample } from 'effector';
import { getTags, createTag, deleteTag } from '@/dal/tags';

$tags.on(getTagsFx.doneData, (_, t) => t);

getTagsFx.use(async () => {
    const { data } = await getTags();
    return data;
});

createTagFx.use(async (name) => {
    await createTag(name);
});

deleteTagFx.use(async (id) => {
    await deleteTag(id);
});

sample({
    clock: [createTagFx, deleteTagFx],
    target: getTagsFx,
});
