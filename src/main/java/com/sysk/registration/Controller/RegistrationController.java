package com.sysk.registration.Controller;

import com.sysk.registration.Model.User;
import com.sysk.registration.Service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/")
public class RegistrationController {
    @Autowired
    private RegistrationService registrationService;
    
    @PostMapping(path = "/register")
    public User registerUser(@RequestBody User user) throws Exception {
        String tempEmail = user.getEmail();
        if(tempEmail != null && !"".equals(tempEmail)){
            User userObj = registrationService.fetchUserByEmail(tempEmail);
            if(userObj != null){
                throw new Exception("Email is taken. Please try again!");}
        }
        User u = null;
        u = registrationService.saveUser(user);
        return u;
    }

    @PostMapping(path = "/login")
    public User loginUser(@RequestBody User user) throws Exception{
        String tempEmail = user.getEmail();
        String tempPass  = user.getPassword();
        User userObj = null;
        if(tempEmail != null && tempPass != null){
            userObj = registrationService.fetchUserByEmailAndPassword(tempEmail,tempPass);
        }
        if(userObj == null)
            throw new Exception("Bad Credentials");
        return userObj;
    }
}
