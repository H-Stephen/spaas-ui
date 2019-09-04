import { hasOwn } from 'spaas-ui/src/utils/util';

export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};
