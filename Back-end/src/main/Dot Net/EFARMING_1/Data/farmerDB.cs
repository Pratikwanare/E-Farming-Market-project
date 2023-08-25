using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using farmer.Models;

namespace farmer.Data;

public partial class farmerDB : DbContext
{
    public farmerDB()
    {
    }

    public farmerDB(DbContextOptions<farmerDB> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Farmer> Farmers { get; set; }

    public virtual DbSet<FarmersProduct> FarmersProducts { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderItem> OrderItems { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Transporter> Transporters { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Wholesaler> Wholesalers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseMySql("name=farmerDB", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.33-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Cid).HasName("PRIMARY");

            entity.ToTable("categories");

            entity.Property(e => e.Cid).HasColumnName("cid");
            entity.Property(e => e.Name)
                .HasMaxLength(30)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Farmer>(entity =>
        {
            entity.HasKey(e => e.Fid).HasName("PRIMARY");

            entity.ToTable("farmers");

            entity.HasIndex(e => e.Uid, "fk_uid_in_farmers");

            entity.HasIndex(e => e.AadharNo, "unique_aadhar").IsUnique();

            entity.HasIndex(e => e.PanNo, "unique_pan").IsUnique();

            entity.Property(e => e.Fid).HasColumnName("fid");
            entity.Property(e => e.AadharNo)
                .HasMaxLength(12)
                .HasColumnName("aadhar_no");
            entity.Property(e => e.Area)
                .HasMaxLength(60)
                .HasColumnName("area");
            entity.Property(e => e.Bdate).HasColumnName("bdate");
            entity.Property(e => e.City)
                .HasMaxLength(30)
                .HasColumnName("city");
            entity.Property(e => e.PanNo)
                .HasMaxLength(10)
                .HasColumnName("pan_no");
            entity.Property(e => e.Pincode)
                .HasMaxLength(6)
                .HasColumnName("pincode");
            entity.Property(e => e.RegisteredAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("registered_at");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Uid).HasColumnName("uid");

            entity.HasOne(d => d.UidNavigation).WithMany(p => p.Farmers)
                .HasForeignKey(d => d.Uid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_uid_in_farmers");
        });

        modelBuilder.Entity<FarmersProduct>(entity =>
        {
            entity.HasKey(e => e.FpId).HasName("PRIMARY");

            entity.ToTable("farmers_products");

            entity.HasIndex(e => e.Cid, "fk_cid_in_farmers_products");

            entity.HasIndex(e => e.Fid, "fk_fid_in_farmers_products");

            entity.HasIndex(e => e.Pid, "fk_pid_in_farmers_products");

            entity.Property(e => e.FpId).HasColumnName("fp_id");
            entity.Property(e => e.Cid).HasColumnName("cid");
            entity.Property(e => e.Description)
                .HasMaxLength(100)
                .HasColumnName("description");
            entity.Property(e => e.Fid).HasColumnName("fid");
            entity.Property(e => e.Pid).HasColumnName("pid");
            entity.Property(e => e.Price).HasColumnName("price");

            entity.HasOne(d => d.CidNavigation).WithMany(p => p.FarmersProducts)
                .HasForeignKey(d => d.Cid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_cid_in_farmers_products");

            entity.HasOne(d => d.FidNavigation).WithMany(p => p.FarmersProducts)
                .HasForeignKey(d => d.Fid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_fid_in_farmers_products");

            entity.HasOne(d => d.PidNavigation).WithMany(p => p.FarmersProducts)
                .HasForeignKey(d => d.Pid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_pid_in_farmers_products");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Oid).HasName("PRIMARY");

            entity.ToTable("orders");

            entity.HasIndex(e => e.Wid, "fk_wid_in_orders");

            entity.Property(e => e.Oid).HasColumnName("oid");
            entity.Property(e => e.OrderDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("order_date");
            entity.Property(e => e.Status)
                .HasDefaultValueSql("b'0'")
                .HasColumnType("bit(1)")
                .HasColumnName("status");
            entity.Property(e => e.TotalPrice)
                .HasPrecision(7, 2)
                .HasColumnName("total_price");
            entity.Property(e => e.Wid).HasColumnName("wid");

            entity.HasOne(d => d.WidNavigation).WithMany(p => p.Orders)
                .HasForeignKey(d => d.Wid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_wid_in_orders");
        });

        modelBuilder.Entity<OrderItem>(entity =>
        {
            entity.HasKey(e => e.OiId).HasName("PRIMARY");

            entity.ToTable("order_items");

            entity.HasIndex(e => e.Fid, "fk_fid_in_order_items");

            entity.HasIndex(e => e.Oid, "fk_oid_in_order_items");

            entity.HasIndex(e => e.Pid, "fk_pid_in_order_items");

            entity.HasIndex(e => e.Tid, "fk_tid_in_order_items");

            entity.Property(e => e.OiId).HasColumnName("oi_id");
            entity.Property(e => e.DeliveryDate).HasColumnName("delivery_date");
            entity.Property(e => e.Fid).HasColumnName("fid");
            entity.Property(e => e.Oid).HasColumnName("oid");
            entity.Property(e => e.Pid).HasColumnName("pid");
            entity.Property(e => e.Qty).HasColumnName("qty");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.Review)
                .HasMaxLength(500)
                .HasColumnName("review");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Tid).HasColumnName("tid");

            entity.HasOne(d => d.FidNavigation).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.Fid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_fid_in_order_items");

            entity.HasOne(d => d.OidNavigation).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.Oid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_oid_in_order_items");

            entity.HasOne(d => d.PidNavigation).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.Pid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_pid_in_order_items");

            entity.HasOne(d => d.TidNavigation).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.Tid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_tid_in_order_items");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Pid).HasName("PRIMARY");

            entity.ToTable("products");

            entity.HasIndex(e => e.Cid, "fk_cid_in_products");

            entity.Property(e => e.Pid).HasColumnName("pid");
            entity.Property(e => e.Cid).HasColumnName("cid");
            entity.Property(e => e.Name)
                .HasMaxLength(30)
                .HasColumnName("name");

            entity.HasOne(d => d.CidNavigation).WithMany(p => p.Products)
                .HasForeignKey(d => d.Cid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_cid_in_products");
        });

        modelBuilder.Entity<Transporter>(entity =>
        {
            entity.HasKey(e => e.Tid).HasName("PRIMARY");

            entity.ToTable("transporters");

            entity.HasIndex(e => e.Contact, "contact").IsUnique();

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.Property(e => e.Tid).HasColumnName("tid");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(30)
                .HasColumnName("company_name");
            entity.Property(e => e.Contact)
                .HasMaxLength(10)
                .HasColumnName("contact");
            entity.Property(e => e.Email)
                .HasMaxLength(40)
                .HasColumnName("email");
            entity.Property(e => e.LicenseImage)
                .HasColumnType("blob")
                .HasColumnName("license_image");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Uid).HasName("PRIMARY");

            entity.ToTable("users");

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.Contact, "unique_contact").IsUnique();

            entity.Property(e => e.Uid).HasColumnName("uid");
            entity.Property(e => e.Contact)
                .HasMaxLength(10)
                .HasColumnName("contact");
            entity.Property(e => e.Email)
                .HasMaxLength(40)
                .HasColumnName("email");
            entity.Property(e => e.Fname)
                .HasMaxLength(20)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(20)
                .HasColumnName("lname");
            entity.Property(e => e.Password)
                .HasMaxLength(30)
                .HasColumnName("password");
            entity.Property(e => e.Type)
                .HasMaxLength(1)
                .HasColumnName("type");
        });

        modelBuilder.Entity<Wholesaler>(entity =>
        {
            entity.HasKey(e => e.Wid).HasName("PRIMARY");

            entity.ToTable("wholesalers");

            entity.HasIndex(e => e.AadharNo, "aadhar_no").IsUnique();

            entity.HasIndex(e => e.Uid, "fk_uid_in_wholesalers");

            entity.HasIndex(e => e.PanNo, "pan_no").IsUnique();

            entity.Property(e => e.Wid).HasColumnName("wid");
            entity.Property(e => e.AadharNo)
                .HasMaxLength(12)
                .HasColumnName("aadhar_no");
            entity.Property(e => e.Area)
                .HasMaxLength(60)
                .HasColumnName("area");
            entity.Property(e => e.Bdate).HasColumnName("bdate");
            entity.Property(e => e.City)
                .HasMaxLength(30)
                .HasColumnName("city");
            entity.Property(e => e.PanNo)
                .HasMaxLength(10)
                .HasColumnName("pan_no");
            entity.Property(e => e.Pincode)
                .HasMaxLength(6)
                .HasColumnName("pincode");
            entity.Property(e => e.RegisteredAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("registered_at");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Uid).HasColumnName("uid");

            entity.HasOne(d => d.UidNavigation).WithMany(p => p.Wholesalers)
                .HasForeignKey(d => d.Uid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_uid_in_wholesalers");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
