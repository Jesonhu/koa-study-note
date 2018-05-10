/*
MySQL Backup
Source Server Version: 5.5.53
Source Database: my_blog
Date: 2018/5/10 18:26:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
--  Table structure for `user_concise`
-- ----------------------------
DROP TABLE IF EXISTS `user_concise`;
CREATE TABLE `user_concise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(64) NOT NULL,
  `uid` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `pass` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `user_detail`
-- ----------------------------
DROP TABLE IF EXISTS `user_detail`;
CREATE TABLE `user_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(64) NOT NULL,
  `avatar` longtext NOT NULL,
  `deviceType` int(11) NOT NULL COMMENT '登录类型',
  `followersCount` int(11) NOT NULL,
  `followeesCount` int(11) NOT NULL,
  `role` int(11) NOT NULL,
  `selfDescription` varchar(64) NOT NULL,
  `jobTitle` varchar(64) NOT NULL,
  `latestLoginedInAt` varchar(64) NOT NULL,
  `subscribedTagsCount` int(11) NOT NULL,
  `mobilePhoneVerified` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records 
-- ----------------------------
INSERT INTO `user_concise` VALUES ('1','59edc8116fb9a0450908ab60','oDv1Ew22eUqU6gKr2zq1gYWMrIa3','大顺','123'), ('2','83ebe8451fb9a0450908ab52','oDv1Ew22eUqU6gKr2zq1gYWMrIg4','Jesonhu','Jesonhu');
INSERT INTO `user_detail` VALUES ('1','83ebe8451fb9a0450908ab52','https://avatars2.githubusercontent.com/u/18684575?s=88&v=4','0','0','0','1','','0','','0','0');
