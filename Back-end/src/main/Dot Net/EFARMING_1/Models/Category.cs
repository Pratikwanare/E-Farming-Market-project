using System;
using System.Collections.Generic;

namespace farmer.Models;

public partial class Category
{
    public int Cid { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<FarmersProduct> FarmersProducts { get; set; } = new List<FarmersProduct>();

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
