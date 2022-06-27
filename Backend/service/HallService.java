package com.movietime.MovieTime.service;

import com.movietime.MovieTime.entity.Hall;
import com.movietime.MovieTime.repository.HallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HallService
{
    @Autowired
    HallRepository hallRepository;

    public List<Hall> getAllHalls()
    {
        List<Hall> halls = new ArrayList<Hall>();
        hallRepository.findAll().forEach(halls::add);
        return halls;
    }

    public Hall getHallById(int id)
    {
        return hallRepository.findById(id).get();
    }
    public void saveOrUpdate(Hall hall)
    {
        hallRepository.save(hall);
    }

    public void delete(int id)
    {
        hallRepository.deleteById(id);
    }
}
