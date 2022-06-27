package com.movietime.MovieTime.service;

import com.movietime.MovieTime.entity.Users;
import com.movietime.MovieTime.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsersService
{
    @Autowired
    UsersRepository usersRepository;

    public List<Users> getAllUsers()
    {
        List<Users> users = new ArrayList<Users>();
        usersRepository.findAll().forEach(users::add);
        return users;
    }

    public Users getUserById(int id)
    {
        return usersRepository.findById(id).get();
    }
    public void saveOrUpdate(Users users)
    {
        usersRepository.save(users);
    }

    public void delete(int id)
    {
        usersRepository.deleteById(id);
    }
}
