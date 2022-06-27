package com.movietime.MovieTime.controller;

import com.movietime.MovieTime.entity.Screen;
import com.movietime.MovieTime.service.ScreenService;
import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ScreenController
{
    @Autowired
    ScreenService screenService;

    @GetMapping("/screens")
    private List<Screen> getAllScreens()
    {
        return screenService.getAllScreens();
    }

    @GetMapping("/screen/{id}")
    private Screen getScreen(@PathVariable("id") int id)
    {
        return screenService.getScreenById(id);
    }

    @DeleteMapping("/screen/{id}")
    private void deleteScreen(@PathVariable("id") int id)
    {
        screenService.delete(id);
    }

    @PostMapping("/screen")
    private int saveScreen(@RequestBody Screen screen)
    {
        screenService.saveOrUpdate(screen);
        return screen.getScreenId();
    }

    @GetMapping("/screen")
    private JSONArray screen(@RequestParam String day){
        return screenService.printScreen(day);
    }
}
