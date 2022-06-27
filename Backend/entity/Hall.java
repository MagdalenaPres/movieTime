package com.movietime.MovieTime.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "hallId")
public @Getter @Setter
class Hall {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="hallId")
    private int    hallId;

    @Column(name="places", nullable = false)
    private int    places;

    @OneToMany(mappedBy = "hallId")
    private List<Place> allPlaces;

    public int getHallId() {
        return hallId;
    }
}
