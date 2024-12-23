drop database if exists e_farming_market;
create database e_farming_market;
use e_farming_market;

drop table if exists users;
CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `type` varchar(1) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `unique_contact` (`contact`)
);

drop table if exists farmers;
CREATE TABLE `farmers` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `pincode` varchar(6) NOT NULL,
  `area` varchar(60) NOT NULL,
  `city` varchar(30) NOT NULL,
  `bdate` date NOT NULL,
  `pan_no` varchar(10) NOT NULL,
  `aadhar_no` varchar(12) NOT NULL,
  `registered_at` datetime NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`fid`),
  UNIQUE KEY `unique_pan` (`pan_no`),
  UNIQUE KEY `unique_aadhar` (`aadhar_no`),
  KEY `fk_uid_in_farmers` (`uid`),
  CONSTRAINT `fk_uid_in_farmers` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

drop table if exists wholesalers;
CREATE TABLE `wholesalers` (
  `wid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `pincode` varchar(6) NOT NULL,
  `area` varchar(60) NOT NULL,
  `city` varchar(30) NOT NULL,
  `bdate` date NOT NULL,
  `pan_no` varchar(10) NOT NULL,
  `aadhar_no` varchar(12) NOT NULL,
  `registered_at` datetime NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`wid`),
  UNIQUE KEY `pan_no` (`pan_no`),
  UNIQUE KEY `aadhar_no` (`aadhar_no`),
  KEY `fk_uid_in_wholesalers` (`uid`),
  CONSTRAINT `fk_uid_in_wholesalers` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;

drop table if exists categories;
CREATE TABLE `categories` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `image` longblob DEFAULT NULL,
  PRIMARY KEY (`cid`),
  UNIQUE KEY `unique_catname` (`name`)
);

drop table if exists products;
CREATE TABLE `products` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `fk_cid_in_products` (`cid`),
  CONSTRAINT `fk_cid_in_products` FOREIGN KEY (`cid`) REFERENCES `categories` (`cid`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

drop table if exists farmers_products;
CREATE TABLE `farmers_products` (
  `fp_id` int(11) NOT NULL AUTO_INCREMENT,
  `fid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(100) NOT NULL,
  `image` longblob DEFAULT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`fp_id`),
  KEY `FKi4ljq9xf6bm14cn2axdph4n3s` (`fid`),
  KEY `FKn8mbi6edehl1jf2h8aq5tvvc7` (`pid`),
  CONSTRAINT `FKi4ljq9xf6bm14cn2axdph4n3s` FOREIGN KEY (`fid`) REFERENCES `farmers` (`fid`),
  CONSTRAINT `FKn8mbi6edehl1jf2h8aq5tvvc7` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`)
);

drop table if exists transporters;
CREATE TABLE `transporters` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(30) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `email` varchar(40) NOT NULL,
  `license_image` blob DEFAULT NULL,
  PRIMARY KEY (`tid`),
  UNIQUE KEY `contact` (`contact`),
  UNIQUE KEY `email` (`email`)
);

drop table if exists orders;
CREATE TABLE `orders` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `order_date` datetime NOT NULL DEFAULT current_timestamp(),
  `wid` int(11) NOT NULL,
  `total_price` decimal(7,2) NOT NULL,
  `status` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`oid`),
  KEY `fk_wid_in_orders` (`wid`),
  CONSTRAINT `fk_wid_in_orders` FOREIGN KEY (`wid`) REFERENCES `wholesalers` (`wid`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

drop table if exists order_items;
CREATE TABLE `order_items` (
  `oi_id` int(11) NOT NULL AUTO_INCREMENT,
  `oid` int(11) NOT NULL,
  `fp_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `tid` int(11) NOT NULL,
  `delivery_date` date DEFAULT NULL,
  `rating` int(11) DEFAULT 0,
  `review` varchar(500) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`oi_id`),
  KEY `fk_oid_in_order_items` (`oid`),
  KEY `fk_tid_in_order_items` (`tid`),
  KEY `fk_fp_id_in_order_items` (`fp_id`),
  CONSTRAINT `fk_fp_id_in_order_items` FOREIGN KEY (`fp_id`) REFERENCES `farmers_products` (`fp_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_oid_in_order_items` FOREIGN KEY (`oid`) REFERENCES `orders` (`oid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tid_in_order_items` FOREIGN KEY (`tid`) REFERENCES `transporters` (`tid`) ON DELETE NO ACTION ON UPDATE NO ACTION
);
