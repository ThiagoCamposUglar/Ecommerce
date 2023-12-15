using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();
        Task<CustomerDto> GetCustomerByIdAsync(int id);
        Task<List<CustomerDto>> GetCustomersAsync();
        Task<AppUser> GetUserByIdAsync(int id);
    }
}
