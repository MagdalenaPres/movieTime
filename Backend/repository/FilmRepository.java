package com.movietime.MovieTime.repository;

import com.movietime.MovieTime.entity.Film;
import org.springframework.data.repository.CrudRepository;

public interface FilmRepository extends CrudRepository<Film, Integer>
{
}
