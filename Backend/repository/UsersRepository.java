package com.movietime.MovieTime.repository;

import com.movietime.MovieTime.entity.Users;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<Users, Integer>
{
}