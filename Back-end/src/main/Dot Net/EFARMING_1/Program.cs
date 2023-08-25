using farmer.Data;
using Microsoft.EntityFrameworkCore;

namespace EFARMING_1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors(p=>p.AddPolicy("corspolicy",build =>
            {
                build.WithOrigins("http://localhost:3000/").AllowAnyMethod().AllowAnyHeader();
            }));

            builder.Services.AddDbContext<farmerDB>(
                optionsAction: options =>
                {
                    options.UseMySql(builder.Configuration.GetConnectionString("farmerDB"),
                       Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.33-mysql"));
                }
            );


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("corspolicy");

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}