using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : IdentityDbContext<AppUser, 
                                                 AppRole, 
                                                 int, 
                                                 IdentityUserClaim<int>, 
                                                 AppUserRole, 
                                                 IdentityUserLogin<int>, 
                                                 IdentityRoleClaim<int>, 
                                                 IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Department> Departments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Department>()
                    .HasMany(x => x.Categories)
                    .WithOne(x => x.Department)
                    .HasForeignKey(x => x.DepartmentId)
                    .IsRequired();

            builder.Entity<Category>()
                    .HasMany(x => x.Products)
                    .WithOne(x => x.Category)
                    .HasForeignKey(x => x.CategoryId)
                    .IsRequired();

            builder.Entity<AppUser>()
                    .HasMany(x => x.UserRoles)
                    .WithOne(x => x.User)
                    .HasForeignKey(x => x.UserId)
                    .IsRequired();

            builder.Entity<AppRole>()
                    .HasMany(x => x.UserRoles)
                    .WithOne(x => x.Role)
                    .HasForeignKey(x => x.RoleId)
                    .IsRequired();
        }
    }
}