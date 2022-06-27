package com.movietime.MovieTime.controller;

import com.movietime.MovieTime.entity.Hall;
import com.movietime.MovieTime.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class HallController {
    @Autowired
    HallService hallService;

    @GetMapping("/halls")
    private List<Hall> getAllHalls()
    {
        return hallService.getAllHalls();
    }

    @GetMapping("/hall/{id}")
    private Hall getHall(@PathVariable("id") int id)
    {
        return hallService.getHallById(id);
    }

    @DeleteMapping("/hall/{id}")
    private void deleteHall(@PathVariable("id") int id)
    {
        hallService.delete(id);
    }

    @PostMapping("/hall")
    private int saveHall(@RequestBody Hall hall)
    {
        hallService.saveOrUpdate(hall);
        return hall.getHallId();
    }
}
