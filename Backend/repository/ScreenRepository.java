package com.movietime.MovieTime.repository;

import com.movietime.MovieTime.entity.Screen;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface ScreenRepository extends CrudRepository<Screen, Integer>
{
    @Query("SELECT s.screenDay, s.screenHour, s.filmId, s.screenId FROM Screen s WHERE s.screenDay=:day")
    List<Map<String, Object>> findAllFilmsByDay(@Param("day") String day);
}
