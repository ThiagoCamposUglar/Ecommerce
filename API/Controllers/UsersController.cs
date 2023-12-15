using API.DTOs;
using API.Extensions;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<CustomerDto> >> GetCustomers()
        {
            return await _userRepository.GetCustomersAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerDto>> GetCustomer(int id)
        {
            return await _userRepository.GetCustomerByIdAsync(id);
        }

        [HttpPut]
        public async Task<ActionResult> UpdateUser(UserUpdateDto userUpdateDto)
        {
            var user = await _userRepository.GetUserByIdAsync(User.GetUserId());

            if (user == null) NotFound();

            _mapper.Map(userUpdateDto, user);

            if(await _userRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Falha ao atualizar o usuário");
        }
    }
}
