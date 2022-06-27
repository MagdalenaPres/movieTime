package com.movietime.MovieTime.service;

import com.movietime.MovieTime.entity.Film;
import com.movietime.MovieTime.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FilmService {
    @Autowired
    FilmRepository filmRepository;

    public List<Film> getAllFilms()
    {
        List<Film> films = new ArrayList<Film>();
        filmRepository.findAll().forEach(films::add);
        return films;
    }

    public Film getFilmById(int id)
    {
        return filmRepository.findById(id).get();
    }
    public void saveOrUpdate(Film film)
    {
        filmRepository.save(film);
    }

    public void delete(int id)
    {
        filmRepository.deleteById(id);
    }
}
