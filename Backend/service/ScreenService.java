package com.movietime.MovieTime.service;

import com.movietime.MovieTime.entity.Place;
import com.movietime.MovieTime.entity.Screen;
import com.movietime.MovieTime.entity.TakenPlace;
import com.movietime.MovieTime.repository.PlaceRepository;
import com.movietime.MovieTime.repository.ScreenRepository;
import com.movietime.MovieTime.repository.TakenPlaceRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ScreenService
{
    @Autowired
    ScreenRepository screenRepository;

    public List<Screen> getAllScreens()
    {
        List<Screen> screens = new ArrayList<Screen>();
        screenRepository.findAll().forEach(screens::add);
        return screens;
    }

    public Screen getScreenById(int id)
    {
        return screenRepository.findById(id).get();
    }
    public void saveOrUpdate(Screen screen)
    {
        screenRepository.save(screen);
    }

    public void delete(int id)
    {
        screenRepository.deleteById(id);
    }

    public JSONArray printScreen(String day) {
        Map<Object,ArrayList<Object>> filmsData = new HashMap<>();
        Map<Object,ArrayList<Object>> screenIds = new HashMap<>();
        var s = screenRepository.findAllFilmsByDay(day);
        for (Map<String, Object> stringObjectMap : s) {
            List<Object> single = stringObjectMap.values().stream().toList();
            Object name = single.get(2);
            Object hour = single.get(1);
            Object id = single.get(3);
            if (!filmsData.containsKey(name)) {
                ArrayList<Object> hours = new ArrayList<>();
                ArrayList<Object> ids = new ArrayList<>();
                hours.add(hour);
                ids.add(id);
                filmsData.put(name, hours);
                screenIds.put(name, ids);
            } else {
                filmsData.get(name).add(hour);
                filmsData.put(name, filmsData.get(name));
                screenIds.get(name).add(id);
                screenIds.put(name, screenIds.get(name));
            }

        }
        JSONArray array = new JSONArray();
        int i = 0;
        for(Object a: filmsData.keySet()) {
            Object name = a;
            ArrayList<Object> hours = filmsData.get(a);
            ArrayList<Object> ids = screenIds.get(a);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("data", name);
            jsonObject.put("hours", hours);
            jsonObject.put("id", ids);
            array.add(jsonObject);
        }
        return array;
    }
}
