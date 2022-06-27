package com.movietime.MovieTime.controller;

import com.movietime.MovieTime.entity.Film;
import com.movietime.MovieTime.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class FilmController {
    @Autowired
    FilmService filmService;

    @GetMapping("/films")
    private List<Film> getAllFilms()
    {
        return filmService.getAllFilms();
    }

    @GetMapping("/film/{id}")
    private Film getFilm(@PathVariable("id") int id)
    {
        return filmService.getFilmById(id);
    }

    @DeleteMapping("/film/{id}")
    private void deleteFilm(@PathVariable("id") int id)
    {
        filmService.delete(id);
    }

    @PostMapping("/film")
    private int saveFilm(@RequestBody Film film)
    {
        filmService.saveOrUpdate(film);
        return film.getFilmId();
    }
}
