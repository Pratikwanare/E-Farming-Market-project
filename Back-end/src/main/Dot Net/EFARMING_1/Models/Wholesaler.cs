using System;
using System.Collections.Generic;

namespace farmer.Models;

public partial class Wholesaler
{
    public int Wid { get; set; }

    public int Uid { get; set; }

    public string Pincode { get; set; } = null!;

    public string Area { get; set; } = null!;

    public string City { get; set; } = null!;

    public DateOnly Bdate { get; set; }

    public string PanNo { get; set; } = null!;

    public string AadharNo { get; set; } = null!;

    public DateTime RegisteredAt { get; set; }

    public bool Status { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual User UidNavigation { get; set; } = null!;
}
