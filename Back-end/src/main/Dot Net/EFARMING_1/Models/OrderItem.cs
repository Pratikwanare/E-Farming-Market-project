using System;
using System.Collections.Generic;

namespace farmer.Models;

public partial class OrderItem
{
    public int OiId { get; set; }

    public int Oid { get; set; }

    public int Pid { get; set; }

    public int Qty { get; set; }

    public int Fid { get; set; }

    public int Tid { get; set; }

    public DateOnly DeliveryDate { get; set; }

    public int? Rating { get; set; }

    public string? Review { get; set; }

    public bool Status { get; set; }

    public virtual Farmer FidNavigation { get; set; } = null!;

    public virtual Order OidNavigation { get; set; } = null!;

    public virtual Product PidNavigation { get; set; } = null!;

    public virtual Transporter TidNavigation { get; set; } = null!;
}
