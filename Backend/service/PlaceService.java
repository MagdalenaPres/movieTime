package com.movietime.MovieTime.service;

import com.movietime.MovieTime.entity.Place;
import com.movietime.MovieTime.entity.Screen;
import com.movietime.MovieTime.entity.TakenPlace;
import com.movietime.MovieTime.repository.PlaceRepository;
import com.movietime.MovieTime.repository.ScreenRepository;
import com.movietime.MovieTime.repository.TakenPlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlaceService
{
    @Autowired
    PlaceRepository placeRepository;

    @Autowired
    ScreenRepository screenRepository;

    @Autowired
    TakenPlaceRepository takenPlaceRepository;

    public List<Place> getAllPlaces()
    {
        List<Place> places = new ArrayList<Place>();
        placeRepository.findAll().forEach(places::add);
        return places;
    }

    public List<Place> getSeatsForScreen(int screenId){
        List<Place> allSeats = new ArrayList<>();

        List<Place> places = new ArrayList<Place>();
        List<Place> placesForScreen = new ArrayList<Place>();

        List<TakenPlace> takenPlaces = new ArrayList<TakenPlace>();
        List<TakenPlace> takenPlacesForScreen = new ArrayList<TakenPlace>();

        Screen s = screenRepository.findById(screenId).get();

        placeRepository.findAll().forEach(places::add);
        places.stream()
                .filter(p -> p.getHallId() == s.getHallId())
                .forEach(placesForScreen::add);

        takenPlaceRepository.findAll().forEach(takenPlaces::add);
        takenPlaces.stream()
                .filter(p -> p.getScreenId() == s.getScreenId())
                .forEach(takenPlacesForScreen::add);

        for(Place p: placesForScreen) {
            boolean color = false;
            for (TakenPlace t : takenPlacesForScreen) {
                if (p.getPlaceId() == t.getPlaceId()) {
                    p.setColor("#515372");
                    allSeats.add(p);
                    color = true;
                }
            }
            if (!color) {
                p.setColor("white");
                allSeats.add(p);
            }
        }
        return allSeats;
    }

    public Place getPlaceById(int id)
    {
        return placeRepository.findById(id).get();
    }
    public void saveOrUpdate(Place place)
    {
        placeRepository.save(place);
    }

    public void delete(int id)
    {
        placeRepository.deleteById(id);
    }
}
