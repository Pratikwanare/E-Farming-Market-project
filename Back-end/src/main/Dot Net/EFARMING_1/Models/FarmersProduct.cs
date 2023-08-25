using System;
using System.Collections.Generic;

namespace farmer.Models;

public partial class FarmersProduct
{
    public int FpId { get; set; }

    public int Fid { get; set; }

    public int Pid { get; set; }

    public float Price { get; set; }

    public string Description { get; set; } = null!;

    public int Cid { get; set; }

    public virtual Category CidNavigation { get; set; } = null!;

    public virtual Farmer FidNavigation { get; set; } = null!;

    public virtual Product PidNavigation { get; set; } = null!;
}
