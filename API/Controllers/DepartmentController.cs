using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class DepartmentController : BaseApiController
    {
        private readonly IDepartmentRepository _departmentRepository;
        private readonly IMapper _mapper;

        public DepartmentController(IDepartmentRepository departmentRepository, IMapper mapper)
        {
            _departmentRepository = departmentRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<DepartmentDto>>> GetDepartments()
        {
            return await  _departmentRepository.GetDepartments();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DepartmentDto>> GetDepartment(int id)
        {
            return _mapper.Map<DepartmentDto>(await _departmentRepository.GetDeparmentByIdAsync(id));
        }

        [HttpPost]
        public async Task<ActionResult<DepartmentDto>> InsertDepartment(DepartmentDto departmentDto)
        {
            var department = _mapper.Map<Department>(departmentDto);

            _departmentRepository.CreateDepartment(department);
            //talvez isso não funcione e eu tenha que usar ref
            if (await _departmentRepository.SaveAllAsync()) return Ok(_mapper.Map<DepartmentDto>(department));

            return BadRequest("Problema inesperado ao tentar criar o departamento.");
        }

        [HttpPut]
        public async Task<ActionResult> UpdateDepartment(DepartmentDto departmentDto)
        {
            var department = await _departmentRepository.GetDeparmentByIdAsync(departmentDto.Id);

            if (department == null) return NotFound();

            _mapper.Map(departmentDto, department);

            if (await _departmentRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Problema inesperado ao atualizar o departamento.");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteDepartment(int id)
        {
            var department = await _departmentRepository.GetDeparmentByIdAsync(id);

            if (department == null) return NotFound();

            if (department.Categories.Any()) return BadRequest("Não é possível deletar esse departamento pois ele possuí categorias vinculadas.");

            _departmentRepository.DeleteDepartment(department);

            if (await _departmentRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Problema inesperado ao deletar o departamento");
        }
    }
}
