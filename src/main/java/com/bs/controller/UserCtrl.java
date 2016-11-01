package com.bs.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by willem on 2016/10/27.
 */
@RestController
@RequestMapping("/user")
public class UserCtrl {
    @PreAuthorize("hasAuthority('ROLE_user') or hasAuthority('ROLE_admin')")//允许user和admin角色访问
    @RequestMapping(value="/getUser",method = RequestMethod.POST)
    public Map<String,String> getUser(){
        Map<String,String> map=new HashMap<String,String>();
        map.put("user","user");
        return map;
    }
    @PreAuthorize("hasAuthority('ROLE_admin')")//允许admin角色访问
    @RequestMapping(value="/getAdmin",method = RequestMethod.POST)
    public Map<String,String> getAdmin(){
        Map<String,String> map=new HashMap<String,String>();
        map.put("admin","admin");
        return map;
    }

}
