using System;
using System.Collections.Generic;

namespace farmer.Models;

public partial class Order
{
    public int Oid { get; set; }

    public DateTime OrderDate { get; set; }

    public int Wid { get; set; }

    public decimal TotalPrice { get; set; }

    public ulong Status { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual Wholesaler WidNavigation { get; set; } = null!;
}
