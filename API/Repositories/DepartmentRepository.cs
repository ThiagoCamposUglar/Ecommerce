using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public DepartmentRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Department> GetDeparmentByIdAsync(int id)
        {
            return await _context.Departments.Where(x => x.Id == id).Include(x => x.Categories).SingleOrDefaultAsync();
        }

        public async Task<List<DepartmentDto>> GetDepartments()
        {
            return await _context.Departments.AsNoTracking().ProjectTo<DepartmentDto>(_mapper.ConfigurationProvider).ToListAsync();
        }

        public void CreateDepartment(Department department)
        {
            _context.Departments.Add(department);
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(Department department)
        {
            _context.Entry(department).State = EntityState.Modified;
        }

        public void DeleteDepartment(Department department)
        {
            _context.Departments.Remove(department);
        }
    }
}
