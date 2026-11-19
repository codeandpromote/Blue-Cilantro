import { COURSE_ORDER, DietaryTag, MenuItem, ServicePeriod } from './menu-data';

export type DietaryFilter = 'all' | DietaryTag;

export interface CourseGroup {
  course: string;
  items: MenuItem[];
}

export const DIETARY_LABELS: Record<DietaryTag, string> = {
  seafood: 'Seafood',
  vegetarian: 'Vegetarian',
  'gluten-free': 'Gluten-Free',
  'clay-oven': 'Clay Oven',
};

export function formatCaymanPrice(priceCents: number, priceUnit?: string): string {
  const whole = priceCents % 100 === 0;
  const formatted = whole
    ? `CI$${Math.round(priceCents / 100)}`
    : `CI$${(priceCents / 100).toFixed(2)}`;
  return priceUnit ? `${formatted} ${priceUnit}` : formatted;
}

export function filterMenuItems(
  items: MenuItem[],
  service: ServicePeriod,
  dietary: DietaryFilter,
  query: string
): MenuItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  return items.filter((item) => {
    if (item.service !== service) {
      return false;
    }

    if (dietary !== 'all' && !item.dietary.includes(dietary)) {
      return false;
    }

    if (normalizedQuery.length > 0) {
      const searchable = `${item.name} ${item.description} ${item.course} ${item.dietary.join(' ')}`.toLowerCase();
      if (!searchable.includes(normalizedQuery)) {
        return false;
      }
    }

    return true;
  });
}

export function groupItemsByCourse(
  items: MenuItem[],
  service: ServicePeriod
): CourseGroup[] {
  const order = COURSE_ORDER[service] ?? [];
  const grouped = new Map<string, MenuItem[]>();

  for (const item of items) {
    const existing = grouped.get(item.course);
    if (existing) {
      existing.push(item);
    } else {
      grouped.set(item.course, [item]);
    }
  }

  const orderedGroups: CourseGroup[] = [];
  for (const course of order) {
    const courseItems = grouped.get(course);
    if (courseItems && courseItems.length > 0) {
      orderedGroups.push({ course, items: courseItems });
      grouped.delete(course);
    }
  }

  // Append any unmapped courses deterministically
  for (const [course, courseItems] of grouped.entries()) {
    orderedGroups.push({ course, items: courseItems });
  }

  return orderedGroups;
}
