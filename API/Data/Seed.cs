using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUser(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {
            if (await userManager.Users.AnyAsync()) return;

            if(!await roleManager.Roles.AnyAsync())
            {
                var roles = new List<AppRole>
                {
                    new AppRole{Name = "Admin"},
                    new AppRole{Name = "Customer"}
                };

                foreach (var role in roles)
                {
                    await roleManager.CreateAsync(role);
                }
            }

            var admin = new AppUser
            {
                UserName = "Admin",
                CPF = "13275841076",
                Email = "admin@gmail.com",
                DateOfBirth = DateTime.ParseExact("07/03/2002", "dd/MM/yyyy", CultureInfo.InvariantCulture),
                PhoneNumber = "11999999999"
            };

            var result = await userManager.CreateAsync(admin, "Adm123456");
            await userManager.AddToRolesAsync(admin, new[] { "Admin", "Customer" });
        }
    }
}
