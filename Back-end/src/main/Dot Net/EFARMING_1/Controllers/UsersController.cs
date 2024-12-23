using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using farmer.Data;
using farmer.Models;
using System.Data;
using MySqlConnector;

namespace EFARMING_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly farmerDB _context;

        public UsersController(farmerDB context)
        {
          
            _context = context;
        }

      
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            return await _context.Users.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }




        /* [HttpGet]
         public async Task<ActionResult<IEnumerable<User>>> GetFarmerUsers()
         {
             if (_context.Users == null)
             {
                 return NotFound();
             }

             dynamic farmers = await _context.Users.Where(user => user.Type == "a").ToListAsync();

             return farmers;
         }*/



        // GET: api/Users
        [HttpGet]
        [Route("getallfarmersfromuser")]
        public async Task<ActionResult<IEnumerable<User>>> GetFarmerUsers()
        {
            if (_context.Users == null)
            {
                return NotFound();
            }

            var filteredUsers = await _context.Users
                .Where(user => user.Type == "f")
                .ToListAsync();

            return filteredUsers;
        }


        // GET: api/Users
        [HttpGet]
        [Route("getadminfromuser")]
        public async Task<ActionResult<IEnumerable<User>>> getadminfromuser()
        {
            if (_context.Users == null)
            {
                return NotFound();
            }

            var filteredUsers = await _context.Users
                .Where(user => user.Type == "a") 
                .ToListAsync();

            return filteredUsers;
        }



        [HttpGet]
        [Route("getwholesaler")]
        public async Task<ActionResult<IEnumerable<User>>> getwholesaler()
        {
            if (_context.Users == null)
            {
                return NotFound();
            }

            var filteredUsers = await _context.Users
                .Where(user => user.Type == "w") 
                .ToListAsync();

            return filteredUsers;
        }



        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Uid)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
          if (_context.Users == null)
          {
              return Problem("Entity set 'farmerDB.Users'  is null.");
          }
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Uid }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return (_context.Users?.Any(e => e.Uid == id)).GetValueOrDefault();
        }
    }
}
