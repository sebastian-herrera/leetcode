import { expect, test } from 'vitest';
import { arrayToTree } from '../common/tree.ts';
import { insertIntoBST } from './InsertIntoABinarySearchTree.ts';

test('insertIntoBST', () => {
  expect(insertIntoBST(arrayToTree([4, 2, 7, 1, 3]), 5)).toStrictEqual(
    arrayToTree([4, 2, 7, 1, 3, 5]),
  );
  expect(insertIntoBST(arrayToTree([40, 20, 60, 10, 30, 50, 70]), 25)).toStrictEqual(
    arrayToTree([40, 20, 60, 10, 30, 50, 70, null, null, 25]),
  );
  expect(
    insertIntoBST(arrayToTree([4, 2, 7, 1, 3, null, null, null, null, null, null]), 5),
  ).toStrictEqual(arrayToTree([4, 2, 7, 1, 3, 5]));
});
