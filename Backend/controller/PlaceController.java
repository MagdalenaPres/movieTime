package com.movietime.MovieTime.controller;

import com.movietime.MovieTime.entity.Place;
import com.movietime.MovieTime.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class PlaceController {
    @Autowired
    PlaceService placeService;

    @GetMapping("/places")
    private List<Place> getAllPlaces()
    {
        return placeService.getAllPlaces();
    }

    @GetMapping("/place/{id}")
    private Place getPlace(@PathVariable("id") int id)
    {
        return placeService.getPlaceById(id);
    }

    @DeleteMapping("/place/{id}")
    private void deletePlace(@PathVariable("id") int id)
    {
        placeService.delete(id);
    }

    @PostMapping("/place")
    private int savePlace(@RequestBody Place place)
    {
        placeService.saveOrUpdate(place);
        return place.getPlaceId();
    }

    @GetMapping("/coloredSeatsForScreen/{id}")
    private @ResponseBody List<Place> placesForScreen(@PathVariable("id") int id){
        return placeService.getSeatsForScreen(id);
    }
}
