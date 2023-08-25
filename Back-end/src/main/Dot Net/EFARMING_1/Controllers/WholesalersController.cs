using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using farmer.Data;
using farmer.Models;

namespace EFARMING_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WholesalersController : ControllerBase
    {
        private readonly farmerDB _context;

        public WholesalersController(farmerDB context)
        {
            _context = context;
        }

        // GET: api/Wholesalers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Wholesaler>>> GetWholesalers()
        {
          if (_context.Wholesalers == null)
          {
              return NotFound();
          }
            return await _context.Wholesalers.ToListAsync();
        }

        // GET: api/Wholesalers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Wholesaler>> GetWholesaler(int id)
        {
          if (_context.Wholesalers == null)
          {
              return NotFound();
          }
            var wholesaler = await _context.Wholesalers.FindAsync(id);

            if (wholesaler == null)
            {
                return NotFound();
            }

            return wholesaler;
        }

        // PUT: api/Wholesalers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWholesaler(int id, Wholesaler wholesaler)
        {
            if (id != wholesaler.Wid)
            {
                return BadRequest();
            }

            _context.Entry(wholesaler).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WholesalerExists(id))
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

        // POST: api/Wholesalers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Wholesaler>> PostWholesaler(Wholesaler wholesaler)
        {
          if (_context.Wholesalers == null)
          {
              return Problem("Entity set 'farmerDB.Wholesalers'  is null.");
          }
            _context.Wholesalers.Add(wholesaler);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWholesaler", new { id = wholesaler.Wid }, wholesaler);
        }

        // DELETE: api/Wholesalers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWholesaler(int id)
        {
            if (_context.Wholesalers == null)
            {
                return NotFound();
            }
            var wholesaler = await _context.Wholesalers.FindAsync(id);
            if (wholesaler == null)
            {
                return NotFound();
            }

            _context.Wholesalers.Remove(wholesaler);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WholesalerExists(int id)
        {
            return (_context.Wholesalers?.Any(e => e.Wid == id)).GetValueOrDefault();
        }
    }
}
