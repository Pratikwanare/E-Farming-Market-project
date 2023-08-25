using System;
using System.Collections.Generic;

namespace farmer.Models;

public partial class Transporter
{
    public int Tid { get; set; }

    public string CompanyName { get; set; } = null!;

    public string Contact { get; set; } = null!;

    public string Email { get; set; } = null!;

    public byte[] LicenseImage { get; set; } = null!;

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}
