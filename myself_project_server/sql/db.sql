--用户表
DROP database IF EXISTS myProject;
CREATE database myProject CHARSET UTF8;

DROP TABLE IF EXISTS myProject.user;
CREATE TABLE myProject.user(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "id",
  username VARCHAR(25) UNIQUE COMMENT "用户名",
  password VARCHAR(64) NOT NULL COMMENT "用户密码"
)COMMENT "用户表"


---主页面的数据更新表
DROP TABLE IF EXISTS myProject.home;
CREATE TABLE myProject.home(
   id INT AUTO_INCREMENT PRIMARY KEY COMMENT "id",
   name VARCHAR(25) UNION COMMENT "名字",
   pic VARCHAR(255) NOT NULL COMMENT "图片",
   introduce VARCHAR(255) NOT NULL COMMENT "介绍",
   partyTime VARCHAR(16) NOT NULL  COMMENT "婚宴时间"
)COMMENT "主页更新表"

INSERT INTO home VALUES
(NULL,"云溪","../assets/images/")
