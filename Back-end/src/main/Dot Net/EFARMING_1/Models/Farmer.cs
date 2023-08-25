using System;
using System.Collections.Generic;

namespace farmer.Models;

public partial class Farmer
{
    public int Fid { get; set; }

    public int Uid { get; set; }

    public string Pincode { get; set; } = null!;

    public string Area { get; set; } = null!;

    public string City { get; set; } = null!;

    public DateOnly Bdate { get; set; }

    public string PanNo { get; set; } = null!;

    public string AadharNo { get; set; } = null!;

    public DateTime RegisteredAt { get; set; }

    public bool Status { get; set; }

    public virtual ICollection<FarmersProduct> FarmersProducts { get; set; } = new List<FarmersProduct>();

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual User UidNavigation { get; set; } = null!;
}
