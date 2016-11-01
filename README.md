## mysql建表语句
```
### 用户表
create table users(
    username varchar(50) primary key,
    password varchar(50) not null,
    enabled boolean default true not null
    )engine=innodb default charset=utf8 collate=utf8_unicode_ci;

### 插入数据
    insert into users values('test','test',true);
    insert into users values('test2','test2',true);


### 角色表
create table authorities(
     username varchar(50) not null,
     authority varchar(50) not null,
     primary key (username,authority)
     )engine=innodb default charset=utf8 collate=utf8_unicode_ci;

###　插入数据
    insert into authorities values('test','user');
    insert into authorities values('test2','admin');
```

## resources/application.properties:数据库配置、tomcat端口配置
## static/webapp(webapp为项目demo)


## 运行:
```
### mvn spring-boot:run
访问地址：http://localhost:8888/webapp/index.html
## 页面上的四个测试按钮（打开控制台查看状态码）：
### USER/ADMIN(API)：允许user和admin角色调用的api
### ADMIN(API)：允许admin角色调用的api
### user登录
### admin登录
## 状态码
### 200：ok,401：未登录，403：角色不允许访问
```