import test from 'node:test';
import assert from 'node:assert/strict';
import { MENU_ITEMS } from './menu-data';
import {
  filterMenuItems,
  formatCaymanPrice,
  groupItemsByCourse,
} from './menu-utils';

test('formatCaymanPrice renders whole and fractional Cayman Islands Dollars cleanly', () => {
  assert.equal(formatCaymanPrice(2200), 'CI$22');
  assert.equal(formatCaymanPrice(1650), 'CI$16.50');
  assert.equal(formatCaymanPrice(9500, '/ guest'), 'CI$95 / guest');
});

test('filterMenuItems separates services accurately', () => {
  const dinner = filterMenuItems(MENU_ITEMS, 'dinner', 'all', '');
  const brunch = filterMenuItems(MENU_ITEMS, 'brunch', 'all', '');
  assert.ok(dinner.length > 0);
  assert.ok(brunch.length > 0);
  assert.ok(dinner.every((item) => item.service === 'dinner'));
  assert.ok(brunch.every((item) => item.service === 'brunch'));
});

test('filterMenuItems filters by dietary tag and search query case-insensitively', () => {
  const vegDinner = filterMenuItems(MENU_ITEMS, 'dinner', 'vegetarian', '');
  assert.ok(vegDinner.length >= 4);
  assert.ok(vegDinner.every((item) => item.dietary.includes('vegetarian')));

  const wahooResults = filterMenuItems(MENU_ITEMS, 'dinner', 'all', 'WAHOO');
  assert.equal(wahooResults.length, 1);
  assert.equal(wahooResults[0].id, 'din-wahoo-ceviche');

  const emptyResults = filterMenuItems(MENU_ITEMS, 'dinner', 'vegetarian', 'wahoo');
  assert.equal(emptyResults.length, 0);
});

test('groupItemsByCourse respects configured course order and omits empty courses', () => {
  const clayOvenDinner = filterMenuItems(MENU_ITEMS, 'dinner', 'clay-oven', '');
  const groups = groupItemsByCourse(clayOvenDinner, 'dinner');
  assert.deepEqual(
    groups.map((g) => g.course),
    ['Clay Oven & Chutneys', 'Signature Entrées']
  );
  assert.ok(groups.every((g) => g.items.length > 0));
});
