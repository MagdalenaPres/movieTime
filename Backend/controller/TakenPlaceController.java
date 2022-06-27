package com.movietime.MovieTime.controller;

import com.movietime.MovieTime.entity.Place;
import com.movietime.MovieTime.entity.Screen;
import com.movietime.MovieTime.entity.TakenPlace;
import com.movietime.MovieTime.entity.Ticket;
import com.movietime.MovieTime.service.TakenPlaceService;
import com.movietime.MovieTime.service.TicketService;
import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class TakenPlaceController {
    @Autowired
    TakenPlaceService takenPlaceService;

    @GetMapping("/takenplaces")
    private List<TakenPlace> getAllTickets() {
        return takenPlaceService.getAllPlaces();
    }

    @GetMapping("/takenplace/{id}")
    private TakenPlace getTakenPlace(@PathVariable("id") int id) {
        return takenPlaceService.getTakenPlaceById(id);
    }

    @GetMapping("/takenplacescreen/{id}")
    private List<TakenPlace> getTakenPlaceScreen(@PathVariable("id") int id) {
        return takenPlaceService.getTakenPlacesForScreen(id);
    }
    @DeleteMapping("/takenplace/{id}")
    private void deleteTakenPlace(@PathVariable("id") int id) {
        takenPlaceService.delete(id);
    }

    @PostMapping("/takenplace")
    private int saveTicket(@RequestBody TakenPlace takenPlace) {
        takenPlaceService.saveOrUpdate(takenPlace);
        return takenPlace.getTakenPlaceId();
    }

}
