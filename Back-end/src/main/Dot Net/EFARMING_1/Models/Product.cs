using System;
using System.Collections.Generic;

namespace farmer.Models;

public partial class Product
{
    public int Pid { get; set; }

    public int Cid { get; set; }

    public string Name { get; set; } = null!;

    public virtual Category CidNavigation { get; set; } = null!;

    public virtual ICollection<FarmersProduct> FarmersProducts { get; set; } = new List<FarmersProduct>();

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}
