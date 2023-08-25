using System;
using System.Collections.Generic;

namespace farmer.Models;

public partial class User
{
    public int Uid { get; set; }

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Contact { get; set; } = null!;

    public string Type { get; set; } = null!;

    public virtual ICollection<Farmer> Farmers { get; set; } = new List<Farmer>();

    public virtual ICollection<Wholesaler> Wholesalers { get; set; } = new List<Wholesaler>();
}
