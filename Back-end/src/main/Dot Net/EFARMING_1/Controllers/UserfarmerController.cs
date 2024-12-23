using farmer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;

namespace EFARMING_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserfarmerController : ControllerBase
    {
         public readonly IConfiguration _config;
        public UserfarmerController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        [Route("getallfarmers")]
        public List<User> getfarmer()
        {
            List<User> users = new List<User>();
            using (MySqlConnection connection = new MySqlConnection(_config.GetConnectionString("farmerDB")))
            {
                connection.Open();
                using (MySqlCommand command = new MySqlCommand("select * from users where type='f'", connection))
                {
                    command.Connection = connection;
                    using (MySqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            User obj = new User
                            {
                                Uid = (int)reader["uid"],
                                Fname = (string)reader["fname"],
                                Lname = (string)reader["lname"],
                                Email = (string)reader["email"],
                                Contact = (string)reader["contact"],
                                Type = (string)reader["type"]
                            };
                            users.Add(obj);

                        }
                    }
                    connection.Close();
                }
            };
            return users;
        }

        /*   [HttpGet]
           [Route("getallfarmers")]
           public List<User> getadmin()
           {
               List<User> users = new List<User>();
               using (MySqlConnection connection = new MySqlConnection(_config.GetConnectionString("farmerDB")))
               {
                   connection.Open();
                   using (MySqlCommand command = new MySqlCommand("select * from users where type='a'", connection))
                   {
                       command.Connection = connection;
                       using (MySqlDataReader reader = command.ExecuteReader())
                       {
                           while (reader.Read())
                           {
                               User obj = new User
                               {
                                   Uid = (int)reader["uid"],
                                   Fname = (string)reader["fname"],
                                   Lname = (string)reader["lname"],
                                   Email = (string)reader["email"],
                                   Contact = (string)reader["contact"],
                                   Type = (string)reader["type"]
                               };
                               users.Add(obj);

                           }
                       }
                       connection.Close();
                   }
               };
               return users;
           }*/

        /*

                [HttpGet]
                [Route("getallfarmers")]
                public List<User> getwholesaler()
                {
                    List<User> users = new List<User>();
                    using (MySqlConnection connection = new MySqlConnection(_config.GetConnectionString("farmerDB")))
                    {
                        connection.Open();
                        using (MySqlCommand command = new MySqlCommand("select * from users where type='w'", connection))
                        {
                            command.Connection = connection;
                            using (MySqlDataReader reader = command.ExecuteReader())
                            {
                                while (reader.Read())
                                {
                                    User obj = new User
                                    {
                                        Uid = (int)reader["uid"],
                                        Fname = (string)reader["fname"],
                                        Lname = (string)reader["lname"],
                                        Email = (string)reader["email"],
                                        Contact = (string)reader["contact"],
                                        Type = (string)reader["type"]
                                    };
                                    users.Add(obj);

                                }
                            }
                            connection.Close();
                        }
                    };
                    return users;
                }*/
    }
}
