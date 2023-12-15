using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Departments")]
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public List<Category> Categories { get; set; }
    }
}
