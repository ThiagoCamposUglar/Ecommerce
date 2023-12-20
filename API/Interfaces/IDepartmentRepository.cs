using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IDepartmentRepository
    {
        void Update(Department department);
        void CreateDepartment(Department department);
        void DeleteDepartment(Department department);
        Task<bool> SaveAllAsync();
        Task<Department> GetDeparmentByIdAsync(int id);
        Task<List<DepartmentDto>> GetDepartments();
    }
}
