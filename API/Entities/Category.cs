using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Categories")]
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; }

        public List<Product> Products { get; set; }
    }
}
