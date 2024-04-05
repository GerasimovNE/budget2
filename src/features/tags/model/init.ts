import {
    $tags,
    getTagsFx,
    createTagFx,
    createTagEvent,
    $isOpenCreateModal,
    $tagName,
    setTagName,
    resetTagName,
    createModalToggle,
    $isDeleteVisible,
    deleteVisibleToggle,
    resetDeleteVisible,
} from './private';
import { deleteTagFx } from './public';
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

$isDeleteVisible.on(deleteVisibleToggle, (_) => !_).reset(resetDeleteVisible);

$tagName.on(setTagName, (_, n) => n).reset(resetTagName);

$isOpenCreateModal.on(createModalToggle, (_) => !_);

sample({
    clock: createTagEvent,
    source: $tagName,
    filter: (name) => name.length > 0,
    target: createTagFx,
});

sample({
    clock: createTagFx,
    target: [resetTagName, createModalToggle, resetDeleteVisible, getTagsFx],
});

sample({
    clock: deleteTagFx,
    target: [getTagsFx],
});
