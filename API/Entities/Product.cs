using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Products")]
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [Column(TypeName = "money")]
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string PhotoUrl { get; set; }//To do: Criar uma tabela só para fotos, pois um produto poderá ter mais de uma foto

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
