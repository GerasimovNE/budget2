import { sample, combine } from 'effector';
import { setFilterParamsEvent, $filterParams, filtModalToggle } from './public';
import {
    $isOpenModal,
    $minCost,
    setMaxCost,
    setMinCost,
    setOrderBy,
    setOrderDir,
    setStatus,
    setType,
    $maxCost,
    $orderBy,
    $orderDir,
    $status,
    $type,
    resetFilterParams,
    setFilterParams,
    $orderByCheckBox,
    $statusCheckBox,
    $typeCheckBox,
    typeToggle,
    statusToggle,
    orderByToggle,
} from './private';
import { Params } from '@/interface';

$filterParams.on(setFilterParamsEvent, (_, p) => p).reset(resetFilterParams);

$isOpenModal.on(filtModalToggle, (_) => !_);

$typeCheckBox.on(typeToggle, (_) => !_).reset(resetFilterParams);

$statusCheckBox.on(statusToggle, (_) => !_).reset(resetFilterParams);

$orderByCheckBox.on(orderByToggle, (_) => !_).reset(resetFilterParams);

$maxCost.on(setMaxCost, (_, mc) => mc).reset(resetFilterParams);

$minCost.on(setMinCost, (_, c) => c).reset(resetFilterParams);

$type.on(setType, (_, t) => t).reset(resetFilterParams);

$status.on(setStatus, (_, s) => s).reset(resetFilterParams);

$orderBy.on(setOrderBy, (_, o) => o).reset(resetFilterParams);

$orderDir.on(setOrderDir, (_, o) => o).reset(resetFilterParams);

sample({
    clock: resetFilterParams,
    target: setFilterParams,
});

sample({
    clock: setFilterParams,
    source: combine($maxCost, $minCost, $status, $type, $orderBy, $orderDir),
    fn: ([maxCost, minCost, status, type, orderBy, orderDir]) => {
        let t: Params = {};
        if (maxCost) {
            t.maxCost = parseFloat(maxCost);
        }
        if (minCost) {
            t.minCost = parseFloat(minCost);
        }
        if ($statusCheckBox.getState()) {
            t.status = status;
        }
        if ($typeCheckBox.getState()) {
            t.type = type;
        }
        if ($orderByCheckBox.getState()) {
            t.orderBy = orderBy;
            t.orderDir = orderDir;
        }

        return t;
    },
    target: setFilterParamsEvent,
});

sample({
    clock: setFilterParamsEvent,
    fn: () => {
        console.log($filterParams.getState);
    },
});
