/*
SQLyog Ultimate v8.32 
MySQL - 5.5.5-10.4.11-MariaDB : Database - rakhwala
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`rakhwala` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `rakhwala`;

/*Table structure for table `child` */

DROP TABLE IF EXISTS `child`;

CREATE TABLE `child` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `temperature` varchar(255) DEFAULT NULL,
  `pulse` varchar(255) DEFAULT NULL,
  `nickName` varchar(100) DEFAULT NULL,
  `watchKey` varchar(255) NOT NULL,
  `registrationDate` varchar(255) DEFAULT NULL,
  `parrentId` int(255) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

/*Data for the table `child` */

insert  into `child`(`id`,`name`,`image`,`latitude`,`longitude`,`temperature`,`pulse`,`nickName`,`watchKey`,`registrationDate`,`parrentId`,`gender`) values (8,'umar',NULL,'33443.234234','234234.123123','Karachi, Pakistan','72','champoo','rakhwala-team-01','Fri May 08 2020 01:08:15 GMT+0500 (Pakistan Standard Time)',29,'MALE'),(9,'secondchild',NULL,'undefined','undefined','undefined','undefined','sweetoo','rakhwala-team-02','Fri May 08 2020 01:13:36 GMT+0500 (Pakistan Standard Time)',29,'MALE');

/*Table structure for table `parent` */

DROP TABLE IF EXISTS `parent`;

CREATE TABLE `parent` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `latitude` varchar(100) DEFAULT NULL,
  `longitude` varchar(100) DEFAULT NULL,
  `place` varchar(100) DEFAULT NULL,
  `gender` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'UNACTIVE',
  `registrationDate` varchar(200) NOT NULL COMMENT 'NOW()',
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;

/*Data for the table `parent` */

insert  into `parent`(`id`,`name`,`email`,`phone`,`password`,`latitude`,`longitude`,`place`,`gender`,`status`,`registrationDate`,`token`) values (29,'bilal','bilalqmr1@gmail.com','031231232','12334323','33443.234234','234234.123123','Karachi, Pakistan','MALE','ACTIVE','Fri May 08 2020 00:15:46 GMT+0500 (Pakistan Standard Time)','0jwTtQ749pXhtklEu3GAp52CGskcEJ8L');

/*Table structure for table `watch` */

DROP TABLE IF EXISTS `watch`;

CREATE TABLE `watch` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `watchKey` varchar(255) NOT NULL,
  `isAvailable` varchar(20) DEFAULT 'YES',
  PRIMARY KEY (`id`,`watchKey`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `watch` */

insert  into `watch`(`id`,`watchKey`,`isAvailable`) values (1,'rakhwala-team-01','NO'),(2,'rakhwala-team-02','NO');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
