import { CustomRole } from '@/types/auth';

export class RoleService {
  static async getRoleByKey(roleKey: string): Promise<CustomRole | null> {
    // Return mock role data for the college website
    // This is a simplified version without real role management
    return {
      id: 'role-1',
      key: roleKey,
      name: 'Public User',
      permissions: ['view_all']
    };
  }
}
