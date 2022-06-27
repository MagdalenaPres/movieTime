package com.movietime.MovieTime.service;

import com.movietime.MovieTime.entity.Place;
import com.movietime.MovieTime.entity.TakenPlace;
import com.movietime.MovieTime.repository.PlaceRepository;
import com.movietime.MovieTime.repository.TakenPlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TakenPlaceService {
    @Autowired
    TakenPlaceRepository takenPlaceRepository;

    public List<TakenPlace> getAllPlaces()
    {
        List<TakenPlace> takenPlaces = new ArrayList<TakenPlace>();
        takenPlaceRepository.findAll().forEach(takenPlaces::add);
        return takenPlaces;
    }

    public List<TakenPlace> getTakenPlacesForScreen(int id){
        List<TakenPlace> takenPlaces = new ArrayList<>();
        List<TakenPlace> all = getAllPlaces();

        all.stream()
                .filter(p -> p.getScreenId() == id)
                .forEach(takenPlaces::add);

        return takenPlaces;
    }
    public TakenPlace getTakenPlaceById(int id)
    {
        return takenPlaceRepository.findById(id).get();
    }
    public void saveOrUpdate(TakenPlace place)
    {
        takenPlaceRepository.save(place);
    }

    public void delete(int id)
    {
        takenPlaceRepository.deleteById(id);
    }
}
